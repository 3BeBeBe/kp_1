<template>
    <div class="container mt-5 mb-5">
      <h2>Laporan Keberlanjutan</h2>
      <hr />
      <div class="row mt-4 d-flex align-items-center">
        <!-- <div class="col-md-9">
          <div class="container tab-content mt-2 text-center">
            <div class="tab-pane fade show active" id="lapkeu">
              <div class="row mt-4"> -->
                <div class="col-md-3 " v-for="(report, index) in reports" :key="index">
                  <a :href="report.link" class="btn" download>
                    <img class="img-fluid size-image mt-2" :src="report.coverImage" />
                  </a>
                </div>
              </div>
            </div>
          <!-- </div>
        </div>
      </div>
    </div> -->
  </template>
  
  <script>
  export default {
    name: "ReportMoney",
    data() {
      return {
        reports: [
          {
            link: "../assets/LaporanKeberlanjutan/SR-PIU-2022_ok_compressed.pdf",
            coverImage: require("../assets/laporanKeberlanjutan/coverLK.png")
          },
        ]
      };
    }
  };
  </script>
  
  <style>
  .card {
    border-radius: 0px;
  }
  .size-image {
    max-width: 100%;
    max-height: 100%; 
    height: auto; /* Maintain aspect ratio */
    display: block; /* Prevents extra space below inline images */
    margin: 0 auto; /* Center the image within the container */
  }
  </style>
  