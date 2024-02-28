<template>
  <div class="another-container">
    <div class="container d-flex align-items-center justify-content-center p-5">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/logo PIU.png" />
        </div>
        <div class="col-md-8">
          <div>
            <h2 class="styling-title">PIAGAM SATUAN PENGAWAS INTERN</h2>
            <hr />
            <p>
              Piagam Satuan Pengawas Intern merupakan dokumen formal yang
              menjelaskan struktur dan kedudukan Unit Satuan Pengawas Intern,
              kualifikasi, ruang lingkup kerja operasional, wewenang,
              tanggungjawab, standar professional, hubungan dengan auditor
              eksternal dan Komite Audit, kode etik, serta independensi dan
              obyektivitas SPI. Piagam Satuan Pengawas Intern menjadi dasar bagi
              SPI dalam melaksanakan tugasnya serta sifatnya mengikat kepada
              seluruh unit kerja dan anak perusahaan.
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
    <a href="../assets/tataKelola/PIAGAM-SATUAN-PENGAWASAN-INTERN-INTERNAL-AUDIT-CHARTER.pdf" download>
        <img src="../assets/ButtonDesign - AuditCharter.png" alt="Audit Charter" />
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
.another-container {
  background-image: url("../assets/Pattern_1.png");
}
.another-container {
    /* background-color: rgba(8, 78, 139, 0.432); */
    background-image: url(../assets/Pattern_1.png);
    /* background-image: url(../assets/tester1.png); */
    /* background-image: url(../assets/logo\ PIU.png); */
    background-size: 1950px;
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    min-height: 63.3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1; /* Ensure the container is above the overlay */
  }

  .another-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.80);
    z-index: -1; /* Ensure the overlay is behind the container */
  }
</style>
