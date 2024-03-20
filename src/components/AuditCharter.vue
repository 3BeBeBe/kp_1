<template>
  <div class="another-container">
    <div class="container d-flex align-items-center justify-content-center p-5 background-moment">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/logo PIU.png" />
        </div>
        <div class="col-md-8">
          <div>
            <h2 class="styling-title">PIAGAM SATUAN PENGAWAS INTERN</h2>
            <hr>
            <p>
              Piagam Satuan Pengawas Intern merupakan dokumen formal yang menjelaskan struktur dan kedudukan Unit Satuan Pengawas Intern, kualifikasi, ruang lingkup kerja operasional, wewenang, tanggungjawab, standar professional, hubungan dengan auditor eksternal dan Komite Audit, kode etik, serta independensi dan obyektivitas SPI. Piagam Satuan Pengawas Intern menjadi dasar bagi SPI dalam melaksanakan tugasnya serta sifatnya mengikat kepada seluruh unit kerja dan anak perusahaan.
            </p>
          </div>
          <!-- <div>
            <a
              href="../assets/tataKelola/PIAGAM-SATUAN-PENGAWASAN-INTERN-INTERNAL-AUDIT-CHARTER.pdf"
              class="btn btn-primary"
              download
              >Audit Charter</a
            >
          </div> -->
          <div>
            <a href="../assets/tataKelola/PIAGAM-SATUAN-PENGAWASAN-INTERN-INTERNAL-AUDIT-CHARTER.pdf" download class="btn d-flex justify-content-center" style="width: 210px;">
              <div class="d-flex flex-column justify-content-center align-items-center" style="background-color: #0088ff; border: 3px solid #0088ff; border-radius: 50px 0px 0px 50px;">
                <p class="text-white m-0 p-2 ms-2"><b>DOWNLOAD</b></p>
              </div>
              <div class="d-flex justify-content-center align-items-center" style="background-color: #ffffff; border: 3px solid #0088ff; border-radius: 0px 50px 50px 0px;">
                <img src="../assets/logo PIU.png" class="me-3" style="max-width: 50%; max-height: 100%; height: auto; display: block; margin: 5px auto;">
              </div>
            </a>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuditCharter",
};
</script>
<style scoped>
/* .btn {
        border-radius: 0px;
    } */

.container {
  min-height: 60vh;
}

.row {
  width: 100%;
}

.styling-title {
  font-weight: 600;
  color: #084e8b;
  font-style: italic;
  font-size: 45px;
}

/* .another-container {
    background-image: url(../assets/Pattern_1.png);
    background-size: 1950px;
    min-height: 63.3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
  } */

  .another-container {
    background-image: url("../assets/Pattern_2.png");
    background-size: cover;
    display: flex;
    background-repeat: no-repeat;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1; /* Ensure the container is above the overlay */
    min-height: 65vh;
  }

  .another-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: -1; /* Ensure the overlay is behind the container */
  }

  /* .background-moment {
    background-color: rgba(255, 255, 255, 0.75);
  } */
</style>
