<script setup>
defineProps({ hotplace: Object })
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
                <span>조회수 {{ hotplace.view }}</span>
            </div>
        </div>
        <div class="blog-right">
            <img src="@/assets/img/image.png" width="100%" height="100%">
        </div>
    </div>
    <hr>


  <!-- <tr class="text-center">
    <th scope="row">{{ hotplace.hotplaceNo }}</th>
    <td class="text-start">
      <router-link
        :to="{ name: 'article-view', params: { hotplaceNo: hotplace.hotplaceNo } }"
        class="article-title link-dark"
      >
        {{ hotplace.hotplaceTitle }}
      </router-link>
    </td>
    <td>{{ hotplace.hotplaceDate }}</td>
  </tr> -->
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
}

.blog-share{
    margin-left: 15px;
}

.blog-right{
    width: 18%;
    float: left;
    margin-left: 5px;
}
</style>
