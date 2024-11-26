<script setup>

defineProps({ hotplace: Object })
const defaultImage = new URL('@/assets/img/no_photo.jpg', import.meta.url).href


</script>

<template>
  <div class="container">
        <div class="blog-left">
            <div class="blog-profile">
                <img class="blog-profile_image" src="@/assets/img/user.png">
                <div class="blog-profile_text">
                    <h4>{{ hotplace.userName }}</h4>
                    <p>{{ hotplace.hotplaceDate }}</p>
                </div>
            </div>
            <div class="blog-title">
              <router-link
            :to="{ name: 'article-view', params: { hotplaceNo: hotplace.hotplaceNo } }"
             class="article-title link-dark"
               >
                <h2>{{ hotplace.hotplaceTitle }}</h2>
              </router-link>
            </div>
            <div class="blog-content">
                <p>{{ hotplace.hotplaceText }}</p>
            </div>
            <div class="blog-share">
                <span>조회수 {{ hotplace.hotplaceViews }}</span>
            </div>
            </div>
            <div class="blog-right">
                <img class = "first-img"
                :src="hotplace.pictures && hotplace.pictures.length > 0 
                        ? 'http://localhost:8520/' + hotplace.pictures[0].pictureUrl 
                        : defaultImage"
                alt="대표 이미지"
                />
            </div>
        </div>
    <hr>
</template>

<style scoped>
.container{
    width: 1200px;
    height: 200px;
}

.blog-left{
    display: inline-block;
    width: 70%;
    height: 100%;
    float: left;
}

.blog-profile{
    height: 20%;
}

.blog-profile_image{
    float: left;
    width: 7%;
    border-radius: 100%;
}

.blog-profile_text{
    float: left;
    font-size: 15px;
    margin-left: 10px;
    line-height: 0%;
}

.blog-title{
    margin-left: 15px;
}

.blog-content{
    margin-left: 15px;
    margin-top: -10px;
    width: 400px;
    font-size: 18px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: gray;
    white-space: nowrap;
}

.blog-share{
    margin-left: 15px;
}

.blog-right{
    width: 170px;
    height: 170px;
    float: left;
    margin-left: 5px;
    background-color: aqua;
}
.first-img {
    width: 170px;
    height: 170px;
}

</style>
