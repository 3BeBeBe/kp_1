<template>
  <div class="video-background video-container">
    <video playsinline autoplay muted loop disablePictureInPicture>
      <source src="@/assets/video/CompanyProfile.mp4" type="video/mp4">
    </video>
    <!-- <div class="content">
      <p>hello world</p>
    </div> -->
    <div class="overlay"></div>
    <div class="container">
    <div class="overlay-text">
      <h1><b>One Stop Utility Provider</b></h1>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'VideoBackground',
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100vh; /* This makes the container take up the full height of the viewport */
  overflow: hidden;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-background {
  position: relative;
  overflow: hidden;
}

.video-background video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* This creates a semi-transparent black overlay */
}
.overlay-text {
  position: absolute;
  bottom: 10%; /* Position from the bottom */
  left: 30%; /* Position from the left */
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2em;
  text-align: center;
}
.content {
  position: relative;
  z-index: 1;
}
</style>