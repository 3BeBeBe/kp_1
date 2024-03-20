<template>
  <div class="">
  <div class="container mt-5 mb-5">
    <div class="row gx-0 d-flex justify-content-center">
      <div class="col-md-3">
        <div>
          <h1 style="font-style: italic; color: #084e8b; font-weight: 700">Pilar<br> PI-Utilitas</h1>
        </div>
        <nav class="nav flex-column">
          <a class="ps-5 tab-menu nav-link active" aria-current="true" data-bs-toggle="tab" href="#vision">Vision</a>
          <a class="ps-5 tab-menu nav-link" aria-current="true" data-bs-toggle="tab" href="#mission">Mission</a>
          <a class="ps-5 tab-menu nav-link" aria-current="true" data-bs-toggle="tab" href="#business-line">Business Line</a>
          <a class="ps-5 tab-menu nav-link" aria-current="true" data-bs-toggle="tab" href="#business-enabler">Business Enabler</a>
          <a class="ps-5 tab-menu nav-link" aria-current="true" data-bs-toggle="tab" href="#corporate-value">Corporate Value</a>
        </nav>
      </div>
      <div class="col-md-9 tab-content" style="background-color: rgba(3, 112, 177, 1); color: white;">
        <div class="tab-pane fade show active m-4" id="vision">
          <h3 class=""><i><b>Visi</b></i></h3>
          <hr>
          <p class="">Menjadi Perusahaan Energi dan Utilitas terintegrasi kelas dunia untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta anak perusahaannya.</p>
        </div>
        <div class="tab-pane fade m-4" id="mission">
          <h3 class=""><i><b>Misi</b></i></h3>
          <hr>
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
        <div class="tab-pane fade m-4" id="business-line">
          <h3 class=""><i><b>Business Line</b></i></h3>
          <hr>
          <div class="row row-space">
            <div class="col-md-4 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start">
                  <h5 class="card-title">
                    (Listrik)<br><b>GTG</b> GGCP + KDM<br><b>STG</b> RDM<br><b>PLTS</b> Green Energy
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start">
                  <h5 class="card-title">
                    (Steam)<br><b>HRSG</b> GGCP + KDM
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start">
                  <h5 class="card-title">
                    (N2 & O2)<br>Industrial Gases
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start">
                  <h5 class="card-title">
                    (SPKLU)<br>Waste Water Treatment
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start">
                  <h5 class="card-title">
                    (Jasa Planting Services)<br><b>O&M</b> Tracon Industri
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade m-4" id="business-enabler">
          <h3 class=""><i><b>Business Enabler</b></i></h3>
          <hr>
          <div class="row row-space">
            <div class="col-md-3 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start p-3">
                  <h5 class="card-title">
                    Business Development
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start p-3">
                  <h5 class="card-title">
                    Supply Chain
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start p-3">
                  <h5 class="card-title">
                    Operasional Efficiency
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start p-3">
                  <h5 class="card-title">
                    Sistem IT
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start p-3">
                  <h5 class="card-title">
                    Enterprise Risk Management
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start p-3">
                  <h5 class="card-title">
                    GCG
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card card-fixed">
                <div class="card-body text-start p-3">
                  <h5 class="card-title">
                    Audit
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade m-4" id="corporate-value">
          <img class="img-fluid" src="../assets/akhlak_main.png" alt="Corporate Value" />
          <!-- <div class="company-value-container p-3">
            <div class="container">
                <div class="row justify-content-center">
                    <div ref="column1" id="column1" class="col-md-3 mb-5 ms-4 me-4 mt-5">
                        <p class="d-flex gap-2 flex-column justify-content-between">
                            <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#amanah" aria-expanded="false" aria-controls="amanah">
                                <h3 style="color: #21387c;"><i><b>Amanah</b></i></h3>
                            </button>
                        </p>
                        <div class="collapse multi-collapse" id="amanah">
                            <div class="card card-body">
                                <p><b><i>Memegang teguh kepercayaan yang diberikan.</i></b></p>
                                <ul>
                                    <li>Memenuhi janji dan komitmen.</li>
                                    <li>Bertanggung jawab atas tugas, keputusan dan tindakan yanng dilakukan.</li>
                                    <li>Berpegang teguh kepada nilai moral dan etika.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div ref="column2" id="column2" class="col-md-3 mb-5 ms-4 me-4 mt-5">
                        <p class="d-flex gap-2 flex-column justify-content-between">
                            <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#kompetensi" aria-expanded="false" aria-controls="kompetensi">
                                <h3 style="color: #21387c;"><i><b>Kompetensi</b></i></h3>
                            </button>             
                        </p>
                        <div class="collapse multi-collapse" id="kompetensi">
                            <div class="card card-body">
                                <p><b><i>Terus belajar dan mengembangkan kapabilitas.</i></b></p>
                                <ul>
                                    <li>Meningkatkan kompetensi dari untuk menjawab tantangan yang selalu berubah.</li>
                                    <li>Membantu orang lain belajar.</li>
                                    <li>Menyelesaikan tugas dengan kualitas terbaik.</li>
                                </ul>
                            </div>  
                        </div>
                    </div>
                    <div ref="column3" id="column3" class="col-md-3 mb-5 ms-4 me-4 mt-5">
                        <p class="d-flex gap-2 flex-column justify-content-between">
                            <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#harmonis" aria-expanded="false" aria-controls="harmonis">
                                <h3 style="color: #21387c;"><i><b>Harmonis</b></i></h3>
                            </button>             
                        </p>
                        <div class="collapse multi-collapse" id="harmonis">
                            <div class="card card-body">
                                <p><b><i>Saling peduli dan menghargai perbedaan.</i></b></p>
                                <ul>
                                    <li>Menghargai setiap orang apapun latar belakangnya.</li>
                                    <li>Suka menolong orang lain.</li>
                                    <li>Membangun lingkungan kerja yang kondusif.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div ref="title" id="title" class="title centered mb-5">
                        <button class="btn btn-outline-light btn-lg" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
                            <img src="../assets/akhlak.png" style="max-width: 100%;"/>
                        </button>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div ref="column4" id="column4" class="col-md-3 mb-5 ms-4 me-4">
                        <p class="d-flex gap-2 flex-column justify-content-between">
                            <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#loyal" aria-expanded="false" aria-controls="loyal">
                                <h3><i><b>Loyal</b></i></h3>
                            </button>             
                        </p>
                        <div class="collapse multi-collapse" id="loyal">
                            <div class="card card-body">
                                <p><b><i>Berdedikasi dan mengutamakan kepentingan Bangsa dan Negara</i></b></p>
                                <ul>
                                    <li>Menjaga nama baik sesama karyawan, pimpinan, BUMN dan Negara.</li>
                                    <li>Rela berkorban untuk mencapai tujuan yang lebih besar.</li>
                                    <li>Patuh kepada pimpinan sepanjang tidak bertentangan dengan hukum dan etika.</li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                    <div ref="column5" id="column5" class="col-md-3 mb-5 ms-4 me-4">
                        <p class="d-flex gap-2 flex-column justify-content-between">
                            <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#adaptif" aria-expanded="false" aria-controls="adaptif">
                                <h3><i><b>Adaptif</b></i></h3>
                            </button>             
                        </p>
                        <div class="collapse multi-collapse" id="adaptif">
                            <div class="card card-body">
                                <p><i><b>Terus berinovasi dan antusias dalam menggerakan ataupun menghadapi perubahan.</b></i></p>
                                <ul>
                                    <li>Cepat menyesuaikan diri untuk menjadi lebih baik.</li>
                                    <li>Terus – menerus melakukan perbaikan mengikuti perkembangan teknologi.</li>
                                    <li>Bertindak proaktif.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div ref="column6" id="column6" class="col-md-3 mb-5 ms-4 me-4">
                        <p class="d-flex gap-2 flex-column justify-content-between">
                            <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#kolaboratif" aria-expanded="false" aria-controls="kolaboratif">
                                <h3><i><b>Kolaboratif</b></i></h3>
                            </button>             
                        </p>
                        <div class="collapse multi-collapse" id="kolaboratif">
                            <div class="card card-body">
                                <p><b><i>Membangun kerja sama yang sinergis.</i></b></p>
                                <ul>
                                    <li>Memberikan kesempatan kepada berbagai pihak untuk berkontribusi.</li>
                                    <li>Terbuka dalam bekerja sama untuk menghasilkan nilai tambah.</li>
                                    <li>Menggerakan pemanfaatan berbagai sumberdaya untuk tujuan bersama.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div> 
  </div>
