<template>
  <div class="container">
    <!-- <button class="btn main-button" :class="{ 'right': !isLeft, 'left': isLeft, 'on-top': isLeft }" @click="toggleButton">
      <img src="../assets/director.jpg" alt="Main button image">
    </button>
    <transition name="fade" @before-enter="beforeEnter" @enter="enter"> -->
      <div class="button-row" v-if="isLeft">
        <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#dir1">
          <img src="../assets/Manajemen/Direksi/Mochamad Safiie - Direktur Utama.jpg" alt="Image 1">
          <div class="overlay-text">
            <div class="text-start">
              <h4>Direktur Utama</h4>
              <h5>Mochamad Safiie</h5>
            </div>
          </div>
        </button>
        <!-- modal -->
        <div class="modal fade" id="dir1" tabindex="-1" aria-hidden="true">
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
                      Lahir di Surabaya, 15 Juni 1968. Menjabat sebagai Direktur Utama PT Pupuk Indonesia Utilitas sejak 13 November 2023. Sebelumnya menjabat sebagai SVP Commercial Marketing di PT Pupuk Indonesia (Persero) (1 Nov 2020- 13 November 2023), GM Operasi PT Pupuk Indonesia (Persero)(2016-2020). Meraih gelar Sarjana Teknik Kimia ITS Surabaya (1993). 
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
                      src="../assets/Manajemen/Direksi/Mochamad Safiie - Direktur Utama.jpg"
                      class="img-fluid mx-auto d-block p-3"
                    />
                    <h3 class="modal-title text-center">Mochamad Safiie</h3>
                    <h4 class="card-text text-center">
                      Direktur Utama
                    </h4>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- modal end -->
        <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#dir2">
          <img src="../assets/Manajemen/Direksi/Nuri Kristiawan - Direktur Keuangan.jpg" alt="Image 2">
          <div class="overlay-text">
            <div class="text-start">
              <h4>Direktur Keuangan</h4>
              <h5>Nuri Kristiawan</h5>
            </div>
          </div>
        </button>
        <!-- modal -->
        <div class="modal fade" id="dir2" tabindex="-1" aria-hidden="true">
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
                      Lahir pada 27 Januari 1971. Menjabat sebagai Direktur Keuangan PT Pupuk Indonesia Utilitas sejak 20 Januari 2022. Sebelumnya menjabat sebagai Direktur Keuangan PT Gresik Cipta Sejahtera (2019-2021), Chief Administration and Finance Site Office PT Rekayasa Industri (2017-2019), Chief Administration and Finance Head Office PT Rekayasa Industri (2015-2017), Administration and Finance Head Office PT Rekayasa Industri (2009-2015). Meraih gelar sarjana Mathematics Educations, Universita Sanata Dharma Yogyakarta (1996). 
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
                      src="../assets/Manajemen/Direksi/Nuri Kristiawan - Direktur Keuangan.jpg"
                      class="img-fluid mx-auto d-block p-3"
                    />
                    <h3 class="modal-title text-center">Nuri Kristiawan</h3>
                    <h4 class="card-text text-center">
                      Direktur Keuangan
                    </h4>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- modal end -->
        
        <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#dir3">
          <img src="../assets/Manajemen/Direksi/Anis Ernani - Direktur Operasi.jpg" alt="Image 3">
          <div class="overlay-text">
            <div class="text-start">
              <h4>Direktur Operasi</h4>
              <h5>Anis Ernani</h5>
            </div>
          </div>
        </button><!-- modal -->
        <div class="modal fade" id="dir3" tabindex="-1" aria-hidden="true">
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
                      Lahir di Surabaya, 10 Januari 1968. Menjabat sebagai Direktur Operasi PT Pupuk Indonesia Utilitas sejak 20 Janurai 2022. Sebelumnya menjabat sebagai DPB Direktur Utama Petrokimia Kayaku (2018-2021), GM Teknologi PT Petrokimia Gresik (2015-2017), GM Pengembangan PT Petrokimia Gresik (2014-2015). Meraih gelar Sarjana Teknik Kimia Institut Teknologi Sepuluh Nopember (1991) dan gelar Master Teknik Kimia Institut Teknologi Sepuluh Nopember (2007). 
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
                      src="../assets/Manajemen/Direksi/Anis Ernani - Direktur Operasi.jpg"
                      class="img-fluid mx-auto d-block p-3"
                    />
                    <h3 class="modal-title text-center">Anis Ernani</h3>
                    <h4 class="card-text text-center">
                      Direktur Operasi
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
    
    <div class="text-container">
      <h1 style="color: #084e8b; font-weight: 600; font-style: italic;">Direktur</h1>
      <h2 style="color: #e65824; font-weight: 700; font-style: italic;">PT Pupuk Indonesia Utilitas</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComisariesInfo',
  data() {
    return {
      isLeft: true,
    };
  },
  methods: {
    toggleButton() {
      this.isLeft = !this.isLeft;
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
.modal-content {
  border-radius: 0;
}
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content:flex-end;
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
  left: 50%;
  transition: left 0.5s ease-in-out;
}

.main-button.left {
  left: 0;
  transition: left 0.5s ease-in-out;
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
  left: 0;
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
.text-container {
  text-align: right;
}
</style>