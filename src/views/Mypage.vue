<script setup>
import MyPageComponent from '@/components/MyPage/MyPageComponent.vue';
import MyHotplaceList from '@/components/MyPage/MyHotplaceList.vue';

</script>

<template>
    <div class="grid-container">
      <!-- 1/3 크기 -->
      <div class="grid-item-1">
        <p>1/3 크기 컴포넌트</p>
        <MyPageComponent></MyPageComponent>
      </div>
      <!-- 2/3 크기 -->
      <div class="grid-item-2">
        <p>2/3 크기 컴포넌트</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr; /* 1:2 비율 */
    gap: 10px; /* 요소 사이의 간격 */
    height: 100vh; /* 화면 전체 높이 */
  }
  
  .grid-item-1 {
    background-color: #f0f0f0; /* 테스트용 배경색 */
  }
  
  .grid-item-2 {
    background-color: #d0d0d0; /* 테스트용 배경색 */
  }
  </style>
  