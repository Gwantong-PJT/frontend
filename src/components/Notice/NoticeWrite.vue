<script setup>
import NoticeFormItem from '../Generic/NoticeFormItem.vue'
</script>

<template>
  <div class="write-container">
    <div class="write-header">
      <h2>공지사항 작성</h2>
      <hr />
    </div>
    <div>
      <NoticeFormItem></NoticeFormItem>
    </div>
  </div>
</template>

<style scoped>
.write-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.write-header {
  text-align: center;
  margin-bottom: 20px;
  width: 90%;
}

.write-header h2 {
  margin-top: 60px;
  padding: 15px;
}

.write-body {
  width: 90%;
  text-align: left;
}
</style>
