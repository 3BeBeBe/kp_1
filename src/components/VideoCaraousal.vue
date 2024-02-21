<!-- VideoBackground.vue -->
<template>
    <div class="video-background">
      <video autoplay muted loop class="fullscreen-video">
        <source :src="videoPath" type="video/mp4">
      </video>
      <!-- Your other content can be placed here -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videoPath: '@/video/CompanyProfile.mp4',
      };
    },
  };
  </script>
  
  <style scoped>
  .video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1; /* Ensures the video stays behind other content */
  }
  
  .fullscreen-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
  }
  </style>
  