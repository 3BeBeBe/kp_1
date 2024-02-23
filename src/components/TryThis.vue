<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 d-flex align-items-center">
        <h3>Vision</h3>
        <!-- <p class="">
          Menjadi Perusahaan Energi dan Utilitas terintegrasi kelas dunia untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta anak perusahaan.
        </p> -->
      </div>
      <div class="col-md-8">
        <p class="">
          Menjadi Perusahaan Energi dan Utilitas terintegrasi kelas dunia untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta anak perusahaan.
        </p>
      </div>
      <div class="col-md-4 d-flex align-items-center">
        <h3>Mission</h3>
        <!-- <ul class="">
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
        </ul> -->
      </div>
      <div class="col-md-8">
        <ul class="">
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
      <div class="col-md-4 d-flex align-items-center">
        <h3>Business Line</h3>
      </div>
      <div class="col-md-8 d-flex justify-content-center">
        <div class="row row-space">
          <div class="col-md-2">
            <p class="">
              (Listrik)<br><b>GTG</b> GGCP + KDM<br><b>STG</b> RDM<br><b>PLTS</b> Green Energy
            </p>
          </div>
          <div class="col-md-2">
            <p class="">
              (Steam)<br><b>HRSG</b> GGCP + KDM
            </p>
          </div>
          <!-- <div class="col-md-2">
            <p class="">
              (Listrik) STG<br>RDM
            </p>
          </div> -->
          <div class="col-md-2">
            <p class="">
              (N2 & O2)<br>Industrial Gases
            </p>
          </div>
          <!-- <div class="col-md-2">
            <p class="">
              (Listrik PLTS)<br>Green Energy
            </p>
          </div> -->
          <div class="col-md-2">
            <p class="">
              (SPKLU)<br>Waste Water Treatment
            </p>
          </div>
          <div class="col-md-2">
            <p class="">
              (Jasa Planting Services)<br><b>O&M</b> Tracon Industri
            </p>
          </div>
        </div>
        <!-- <ul class="horizontal-list nowrap">
          <li class="rotate-left">
              (Listrik) GTG GGCP + KDM
          </li>
          <li class="rotate-left">
              (Steam) HRSG GGCP + KDM
          </li>
          <li class="rotate-left">
            (Listrik) STG RDM
          </li>
          <li class="rotate-left">
            (Jasa Planting Services) O&M Tracon Industri
          </li>
          <li class="rotate-left">
            (N2 & O2) Industrial Gases
          </li>
          <li class="rotate-left">
            (Listrik PLTS) Green Energy
          </li>
          <li class="rotate-left">
            (SPKLU) Waste Water Treatment
          </li>
        </ul> -->
      </div>
      <div class="col-md-4 d-flex align-items-center">
        <h3>Business Enabler</h3>
      </div>
      <div class="col-md-8">
        <p class="">
          Business Development | Supply Chain | Operasional Efficiency | Sistem IT | Enterprise Risk Management | GCG | Audit
        </p>
      </div>
      <div class="col-md-4 d-flex align-items-center">
        <h3>Corporate Value</h3>
      </div>
      <div class="col-md-8">
        <p class="">
          Amanah | Kompeten | Harmonis | Loyal | Adaptif | Kolaboratif
        </p>
      </div>
    </div>
  </div>
  <!-- <div class="container d-flex justify-content-end align-items-center">
    <div class="row d-flex justify-content-end">
      <div class="col-md-5">
        <img src="@/assets/pabrik/GGCP/ggcp4.jpg" alt="image" class="img-fluid fixed-height">
      </div>
      <div class="col-md-5">
        <img src="@/assets/pabrik/KDM/kdm5.jpg" alt="image" class="img-fluid fixed-height">
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'VideoBackground',
};
</script>

<style scoped>
.row-space {
  display: flex;
  /* justify-content: space-between; */
}

.row-space .col-md-2 {
  margin: 0 10px;
  border: 1px solid black;
}
.horizontal-list {
  white-space: nowrap;
  line-height: 10;
  padding-left: 0;
  margin-left: 0;
}
.horizontal-list li {
  display: inline-block;
}
.rotate-left {
  transform: rotate(-90deg);
  writing-mode: horizontal-tb;
  text-orientation: upright;
}
</style>