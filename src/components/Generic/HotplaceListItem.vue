<script setup>
defineProps({ hotplace: Object })

</script>

<template>
    <div>
      <tr class="text-center">
        <th scope="row">{{ hotplace.hotplaceNo }}</th>
        <td class="text-start">
          <router-link
            :to="{ name: 'hotplace-view', params: { hotplaceNo: hotplace.hotplaceNo } }"
            class="hotplace-title link-dark"
          >
            {{ hotplace.hotplaceTitle }}
          </router-link>
        </td>
        <td>{{ hotplace.userNo }}</td>
        <td>{{ hotplace.hotplaceDate }}</td>
        <td>파일</td>
      </tr>
    </div>
  </template>
  
<style scoped>
a {
  text-decoration: none;
}
</style>