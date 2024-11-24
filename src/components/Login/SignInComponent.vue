<script setup>
import { ref, defineEmits, onMounted, watch } from 'vue'
import VSelect from '../common/VSelect.vue'
import axios from 'axios'

const emit = defineEmits()
const ageList = ref([{ text: '연령선택', value: '' }])
const sidoList = ref([{ text: '지역선택', value: '' }])

const userName = ref('')
const userId = ref('')
const userPassword = ref('')
const passwordChk = ref('')
const gender = ref('')
const ageNo = ref('') // ageNo 저장
const userSex = ref('')
const userRegion = ref('') // sidoCode 저장

const fetchAgeList = async () => {
  const response = await axios.get('http://localhost:8520/list/age')
  if (response.status === 200) {
    const res = response.data
    for (const data of res) {
      const newData = {
        text: data.ageNo, // text에 ageNo 저장
        value: data.ageValue, // value에 ageValue 저장
      }
      ageList.value.push(newData)
    }
  }
}

const onChangeAge = (selectedOption) => {
  ageNo.value = selectedOption ? selectedOption.text : null // 선택된 ageNo 저장
}

const fetchSidoList = async () => {
  const response = await axios.get('http://localhost:8520/list/sido')
  if (response.status === 200) {
    const res = response.data
    for (const data of res) {
      const newData = {
        text: data.sidoCode, // text에 sidoCode 저장
        value: data.sidoName, // value에 sidoName 저장
      }
      sidoList.value.push(newData)
    }
  }
}

const onChangeSido = (selectedOption) => {
  userRegion.value = selectedOption ? selectedOption.text : null // 선택된 sidoCode 저장
}

watch(gender, (newValue) => {
  userSex.value = newValue === '1' ? 1 : newValue === '2' ? 2 : null
})

const handleSignUp = async () => {
  if (!userId.value || !userPassword.value) {
    alert('아이디와 비밀번호는 필수입니다.')
    return
  }

  if (userPassword.value !== passwordChk.value) {
    alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.')
    passwordChk.value = ''
    return
  }

  const signupData = {
    userNo: 0,
    userId: userId.value,
    userPassword: userPassword.value,
    userName: userName.value || null,
    userRole: '',
    userProfile: '',
    ageNo: ageNo.value || null,
    userRegion: userRegion.value || null,
    ageValue: 0,
    userSex: userSex.value || null,
  }

  try {
    const response = await axios.post('http://localhost:8520/user/signup', signupData)
    if (response.status === 200) {
      alert('회원가입이 완료되었습니다!')
      emit('changeToLogin')
    }
  } catch (error) {
    console.error(error)
    alert('회원가입에 실패했습니다. 다시 시도해주세요.')
  }
}

onMounted(() => {
  fetchSidoList()
  fetchAgeList()
})
</script>



<template>
  <div class="signup-box">
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSignUp">
      <div>
        <label>이름</label>
        <input type="text" v-model="userName" id="userName" required />
      </div>
      <div>
        <label>아이디</label>
        <input type="text" v-model="userId" id="userId" required />
      </div>
      <div>
        <label>비밀번호</label>
        <input type="password" v-model="userPassword" id="userPassword" required />
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input type="password" v-model="passwordChk" required />
      </div>
      <!-- <div><label>이메일</label> <input type="email" v-model="email" required /> <br /></div> -->
      <div>
        <label>성별: </label>
        <input class="radio" v-model="gender" type="radio" value="2" name="gender" />여성
        <input class="radio" v-model="gender" type="radio" value="1" name="gender" />남성
      </div>
      <br />
      <div>
        <label for="ageNo">연령</label>
        <div class="filters">
          <div class="filter-item">
            <VSelect :select-option="ageList" @on-key-select="onChangeAge" id="ageNo"></VSelect>
          </div>
        </div>
        <br />
      </div>
      <div>
        <label for="userRegion">선호 지역</label>
        <div class="filters">
          <div class="filter-item">
            <VSelect :select-option="sidoList" @on-key-select="onChangeSido" id="userRegion"></VSelect>
          </div>
        </div>
        <br />
      </div>
      <div class="btn-container">
        <button @click="handleSignUp">회원가입</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.signup-box {
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  text-align: left;
}
.signup-box label {
  display: block; /* block으로 표시하여 줄바꿈 */
  margin-bottom: 5px; /* 라벨과 입력 필드 간의 간격 */
  font-weight: bold; /* 글자 강조 */
}

input,
select {
  width: 100%;
  height: 38px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.radio {
  width: 20px;
  height: 20px;
  box-shadow: none;
}
form div {
  margin-top: 20px;
}

button {
  width: 100%; /* 버튼도 입력 필드와 동일한 너비로 설정 */
  height: 40px; /* 버튼 크기 설정 */
  margin-top: 20px;
  background-color: #ce7e90; /* 버튼 색상 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #544161; /* 버튼 hover 시 색상 변경 */
}

.btn-container {
  display: flex;
  justify-content: center;
}
</style>
