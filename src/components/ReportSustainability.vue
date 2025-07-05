<template>
    <div class="container mt-5 mb-5">
      <h2 style="font-style: italic; color: #084e8b; font-weight: 700">Laporan Keberlanjutan</h2>
      <hr />
      <div class="row mt-4 d-flex align-items-center">
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
            title: "Laporan Keberlanjutan 2023",
            link: "../assets/LaporanKeberlanjutan/SR-PIU-2023_ok_compressed.pdf",
            coverImage: require("../assets/laporanKeberlanjutan/coverLK23.png")
          },
          {
            title: "Laporan Keberlanjutan 2021",
            link: "../assets/LaporanKeberlanjutan/SR-PIU-2022_ok_compressed.pdf",
            coverImage: require("../assets/laporanKeberlanjutan/coverLK.png")
          },
        ]
      };
    }
  };
  </script>
  
<style scoped>
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
    border-radius: 20px;
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
  