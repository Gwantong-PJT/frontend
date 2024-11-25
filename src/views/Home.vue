<script setup>
import { ref, onMounted } from 'vue'
import GraphComponent from '@/components/Home/GraphComponent.vue'
import PhotoComponent from '@/components/Home/PhotoComponent.vue'

const userName = ref('')
const ageGroup = ref('')

onMounted(() => {
  // sessionStorage에서 값 가져오기
  userName.value = sessionStorage.getItem('userName') || '사용자' // 기본값 설정
  const ageNo = sessionStorage.getItem('ageNo')
  if (ageNo) {
    ageGroup.value = ageNo * 10 // ageNo에 10을 곱한 값 계산
  } else {
    ageGroup.value = '연령' // 기본값 설정
  }
})
</script>

<template>
  <div class="container">
    <div class="graph-bar">
      <div class="graph-area">
        <div class="text-area">
          <h2>{{ userName }}님이 속해있는</h2>
          {{ ageGroup }}대 그룹에서 선호하는 여행지 추천
        </div>
        <div class="graph-component">
          <GraphComponent></GraphComponent>
        </div>
      </div>
      <div class="photo-area">
        <PhotoComponent></PhotoComponent>
      </div>
    </div>
    <div class="first-container">첫 번째 영역</div>
    <div class="second-container">두 번째 영역</div>
    <div class="third-container">세 번째 영역</div>
  </div>
</template>

<style scoped>
.first-container {
  margin-top: 250px;
  width: 100%;
  height: 500px;
  background-color: aqua;
  position: relative;
  z-index: 1;
}

.second-container {
  width: 100%;
  height: 400px;
  background-color: blue;
}

.third-container {
  width: 100%;
  height: 400px;
  background-color: bisque;
}

.graph-bar {
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 10px;
  margin-top: 70px;
  width: 100%;
  height: 550px;
  background-color: rgb(245, 215, 221);
  z-index: 2;
}

.graph-component {
  margin-top: 50px;
  margin-left: 150px;
}

.photo-area {
  margin-top: 80px;
  margin-left: 100px;
}

.text-area {
  margin-left: 70px;
  margin-top: 60px;
}
</style>
