<script setup>
import VSelect from '../common/VSelect.vue';

</script>

<template>
    <div class="container">
        <span class="large-text">여행톡 </span>  
        <span class="small-text"> | 사용자 데이터에 맞춰 여행지를 추천합니다.</span> 
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 1200px;
    height: 50px;
    background-color: rgb(200, 189, 254);
    border-radius: 10px;
    border: none;
    color: rgb(246, 246, 246);
    align-items: center;

}    
.large-text {
    font-size: 20pt;
    font-weight: bold;
}
span {
    margin-left: 15px;
}

</style>