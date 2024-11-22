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
  <select v-model="key" class="" @change="onSelect">
    <option
      v-for="option in selectOption"
      :key="option.text"
      :value="option.value"
      :disabled="option.value === '' ? true : false"
    >
      {{ option.value }}
    </option>
  </select>
</template>

<style scoped></style>
