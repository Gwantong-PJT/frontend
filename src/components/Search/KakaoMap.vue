<script setup></script>

<template>
  <div class="wrapper">
    <div ref="container"></div>
    <div class="control-btns">
      <button @click="displayMakers">마커 표시</button>
      <button @click="displayMakersWithInfo">InfoWindow</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: greenyellow;
  height: 100%;
  width: 100%;
}
.control-btns {
  width: 100%;
  height: 500%;
}
</style>
