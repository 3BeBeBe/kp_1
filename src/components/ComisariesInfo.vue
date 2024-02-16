<template>
  <div class="container">
    <div>
      <h1 style="color: #084e8b; font-weight: 600; font-style: italic;">Komisaris</h1>
      <h2 style="color: #e65824; font-weight: 700; font-style: italic;">PT. Pupuk Indonesia Utilitas</h2>
    </div>
    
    <!-- <button class="btn main-button" :class="{ 'right': isRight, 'left': !isRight, 'on-top': isRight }" @click="toggleButton">
      <img src="../assets/Carousal/TataKelola.jpg" alt="Main button image">
    </button>
    <transition name="fade" @before-enter="beforeEnter" @enter="enter"> -->
      <div class="button-row" v-if="isRight">
        
        <button
        class="btn image-button item e1"
        data-bs-toggle="modal"
        data-bs-target="#kom1"
      >
        <img
          src="../assets/Manajemen/Komisaris/Imam Mujahidin Fahmid - Komisaris.jpg"
        />
        <!-- <div class="item e1"> -->
          <div class="text1">
            <h3>Komisaris</h3>
            <p>Imam Mujahidin Fahmid</p>
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
        <div class="modal fade" id="kom1" tabindex="-1" aria-hidden="true">
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
                    <h2 class="modal-title mb-1">Pengalaman</h2>
                    <p>
                      Lahir di Bima, 23 Desember 1966. Menjabat sebagai Komisaris PT Pupuk Indonesai Utilitas sejak 27 Desember 2021. Saat ini juga menjabat sebagai Staf Khusus Menteri Bidang Kebijakan Pertanian, Kementerian Pertanian RI (2019 – Sekarang) dan Staf Pengajar Fakultas Pertanian & Pasca Sarjana Unhas, Makassar (1992 – Sekarang). Sebelumnya menjabat sebagai Direktur Publication Manajement Center Unhas, Makasar (2015-2018), Ketua Dewan Riset Daerah Pemprov Sulawesi Selatan, Makasar (2011-2018), Ketua Tim Ahli Gubernur Pemerintah Propinsi Sulawesi Selatan, Makasar (2009-2018), Tenaga Ahli Bappeda; Dinas Perkebunan; Dinas Pertanian; Tanaman Pangan dan Hirtikultura; Badan Ketahana Pangan Propinsi Sulawesi Selatan (2009-2018), Ketua Badan Perusda Pemprov Sulawesi Selatan (2014-2018), Komisaris GMTDC, Tbk (2009-2014). Meraih gelar Sarjana Sosial Ekonomi Pertanian Universitas Hasanudin (1990), gelar Master of Trade and Development, Newcastle University, Australia (2001), gelar Doktor Ekologi Manusia Institut Pertanian Bogor (2011). 
                    </p>
                    <div class="d-flex align-items-end">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >Tutup</button>
                    </div>
                  </div>
                  <div class="col-md-4 col-12 order-1 order-md-1">
                    <img
                      src="../assets/Manajemen/Komisaris/Imam Mujahidin Fahmid - Komisaris.jpg"
                      class="img-fluid mx-auto d-block p-3"
                    />
                    <h3 class="modal-title text-center">Imam Mujahidin Fahmid</h3>
                    <h4 class="card-text text-center">
                      Komisaris
                    </h4>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- modal end -->

        <button
        class="btn image-button item e1"
        data-bs-toggle="modal"
        data-bs-target="#kom2"
      >
        <img
          src="../assets/Manajemen/Komisaris/Sumyana Sukandar - Komisaris Utama.jpg"
        />
        <!-- <div class="item e1"> -->
          <div class="text1">
            <h3>Komisaris Utama</h3>
            <p>Sumyana Sukandar</p>
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
        <div class="modal fade" id="kom2" tabindex="-1" aria-hidden="true">
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
                    <h2 class="modal-title mb-1">Pengalaman</h2>
                    <p>
                      Sumyana Sukandar, SE, MM lahir di Bandung, Jawa Barat pada 11 September 1964. Meraih gelar Sarjana Ekonomi jurusan Manajemen dari Universitas Pasundan Bandung pada 1988, kemudian menerima gelar Magister Manajemen dari STIE IPWIJA Jakarta pada 2002. Saat kuliah, Sumyana sudah bekerja sebagai staf tenaga survey BKKBN Provinsi Jawa Barat, kemudian menjadi market researcher di PT Tobby Meza.Co, berlanjut sebagai staf BRI pada 1990-1991. Selanjutnya, Sumyana bergabung di Departemen Keuangan sebagai sebagai pegawai Direktorat Persero, Ditjen Moneter hingga 1995. Beliau kemudian dipercaya menjadi Kepala Seksi Ditjen Pembinaan BUMN, Departemen Keuangan hingga 1998 kemudian menjabat Kepala Subbagian Administrasi pada Kementerian Negara P. BUMN hingga 2000. Kemudian Direktorat Jenderal Pembinaan BUMN, Departemen Keuangan pada 2001-2002. Setelah itu, Sumyana mengabdikan diri di Kementerian BUMN hingga 2015, sempat menjadi Kepala Bidang Usaha Jasa Perencanaan Konstruksi, dan Rekayasa II pada Deputi Bidang Usaha Jasa Lainnya, hingga Asisten Deputi Usaha Perkebunan dan Kehutanan, pada Kedeputian Bidang Usaha Industri Agro dan Industri Strategis. Tahun 2015, Sumyana diangkat menjadi Direktur Administrasi dan Keuangan Perum Jasa Tirta II, hingga menjadi Direktur I Perum Jasa Tirta II pada 2016-2018. Kini, menjabat sebagai Komisaris Utama PT Pupuk Indonesia Energi. 
                    </p>
                    <div class="d-flex align-items-end">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >Tutup</button>
                    </div>
                  </div>
                  <div class="col-md-4 col-12 order-1 order-md-1">
                    <img
                      src="../assets/Manajemen/Komisaris/Sumyana Sukandar - Komisaris Utama.jpg "
                      class="img-fluid mx-auto d-block p-3"
                    />
                    <h3 class="modal-title text-center">Sumyana Sukandar</h3>
                    <h4 class="card-text text-center">
                      Komisaris Utama
                    </h4>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- modal end -->

        <button
        class="btn image-button item e1"
        data-bs-toggle="modal"
        data-bs-target="#kom3"
      >
        <img
          src="../assets/Manajemen/Komisaris/Monica Desideria - Komisaris.jpg"
        />
        <!-- <div class="item e1"> -->
          <div class="text1">
            <h3>Komisaris</h3>
            <p>Monica Desideria</p>
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
        <div class="modal fade" id="kom3" tabindex="-1" aria-hidden="true">
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
                    <h2 class="modal-title mb-1">Pengalaman</h2>
                    <p>
                      Lahir di Surabaya, 29 Agustus 1964. Menjabat sebagai Komisaris PT Pupuk Indonesia Utilitas sejak 27 Desember 2021. Sebelumnya menjabat sebagai GM Marketing dan Corporate Communication ANTV, Assisten GM Production ANTV, Supporting Production Manager ANTV dan Sport Manager ANTV. 
                    </p>
                    <div class="d-flex column-flex align-items-end">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >Tutup</button>
                    </div>
                  </div>
                  <div class="col-md-4 col-12 order-1 order-md-1">
                    <img
                      src="../assets/Manajemen/Komisaris/Monica Desideria - Komisaris.jpg"
                      class="img-fluid mx-auto d-block p-3"
                    />
                    <h3 class="modal-title text-center">Monica Desideria</h3>
                    <h4 class="card-text text-center">
                      Komisaris
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
.btn {
  border-radius: 0;
}
p{
  text-align: justify;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Other styles as needed */
}
.modal-content {
  border-radius: 0;
}
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70vh;
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
  width: 50%;
  right: 0;
  /* z-index: 1; */
}

.image-button {
  position: relative;
  width: 40%;
  height: 400px;
  border: none;
  padding: 0;
  background: none;
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
  position: absolute;
  bottom: 0%;
  left: 20px;
  color: #ffffff;
  transition: all 0.5s ease;
  cursor: pointer;
}
.text1 p {
  text-align: left;
  opacity: 0;
}

.text1 h3 {
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
</style>