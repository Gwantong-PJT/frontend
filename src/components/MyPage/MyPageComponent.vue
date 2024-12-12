<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const profilePicture = ref(null)
const profilePictureUrl = ref(null)

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      profilePicture.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}

onMounted(() => {
  console.log(sessionStorage.getItem('userProfile'))
  if (
    sessionStorage.getItem('userProfile') === null ||
    sessionStorage.getItem('userProfile') === 'null'
  ) {
  } else {
    profilePicture.value = 'http://localhost:8520/' + sessionStorage.getItem('userProfile')
  }
})

const removeImage = () => {
  profilePicture.value = null
}

const submitForm = async () => {
  try {
    let response

    // 등록 요청
    const formData = new FormData()
    formData.append('userProfile', profilePicture.value)

    response = await axios.put('http://localhost:8520/user/update/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Jwt: sessionStorage.getItem('refreshToken'),
        'User-Id': sessionStorage.getItem('userId'),
      },
    })

    if (response.status === 200) {
      console.log('데이터 전송 성공')
      changeUserInfo()
    } else {
      console.error('데이터 전송 오류')
    }
  } catch (error) {
    console.error('API 요청 오류', error)
  }
}

//수정 후 세션 스토리지 내용 갱신
const changeUserInfo = async () => {
  try {
    let response

    console.log('아임 히어')
    response = await axios.get(`http://localhost:8520/user/${sessionStorage.getItem('userId')}`, {
      headers: {
        'Content-Type': 'application/json',
        Jwt: sessionStorage.getItem('refreshToken'),
        'User-Id': sessionStorage.getItem('userId'),
      },
    })

    if (response.status === 200) {
      const userdto = response.data
      sessionStorage.setItem('userProfile', userdto.userProfile)
    } else {
      console.error('데이터 전송 오류')
    }
  } catch (error) {
    console.error('API 요청 오류', error)
  }
}
</script>

<template>
  <div class="myBox">
    <h1>마이페이지</h1>

    <form class="form-box" @submit.prevent="submitForm">
      <input
        type="file"
        accept="image/*"
        @change="handleFileChange($event)"
        style="display: none"
        :id="'file-input'"
      />
      <label :for="'file-input'">
        <img v-if="profilePicture" :src="profilePicture" class="profile-img" />
        <img v-else src="@/assets/img/user.png" class="profile-img" />
      </label>
      <br />
      <button class="remove-button" v-if="profilePicture" type="button" @click="removeImage">
        사진 삭제
      </button>
      <br />
      <button>프로필 사진 수정</button>
    </form>
  </div>
</template>

<style scoped>
.myBox {
  margin-top: 50px;
  text-align: center;
}

.profile-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px;
}
</style>
