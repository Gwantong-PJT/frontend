<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { detailArticle } from '@/api/board'

const hotplaceTitle = ref('')
const hotplaceText = ref('')
const pictures = ref(['', '', '']) // 최대 3개의 이미지 URL을 저장
const userNo = ref('')

const router = useRouter()
const route = useRoute()

onMounted(() => {
  userNo.value = sessionStorage.getItem('userNo')
})

const handleFileChange = (event, index) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      pictures.value[index] = reader.result
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = (index) => {
  pictures.value[index] = ''
}

const props = defineProps({ type: String, hotplaceNo: [String, Number] })

// 폼 제출
const submitForm = async () => {
  // 수정할 데이터 객체 준비
  const article = {
    hotplaceNo: props.hotplaceNo, // 수정할 게시글 번호
    userNo: 1, // 작성자 번호 (예시로 1 사용)
    hotplaceTitle: hotplaceTitle.value,
    hotplaceText: hotplaceText.value,
    pictures: pictures.value,
  }

  try {
    let response
    if (props.type === 'modify') {
      // 수정 요청

      response = await axios.put('http://localhost:8520/hotplace/', article, {
        headers: {
          'Content-Type': 'application/json',
          Jwt: sessionStorage.getItem('refreshToken'),
          'User-Id': sessionStorage.getItem('userId'),
        },
      })
    } else {
      // 등록 요청
      const formData = new FormData()
      formData.append('hotplaceTitle', hotplaceTitle.value)
      formData.append('hotplaceText', hotplaceText.value)
      formData.append('userNo', userNo.value)
      pictures.value.forEach((picture, index) => {
        if (picture) {
          formData.append(`pictures`, picture) // 개별적으로 추가
        }
      })

      response = await axios.post('http://localhost:8520/hotplace/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Jwt: sessionStorage.getItem('refreshToken'),
          'User-Id': sessionStorage.getItem('userId'),
        },
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
      },
      (error) => {
        console.log(error)
      },
    )
  })
}
</script>
<template>
  <form class="form-box" @submit.prevent="submitForm">
    <table>
      <tr>
        <td class="header">Title</td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            v-model="hotplaceTitle"
            id="hotplaceTitle"
            placeholder="제목을 입력하세요"
            name="title"
            required
          />
        </td>
      </tr>
      <tr>
        <td class="header">Comment</td>
      </tr>
      <tr>
        <td>
          <textarea
            v-model="hotplaceText"
            id="hotplaceText"
            required
            placeholder="내용을 입력하세요"
            name="detail"
          ></textarea>
        </td>
      </tr>
      <tr>
        <td class="header">Image</td>
      </tr>
      <tr>
        <td>
          <div class="image-container">
            <div v-for="(picture, index) in pictures" :key="index" class="addImage">
              <input
                type="file"
                accept="image/*"
                @change="handleFileChange($event, index)"
                style="display: none"
                :id="'file-input-' + index"
              />
              <label :for="'file-input-' + index">
                <img v-if="picture" :src="picture" class="preview-image" />
                <span v-else>이미지 추가</span>
              </label>
              <button
                class="remove-button"
                v-if="picture"
                type="button"
                @click="removeImage(index)"
              >
                삭제
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <button type="submit" v-if="props.type === 'modify'" @click="alert('작성 완료!')">
            수정
          </button>
          <button class="submit-button" type="submit" v-else>등록</button>
        </td>
      </tr>
    </table>
  </form>
</template>

<style scoped>
a {
  text-decoration: none;
}

.form-box {
  width: 600px;
  height: 650px;
  background-color: #fbeff8;
  border-radius: 10px;
}

table {
  margin: auto;
}
input[type='text'] {
  width: 500px;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
  border: none;
}
textarea {
  width: 500px;
  height: 300px;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 10px;
  resize: none;
  border: none;
}
.header {
  height: 30px;
}
.image-container {
  display: flex;
  gap: 10px;
}

.addImage {
  width: 110px;
  height: 110px;
  background-color: lightgray;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-color: rgb(163, 84, 130);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 10px;
  padding: 2px 5px;
  cursor: pointer;
}
.submit-button {
}
</style>
