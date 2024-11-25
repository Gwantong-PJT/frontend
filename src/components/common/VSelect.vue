<script setup>
import { ref } from 'vue'
const props = defineProps({ selectOption: Array })
const emit = defineEmits(['onKeySelect'])

const key = ref('') // 선택된 value 값

const onSelect = () => {
  const selectedOption = props.selectOption.find((option) => option.value === key.value)
  if (selectedOption) {
    emit('onKeySelect', selectedOption.text) // 선택된 text 값 전달
  }
}
</script>

<template>
  <select v-model="key" @change="onSelect">
    <option
      v-for="option in selectOption"
      :key="option.value + option.text"
      :value="option.value"
      :disabled="option.value === ''"
    >
      {{ option.value }}
      <!-- 사용자에게 보여줄 텍스트 -->
    </option>
  </select>
</template>

<style scoped></style>
