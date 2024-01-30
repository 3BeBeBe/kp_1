<template>
  <div class="vision-mision">
    <div class="container mt-0">
      <div class="row justify-content-center">
        <div class="col-md-6 pr-md-5 order-md-2">
          <div class="mb-4">
            <div
              class="rounded-image d-flex justify-content-center align-items-center"
            >
              <img
                src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/11/2023/09/30/6B977B2A-D585-4BB6-A126-B5D8A8E355BE-4088439324.jpeg"
                class="img-fluid rounded-image"
              />
            </div>
          </div>
        </div>

        <div class="col-md-7 pl-mb-5 order-md-3 colored-text-white">
          <div class="mb-4" style="text-align: center">
            <h2>
              <i><b>Visi</b></i>
            </h2>
            <h4 class="text-justify">
              Menjadi Perusahaan Energi dan Utilitas terintegrasi kelas dunia
              untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta
              anak perusahaannya.
            </h4>
          </div>
        </div>

        <div class="col-md-7 pl-mb-5 order-md-3">
          <div class="mb-4" style="text-align: center">
            <h2> 
              <i class="colored-text-white"><b>Misi</b></i>
            </h2>
            <div class="row">
              <div class="col-md-6 mb-3">
                <img class="rounded-image" src="../assets/Plugin icon - 1.png">
                <br>
                <br>
                <p class="colored-text-white">
                  Melakukan usaha dalam bidang penyediaan energi dan utilitas.
                </p>
              </div>
              <div class="col-md-6 mb-3">
                <img class="rounded-image" src="../assets/Plugin icon - 1.png">
                <br>
                <br>
                <p class="colored-text-white">Memberikan nilai tambah bagi stakeholders.</p>
              </div>
              <div class="col-md-6 mb-3">
                <img class="rounded-image" src="../assets/Plugin icon - 1.png">
                <br>
                <br>
                <p>
                  Mengutamakan keselamatan dan kesehatan kerja serta menjaga
                  pelestarian lingkungan hidup dalam setiap kegiatan
                  operasional.
                </p>
              </div>
              <div class="col-md-6 mb-3">
                <img class="rounded-image" src="../assets/Plugin icon - 1.png">
                <br>
                <br>
                <p>Memberikan kontribusi terhadap ketahanan energi nasional.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisionMision",
};
</script>
<style>
.vision-mision {
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(8, 78, 139, 0.75) 10%, rgba(8, 78, 139, 1) 100%);
}
.rounded-image {
  border-radius: 25px; /* Adjust the border-radius to control the roundness of the corners */
  overflow: hidden;
}
.colored-text-white {
    color: white;
}
</style>
