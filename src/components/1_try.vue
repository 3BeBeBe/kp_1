<template>
    <b-carousel
      id="carousel1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        v-for="(item, index) in items"
        :key="index"
        :img-src="item.imgSrc"
      >
        <h3>{{ item.text }}</h3>
      </b-carousel-slide>
    </b-carousel>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slide: 0,
        items: [
          { text: 'First slide', imgSrc: 'https://via.placeholder.com/1024x480' },
          { text: 'Second slide', imgSrc: 'https://via.placeholder.com/1024x480' },
          { text: 'Third slide', imgSrc: 'https://via.placeholder.com/1024x480' },
        ],
      };
    },
  };
  </script>