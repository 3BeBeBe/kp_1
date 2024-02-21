<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <img src="@/assets/pabrik/GGCP/ggcp4.jpg" alt="image" class="img-fluid fixed-height">
      </div>
      <div class="col-md-6">
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
.card-container {
  flex: 300px;
  margin: 30px;
}
.card-container .card {
  font-weight: bold;
  position: relative;
  width: 100%;
}
.card-container .card a {
  padding: 30px;
  width: 100%;
  height: 400px;
  border: 2px solid black;
  background: white;
  text-decoration: none;
  color: black;
  display: block;
  transition: 0.25s ease;
}
.card-container .card a:hover {
  transform: translate(-30px, -30px);
  border-color: #5bc0eb;
}
.card-container .card a:hover .card--display {
  display: none;
}
.card-container .card a:hover .card--hover {
  display: block;
}
.card-container .card a .card--display i {
  font-size: 60px;
  margin-top: 200px;
}
.card-container .card a .card--display h2 {
  margin: 20px 0 0;
}
.card-container .card a .card--hover {
  display: none;
}
.card-container .card a .card--hover h2 {
  margin: 20px 0;
}
.card-container .card a .card--hover p {
  font-weight: normal;
  line-height: 1.5;
}
.card-container .card a .card--hover p.link {
  margin: 20px 0 0;
  font-weight: bold;
  color: #5bc0eb;
}
.card-container .card .card--border {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: 2px dashed black;
  z-index: -1;
}
.card-container .card.card--dark a {
  color: white;
  background-color: black;
  border-color: black;
}
.card-container .card.card--dark a .card--hover .link {
  color: #fde74c;
}
</style>