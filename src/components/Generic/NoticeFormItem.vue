<script setup>
import { ref } from 'vue'
import axios from 'axios'

const noticeTitle = ref('') 
const noticeText = ref('') 

const submitForm = async () => {
  const postData = {
    noticeTitle: noticeTitle.value, // ref의 값을 사용
    noticeText: noticeText.value, // ref의 값을 사용
    noticeFile: noticeFile.value,
    userNo: 1,
  }

  try {
    const response = await axios.post('/notice/', postData)

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
      <label for="noticeTitle">제목</label>
      <input v-model="noticeTitle" id="noticeTitle" type="text" required />
    </div>
    <div>
      <label for="noticeText">내용</label>
      <textarea v-model="noticeText" id="noticeText" required></textarea>
    </div>
    <div class="noticeFile">
    <input id="noticeFile" type="file" @change="handleFileChange"/>
    <label class="custom-file-label" for="noticeFile">{{noticeFile}}</label>
  </div>
    <button type="submit">등록</button>
  </form>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
