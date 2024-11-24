<script setup>
import gyeongjuImg from '@/assets/img/mainImg/gyeongju.jpg'

</script>

<template>
    <div class="photo">
        <img :src="gyeongjuImg" alt="경주 이미지">
    </div>
</template>

<style scoped>

    img {
        width: 850px;
        height: 450px;
        object-fit: cover;
    }
</style>