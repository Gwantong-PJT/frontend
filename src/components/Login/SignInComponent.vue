<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits()

const name = ref('')
const userId = ref('')
const password = ref('')
const passwordChk = ref('')
const email = ref('')
const gender = ref('')
const age = ref('')
const preferredLocation = ref('')

const handleSignUp = () => {
  if (
    !name.value ||
    !userId.value ||
    !password.value ||
    !passwordChk.value ||
    !email.value ||
    !age.value ||
    !preferredLocation.value
  ) {
    alert('모든 필드를 입력해주세요.')
    return
  }

  // 비밀번호와 비밀번호 확인이 일치하는지 확인
  if (password.value !== passwordChk.value) {
    alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.')
    passwordChk.value = '' // 비밀번호 확인 필드를 초기화
    return
  }

  // 회원가입 완료 메시지 출력 및 화면 전환
  alert('회원가입이 완료되었습니다!')
  emit('changeToLogin')
}
</script>

<template>
  <div class="signup-box">
    <h1>Sign Up</h1>
    <form action="">
      <div>
        <label>이름</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label>아이디</label>
        <input type="text" v-model="userId" required />
      </div>
      <div>
        <label>비밀번호</label>
        <input type="password" v-model="password" required />
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input type="password" v-model="passwordChk" required />
      </div>
      <div><label>이메일</label> <input type="email" v-model="email" required /> <br /></div>
      <div>
        <label>성별: </label>
        <input class="radio" v-model="gender" type="radio" value="2" name="gender" />여성
        <input class="radio" v-model="gender" type="radio" value="1" name="gender" />남성
      </div>
      <br />
      <div>
        <label>연령</label>
        <select v-model="age">
          <option value="1">10대</option>
          <option value="2">20대</option>
          <option value="3">30대</option>
          <option value="4">40대</option>
          <option value="5">50대</option>
          <option value="6">60대</option>
          <option value="7">70대</option>
          <option value="8">80대</option>
          <option value="9">90대</option>
        </select>
        <br />
      </div>
      <div>
        <label>선호 지역</label>
        <select v-model="preferredLocation">
          <option value="1">서울</option>
          <option value="2">인천</option>
          <option value="3">대전</option>
          <option value="4">대구</option>
          <option value="5">광주</option>
          <option value="6">부산</option>
          <option value="7">울산</option>
          <option value="8">세종특별자치시</option>
          <option value="9">경기도</option>
          <option value="10">강원특별자치도</option>
          <option value="11">충청북도</option>
          <option value="12">충청남도</option>
          <option value="13">경상북도</option>
          <option value="14">경상남도</option>
          <option value="15">전라북도</option>
          <option value="16">전라남도</option>
          <option value="17">제주도</option>
        </select>
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
