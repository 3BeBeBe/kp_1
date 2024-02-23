<template>
  <div class="another-container">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
          <div class="col-md-8">
              <h2 class="card-title outline-text-w" style="font-size: 65px; margin-left: 15px;"><i><b>Visi</b></i></h2>
              <h4 class="card-text" style="font-size: 25px; margin-left: 15px;">Menjadi Perusahaan Energi dan Utilitas terintegrasi kelas dunia untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta anak perusahaannya.</h4>    
          </div>
          <div class="col-md-4">
              <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/11/2023/09/30/6B977B2A-D585-4BB6-A126-B5D8A8E355BE-4088439324.jpeg" class="img-fluid img-fixed" style="border-radius: 10px; margin-left: -10px; margin-top: 10px;">
          </div>
      </div>
      <div class="row d-flex align-items-center justify-content-center">
          <div class="col-md-4">
              <img src="https://www.pi-utilitas.com/files/media/2020/09/image-mission.jpg" class="img-fluid img-fixed" style="border-radius: 10px; margin-left: 10px; margin-bottom: -15px;">
          </div>
          <div class="col-md-8">
              <h2 class="card-title"> 
                  <i class="outline-text-w" style="font-size: 65px; margin-left: 15px;"><b>Misi</b></i>
              </h2>
              <ul class="card-text justify-content-center" style="font-size: 22.5px;">
                  <li>
                      Melakukan usaha dalam bidang penyediaan energi dan utilitas.
                  </li>
                  <li>
                      Memberikan nilai tambah bagi stakeholders.
                  </li>
                  <li>
                      Mengutamakan keselamatan dan kesehatan kerja serta menjaga pelestarian lingkungan hidup dalam setiap kegiatan operasional.
                  </li>
                  <li>
                      Memberikan kontribusi terhadap ketahanan energi nasional.
                  </li>
              </ul>
          </div>
      </div>
  </div>
  </div>
  
</template>
<script>
  export default {
      name: 'TryThis'
  }
</script>
<style scoped>
  .img-fixed {
    width: 100%;
    height: 250px;
    object-fit: cover;
    position: relative; /* Added position relative to ensure z-index works */
    z-index: 2; /* Ensure the images are above the overlay */
  }

  .another-container {
    /* background-color: rgba(8, 78, 139, 0.432); */
    background-image: url(../assets/Pattern_1.png);
    /* background-image: url(../assets/tester1.png); */
    /* background-image: url(../assets/logo\ PIU.png); */
    background-size: 1950px;
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    min-height: 63.3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1; /* Ensure the container is above the overlay */
  }

  .another-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.80);
    z-index: -1; /* Ensure the overlay is behind the container */
  }

  h2 {
    color: #343a40;
    margin-bottom: 20px;
    position: relative; /* Added position relative to ensure z-index works */
    z-index: 3; /* Ensure the text is above the overlay */
  }

  h4,
  ul {
    /* color: #6c757d; */
    /* color: #eb5211; */
    color: white;
    line-height: 1.5;
    position: relative; /* Added position relative to ensure z-index works */
    z-index: 3; /* Ensure the text is above the overlay */
  }

  .card-title {
    font-size: 24px;
    font-weight: bold;
  }

  .card-text {
    font-size: 16px;
  }

  .row {
    margin-bottom: 20px;
  }

  .col-md-8,
  .col-md-4 {
    padding: 10px;
  }

  .outline-text-w {
    color: white; /* Text color */
    text-shadow: 
        -2px -2px 0 #00ccff,  
         2px -2px 0 #00ccff,
        -2px  2px 0 #0088ff,
         2px  2px 0 #0088ff;
  }

  .container {
    /* background-color: #2b4dbe; */
    background-color: #006881;
    border-radius: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>

