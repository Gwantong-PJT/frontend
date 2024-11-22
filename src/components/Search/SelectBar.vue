<script setup>
import { ref } from 'vue'
defineProps({ selectOption: Array })
const emit = defineEmits(['onKeySelect'])

const key = ref('')

const onSelect = () => {
  emit('onKeySelect', key.value)
}
</script>

<template>
  <div class="custom-select-container">
    <select v-model="key" class="custom-select" @change="onSelect">
      <option
        v-for="option in selectOption"
        :key="option.value"
        :value="option.value"
        :disabled="option.value === '' ? true : false"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.custom-select-container {
  width: 230px;
  height: 35px;
  margin: 0 auto;
}

.custom-select {
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
  font-size: 0.8rem;

  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
}

.custom-select option:disabled {
  color: #888;
  background-color: #f8f9fa;
}
</style>
