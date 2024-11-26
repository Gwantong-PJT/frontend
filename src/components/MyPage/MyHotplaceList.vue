<script setup>
import { ref, defineEmits, onMounted } from 'vue'
import MyHotplaceListCompo from './MyHotplaceListCompo.vue'
import axios from 'axios'

const hotplaceList = ref([])

onMounted(() => {
  handleSearch()
})

const handleSearch = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8520/hotplace/user/${sessionStorage.getItem('userNo')}`,
      {
        headers: {
          Jwt: sessionStorage.getItem('refreshToken'),
          'User-Id': sessionStorage.getItem('userId'),
        },
      },
    )
    if (response.status === 200) {
      console.log(response.data)
      hotplaceList.value = response.data
    }
  } catch (error) {
    console.error('검색 요청 실패', error)
  }
}
</script>

<template>
  <div class="search-list">
    <MyHotplaceListCompo
      v-for="hotplace in hotplaceList"
      :key="hotplace.hotplaceNo"
      :hotplace="hotplace"
    ></MyHotplaceListCompo>
  </div>
</template>

<style scoped></style>
