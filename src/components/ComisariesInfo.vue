<template>
  <div class="container">
    <div>
      <h1>KOMISARIS</h1>
      <h2>PT. Pupuk Indonesia Utilitas</h2>
    </div>
    
    <button class="btn main-button" :class="{ 'right': isRight, 'left': !isRight, 'on-top': isRight }" @click="toggleButton">
      <img src="../assets/Carousal/TataKelola.jpg" alt="Main button image">
    </button>
    <transition name="fade" @before-enter="beforeEnter" @enter="enter">
      <div class="button-row" v-if="!isRight">
        <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#kom1">
          <img src="../assets/Manajemen/Komisaris/Imam Mujahidin Fahmid - Komisaris.jpg" alt="Image 1">
          <div class="overlay-text">
            <div class="text-start">
              <h4>Komisaris</h4>
              <h5>Imam Mujahidin Fahmid</h5>
            </div>
          </div>
        </button>
        <!-- modal -->
        <div class="modal fade" id="kom1" tabindex="-1" aria-hidden="true">
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
                  src="../assets/Manajemen/Komisaris/Imam Mujahidin Fahmid - Komisaris.jpg"
                  class="img-fluid mx-auto d-block rounded-circle p-3"
                  style="width: 50%; height: 50%;"
                />

                <h2 class="modal-title text-center">Imam Mujahidin Fahmid</h2>
                <p class="card-text text-start text-center">
                  Komisaris
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- modal end -->
        <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#kom2">
          <img src="../assets/Manajemen/Komisaris/Sumyana Sukandar - Komisaris Utama.jpg" alt="Image 2">
          <div class="overlay-text">
            <div class="text-start">
              <h4>Komisaris Utama</h4>
              <h5>Sumyana Sukandar</h5>
            </div>
          </div>
        </button>
        <!-- modal -->
        <div class="modal fade" id="kom2" tabindex="-1" aria-hidden="true">
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
                  src="../assets/Manajemen/Komisaris/Sumyana Sukandar - Komisaris Utama.jpg"
                  class="img-fluid mx-auto d-block rounded-circle p-3"
                  style="width: 50%; height: 50%;"
                />

                <h2 class="modal-title text-center">Sumyana Sukandar</h2>
                <p class="card-text text-start text-center">
                  Komisaris Utama
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- modal end -->
        <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#kom3">
          <img src="../assets/Manajemen/Komisaris/Monica Desideria - Komisaris.jpg" alt="Image 3">
          <div class="overlay-text">
            <div class="text-start">
              <h4>Komisaris</h4>
              <h5>Monica Desideria</h5>
            </div>
          </div>
        </button>
        <!-- modal -->
        <div class="modal fade" id="kom3" tabindex="-1" aria-hidden="true">
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
                  src="../assets/Manajemen/Komisaris/Monica Desideria - Komisaris.jpg"
                  class="img-fluid mx-auto d-block rounded-circle p-3"
                  style="width: 50%; height: 50%;"
                />

                <h2 class="modal-title text-center">Monica Desideria</h2>
                <p class="card-text text-start text-center">
                  Komisaris
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- modal end -->
      </div>
    </transition>
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
</style>