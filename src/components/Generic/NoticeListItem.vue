<script setup>
defineProps({ article: Object })
</script>

<template>
  <tr class="text-center">
    <th scope="row">{{ article.noticeNo }}</th>
    <td class="text-start">
      <router-link
        :to="{ name: 'article-view', params: { noticeNo: article.noticeNo } }"
        class="article-title link-dark"
      >
        {{ article.noticeTitle }}
      </router-link>
    </td>
    <td>{{ article.userNo }}</td>
    <td>{{ article.noticeDate }}</td>
    <td>파일</td>
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
