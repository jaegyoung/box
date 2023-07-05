<template>
    <div class="container">
      <div class="map-container" :style="{ width: mapWidth, height: mapHeight }">
        <naver-maps
          :height="mapHeight"
          :width="mapWidth"
          :mapOptions="mapOptions"
          :initLayers="initLayers"
          @load="onLoad"
        >
          <naver-marker :lat="37.649734" :lng="127.114739" @click="onMarkerClicked" @load="onMarkerLoaded" />
          <naver-info-window
            class="info-window"
            @load="onWindowLoad"
            :isOpen="info"
            :marker="marker"
          >
            <div class="info-window-container">
              <h3>Title: {{ title }}</h3>
              <h3>Writer: {{ writer }}</h3>
              <h3>Description: {{ description }}</h3>
            </div>
          </naver-info-window>
          <naver-polyline :path="[{lat:37.649734,lng:127.114739},{lat:37.6527566,lng:127.1167259},{lat:37.655535,lng:127.117314},{lat:37.6595645,lng:127.1255353},{lat:37.659855,lng:127.127859}]"/>
        </naver-maps>
      </div>
      <button class="toggle-button" @click="toggleInfoWindow">
        {{ info ? '정보 창 닫기' : '정보 창 열기' }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
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
      onMarkerClicked(event) {
        this.info = !this.info;
      },
      onMarkerLoaded(vue) {
        this.marker = vue.marker;
      },
      toggleInfoWindow() {
        this.info = !this.info;
      },
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
  