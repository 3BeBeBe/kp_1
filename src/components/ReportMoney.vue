<template>
    <div class="container mt-5 mb-5">
      <h2>Laporan Keuangan</h2>
      <hr />
      <div class="row">
        <div class="col-md-9">
          <div class="container tab-content mt-2 text-center">
            <div class="tab-pane fade show active" id="lapkeu">
              <div class="row mt-4">
                <div class="col-md-3 d-flex justify-content-center align-items-center" v-for="(report, index) in reports" :key="index">
                  <a :href="report.link" class="btn" download>
                    <img class="img-fluid size-image mt-2" :src="report.coverImage" />
                  </a>
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
    name: "ReportMoney",
    data() {
      return {
        reports: [
          {
            link: "../assets/laporanKeuangan/FINAL-Signed-Financial-Statements-PIU-31-December-2022.pdf",
            coverImage: "../assets/laporanKeuangan/coverLK.jpeg"
          },
          {
            link: "../assets/laporanKeuangan/FINAL-Financial-statements-PIU-31-December-2021_signed-version-1.pdf",
            coverImage: "../assets/laporanKeuangan/coverLK.jpeg"
          },
          {
            link: "../assets/laporanKeuangan/FS-PIE-1220-signed.pdf",
            coverImage: "../assets/laporanKeuangan/coverLK.jpeg"
          },
          {
            link: "../assets/laporanKeuangan/LK-2019.pdf",
            coverImage: "../assets/laporanKeuangan/coverLK.jpeg"
          },
          {
            link: "../assets/laporanKeuangan/LK-2018.pdf",
            coverImage: "../assets/laporanKeuangan/coverLK.jpeg"
          },
          {
            link: "../assets/laporanKeuangan/LK-2017.pdf",
            coverImage: "../assets/laporanKeuangan/coverLK.jpeg"
          },
          {
            link: "../assets/laporanKeuangan/LK-2016.pdf",
            coverImage: "../assets/laporanKeuangan/coverLK.jpeg"
          },
          {
            link: "../assets/laporanKeuangan/LK-2015.pdf",
            coverImage: "../assets/laporanKeuangan/coverLK.jpeg"
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
  