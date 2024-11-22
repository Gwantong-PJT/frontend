<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  attractionList: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="search-list">
    <ul>
      <li v-for="(attraction, index) in attractionList" :key="index">
        {{ attraction.title }} - {{ attraction.addr1 }}
        <hr />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.search-list {
  max-height: 500px; /* 리스트의 최대 높이 설정 */
  overflow-y: auto; /* 콘텐츠가 넘칠 경우 세로 스크롤을 추가 */
  border: 1px solid #ccc; /* 리스트의 테두리 추가 (선택 사항) */
  padding: 10px; /* 패딩 추가 */
}

ul {
  list-style-type: none; /* 기본 리스트 스타일 제거 */
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px; /* 각 항목 간의 간격 설정 */
}
</style>
