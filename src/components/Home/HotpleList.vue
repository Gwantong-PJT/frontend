<script setup>

</script>

<template>
    <div class="container">
        <div class="hotple-img"></div>
        <div class='v-line'></div>
        <div class="list-area"></div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.hotple-img {
    width: 600px;
    height: 350px;
    background-color: gray;
    border-radius: 20px;
}

.v-line {
  border-left : solid #000203;
  height : 350px;
}

.list-area {
    width: 600px;
    height: 320px;
    background-color: aqua;
}

</style>