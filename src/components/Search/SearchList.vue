<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import '@fortawesome/fontawesome-free/js/all.js';
import axios from 'axios';

const props = defineProps({
  attractionList: {
    type: Array,
    default: () => [],
  },
});

const likeList = ref([]); // 좋아요 리스트
const emit = defineEmits(['selectAttraction']); // 부모 컴포넌트로 이벤트 전달

// 이미지를 선택하는 함수
const getImageSrc = (imagePath) => {
  return imagePath && imagePath.trim() !== "" ? imagePath : new URL('@/assets/img/image.png', import.meta.url).href;
};

// 컨텐츠 클릭 시 해당 위치로 지도 이동
const testFunction = (attraction) => {
  emit('selectAttraction', attraction);
};

// 좋아요 리스트 가져오기
const likeCheck = async () => {
  try {
    const response = await axios.get(`http://localhost:8520/attraction/like`, {
      headers: {
        Jwt: sessionStorage.getItem('refreshToken'),
        'User-Id': sessionStorage.getItem('userId'),
      },
    });

    if (response.status === 200) {
      likeList.value = response.data.map((item) => item.attractionNo); // attractionNo만 추출
      console.log('좋아요 리스트:', likeList.value);
    } else {
      console.error('좋아요 리스트 가져오기 오류');
    }
  } catch (error) {
    console.error('API 요청 오류', error);
  }
};

// 좋아요 기능
const likeEvent = async (attraction) => {
  const attractionNo = attraction.attractionNo;

  try {
    const response = await axios.post(
      `http://localhost:8520/attraction/like?attractionNo=${attractionNo}`,
      null,
      {
        headers: {
          Jwt: sessionStorage.getItem('refreshToken'),
          'User-Id': sessionStorage.getItem('userId'),
        },
      }
    );

    if (response.status === 200) {
      console.log('데이터 전송 성공');

      // 좋아요 리스트 업데이트
      if (likeList.value.includes(attractionNo)) {
        likeList.value = likeList.value.filter((id) => id !== attractionNo); // 좋아요 취소
      } else {
        likeList.value.push(attractionNo); // 좋아요 추가
      }
    } else {
      console.error('데이터 전송 오류');
    }
  } catch (error) {
    console.error('API 요청 오류', error);
  }
};

// 컴포넌트가 마운트될 때 좋아요 리스트 초기화
onMounted(() => {
  likeCheck();
});
</script>

<template>
  <div class="search-list">
    <ul>
      <li v-for="(attraction, index) in attractionList" :key="index">
        <div class="li-layout">
          <div class="img-div">
            <img :src="getImageSrc(attraction.firstImage1)" alt="이미지" />
          </div>
          <div class="content-div">
            <h2 @click="testFunction(attraction)">{{ attraction.title }}</h2>
            <span @click="testFunction(attraction)">{{ attraction.addr1 }}</span>
          </div>
          <!-- 좋아요 아이콘 -->
          <div class="like" @click.stop="likeEvent(attraction)">
            <i
              :class="likeList.includes(attraction.attractionNo) ? 'fa-solid fa-heart' : 'fa-regular fa-heart heart-icon'"
            ></i>
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>



<style scoped>
.search-list {
  max-height: 500px; 
  overflow-y: auto; 
  border: 1px solid #ccc; 
  padding: 10px; 
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px; 
}

.li-layout {
  display: flex;
  gap: 15px;
  align-items: center;
  position: relative; /* 아이콘을 절대 위치로 배치하기 위해 설정 */
}

.img-div img {
  width: 100px;
  height: 70px;
}

.content-div {
  display: flex;
  flex-direction: column;
  width: 220px;
  overflow-x: hidden;
}

.content-div h2 {
  font-size: 17px;
  white-space: nowrap;
}

.content-div span {
  font-size: 10px;
  color: #232323;
}

/* 아이콘의 위치를 오른쪽 끝에 고정 */
.heart-icon {
  position: absolute;
  right: 10px;  /* 오른쪽 끝에 배치 */
  top: 50%;
  transform: translateY(-50%); /* 세로로 중앙 정렬 */
  font-size: 20px;
  color: #e74c3c; /* 원하는 색상 */
  cursor: pointer;
}
</style>
