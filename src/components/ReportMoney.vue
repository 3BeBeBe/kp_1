<template>
    <div class="container mt-5 mb-5">
      <h2 style="font-style: italic; color: #084e8b; font-weight: 700">Laporan Keuangan</h2>
      <hr />
      <div class="row mt-4 d-flex justify-content-center align-items-center">
        <!-- <div class="col-md-9">
          <div class="container tab-content mt-2 text-center">
            <div class="tab-pane fade show active" id="lapkeu">
              <div class="row mt-4"> -->
                <div class="col-md-3 " v-for="(report, index) in reports" :key="index">
                  <a :href="report.link" class="btn report-link" download>
                    <img class="img-fluid size-image mt-2" :src="report.coverImage" />
                    <h3 class="report-title">{{ report.title }}</h3>
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
            title: "Laporan Keuangan 2022",
            link: "../assets/laporanKeuangan/FINAL-Signed-Financial-Statements-PIU-31-December-2022.pdf",
            coverImage: require("../assets/laporanKeuangan/coverLK.jpeg")
          },
          {
            title: "Laporan Keuangan 2021",
            link: "../assets/laporanKeuangan/FINAL-Financial-statements-PIU-31-December-2021_signed-version-1.pdf",
            coverImage: require("../assets/laporanKeuangan/coverLK.jpeg")
          },
          {
            title: "Laporan Keuangan 2020",
            link: "../assets/laporanKeuangan/FS-PIE-1220-signed.pdf",
            coverImage: require("../assets/laporanKeuangan/coverLK.jpeg")
          },
          {
            title: "Laporan Keuangan 2019",
            link: "../assets/laporanKeuangan/LK-2019.pdf",
            coverImage: require("../assets/laporanKeuangan/coverLK.jpeg")
          },
          {
            title: "Laporan Keuangan 2018",
            link: "../assets/laporanKeuangan/LK-2018.pdf",
            coverImage: require("../assets/laporanKeuangan/coverLK.jpeg")
          },
          {
            title: "Laporan Keuangan 2017",
            link: "../assets/laporanKeuangan/LK-2017.pdf",
            coverImage: require("../assets/laporanKeuangan/coverLK.jpeg")
          },
          {
            title: "Laporan Keuangan 2016",
            link: "../assets/laporanKeuangan/LK-2016.pdf",
            coverImage: require("../assets/laporanKeuangan/coverLK.jpeg")
          },
          {
            title: "Laporan Keuangan 2015",
            link: "../assets/laporanKeuangan/LK-2015.pdf",
            coverImage: require("../assets/laporanKeuangan/coverLK.jpeg")
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
  .report-link {
    position: relative;
    display: block;
  }

  .report-link::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s ease;
  }

  .report-link:hover::before {
    background: rgba(0, 0, 0, 0.5);
  }

  .report-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
    font-weight: bold;
  }

  .report-link:hover .report-title {
    opacity: 1;
  }
  </style>
  