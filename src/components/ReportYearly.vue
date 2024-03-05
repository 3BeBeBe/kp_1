<template>
    <div class="container mt-5 mb-5">
      <h2>Laporan Tahunan</h2>
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
            link: "../assets/LaporanTahunan/AR-PIU-2022_OK_.pdf",
            coverImage: require("../assets/laporanTahun/1.png")
          },
          {
            link: "../assets/LaporanTahunan/PIE-AR-2021-2-FEB-2023-Lowres.pdf",
            coverImage: require("../assets/laporanTahun/2.jpg")
          },
          {
            link: "../assets/LaporanTahunan/AR-PIE-2021-4.pdf",
            coverImage: require("../assets/laporanTahun/3.png")
          },
          {
            link: "../assets/LaporanTahunan/ANNUAL-REPORT-PIE-2019.pdf",
            coverImage: require("../assets/laporanTahun/4.png")
          },
          {
            link: "../assets/LaporanTahunan/ANNUAL-REPORT-PIE-2018.pdf",
            coverImage: require("../assets/laporanTahun/5.jpg")
          },
          {
            link: "../assets/LaporanTahunan/ANNUAL-REPORT-PIE-2017.pdf",
            coverImage: require("../assets/laporanTahun/6.jpg")
          },
          {
            link: "../assets/LaporanTahunan/ANNUAL-REPORT-PIE-2016.pdf",
            coverImage: require("../assets/laporanTahun/7.jpg")
          }
          // Add other report objects here
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
  