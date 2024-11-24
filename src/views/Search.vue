<script setup>
import { ref, onMounted } from 'vue'
import SearchBar from '@/components/Search/SearchBar.vue'

let map = ref(null); // 지도 객체
let marker = ref(null); // 마커 객체
let overlay = ref(null); // 오버레이 객체
let isOverlayOpen = ref(false); // 오버레이 상태 관리

// 지도 초기화
function initMap() {
  const container = document.getElementById('map')
  const options = {
    center: new kakao.maps.LatLng(37.5665, 126.978), // 초기 중심 좌표 (서울)
    level: 3, // 초기 확대 레벨
  }

  // 카카오맵 생성
  map.value = new kakao.maps.Map(container, options)

  // 초기 마커 위치
  const markerPosition = new kakao.maps.LatLng(37.5665, 126.978)

  marker.value = new kakao.maps.Marker({
    position: markerPosition,
    clickable: true,
  })

  marker.value.setMap(map.value)
  
  // 오버레이 생성 및 표시
  overlay.value = new kakao.maps.CustomOverlay({
    map: map.value,
    position: marker.value.getPosition(),
  });

  // 처음에 오버레이를 보이게 설정
  overlay.value.setMap(map.value);

  // 마커 클릭 이벤트 리스너 추가
  kakao.maps.event.addListener(marker.value, 'click', function() {
    toggleOverlay(); // 마커 클릭 시 오버레이 열기/닫기
  });

  // closeOverlay 함수 바닐라 JS에서 처리하도록 추가
  window.closeOverlay = closeOverlay;
}

// 마커 이동 및 새로운 마커 생성
const updateMapPosition = (attraction) => {
  if (map.value && attraction.latitude && attraction.longitude) {
    const newPosition = new kakao.maps.LatLng(attraction.latitude, attraction.longitude);

    // 지도 중심 이동
    map.value.setCenter(newPosition);

    // 기존 마커 삭제
    if (marker.value) {
      marker.value.setMap(null);
    }

    // 기존 오버레이 닫기
    if (overlay.value) {
      overlay.value.setMap(null);
    }

    // 새 마커 생성
    marker.value = new kakao.maps.Marker({
      position: newPosition,
      clickable: true,
    });

    // 새 마커 지도에 추가
    marker.value.setMap(map.value);

    if(attraction.firstImage1 == "") {
      attraction.firstImage1 = new URL('@/assets/img/image.png', import.meta.url).href;
    }

    // 오버레이 내용 업데이트
    const content = `
      <div class="wrap">
        <div class="info">
          <div class="title">
            <span>${attraction.title}</span>
          </div>
          <div class="body">
            <div class="img">
              <img src="${attraction.firstImage1}" width="120" height="100">
            </div>
            <div class="desc">
              <div class="ellipsis">
                <p>${attraction.addr1}</p>
              </div>
            </div>
            <button class="close" onclick="closeOverlay()" title="닫기">X</button>
          </div>
          
        </div>
      </div>
    `;
    
    // 새 오버레이 생성 및 표시
    overlay.value = new kakao.maps.CustomOverlay({
      content: content,
      map: map.value,
      position: marker.value.getPosition(),
    });

    // 오버레이를 처음부터 보이게 설정
    overlay.value.setMap(map.value);

    // 마커 클릭 이벤트 리스너 추가
    kakao.maps.event.addListener(marker.value, 'click', function() {
      toggleOverlay(); // 마커 클릭 시 오버레이 열기/닫기
    });
  }
}

// 마커 클릭 시 오버레이 토글
const toggleOverlay = () => {
  if (isOverlayOpen.value) {
    overlay.value.setMap(null); // 오버레이 닫기
  } else {
    overlay.value.setMap(map.value); // 오버레이 열기
  }
  isOverlayOpen.value = !isOverlayOpen.value; // 상태 반전
}

// 오버레이 닫기 함수 (setup 내부에서 정의된 함수)
const closeOverlay = () => {
  overlay.value.setMap(null); // 오버레이 닫기
  isOverlayOpen.value = false; // 오버레이 상태를 닫힘으로 설정
}

onMounted(() => {
  initMap();
})
</script>

<template>
  <div id="map" class="map">
    <div class="search-bar">
      <SearchBar :attractionList="attractionList" @selectAttraction="updateMapPosition"></SearchBar>
    </div>
  </div>
</template>

<style scoped>
.map {
  width: 100%;
  height: calc(100vh - 40px);
  position: relative;
  margin: 0;
  padding: 0;
}

.search-bar {
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 100;
  pointer-events: auto;
}

.close {
  cursor: pointer;
  font-size: 20px;
  color: red;
}
</style>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.wrap {
  width: 200px;
  height: 205px;
  background-color: #ffffffcf;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  font-family: Arial, sans-serif;
  margin-bottom: 310px;
}

.info .title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  text-align: center;
}   

.info .body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

}
.close {
  cursor: pointer;
  font-size: 18px;
  color: rgba(255, 0, 0, 0.726);
  font-weight: bold;
  background-color: rgba(255, 255, 255);
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  border: 0px;
}
.info .desc .ellipsis {
  font-size: 12px;
  color: gray;
  text-align: center;
  white-space: normal;
  width: 160px;
}

</style>
