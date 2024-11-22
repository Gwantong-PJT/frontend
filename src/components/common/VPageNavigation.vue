<script setup>
import { computed } from 'vue'

const props = defineProps({ currentPage: Number, totalPage: Number })
// const emit = defineEmits(['pageChange'])

const navigationSize = parseInt(import.meta.env.VITE_ARTICLE_NAVIGATION_SIZE)

const startPage = computed(() => {
  return parseInt((props.currentPage - 1) / navigationSize) * navigationSize + 1
})

const endPage = computed(() => {
  let lastPage =
    parseInt((props.currentPage - 1) / navigationSize) * navigationSize + navigationSize
  return props.totalPage < lastPage ? props.totalPage : lastPage
})

const endRange = computed(() => {
  return parseInt((props.totalPage - 1) / navigationSize) * navigationSize < props.currentPage
})

function range(start, end) {
  const list = []
  for (let i = start; i <= end; i++) list.push(i)
  return list
  //   return Array(end - start + 1)
  //     .fill()
  //     .map((val, i) => start + i);
}

function onPageChange(pg) {
  console.log(pg + '로 이동!!!')
  emit('pageChange', pg)
}
</script>

<template>
  <div class="pagination-container">
    <ul class="pagination-list">
      <li class="pagination-item">
        <button class="pagination-link" @click="onPageChange(1)">최신</button>
      </li>
      <li class="pagination-item">
        <button class="pagination-link" @click="onPageChange(startPage === 1 ? 1 : startPage - 1)">
          이전
        </button>
      </li>
      <template v-for="pg in range(startPage, endPage)" :key="pg">
        <li :class="currentPage === pg ? 'pagination-item active' : 'pagination-item'">
          <button class="pagination-link" @click="onPageChange(pg)">{{ pg }}</button>
        </li>
      </template>
      <li class="pagination-item">
        <button class="pagination-link" @click="onPageChange(endRange ? totalPage : endPage + 1)">
          다음
        </button>
      </li>
      <li class="pagination-item">
        <button class="pagination-link" @click="onPageChange(totalPage)">마지막</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
a {
  cursor: pointer;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.pagination-item {
  margin: 0 5px;
}

.pagination-link {
  padding: 8px 15px;
  border: 1px solid #007bff;
  border-radius: 5px;
  background-color: white;
  color: #007bff;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.pagination-link:hover {
  background-color: #007bff;
  color: white;
}

.pagination-item.active .pagination-link {
  background-color: #007bff;
  color: white;
  cursor: default;
}
</style>
