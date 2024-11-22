<script setup>
defineProps({ hotplace: Object })
</script>

<template>
  <tr class="text-center">
    <th scope="row">{{ hotplace.hotplaceNo }}</th>
    <td class="text-start">
      <router-link
        :to="{
          name: 'hotplace-view',
          params: { hotplaceNo: hotplace.hotplaceNo },
        }"
        class="hotplace-title link-dark"
      >
        {{ hotplace.hotplaceTitle }}
      </router-link>
    </td>
    <td>{{ hotplace.userName }}</td>
    <td>{{ hotplace.hotplaceDate }}</td>
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
