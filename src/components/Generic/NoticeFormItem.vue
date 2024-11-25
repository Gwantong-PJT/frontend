<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { detailArticle } from '@/api/board'

const hotplaceTitle = ref('')
const hotplaceText = ref('')

const router = useRouter()
const route = useRoute()

const props = defineProps({ type: String, hotplaceNo: [String, Number] })

// 파일 처리
const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    hotplaceImage.value = file
    console.log('선택한 파일:', file)
  }
}

// 폼 제출
const submitForm = async () => {
  // 수정할 데이터 객체 준비
  const article = {
    hotplaceNo: props.hotplaceNo, // 수정할 게시글 번호
    userNo: 1, // 작성자 번호 (예시로 1 사용)
    hotplaceTitle: hotplaceTitle.value,
    hotplaceText: hotplaceText.value,
    hotplaceDate: new Date().toISOString(), // 날짜 형식에 맞게 변환
  }

  try {
    let response
    if (props.type === 'modify') {
      // 수정 요청
      response = await axios.put('http://192.168.203.115:8520/hotplace/', hotplace, {
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      // 등록 요청
      const formData = new FormData()
      formData.append('hotplaceTitle', hotplaceTitle.value)
      formData.append('hotplaceText', hotplaceText.value)
      formData.append('userNo', 1)

      response = await axios.post('/hotplace/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    }

    if (response.status === 200) {
      console.log('데이터 전송 성공')
      router.push('/notice') // 성공 후 목록 페이지로 이동
    } else {
      console.error('데이터 전송 오류')
    }
  } catch (error) {
    console.error('API 요청 오류', error)
  }
}

// 게시글 수정 시 기존 데이터 가져오기
if (props.type === 'modify') {
  onMounted(() => {
    detailArticle(
      props.hotplaceeNo,
      ({ data }) => {
        hotplaceTitle.value = data.hotplaceTitle
        hotplaceText.value = data.hotplaceText
        hotplaceFileReal.value = data.hotplaceFileReal // 기존 파일명 저장
      },
      (error) => {
        console.log(error)
      },
    )
  })
}
</script>
<template>
  <form @submit.prevent="submitForm" enctype="multipart/form-data">
    <div>
      <label for="hotplaceTitle">제목</label>
      <input v-model="hotplaceTitle" id="hotplaceTitle" type="text" required />
    </div>
    <div>
      <label for="hotplaceText">내용</label>
      <textarea v-model="hotplaceText" id="hotplaceText" required></textarea>
    </div>
    <div>
      <label for="hotplaceImage">이미지</label>
      <input id="hotplaceImage" type="file" @change="onFileChange" />
      <button type="button" @click="uploadImage">이미지 업로드</button>
      <ul>
        <li v-for="(picture, index) in pictures" :key="index">
          {{ picture.pictureUrl }}
        </li>
      </ul>
    </div>
    <button type="submit" v-if="props.type === 'modify'">수정</button>
    <button type="submit" v-else>등록</button>
  </form>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
