<script setup>
import userImg from "@/assets/img/user.png"
// 이미지 업로드는 서버 연동해서 확인 

</script>

<template>
    <div class="myBox">
        <h1>마이페이지</h1>
        <img class="profile-img" src="@/assets/img/user.png" alt="user"><br>
        <button>개인정보 수정</button>
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