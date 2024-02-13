<template>
  <div class="container">
    <button class="btn main-button" :class="{ 'right': !isLeft, 'left': isLeft, 'on-top': isLeft }" @click="toggleButton">
      <img src="../assets/Carousal/TataKelola.jpg" alt="Main button image">
    </button>
    <transition name="fade" @before-enter="beforeEnter" @enter="enter">
      <div class="button-row" v-if="!isLeft">
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
            class="modal-dialog modal-md position-absolute top-50 start-50 translate-middle"
          >
            <div class="modal-content">
              <!-- <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div> -->
              <div class="modal-body p-3">
                <!-- <h2 class="modal-title">Nuri Kristiawan modal-title</h2> -->
                <img
                  src="../assets/Manajemen/Direksi/Mochamad Safiie - Direktur Utama.jpg"
                  class="img-fluid mx-auto d-block rounded-circle p-3"
                  style="width: 50%; height: 50%;"
                />

                <h2 class="modal-title text-center">Mochamad Safiie</h2>
                <p class="card-text text-center">
                  Direktur Utama
                </p>
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
            class="modal-dialog modal-md position-absolute top-50 start-50 translate-middle"
          >
            <div class="modal-content">
              <!-- <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div> -->
              <div class="modal-body p-3">
                <!-- <h2 class="modal-title">Nuri Kristiawan modal-title</h2> -->
                <img
                  src="../assets/Manajemen/Direksi/Nuri Kristiawan - Direktur Keuangan.jpg"
                  class="img-fluid mx-auto d-block rounded-circle p-3"
                  style="width: 50%; height: 50%;"
                />

                <h2 class="modal-title text-center">Nuri Kristiawan</h2>
                <p class="card-text text-start text-center">
                  Direktur Keuangan
                </p>
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
        </button>
        <!-- modal -->
        <div class="modal fade" id="dir3" tabindex="-1" aria-hidden="true">
          <div
            class="modal-dialog modal-md position-absolute top-50 start-50 translate-middle"
          >
            <div class="modal-content">
              <!-- <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div> -->
              <div class="modal-body p-3">
                <!-- <h2 class="modal-title">Nuri Kristiawan modal-title</h2> -->
                <img
                  src="../assets/Manajemen/Direksi/Anis Ernani - Direktur Operasi.jpg"
                  class="img-fluid mx-auto d-block rounded-circle p-3"
                  style="width: 50%; height: 50%;"
                />

                <h2 class="modal-title text-center">Anis Ernani</h2>
                <p class="card-text text-start text-center">
                  Direktur Operasi
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- modal end -->
      </div>
    </transition>
    
    <div class="text-container">
      <h1>Direktur</h1>
      <h2>PT. Pupuk Indonesia Utilitas</h2>
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