<template>
    <div class="galeri">
        <NavBar/>
        <div style="background-color: #f0f5f8;">
          <div class="video-background video-container">
              <video playsinline autoplay muted loop disablePictureInPicture>
                  <source src="@/assets/video/COMPRO 3.mp4" type="video/mp4">
              </video>
              <div class="overlay"></div>
              <div class="container">
                  <div class="overlay-text">
                      <p><b>Corporate Social Responsibility</b></p>
                  </div>
              </div>
          </div>
        <GaleryContent/>
        </div>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import GaleryContent from '@/components/GaleryContent.vue'

    export default {
        name: 'GalerView',
        components: {
            NavBar,
            FooterSection,
            GaleryContent
        }
    }
</script>
<style scoped>

.video-container {
  position: relative;
  width: 100%;
  height: 60vh; /* This makes the container take up the full height of the viewport */
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
  background: rgba(0, 0, 0, 0.5); /* This creates a semi-transparent black overlay */
}
.overlay-text {
  position: absolute;
  bottom: 10%; /* Position from the bottom */
  color: white;
  font-size: 3em;
}
.content {
  position: relative;
  z-index: 1;
}
@media (max-width: 768px) {
  .overlay-text {
    font-size: 1.5em;
  }
}
@media (max-width: 480px) {
  .video-container {
    position: relative;
    width: 100%;
    height: 50vh; /* This makes the container take up the full height of the viewport */
    overflow: hidden;
  }
  .overlay-text {
    position: absolute;
    bottom: 10%; /* Position from the bottom */
    color: white;
    font-size: 1em;
  }
}
</style>