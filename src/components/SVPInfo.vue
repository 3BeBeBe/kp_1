<template>
    <!-- <div class="wallpaper-container"> -->
    <div class="container info-container">
      <div class="row d-flex justify-content-center align-items-start mt-5">
      <div class="d-flex flex-column justify-content-center align-items-start mt-3">
        <h1 class="d-flex flex-column justify-content-center align-items-start" style="color: #084e8b; font-weight: 600; font-style: italic;"><b>Senior Vice President</b></h1>
        <h2 class="d-flex flex-column justify-content-center align-items-start" style="color: #e65824; font-weight: 700; font-style: italic;">PT Pupuk Indonesia Utilitas</h2>
      </div>
      <!-- <button class="btn main-button" :class="{ 'right': isRight, 'left': !isRight, 'on-top': isRight }" @click="toggleButton">
        <img src="../assets/Carousal/TataKelola.jpg" alt="Main button image">
      </button>
      <transition name="fade" @before-enter="beforeEnter" @enter="enter"> -->
        <div class="button-row" v-if="isRight">
          <button
          class="btn-square image-button item e1"
          data-bs-toggle="modal"
          data-bs-target="#svp1"
        >
          <img
            src="../assets/Manajemen/SVP/Pak Hisar Desmon crop.png"
          />
          <!-- <div class="item e1"> -->
            <div class="text1">
              <h4><b>SVP Operasi</b></h4>
              <p>Hisar Desmon</p>
            </div>
          <!-- </div> -->
        </button>
  
          <!-- <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#kom2">
            <img src="../assets/Manajemen/Komisaris/Sumyana Sukandar - Komisaris Utama.jpg" alt="Image 2">
            <div class="overlay-text">
              <div class="text-start">
                <h4>Komisaris Utama</h4>
                <h5>Sumyana Sukandar</h5>
              </div>
            </div>
          </button> -->
  
          <!-- modal -->
          <div class="modal fade" id="svp1" tabindex="-1" aria-hidden="true">
            <div
              class="modal-dialog modal-dialog-centered modal-xl"
            >
              <div class="modal-content">
                <div class="modal-body ">
                  <div class="row">
                    <div class="col-md-12 d-flex justify-content-end">
                      
                    </div>
                    <div class="col-md-8 col-12 order-2 order-md-1">
                      <h2 class="modal-title mb-1">Biodata</h2>
                      <ul>
                        <li>Nama : Hisar Desmon</li>
                        <li>Tempat, Tanggal Lahir : </li>
                        <li>Pendidikan : 
                          <ul>
                            <!-- <li>Sarjana Ekonomi jurusan Manajemen dari Universitas Pasundan Bandung (1988)</li>
                            <li>Magister Manajemen dari STIE IPWIJA Jakarta (2002)</li> -->
                          </ul>
                        </li>
                        <li>Pengalaman : 
                          <ul>
                            <!-- <li>Menjabat sebagai Komisaris Utama PT Pupuk Indonesia Utilitas</li>
                            <li>Direktur I Perum Jasa Tirta II pada 2016-2018</li>
                            <li>Direktur Administrasi dan Keuangan Perum Jasa Tirta II pada 2015</li>
                            <li>Asisten Deputi Usaha Perkebunan dan Kehutanan, pada Kedeputian Bidang Usaha Industri Agro dan Industri Strategis</li>
                            <li>Kepala Bidang Usaha Jasa Perencanaan Konstruksi, dan Rekayasa II pada Deputi Bidang Usaha Jasa Lainnya</li>
                            <li>Direktorat Jenderal Pembinaan BUMN, Departemen Keuangan pada 2001-2002</li>
                            <li>Kepala Subbagian Administrasi pada Kementerian Negara P. BUMN hingga 2000</li>
                            <li>Kepala Seksi Ditjen Pembinaan BUMN, Departemen Keuangan hingga 1998</li>
                            <li>Pegawai Direktorat Persero, Departemen Keuangan Ditjen Moneter hingga 1995</li>
                            <li>Staf BRI (1990-1991)</li>
                            <li>Market researcher di PT Tobby Meza.Co</li>
                            <li>Staf tenaga survey BKKBN Provinsi Jawa Barat</li> -->
                          </ul>
                        </li>
                      </ul>
                      <div class="d-flex align-items-end">
                        <button
                          type="button"
                          class="btn hide-btn btn-primary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >Tutup</button>
                      </div>
                    </div>
                    <div class="col-md-4 col-12 order-1 order-md-1">
                      <img
                        src="../assets/Manajemen/SVP/Pak Hisar Desmon crop.png"
                        class="img-fluid mx-auto d-block p-3"
                      />
                      <h3 class="modal-title text-center">Hisar Desmon</h3>
                      <h4 class="card-text text-center">
                        SVP Operasi
                      </h4>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- modal end -->
          <button
          class="btn-square image-button item e1"
          data-bs-toggle="modal"
          data-bs-target="#svp2"
          style="border-radius: 0"
        >
          <img
            src="../assets/Manajemen/SVP/Pak Mazni Sastra crop.png"
          />
          <!-- <div class="item e1"> -->
            <div class="text1">
              <h4><b>SVP Keuangan</b></h4>
              <p>Mazni Sastra </p>
            </div>
          <!-- </div> -->
        </button>
          
          <!-- <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#kom1">
            <img src="../assets/Manajemen/Komisaris/Imam Mujahidin Fahmid - Komisaris.jpg" alt="Image 1">
            <div class="overlay-text">
              <div class="text-start">
                <h4>Komisaris</h4>
                <h5>Imam Mujahidin Fahmid</h5>
              </div>
            </div>
          </button> -->
  
          <!-- modal -->
          <div class="modal fade" id="svp2" tabindex="-1" aria-hidden="true">
            <div
              class="modal-dialog modal-dialog-centered modal-xl"
            >
              <div class="modal-content">
                <!-- <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> -->
                <div class="modal-body ">
                  <div class="row">
                    <div class="col-md-12 d-flex justify-content-end">
                      
                    </div>
                    <div class="col-md-8 col-12 order-2 order-md-1">
                      <h2 class="modal-title mb-1">Biodata</h2>
                      <ul>
                        <li>Nama : Mazni Sastra</li>
                        <li>Tempat, Tanggal Lahir : </li>
                        <li>Pendidikan : 
                          <!-- <ul>
                            <li>Sarjana Sosial Ekonomi Pertanian Universitas Hasanudin (1990)</li>
                            <li>Master of Trade and Development Newcastle University Australia (2001)</li> 
                            <li>Doktor Ekologi Manusia Institut Pertanian Bogor (2011)</li>
                          </ul> -->
                        </li>
                        <li>Pengalaman : 
                          <!-- <ul>
                            <li>Menjabat sebagai Komisaris PT Pupuk Indonesai Utilitas (27 Desember 2021 - Sekarang)</li>
                            <li>Staf Khusus Menteri Bidang Kebijakan Pertanian, Kementerian Pertanian RI (2019 – Sekarang)</li>
                            <li>Staf Pengajar Fakultas Pertanian & Pasca Sarjana Unhas, Makassar (1992 – Sekarang)</li>
                            <li>Direktur Publication Manajement Center Unhas, Makasar (2015-2018)</li>
                            <li>Ketua Dewan Riset Daerah Pemprov Sulawesi Selatan, Makasar (2011-2018)</li>
                            <li>Ketua Tim Ahli Gubernur Pemerintah Propinsi Sulawesi Selatan, Makasar (2009-2018)</li>
                            <li>Tenaga Ahli Bappeda; Dinas Perkebunan; Dinas Pertanian; Tanaman Pangan dan Hirtikultura; Badan Ketahana Pangan Propinsi Sulawesi Selatan (2009-2018)</li>
                            <li>Ketua Badan Perusda Pemprov Sulawesi Selatan (2014-2018)</li>
                            <li>Komisaris GMTDC, Tbk (2009-2014)</li>
                          </ul> -->
                        </li>
                      </ul>
                      <div class="d-flex align-items-end">
                        <button
                          type="button"
                          class="btn hide-btn btn-primary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >Tutup</button>
                      </div>
                    </div>
                    <div class="col-md-4 col-12 order-1 order-md-1">
                      <img
                        src="../assets/Manajemen/SVP/Pak Mazni Sastra crop.png"
                        class="img-fluid mx-auto d-block p-3"
                      />
                      <h3 class="modal-title text-center">Mazni Sastra</h3>
                      <h4 class="card-text text-center">
                        SVP Keuangan
                      </h4>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- modal end -->
  
          
  
        <button
          class="btn-square image-button item e1"
          data-bs-toggle="modal"
          data-bs-target="#svp3"
        >
          <img
            src="../assets/Manajemen/SVP/Pak Rama Usvika crop.png"
          />
          <!-- <div class="item e1"> -->
            <div class="text1">
              <h4><b>SVP Investasi & Pengembangan</b></h4>
              <p>Rama Usvika</p>
            </div>
          <!-- </div> -->
        </button>
  
          <!-- <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#kom3">
            <img src="../assets/Manajemen/Komisaris/Monica Desideria - Komisaris.jpg" alt="Image 3">
            <div class="overlay-text">
              <div class="text-start">
                <h4>Komisaris</h4>
                <h5>Monica Desideria</h5>
              </div>
            </div>
          </button> -->
          
          <!-- modal -->
          <div class="modal fade" id="svp3" tabindex="-1" aria-hidden="true">
            <div
              class="modal-dialog modal-dialog-centered modal-xl"
            >
              <div class="modal-content">
                <!-- <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> -->
                <div class="modal-body ">
                  <div class="row">
                    <div class="col-md-8 col-12 order-2 order-md-1">
                      <h2 class="modal-title mb-1">Biodata</h2>
                      <ul>
                        <li>Nama : Rama Usvika</li>
                        <li>Tempat, Tanggal Lahir : </li>
                        <li>Pendidikan : 
                          <ul>
                            <!-- <li>Sarjana Sosial Ekonomi Pertanian Universitas Hasanudin (1990)</li>
                            <li>Master of Trade and Development Newcastle University Australia (2001)</li> 
                            <li>Doktor Ekologi Manusia Institut Pertanian Bogor (2011)</li> -->
                          </ul>
                        </li>
                        <li>Pengalaman : 
                          <ul>
                            <!-- <li>Menjabat sebagai Komisaris PT Pupuk Indonesia Utilitas (27 Desember 2021 - Sekarang)</li>
                            <li>GM Marketing dan Corporate Communication ANTV</li>
                            <li>Assisten GM Production ANTV</li>
                            <li>Supporting Production Manager ANTV</li>
                            <li>Sport Manager ANTV</li> -->
                          </ul>
                        </li>
                      </ul>
                      <div class="d-flex column-flex align-items-end">
                        <button
                          type="button"
                          class="btn hide-btn btn-primary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >Tutup</button>
                      </div>
                    </div>
                    <div class="col-md-4 col-12 order-1 order-md-1">
                      <img
                        src="../assets/Manajemen/SVP/Pak Rama Usvika crop.png"
                        class="img-fluid mx-auto d-block p-3"
                      />
                      <h3 class="modal-title text-center">Rama Usvika</h3>
                      <h4 class="card-text text-center">
                        SVP Investasi & Pengembangan
                      </h4>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- modal end -->
          <button
          class="btn-square image-button item e1"
          data-bs-toggle="modal"
          data-bs-target="#svp4"
        >
          <img
            src="../assets/Manajemen/SVP/Pak Said Ridho crop.png"
          />
          <!-- <div class="item e1"> -->
            <div class="text1">
              <h4><b>Sekretaris Perusahaan</b></h4>
              <p>Said Ridho</p>
            </div>
          <!-- </div> -->
        </button>
  
          <!-- <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#kom3">
            <img src="../assets/Manajemen/Komisaris/Monica Desideria - Komisaris.jpg" alt="Image 3">
            <div class="overlay-text">
              <div class="text-start">
                <h4>Komisaris</h4>
                <h5>Monica Desideria</h5>
              </div>
            </div>
          </button> -->
          
          <!-- modal -->
          <div class="modal fade" id="svp4" tabindex="-1" aria-hidden="true">
            <div
              class="modal-dialog modal-dialog-centered modal-xl"
            >
              <div class="modal-content">
                <!-- <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> -->
                <div class="modal-body ">
                  <div class="row">
                    <div class="col-md-8 col-12 order-2 order-md-1">
                      <h2 class="modal-title mb-1">Biodata</h2>
                      <ul>
                        <li>Nama : Said Ridho</li>
                        <li>Tempat, Tanggal Lahir : </li>
                        <li>Pendidikan : 
                          <ul>
                            <!-- <li>Sarjana Sosial Ekonomi Pertanian Universitas Hasanudin (1990)</li>
                            <li>Master of Trade and Development Newcastle University Australia (2001)</li> 
                            <li>Doktor Ekologi Manusia Institut Pertanian Bogor (2011)</li> -->
                          </ul>
                        </li>
                        <li>Pengalaman : 
                          <ul>
                            <!-- <li>Menjabat sebagai Komisaris PT Pupuk Indonesia Utilitas (27 Desember 2021 - Sekarang)</li>
                            <li>GM Marketing dan Corporate Communication ANTV</li>
                            <li>Assisten GM Production ANTV</li>
                            <li>Supporting Production Manager ANTV</li>
                            <li>Sport Manager ANTV</li> -->
                          </ul>
                        </li>
                      </ul>
                      <div class="d-flex column-flex align-items-end">
                        <button
                          type="button"
                          class="btn hide-btn btn-primary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >Tutup</button>
                      </div>
                    </div>
                    <div class="col-md-4 col-12 order-1 order-md-1">
                      <img
                        src="../assets/Manajemen/SVP/Pak Said Ridho crop.png"
                        class="img-fluid mx-auto d-block p-3"
                      />
                      <h3 class="modal-title text-center">Said Ridho</h3>
                      <h4 class="card-text text-center">
                        SVP Sekretaris Perusahaan
                      </h4>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- modal end -->
          <button
          class="btn-square image-button item e1"
          data-bs-toggle="modal"
          data-bs-target="#svp5"
        >
          <img
            src="../assets/Manajemen/SVP/Pak Yulianto Ramadhan crop.png"
          />
          <!-- <div class="item e1"> -->
            <div class="text1">
              <h4><b>Ka. Satuan Pengawasan Intern</b></h4>
              <p>Yulianto Ramadhan</p>
            </div>
          <!-- </div> -->
        </button>
  
          <!-- <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#kom3">
            <img src="../assets/Manajemen/Komisaris/Monica Desideria - Komisaris.jpg" alt="Image 3">
            <div class="overlay-text">
              <div class="text-start">
                <h4>Komisaris</h4>
                <h5>Monica Desideria</h5>
              </div>
            </div>
          </button> -->
          
          <!-- modal -->
          <div class="modal fade" id="svp5" tabindex="-1" aria-hidden="true">
            <div
              class="modal-dialog modal-dialog-centered modal-xl"
            >
              <div class="modal-content">
                <!-- <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> -->
                <div class="modal-body ">
                  <div class="row">
                    <div class="col-md-8 col-12 order-2 order-md-1">
                      <h2 class="modal-title mb-1">Biodata</h2>
                      <ul>
                        <li>Nama : Yulianto Ramadhan</li>
                        <li>Tempat, Tanggal Lahir : </li>
                        <li>Pendidikan : 
                          <ul>
                            <!-- <li>Sarjana Sosial Ekonomi Pertanian Universitas Hasanudin (1990)</li>
                            <li>Master of Trade and Development Newcastle University Australia (2001)</li> 
                            <li>Doktor Ekologi Manusia Institut Pertanian Bogor (2011)</li> -->
                          </ul>
                        </li>
                        <li>Pengalaman : 
                          <ul>
                            <!-- <li>Menjabat sebagai Komisaris PT Pupuk Indonesia Utilitas (27 Desember 2021 - Sekarang)</li>
                            <li>GM Marketing dan Corporate Communication ANTV</li>
                            <li>Assisten GM Production ANTV</li>
                            <li>Supporting Production Manager ANTV</li>
                            <li>Sport Manager ANTV</li> -->
                          </ul>
                        </li>
                      </ul>
                      <div class="d-flex column-flex align-items-end">
                        <button
                          type="button"
                          class="btn hide-btn btn-primary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >Tutup</button>
                      </div>
                    </div>
                    <div class="col-md-4 col-12 order-1 order-md-1">
                      <img
                        src="../assets/Manajemen/SVP/Pak Yulianto Ramadhan crop.png"
                        class="img-fluid mx-auto d-block p-3"
                      />
                      <h3 class="modal-title text-center">Yulianto Ramadhan</h3>
                      <h4 class="card-text text-center">
                        SVP Satuan Pengawasan Intern
                      </h4>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- modal end -->
        </div>
      <!-- </transition> -->
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DirectorInfo',
    data() {
      return {
        isRight: true,
      };
    },
    methods: {
      toggleButton() {
        this.isRight = !this.isRight;
      },
      beforeEnter(el) {
        el.style.opacity = 0;
      },
      enter(el, done) {
        setTimeout(() => {
          el.style.opacity = 1;
          done();
        }, 
        500); // Wait for the same duration as the main button's transition
      },
    },
  };
  </script>
  
  <style scoped>
  p{
    text-align: justify;
  }
  h3 {
    font-weight: bold;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Other styles as needed */
  }
  .info-container {
    position: relative;
    display: flex;
    align-items: start;
    justify-content: space-between;
    height: 650px;
  }
  
  .main-button {
    position: absolute;
    width: 50%;
    height: 400px;
    transition: 0.5s ease-in-out;
    border: none;
    padding: 0; 
    /* z-index: 1; */
  }
  
  .main-button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .main-button.right {
    right: 0;
    transition: right 0.5s ease-in-out;
  }
  
  .main-button.left {
    right: 50%;
    transition: right 0.5s ease-in-out;
  }
  .main-button.on-top {
    z-index: 2; 
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  .button-row {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    right: 0;
    margin-top: 150px;
    /* z-index: 1; */
  }
  
  .image-button {
    position: relative;
    width: 40%;
    height: 400px;
    border: none;
    padding: 0;
    background: none;
    border-radius: 0;
  }
  
  .image-button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: start;
    color: white;
    text-align: center;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.5);
  }
  
  /* item */
  
  .item {
    /* width: calc(94% / 3); */
    /* margin: 1%; */
    float: left;
    overflow: hidden;
    position: relative;
  }
  .item img {
    max-width: 100%;
    display: block;
    transition: all 0.5s ease;
  }
  
  /* start of effect 1 */
  
  .e1 img {
    -webkit-filter: grayscale(85%);
    filter: grayscale(85%);
    transition: all 0.3s ease;
  }
  .text1 {
    text-shadow: -1px 0 rgba(3, 112, 177, 1), 0 1px rgba(16, 146, 72, 1), 1px 0 rgba(218, 93, 42, 1), 0 -1px rgb(249, 210, 22, 1);
    position: absolute;
    bottom: 0%;
    left: 8px;
    color: #ffffff;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  .text1 p {
    text-align: left;
    font-weight: bold;
    opacity: 0;
  }
  
  .text1 h4 {
      text-align: left;
  }
  
  .e1:hover img {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
  .e1:hover .text1 {
    position: absolute;
    bottom: 5%;
  }
  .e1:hover p {
    opacity: 1;
  }
  .e1:hover h2 {
    opacity: 1;
  }
  /* This will hide the button on screens wider than 768px (typical breakpoint for desktop mode) */
  @media (min-width: 768px) {
    .hide-btn {
      display: none;
    }
  }
  
  /* This will show the button on screens narrower than 768px (typical breakpoint for mobile mode) */
  @media (max-width: 767px) {
    .hide-btn {
      display: block; /* Or inline-block, inline, flex, etc. depending on your layout */
    }
  }
  
  .wallpaper-container {
      background-image: url("../assets/Pattern_4.png");
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
  
    .wallpaper-container::before {
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