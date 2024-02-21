<template>
  <div class="container d-flex justify-content-end align-items-center">
    <div class="row d-flex justify-content-end">
      <div class="col-md-5">
        <img src="@/assets/pabrik/GGCP/ggcp4.jpg" alt="image" class="img-fluid fixed-height">
      </div>
      <div class="col-md-5">
        <img src="@/assets/pabrik/KDM/kdm5.jpg" alt="image" class="img-fluid fixed-height">
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
.fixed-height {
  height: 300px; /* Adjust this value as needed */
  object-fit: cover; /* This will prevent the images from being distorted */
}
</style>