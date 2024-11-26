<script setup>
import { ref, defineEmits, onMounted } from 'vue'
import MyAttractionListCompo from './MyAttractionListCompo.vue'
import axios from 'axios'

const attractionList = ref([])

onMounted(() => {
  handleSearch()
})

const handleSearch = async () => {
  try {
    const response = await axios.get(`http://localhost:8520/attraction/like`, {
      headers: {
        Jwt: sessionStorage.getItem('refreshToken'),
        'User-Id': sessionStorage.getItem('userId'),
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      attractionList.value = response.data

      // 검색 후 스크롤 위치 최상단으로 이동
      //   if (searchListRef.value) {
      //     console.log(searchListRef.value)
      //     console.log(searchListRef.value.scrollTop)
      //     searchListRef.value.scrollTop = 0
      //   }
    }
  } catch (error) {
    console.error('검색 요청 실패', error)
  }
}
</script>

<template>
  <div class="search-list">
    <MyAttractionListCompo :attractionList="attractionList"></MyAttractionListCompo>
  </div>
</template>

<style scoped></style>
