<template>
  <div class="container">
    <div class="row gx-0 d-flex justify-content-center">
      <div class="col-md-3">
        <div>
          <h2>Pilar PI-Utilitas</h2>
        </div>
        <nav class="nav flex-column">
          <a class="tab-menu nav-link active" aria-current="true" data-bs-toggle="tab" href="#vision">Vision</a>
          <a class="tab-menu nav-link" aria-current="true" data-bs-toggle="tab" href="#mission">Mission</a>
          <a class="tab-menu nav-link" aria-current="true" data-bs-toggle="tab" href="#business-line">Business Line</a>
          <a class="tab-menu nav-link" aria-current="true" data-bs-toggle="tab" href="#business-enabler">Business Enabler</a>
          <a class="tab-menu nav-link" aria-current="true" data-bs-toggle="tab" href="#corporate-value">Corporate Value</a>
        </nav>
      </div>
      <div class="col-md-9 tab-content" style="background-color: rgba(3, 112, 177, 1);; color: white;">
        <div class="tab-pane fade show active m-4" id="vision">
          <h3 class=""><i><b>Visi</b></i></h3>
          <p class="">Menjadi Perusahaan Energi dan Utilitas terintegrasi kelas dunia untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta anak perusahaannya.</p>
        </div>
        
        <div class="tab-pane fade m-4" id="mission">
          <h3 class=""><i><b>Misi</b></i></h3>
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
          <div class="row row-space">
            <div class="col-md-4">
              <p class="">
                (Listrik)<br><b>GTG</b> GGCP + KDM<br><b>STG</b> RDM<br><b>PLTS</b> Green Energy
              </p>
            </div>
            <div class="col-md-4">
              <p class="">
                (Steam)<br><b>HRSG</b> GGCP + KDM
              </p>
            </div>
            <div class="col-md-4">
              <p class="">
                (N2 & O2)<br>Industrial Gases
              </p>
            </div>
            <div class="col-md-4">
              <p class="">
                (SPKLU)<br>Waste Water Treatment
              </p>
            </div>
            <div class="col-md-4">
              <p class="">
                (Jasa Planting Services)<br><b>O&M</b> Tracon Industri
              </p>
            </div>
          </div>
        </div>
        <div class="tab-pane fade m-4" id="business-enabler">
          <h3 class=""><i><b>Business Enabler</b></i></h3>
          <div class="row row-space">
            <div class="col-md-4">
              <p class="">
                Business Development
              </p>
            </div>
            <div class="col-md-4">
              <p class="">
                Supply Chain
              </p>
            </div>
            <div class="col-md-4">
              <p class="">
                Operasional Efficiency
              </p>
            </div>
            <div class="col-md-4">
              <p class="">
                Sistem IT
              </p>
            </div>
            <div class="col-md-4">
              <p class="">
                Enterprise Risk Management
              </p>
            </div>
            <div class="col-md-4">
              <p class="">
                GCG
              </p>
            </div>
            <div class="col-md-4">
              <p class="">
                Audit
              </p>
            </div>
          </div>
        </div>
        <div class="tab-pane fade m-4" id="corporate-value">
          <div class="company-value-container p-3">
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
                            <!-- <h2><b><i>A K H L A K</i></b></h2>
                            <p><i>Nilai - Nilai Perusahaan</i></p> -->
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
          </div>
        </div>
      </div>
    </div>
  </div> 

  
</template>

<script>
export default {
  name: 'VideoBackground',
};
</script>

<style scoped>
.tab-menu {
  font-size: 1rem;
  color: white;
  /* border: 1px solid black; */
  /* margin: 5px; */
  padding: 15px; /* Add some padding */
  background-color: black;
}
.tab-menu:hover,
.tab-menu.active {
  background-color: rgba(3, 112, 177, 1) !important; /* Change color on hover and when active */
}

.outlined {
  border: 1px solid #000; /* Change color as needed */
}
        
.btn, .card{
  border-radius: 0px;
}
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
            /* background: linear-gradient(to bottom, #084e8b, #ffffff);
             */
             background-color: #0aa4b4;
            /* background: rgba(8, 78, 139, 0.5) 10%;  */
            /* background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(8, 78, 139, 0.5) 10%, rgba(8, 78, 139, 1) 100%); */

        } 
        .card-body {
            /* height: 300px; */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h3::first-letter {
            font-size: 1.5em; /* Adjust as needed */
        }
</style>