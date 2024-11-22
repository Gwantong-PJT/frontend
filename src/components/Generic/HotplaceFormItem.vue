<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { detailHotplace } from '@/api/hotplace'

const hotplaceTitle = ref('')
const hotplaceText = ref('')
const userNo = ref('')
const router = useRouter()
const pictures = ref([])

const props = defineProps({ type: String, hotplaceNo: [String, Number] })

const submitForm = async () => {
  // 이미지 업로드 먼저 처리
  if (hotplaceImage.value && !hotplaceImageUrl.value) {
    await uploadImage()
  }

  const hotplace = {
    hotplaceNo: props.type === 'modify' ? props.hotplaceNo : null,
    userNo: 1, // 작성자 번호
    hotplaceTitle: hotplaceTitle.value,
    hotplaceText: hotplaceText.value,
    hotplaceImage: hotplaceImageUrl.value, // 이미지 URL 추가
    hotplaceDate: new Date().toISOString(),
  }

  try {
    let response
    if (props.type === 'modify') {
      response = await axios.put('/hotplace/', hotplace, {
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      response = await axios.post('/hotplace/', hotplace, {
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (response.status === 200) {
      console.log('데이터 전송 성공')
      router.push('/notice') // 성공 후 페이지 이동
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
    detailHotplace(
      props.hotplaceNo,
      ({ data }) => {
        hotplaceTitle.value = data.hotplaceTitle
        hotplaceText.value = data.hotplaceText
        hotplaceImage.value = data.hotplaceImageUrl
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
      <p v-if="hotplaceImageUrl">이미지 URL: {{ hotplaceImageUrl }}</p>
    </div>
    <button type="submit" v-if="props.type === 'modify'">수정</button>
    <button type="submit" v-else>등록</button>
  </form>
</template>

<style scoped></style>