</template>

<script>
export default {
  name: 'CompanyPillars',
};
</script>

<style scoped>
  hr {
    color: white;
  }
  .tab-content {
    border-radius: 10px;
    height: 500px;
  }
  .tab-menu {
    font-size: 1.2rem;
    color: black;
    /* border: 1px solid black; */
    /* margin: 5px; */
    padding: 15px; /* Add some padding */
    /* background-color: rgb(187, 226, 248); */
    font-weight: bold;
    border-radius: 30px 0px 0px 30px;
  }
  .tab-menu:hover {
    color: white;
    background-color: rgb(116, 199, 247) !important; /* Change color on hover and when active */
    font-weight: bold;
    border-radius: 30px 0px 0px 30px;
  }
  .tab-menu.active {
    color: white;
    background-color: rgba(3, 112, 177, 1) !important; /* Change color on hover and when active */
    font-weight: bold;
    border-radius: 30px 0px 0px 30px;
  }

  .outlined {
    border: 1px solid #000; /* Change color as needed */
  }
  .card {
    height: 140px;
    background-color: #009eaa;
    color: white;
    box-shadow: 0 4px 8px rgba(4, 136, 145, 0.3);
    border-radius: 15px;
  }
  .col-md-3 .card {
    height: 100px;
    background-color: #009eaa;
    color: white;
    box-shadow: 0 4px 8px rgba(4, 136, 145, 0.3);
  }
  .card-title {
    font-weight: bold;
  }
  .card-title b {
    color: #1d2a57;
  }
  /* .btn, .card{
    border-radius: 0px;
  } */
  .title {
    width: 30%;
    min-height: 0px;
              /* background-color: #084e8b; */
    color: #ffffff;
    padding: 20px;
    margin: 0 auto;
  }   
      
  .centered{
    /* display: flex;  */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .company-value-container {
    /* background: linear-gradient(to bottom, #084e8b, #ffffff);*/
    background-color: #0aa4b4;
    /* background: rgba(8, 78, 139, 0.5) 10%;  */
    /* background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(8, 78, 139, 0.5) 10%, rgba(8, 78, 139, 1) 100%); */
  } 
  .card-body {
    /* height: 300px; */
    box-shadow: 0 4px 8px rgba(4, 136, 145, 0.3);
  }
  h3::first-letter {
    font-size: 1.5em; /* Adjust as needed */
  }
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
    background-color: rgba(255, 255, 255, 0.5);
    z-index: -1; /* Ensure the overlay is behind the container */
  }
</style>