<template>
  <!-- <div class="wallpaper-container"> -->
  <div class="container info-container">
    <!-- <button class="btn main-button" :class="{ 'right': !isLeft, 'left': isLeft, 'on-top': isLeft }" @click="toggleButton">
        <img src="../assets/director.jpg" alt="Main button image">
      </button>
      <transition name="fade" @before-enter="beforeEnter" @enter="enter"> -->
      
    <div class="button-row" v-if="isLeft">
      <!-- <div class="item e1"> -->
      <button
        class="btn image-button item e1"
        data-bs-toggle="modal"
        data-bs-target="#dir1"
        style="border-radius: 0"
      >
        <img
          src="../assets/Manajemen/Direksi/Mochamad Safiie - Direktur Utama.jpg"
        />
        <!-- <div class="item e1"> -->
        <div class="text1">
          <h4><b>Direktur Utama</b></h4>
          <p>Mochamad Safiie</p>
        </div>
        <!-- </div> -->
      </button>
      <!-- </div> -->

      <!-- <button
        class="btn image-button"
        data-bs-toggle="modal"
        data-bs-target="#dir1"
      >
        <img
          src="../assets/Manajemen/Direksi/Mochamad Safiie - Direktur Utama.jpg"
          alt="Image 1"
        />
        <div class="overlay-text">
          <div class="text-start">
            <h4>Direktur Utama</h4>
            <h5>Mochamad Safiie</h5>
          </div>
        </div>
      </button> -->
      <!-- modal -->
      <div class="modal fade" id="dir1" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <!-- <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> -->
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12 d-flex justify-content-end"></div>
                <div class="col-md-8 col-12 order-2 order-md-1">
                  <h2 class="modal-title mb-1">Biodata</h2>
                  <ul>
                      <li>Nama : Mochamad Safiie</li>
                      <li>Tempat, Tanggal Lahir : Surabaya, 15 Juni 1968</li>
                      <li>Pendidikan : 
                        <ul>
                          <li>Sarjana Teknik Kimia ITS Surabaya (1993)</li>
                        </ul>
                      </li>
                      <li>Pengalaman : 
                        <ul>
                          <li>Direktur Utama PT Pupuk Indonesia Utilitas (13 November 2023 - Sekarang)</li>
                          <li>SVP Commercial Marketing di PT Pupuk Indonesia (Persero) (1 Nov 2020- 13 November 2023)</li>
                          <li>GM Operasi PT Pupuk Indonesia (Persero)(2016-2020)</li>
                        </ul>
                      </li>
                    </ul>
                  <div class="d-flex align-items-end">
                    <button
                      type="button"
                      class="btn hide-btn btn-primary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
                <div class="col-md-4 col-12 order-1 order-md-1">
                  <img
                    src="../assets/Manajemen/Direksi/Mochamad Safiie - Direktur Utama.jpg"
                    class="img-fluid mx-auto d-block p-3"
                  />
                  <h3 class="modal-title text-center">Mochamad Safiie</h3>
                  <h4 class="card-text text-center">Direktur Utama</h4>
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
        data-bs-target="#dir2"
        style="border-radius: 0"
      >
        <img
          src="../assets/Manajemen/Direksi/Nuri Kristiawan - Direktur Keuangan.jpg"
        />
        <!-- <div class="item e1"> -->
        <div class="text1">
          <h4><b>Direktur Keuangan</b></h4>
          <p>Nuri Kristiawan</p>
        </div>
        <!-- </div> -->
      </button>

      <!-- <button
        class="btn image-button"
        data-bs-toggle="modal"
        data-bs-target="#dir2"
      >
        <img
          src="../assets/Manajemen/Direksi/Nuri Kristiawan - Direktur Keuangan.jpg"
          alt="Image 2"
        />
        <div class="overlay-text">
          <div class="text-start">
            <h4>Direktur Keuangan</h4>
            <h5>Nuri Kristiawan</h5>
          </div>
        </div>
      </button> -->
      <!-- modal -->
      <div class="modal fade" id="dir2" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <!-- <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> -->
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12 d-flex justify-content-end"></div>
                <div class="col-md-8 col-12 order-2 order-md-1">
                  <h2 class="modal-title mb-1">Biodata</h2>
                  <ul>
                      <li>Nama : Nuri Kristiawan</li>
                      <li>Tempat, Tanggal Lahir : Surabaya, 27 Januari 1971</li>
                      <li>Pendidikan : 
                        <ul>
                          <li>Sarjana Mathematics Educations, Universita Sanata Dharma Yogyakarta (1996)</li>
                        </ul>
                      </li>
                      <li>Pengalaman : 
                        <ul>
                          <li>Direktur Keuangan PT Pupuk Indonesia Utilitas (20 Januari 2022 - Sekarang)</li>
                          <li>Direktur Keuangan PT Gresik Cipta Sejahtera (2019-2021)</li>
                          <li>Chief Administration and Finance Site Office PT Rekayasa Industri (2017-2019)</li>
                          <li>Chief Administration and Finance Head Office PT Rekayasa Industri (2015-2017)</li>
                          <li>Administration and Finance Head Office PT Rekayasa Industri (2009-2015)</li>
                        </ul>
                      </li>
                    </ul>
                  <div class="d-flex align-items-end">
                    <button
                      type="button"
                      class="btn hide-btn btn-primary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
                <div class="col-md-4 col-12 order-1 order-md-1">
                  <img
                    src="../assets/Manajemen/Direksi/Nuri Kristiawan - Direktur Keuangan.jpg"
                    class="img-fluid mx-auto d-block p-3"
                  />
                  <h3 class="modal-title text-center">Nuri Kristiawan</h3>
                  <h4 class="card-text text-center">Direktur Keuangan</h4>
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
        data-bs-target="#dir3"
        style="border-radius: 0"
      >
        <img
          src="../assets/Manajemen/Direksi/Anis Ernani - Direktur Operasi.jpg"
        />
        <!-- <div class="item e1"> -->
        <div class="text1">
          <h4><b>Direktur Operasi</b></h4>
          <p>
            Anis Ernani
          </p>
        </div>
        <!-- </div> -->
      </button>

      <!-- <button
        class="btn image-button"
        data-bs-toggle="modal"
        data-bs-target="#dir3"
      >
        <img
          src="../assets/Manajemen/Direksi/Anis Ernani - Direktur Operasi.jpg"
          alt="Image 3"
        />
        <div class="overlay-text">
          <div class="text-start">
            <h4>Direktur Operasi</h4>
            <h5>Anis Ernani</h5>
          </div>
        </div></button> -->
      <!-- modal -->
      <div class="modal fade" id="dir3" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <!-- <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> -->
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12 d-flex justify-content-end"></div>
                <div class="col-md-8 col-12 order-2 order-md-1">
                  <h2 class="modal-title mb-1">Biodata</h2>
                  <ul>
                      <li>Nama : Anis Ernani</li>
                      <li>Tempat, Tanggal Lahir : Surabaya, 10 Januari 1968</li>
                      <li>Pendidikan : 
                        <ul>
                          <li>Sarjana Teknik Kimia Institut Teknologi Sepuluh Nopember (1991)</li>
                          <li>Master Teknik Kimia Institut Teknologi Sepuluh Nopember (2007)</li>
                        </ul>
                      </li>
                      <li>Pengalaman : 
                        <ul>
                          <li>Direktur Operasi PT Pupuk Indonesia Utilitas (20 Januari 2022 - Sekarang)</li>
                          <li>DPB Direktur Utama Petrokimia Kayaku (2018-2021)</li>
                          <li>GM Teknologi PT Petrokimia Gresik (2015-2017)</li>
                          <li>GM Pengembangan PT Petrokimia Gresik (2014-2015)</li>
                        </ul>
                      </li>
                    </ul>
                  <div class="d-flex align-items-end">
                    <button
                      type="button"
                      class="btn hide-btn btn-primary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
                <div class="col-md-4 col-12 order-1 order-md-1">
                  <img
                    src="../assets/Manajemen/Direksi/Anis Ernani - Direktur Operasi.jpg"
                    class="img-fluid mx-auto d-block p-3"
                  />
                  <h3 class="modal-title text-center">Anis Ernani</h3>
                  <h4 class="card-text text-center">Direktur Operasi</h4>
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
      <h1 style="color: #084e8b; font-weight: 600; font-style: italic">
        <b>Direktur</b>
      </h1>
      <h2 style="color: #e65824; font-weight: 700; font-style: italic">
        PT Pupuk Indonesia Utilitas
      </h2>
    </div>

    <!-- <div class="item e1">
    <img src="https://chenyiya.com/codepen/hover-effect-1.jpg">
    <div class="text1">
      <h3>Effect One</h3>
      <p>A picture description here.</p>
    </div>
  </div> -->
  </div>
<!-- </div> -->
</template>

<script>
export default {
  name: "ComisariesInfo",
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
      }, 500); // Wait for the same duration as the main button's transition
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
  align-items: center;
  justify-content: flex-end;
  height: 450px;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.button-row {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
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
.text-container {
  text-align: right;
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
  /* color: #e65824;
  font-weight: 700;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px; */
}

/* .text1 h1 {
    color: #084e8b
} */

/* .text1 h2 {
  text-align: left;
  opacity: 0;
} */

.text1 h4 {
  text-align: left;
  /* color: #39d1ff; */
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
