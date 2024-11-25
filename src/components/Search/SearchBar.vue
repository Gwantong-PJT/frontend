<script setup>
import { ref, defineEmits, onMounted } from 'vue'
import SelectBar from './SelectBar.vue'
import axios from 'axios'
import SearchList from './SearchList.vue'

const emit = defineEmits(['selectAttraction'])
const sido = ref('') // 선택된 시도 값
const type = ref('') // 선택된 관광지 값
const keyWord = ref('')
const sidoList = ref([{ text: '지역선택', value: '' }])
const typeList = ref([{ text: '관광지선택', value: '' }])
const attractionList = ref([]) // 관광지 결과 저장
const searchListRef = ref(null)

// 시도 가져오기
const fetchSidoList = async () => {

  console.log('http://localhost:8520/list/sido')
  const response = await axios.get('http://localhost:8520/list/sido',{
      headers: {
        Jwt: sessionStorage.getItem('refreshToken'),
        'User-Id': sessionStorage.getItem('userId')
      }
    })

  if (response.status === 200) {
    console.log(response.data)
    const res = response.data
    for (const data of res) {
      const newData = {
        text: data.sidoName,
        value: data.sidoCode,
      }
      sidoList.value.push(newData)
    }
  }
}

// 시도  선택 시 처리 함수
const onChangeSido = (selectedValue) => {
  sido.value = selectedValue
  console.log('선택된 지역:', selectedValue)
  console.log(sido.value)
}

onMounted(() => {
  fetchSidoList()
})

// 관광지 가져오기
const fetchTypeList = async () => {

  console.log('http://localhost:8520/list/type')
  const response = await axios.get('http://localhost:8520/list/type',{
      headers: {
        Jwt: sessionStorage.getItem('refreshToken'),
        'User-Id': sessionStorage.getItem('userId')
      }
    })

  if (response.status === 200) {
    console.log(response.data)
    const res = response.data
    for (const data of res) {
      const newData = {
        text: data.contentTypeName,
        value: data.contentTypeId,
      }
      typeList.value.push(newData)
    }
  }
}

// 시도  선택 시 처리 함수
const onChangeType = (selectedValue) => {
  type.value = selectedValue
  console.log('선택된 관광지:', selectedValue)
  console.log(sido.value)
}

onMounted(() => {
  fetchTypeList()
})

const handleSearch = async () => {
  try {
    const response = await axios.get(

      `http://localhost:8520/attraction/?contentTypeId=${type.value}&sidoCode=${sido.value}&keyWord=${keyWord.value}`,{
      headers: {
        Jwt: sessionStorage.getItem('refreshToken'),
        'User-Id': sessionStorage.getItem('userId')
      }
    }

    )
    if (response.status === 200) {
      console.log(response.data)
      attractionList.value = response.data

      // 검색 후 스크롤 위치 최상단으로 이동
      if (searchListRef.value) {
        console.log(searchListRef.value)
        console.log(searchListRef.value.scrollTop)
        searchListRef.value.scrollTop = 0
      }
    }
  } catch (error) {
    console.error('검색 요청 실패', error)
  }
}

const handleSelectAttraction = (attraction) => {
  emit('selectAttraction', attraction)
}
</script>

<template>
  <div class="container">
    <div class="search-bar">
      <div class="filters">
        <div class="filter-item">
          <SelectBar :select-option="sidoList" @on-key-select="onChangeSido"></SelectBar>
        </div>
      </div>
      <div class="filters">
        <div class="filter-item">
          <SelectBar :select-option="typeList" @on-key-select="onChangeType"></SelectBar>
        </div>
      </div>
      <input v-model="keyWord" class="keyword" type="text" placeholder="검색어를 입력하세요" />
      <button @click="handleSearch">검색</button>
    </div>
    <div class="search-list" ref="searchListRef">
      <SearchList
        :attractionList="attractionList"
        @selectAttraction="handleSelectAttraction"
      ></SearchList>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 40px;
  width: 400px;
  height: 750px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.9); /* 반투명 배경 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* 그림자 */
  border-radius: 20px;
}

.search-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  padding: 15px;
  border-radius: 8px;
  width: 100%; /* 검색 바의 가로 크기 */
  height: 200px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
input {
  width: 230px;
  padding: 8px;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 0 auto;
}
button {
  padding: 8px;
  width: 230px;
  background-color: #bc8cca;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
}
button:hover {
  background-color: #4b2852;
}
.search-list {
  height: 520px;
}

.search-list::-webkit-scrollbar {
  width: 8px;
}
.search-list::-webkit-scrollbar-thumb {
  background-color: #919196;
}
.search-list::-webkit-scrollbar-track {
  background-color: rgba(182, 180, 180, 0.213);
}
</style>
