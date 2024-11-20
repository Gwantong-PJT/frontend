<script setup>
import { ref } from 'vue'
import axios from 'axios'

const hotplaceTitle = ref('') 
const hotplaceText = ref('') 
const hotplaceFile = ref('')


// 핫플로 변경 
const submitForm = async () => {
  const postData = {
    hotplaceTitle: hotplaceTitle.value, // ref의 값을 사용
    hotplaceText: hotplaceText.value, // ref의 값을 사용
    hotplaceFile: hotplaceFile.value,
    userNo: 1,
  }

  try {
    const response = await axios.post('/hotplace/', postData)

    if (response.status === 200) {
      console.log('데이터 전송 성공')
      // 성공 후 처리 (예: 목록 페이지로 이동 등)
    } else {
      console.error('데이터 전송 오류')
    }
  } catch (error) {
    console.error('API 요청 오류', error)
  }
}

</script>

<template>
    <form @submit.prevent="submitForm">
    <div>
      <label for="hotplaceTitle">제목</label>
      <input v-model="hotplaceTitle" id="hotplaceTitle" type="text" required />
    </div>
    <div>
      <label for="hotplaceText">내용</label>
      <textarea v-model="hotplaceText" id="hotplaceText" required></textarea>
    </div>
    <div class="hotplaceFile">
    <input id="hotplaceFile" type="file" @change="handleFileChange"/>
    <label class="custom-file-label" for="hotplaceFile">{{hotplaceFile}}</label>
  </div>
    <button type="submit">등록</button>
  </form>
</template>

<style scoped>

</style>