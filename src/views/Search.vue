<script setup>
import { onMounted } from 'vue'
import SearchBar from '@/components/Search/SearchBar.vue'

function initMap() {
  const container = document.getElementById('map')
  const options = {
    center: new kakao.maps.LatLng(37.5665, 126.978), // 초기 중심 좌표 (서울)
    level: 3, // 초기 확대 레벨
  }

  // 카카오맵 생성
  const map = new kakao.maps.Map(container, options)

  // 초기 마커. 화면에서보면 중심 위치보다 좀 오른쪽으로 찍힌다.
  const markerPosition = new kakao.maps.LatLng(37.5665, 126.98)
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  })
  marker.setMap(map)
}

onMounted(() => {
  initMap()
})
</script>

<template>
  <div id="map" class="map">
    <div class="search-bar">
      <SearchBar></SearchBar>
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
</style>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
