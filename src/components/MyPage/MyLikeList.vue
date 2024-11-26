<script setup>

</script>

<template>
    <div class="main-container">
        <div class="container1"></div>
        <div class="container2"></div>
    </div>
</template>

<style scoped>
.main-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.container1 {
    width: 400px;
    height: 600px;
    background-color: aqua;
    z-index: 2;
}

.container2 {
    width: 400px;
    height: 600px;
    background-color: rgb(228, 130, 38);
    z-index: 2;
}

</style>