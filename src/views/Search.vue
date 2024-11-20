<script setup>
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps'
import SearchBar from '@/components/Search/SearchBar.vue'
const coordinate = {
  lat: 37.566826,
  lng: 126.9786567,
}
</script>

<template>
  <div class="map">
    <KakaoMap
      :lat="coordinate.lat"
      :lng="coordinate.lng"
      :draggable="true"
      style="width: 100%; height: 100%"
    >
      <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
    </KakaoMap>
    <div class="search-bar">
      <SearchBar></SearchBar>
    </div>
  </div>
</template>
<style scoped>
.map {
  width: 100%;
  height: calc(100vh - 40px);
  position: relative;
  margin: 0;
  padding: 0;
}

.search-bar {
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 100;
  pointer-events: auto;
}
</style>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
