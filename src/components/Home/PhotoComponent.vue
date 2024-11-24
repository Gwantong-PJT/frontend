<script setup>
import { onMounted } from 'vue'

// 이미지 배열
import gwangalli from '@/assets/img/mainImg/gwangalli.jpg'
import gyeongju from '@/assets/img/mainImg/gyeongju.jpg'
import haeundae from '@/assets/img/mainImg/haeundae.jpg'
import hangang from '@/assets/img/mainImg/hangang.jpg'
import jeju from '@/assets/img/mainImg/jeju.jpg'
import seoulforest from '@/assets/img/mainImg/seoulforest.jpg'
import sokcho from '@/assets/img/mainImg/sokcho.jpg'

const imgArray = [
  gwangalli,
  gyeongju,
  haeundae,
  hangang,
  jeju,
  seoulforest,
  sokcho
]

let currentIndex = 0;   // 현재 보이는 이미지
let sliderCount = imgArray.length;     // 이미지 개수
let sliderInterval = 4000;  // 이미지 변경 간격

// 컴포넌트가 로드될 때 슬라이드 시작
onMounted(() => {
  const sliderWrap = document.querySelector(".photo");
  const sliderImg = sliderWrap.querySelector("img");
  
  // 이미지 초기 설정
  sliderImg.src = imgArray[currentIndex];
  
  setInterval(() => {
    const nextIndex = (currentIndex + 1) % sliderCount;
    
    // 트랜지션 설정
    sliderImg.style.transition = "opacity 1s ease-in-out";
    
    // 투명도를 0으로 설정하여 현재 이미지를 숨기고
    sliderImg.style.opacity = "0";
    
    setTimeout(() => {
      // 이미지 변경
      sliderImg.src = imgArray[nextIndex];
      sliderImg.style.opacity = "1"; // 새로운 이미지를 표시
    }, 1000); // 이미지 변경 후 1초 뒤에 opacity 1로 변경

    currentIndex = nextIndex; // nextIndex를 currentIndex로 업데이트
  }, sliderInterval);
});
</script>

<template>
  <div class="photo">
    <!-- 초기 이미지는 첫 번째 이미지로 설정됨 -->
    <img :src="imgArray[0]" alt="순차적으로 전환되는 이미지">
  </div>
</template>

<style scoped>
.photo {
  width: 1200px;
  height: 700px;
  overflow: hidden;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  opacity: 1;
}
</style>
