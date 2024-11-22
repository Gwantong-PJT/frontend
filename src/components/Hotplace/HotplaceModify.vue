<script setup>
import HotplaceFormItem from '../Generic/HotplaceFormItem.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { hotplaceNo } = route.params
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="heading">글수정</h2>
      </div>
      <div class="col">
        <div class="board-form">
          <HotplaceFormItem type="modify" :hotplaceNo="hotplaceNo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 전체 컨테이너 */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.heading {
  margin: 20px 0;
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.heading mark {
  color: black;
  padding: 0 5px;
}

.board-form {
  text-align: left;
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
