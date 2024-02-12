<template>
    <div class="container">
      <div>
        <h1>DIREKTUR</h1>
        <h2>PT. Pupuk Indonesia Utilitas</h2>
      </div>
      
      <button class="btn main-button" :class="{ 'right': isRight, 'left': !isRight, 'on-top': isRight }" @click="toggleButton">
        <img src="../assets/Carousal/TataKelola.jpg" alt="Main button image">
      </button>
      <transition name="fade" @before-enter="beforeEnter" @enter="enter">
        <div class="button-row" v-if="!isRight">
          <button class="btn image-button">
            <img src="../assets/Manajemen/Direksi/Mochamad Safiie - Direktur Utama.jpg" alt="Image 1">
            <div class="overlay-text">
              <div class="text-start">
                <h4>Direktur</h4>
                <h4>Utama</h4>
                <h5>Mochamad Safiie</h5>
              </div>
            </div>
          </button>
          <button class="btn image-button">
            <img src="../assets/Manajemen/Direksi/Nuri Kristiawan - Direktur Keuangan.jpg" alt="Image 2">
            <div class="overlay-text">
              <div class="text-start">
                <h4>Direktur Keuangan</h4>
                <h5>Nuri Kristiawan</h5>
              </div>
            </div>
          </button>
          <button class="btn image-button">
            <img src="../assets/Manajemen/Direksi/Anis Ernani - Direktur Operasi.jpg" alt="Image 3">
            <div class="overlay-text">
              <div class="text-start">
                <h4>Direktur Operasi</h4>
                <h5>Anis Ernani</h5>
              </div>
            </div>
          </button>
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
    z-index: 1;
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
    z-index: 1;
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