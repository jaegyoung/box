<template>
  <div>
       <naver-maps
        :height="mapHeight"
        :width="mapWidth"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        @load="onLoad"
        @click="makeMarker"
      >
      <naver-polyline :path="geo" />
      </naver-maps>
      <p>{{ geo }}</p>
      <p>내가 원하는 형식: [{lat:37.649734,lng:127.114739},{lat:37.6527566,lng:127.1167259},{lat:37.655535,lng:127.117314},{lat:37.6595645,lng:127.1255353},{lat:37.659855,lng:127.127859}]</p>
  </div>
</template>

<script>
export default {
data() {
  return {
    geo:[],
    mapWidth: 800,
    mapHeight: 600,
    info: false,
    marker: null,
    count: 1,
    map: null,
    isCTT: false,
    mapOptions: {
        lat:37.649734,
        lng:127.114739,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: { position: 'TOP_RIGHT' },
      mapTypeControl: true,
    },
    initLayers: [
      'BACKGROUND',
      'BACKGROUND_DETAIL',
      'POI_KOREAN',
      'TRANSIT',
      'ENGLISH',
      'CHINESE',
      'JAPANESE',
    ],
    title: '별내 5로',
    writer: '김재경',
    description: '여기는 별내 5로 산책로야!',
  };
},
methods: {
  onLoad(vue) {
    this.map = vue;
  },
  makeMarker(e) {
this.geo.push(`{lat:${e.coord.lat()},lng:${e.coord.lng()}}`);
console.log(this.geo);
}
},
};
</script>

<style scoped>
.container {
display: flex;
flex-direction: column;
align-items: center;
}

.map-container {
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
}

.info-window-container {
padding: 10px;
width: 200px;
height: 150px;
}

.toggle-button {
padding: 10px 20px;
font-size: 16px;
}
</style>
