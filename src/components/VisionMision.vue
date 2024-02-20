<template>
  <div class="another-container">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
          <div class="col-md-8">
              <h2 class="card-title"><i><b>Visi</b></i></h2>
              <h4 class="card-text">Menjadi Perusahaan Energi dan Utilitas terintegrasi kelas dunia untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta anak perusahaannya.</h4>    
          </div>
          <div class="col-md-4">
              <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/11/2023/09/30/6B977B2A-D585-4BB6-A126-B5D8A8E355BE-4088439324.jpeg" class="img-fluid img-fixed">
          </div>
      </div>
      <div class="row d-flex align-items-center justify-content-center">
          <div class="col-md-4">
              <img src="https://www.pi-utilitas.com/files/media/2020/09/image-mission.jpg" class="img-fluid img-fixed">
          </div>
          <div class="col-md-8">
              <h2 class="card-title"> 
                  <i><b>Misi</b></i>
              </h2>
              <ul class="card-text justify-content-center">
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
      width: 100%; /* Adjust as needed */
      height: 250px; /* Adjust as needed */
      object-fit: cover;
  }
/* 
  .container {
    background-color: #084e8b;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  } */

  .another-container {
    background-color: #edf4f9;
    min-height: 63.3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: #343a40;
    margin-bottom: 20px;
  }

  h4, ul {
    color: #6c757d;
    line-height: 1.5;
  }

  .card-title {
    font-size: 24px;
    font-weight: bold;
  }

  .card-text {
    font-size: 16px;
  }
  
  .row {
    margin-bottom: 20px; /* Added margin to the bottom of each row */
  }

  .col-md-8, .col-md-4 {
    padding: 10px; /* Added padding to the columns */
  }
</style>