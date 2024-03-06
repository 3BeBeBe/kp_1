<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 d-flex align-items-center justify-content-center rounded-contain-l text-center">
        <h3>Vision</h3>
        <p class="hiddening-text">opdjaiwdjawdioawjoawdjawdijawdjawiowaodajdojwaidadawjdadioaw</p>
      </div>
      <!-- <div class="col-md-8 rounded-contain-r">
        <p class="">
          Menjadi Perusahaan Energi dan Utilitas terintegrasi kelas dunia untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta anak perusahaan.
        </p>
      </div> -->
    </div>
    <div class="row">
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

.rounded-contain-l {
  background-color: rgb(0, 162, 255);
  /* background: linear-gradient(to bottom, rgb(0, 255, 55), white); */
  width: 100px;
  height: 50px;
  margin: 0 auto;
  overflow: hidden;
  color: white;
  border-radius: 5px;
  transition: width 1s, color 1.5s, border-radius 1s, height 1.5s, box-shadow 1.5s, background-color 1.5s;
  position: relative;
}

.rounded-contain-l::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgb(0, 162, 255), white);
  opacity: 0;
  transition: opacity 1.5s; 
  border-radius: inherit; 
}

.rounded-contain-l:hover {
  width: 600px;
  color: black;
  border-radius: 20px;
  height: 150px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  background-color: rgba(0, 0, 0, 0);
}

.rounded-contain-l:hover::before {
  opacity: 1;
}

.hiddening-text {
  color: white;
  transition: color 2s;
}

.hiddening-text:hover {
  color: black;
}



/* .rounded-contain-l {
  background: linear-gradient(to bottom, rgb(0, 255, 55), white);
  width: 100px;
  height: 50px;
  margin: 0 auto;
  overflow: hidden;
  color: white;
  border-radius: 5px;
  transition: width 1s, color 1.5s, border-radius 1s, height 1.5s, box-shadow 1.5s, opacity 1.5s;
}

.rounded-contain-l:hover {
  width: 600px;
  color: black;
  border-radius: 20px;
  height: 150px;
  background: linear-gradient(to bottom, rgb(0, 162, 255), white);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
} */

.rounded-contain-r {
  background: linear-gradient(to right, green, orange);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  color: white;
}
</style>