<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import VSelect from '@/components/common/VSelect.vue'
import BoardListItem from '@/components/Generic/NoticeListItem.vue'
import VPageNavigation from '@/components/common/VPageNavigation.vue'

const router = useRouter()

const hotplaces = ref([])
const currentPage = ref(1)
const totalPage = ref(0)

const getHotpleList = async () => {
  try {
    
    const response = await axios.get('http://localhost:8520/hotplace/',{
      headers:{
        Jwt: sessionStorage.getItem('refreshToken'),
        'User-Id': sessionStorage.getItem('userId')
      }
    }
    )
    hotplaces.value = response.data
    if (response.status === 200) {
      console.log('pass')
    } else {
      console.error('데이터 패치 오류')
    }
  } catch (error) {
    console.log('API 오류', error)
  } finally {
    // isLoading.value = false
  }
}

const { VITE_ARTICLE_LIST_SIZE } = import.meta.env
const param = ref({
  pgno: currentPage.value,
  spp: VITE_ARTICLE_LIST_SIZE,
  key: '',
  word: '',
})

onMounted(() => {
  getHotpleList()
})

// n번 페이지 이동
const onPageChange = (val) => {
  currentPage.value = val
  param.value.pgno = val
  getHotpleList()
}

// 글 작성 부분
const moveWrite = () => {
  router.push({ name: 'article-write' })
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="title">
        <h2>
          커뮤니티
        </h2>
      </div>
      <div class="content">
        <div class="search-bar">
          <button type="button" class="write-button" @click="moveWrite">글쓰기</button>
        </div>
        <hr>
        <table class="board-table">
          <thead>
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>파일</th>
            </tr>
            <tr>
              <td colspan="5">
                <hr />
              </td>
            </tr>
          </thead>
          <tbody>
            <BoardListItem
              v-for="hotplace in hotplaces"
              :key="hotplace.hotplaceNo"
              :hotplace="hotplace"
            ></BoardListItem>
          </tbody>
        </table>
        <hr>
      </div>
      <VPageNavigation
        :current-page="currentPage"
        :total-page="totalPage"
        @pageChange="onPageChange"
      ></VPageNavigation>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  padding: 20px;
}

.row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  width: 90%;
  margin: 40px 0;
  padding: 10px 0;
  text-align: center;
}

.content {
  width: 90%;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}

.write-button {
  padding: 5px 10px;
  background-color: #f2c1fb;
  border: 1px solid #f2c1fb;
  cursor: pointer;
  border-radius: 4px;
}

.write-button:hover {
  background-color: #765c7d;
  border: 1px solid #765c7d;
  color: white;
}

.search-form {
  display: flex;
  align-items: center;
}

.search-input {
  display: flex;
  margin-left: 10px;
}

.search-input input {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.search-input button {
  padding: 5px 10px;
  background-color: #343a40;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.search-input button:hover {
  background-color: #495057;
}

.board-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}



.board-table tbody tr:hover {
  background-color: #f1f1f1;
}

.board-table thead hr {
  border: 1px solid #ddd;
  margin: 0;
}
</style>
