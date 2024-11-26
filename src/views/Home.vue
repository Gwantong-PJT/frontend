<script setup>
import { ref, onMounted } from 'vue'
import GraphComponent from '@/components/Home/GraphComponent.vue'
import PhotoComponent from '@/components/Home/PhotoComponent.vue'
import TripTalk from '@/components/Home/TripTalk.vue';
import TripTalkCard from '@/components/Home/TripTalkCard.vue';
import HotpleList from "@/components/Home/HotpleList.vue";

const userName = ref('')
const ageGroup = ref('')
const genderGroup = ref('')

onMounted(() => {
  // sessionStorage에서 값 가져오기
  userName.value = sessionStorage.getItem('userName') || '사용자' // 기본값 설정
  const ageNo = sessionStorage.getItem('ageNo')
  const gender = sessionStorage.getItem('userSex')
  if (ageNo) {
    ageGroup.value = ageNo * 10 // ageNo에 10을 곱한 값 계산
  } else {
    ageGroup.value = '연령' // 기본값 설정
  }

  if (gender === '2') {
    genderGroup.value = '여성'
  } else {
    genderGroup.value = '남성'
  }
})
</script>

<template>
  <div class="container">
    <div class="graph-bar">
      <div class="graph-area">
        <div class="text-area">
          <h2>
            <span class="blue">{{ userName }}</span> 님이 속해있는
          </h2>
          <span class="red">{{ ageGroup }}</span
          >대 <span class="blue">{{ genderGroup }}</span> 그룹에서 선호하는 여행지 추천
        </div>
        <div class="graph-component">
          <GraphComponent></GraphComponent>
        </div>
      </div>
      <div class="photo-area">
        <div class="textArea">
          <span>{{ ageGroup }}대 {{ genderGroup }} 선호도 인기 순위</span>
        </div>
        <PhotoComponent></PhotoComponent>
      </div>
    </div>
    <div class="first-container"> 
      <TripTalk></TripTalk>
      <div class="card-container">
        <TripTalkCard></TripTalkCard>
        <TripTalkCard></TripTalkCard>
        <TripTalkCard></TripTalkCard>
        <TripTalkCard></TripTalkCard>
      </div>
    </div>
    <div class="second-container">
      <HotpleList></HotpleList>
      </div>
    </div>
</template>

<style scoped>
.first-container {
  margin-top: 250px;
  width: 100%;
  height: 700px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
}

.second-container {
  width: 100%;
  height: 500px;
 
}

.graph-bar {
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 10px;
  margin-top: 70px;
  width: 100%;
  height: 550px;
  background-color: rgb(247, 234, 237);
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
.blue {
  color: blue;
}

.red {
  color: red;
}

.card-container {
  display: flex;
  flex-direction: row;
  gap:30px;
}
</style>
