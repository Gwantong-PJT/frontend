<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { detailArticle, deleteArticle } from '@/api/board'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const hotplace = ref({
  hotplaceNo: '',
  userNo: '',
  hotplaceTitle: '',
  hotplaceText: '',
  hotplaceDate: '',
  pictures: '',
})

onMounted(() => {
  getArticle()
})

// n번글 가지러가기
const getArticle = () => {
  detailArticle(
    hotplaceNo,
    ({ data }) => {
      hotplace.value = data
    },
    (error) => {
      console.log(error)
    },
  )
}

const downloadUrl = ref('')

console.log('다운로드url: ', downloadUrl)

function moveList() {
  router.push({ name: 'article-list' })
}

function moveModify() {
  router.push({ name: 'article-modify', params: { hotplaceNo } })
}

// 삭제 너무 빨리 되니까 정말 삭제하시겠습니까? 창 띄운 후 확인 클릭 시 삭제
function onDeleteArticle() {
  console.log(hotplaceNo)
  deleteArticle(
    hotplaceNo,
    
    (response) => {
      if (response.status == 200) moveList()
    },
    (error) => {
      console.log(error)
    },
  )
}

const { hotplaceNo } = route.params
</script>

<template>
  <div class="container" v-if="hotplace && hotplace.hotplaceNo">
    
    <div class="content">
      <div class="header">
        <h2>{{ hotplace.hotplaceTitle }}</h2>
      </div>
      <div class="info">
        <div class="user">
          <img
          class="avatar"
          :src="
            hotplace.userProfile === 'null' || hotplace.userProfile === null
              ? defaultUserImage
              : 'http://localhost:8520/' + hotplace.userProfile
          "
        />

          <div class="details">
            <span class="name">{{ hotplace.userName }}</span>
            <span class="meta">{{ hotplace.hotplaceDate }}</span>
          </div>
        </div>
      </div>
      <hr class="divider" />
      <div>
        <img
          v-for="pic in hotplace.pictures"
          :key="pic.pictureNo"
          :src="'http://localhost:8520/' + pic.pictureUrl"
        />
      </div>
      <div class="content-body">{{ hotplace.hotplaceText }}</div>
      <hr class="divider" />
      <hr class="divider" />
      <div class="actions">
        <button class="btn" @click="moveList">글목록</button>
        <button class="btn" @click="moveModify">글수정</button>
        <button class="btn danger" @click="onDeleteArticle">글삭제</button>
      </div>
    </div>
  </div>
  <div v-else>
    <p>데이터를 불러오는 중입니다...</p>
  </div>
</template>

<style scoped>
.container {
  width: 1000px;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.title h2 {
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title h2 mark.sky {
  background-color: #87ceeb;
  color: white;
  padding: 0 5px;
}

.content {
  width: 90%;
  margin: 0 auto;
  margin-top: 100px;
}

.header {
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #6c757d;
  padding-left: 20px;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.user {
  display: flex;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  background-color: #f8f9fa;
  border-radius: 50%;
  padding: 5px;
  margin-right: 10px;
}

.details {
  display: flex;
  flex-direction: column;
}

.details .name {
  font-weight: bold;
}

.details .meta {
  color: #6c757d;
  font-size: 0.9rem;
}

.comments {
  align-self: center;
  font-size: 1rem;
  text-align: right;
  color: #6c757d;
}

.divider {
  border: none;
  border-top: 1px solid #ddd;
  margin: 10px 0;
}

.content-body {
  color: #6c757d;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  width: 100%; /* 부모 컨테이너 너비에 맞추기 */
  word-wrap: break-word; /* 긴 단어를 잘라 다음 줄로 넘김 */
  overflow-wrap: break-word; /* 긴 단어를 자동으로 다음 줄로 넘김 */
  white-space: normal; /* 텍스트가 한 줄에 모두 표시되지 않도록 설정 */
}


.actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.actions .btn {
  padding: 10px 15px;
  border: 1px solid #007bff;
  background-color: white;
  color: #007bff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
}

.actions .btn:hover {
  background-color: #007bff;
  color: white;
}

.actions .btn.danger {
  border-color: #dc3545;
  color: #dc3545;
}

.actions .btn.danger:hover {
  background-color: #dc3545;
  color: white;
}
</style>
