<script setup>
import MyPageComponent from '@/components/MyPage/MyPageComponent.vue'
import MyHotplaceList from '@/components/MyPage/MyHotplaceList.vue'
import MyLikeList from '@/components/MyPage/MyLikeList.vue'
import MyAttractionList from '@/components/MyPage/MyAttractionList.vue'
</script>

<template>
  <div class="grid-container">
    <div class="grid-item-1">
      <MyPageComponent></MyPageComponent>
    </div>

    <div class="grid-item-2">
      <h2>나의 게시글 보기</h2>
      <hr>
      <MyHotplaceList></MyHotplaceList>
    </div>

    <div class="grid-item-3">
      <h2>나의 관광지 보기</h2>
      <MyAttractionList></MyAttractionList>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 1:1:1 비율 */
  gap: 10px; /* 요소 사이의 간격 */
  height: 100vh; /* 화면 전체 높이 */
}

.grid-item-1 {
  margin-top: 50px;
  border-right: 2px solid #000; /* grid-item-1의 오른쪽에 선 추가 */
}

.grid-item-2 {
  margin-top: 100px;
}

.grid-item-3 {
  margin-top: 100px;
}
</style>
