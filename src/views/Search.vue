<script setup>
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
import SearchBar from '@/components/Search/SearchBar.vue';
const coordinate = {
  lat: 37.566826,
  lng: 126.9786567
};
</script>

<template>
  <div class="map">
    <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true" style="width: 100%; height: 100%;">
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
  height: calc(100vh - 40px); /* 화면 높이 100% */
  position: relative; /* 자식 요소의 절대 위치 기준 */
  margin: 0;
  padding: 0;
}

.search-bar {
  position: absolute;
  top: 40px; /* 화면 위에서 20px 아래로 */
  left: 20px; /* 화면 왼쪽에서 20px 오른쪽으로 */
  z-index: 100; /* 지도보다 위에 위치 */
  pointer-events: auto;
}

</style>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>