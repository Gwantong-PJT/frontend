<script setup>
defineProps({ hotplace: Object })
</script>

<template>
  <tr class="text-center">
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
    <!-- <td>{{ hotplace.noticeFileReal }}</td> -->
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
