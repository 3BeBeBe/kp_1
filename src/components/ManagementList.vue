<template>
  <div class="management-list-container">
    <div class="container">
      <div class="text-center">
        <h2><b>Manajemen</b></h2>
        <br />
      </div>
      <div class="text-center">
        <h3>Direksi</h3>
      </div>
      <div class="row">
        <!-- <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="col-md-4 d-flex rounded-image">
                <div>
                  <img
                    src="../assets/Manajemen/Direksi/Nuri Kristiawan - Direktur Keuangan.jpg"
                    class="img-fluid img-fixed"
                    alt=""
                  />
                  <h4>Nuri Kristiawan</h4>
                  <span>Direktur Keuangan</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4>Nuri Kristiawan</h4>
          </div>
        </div> -->
        <div class="flip-card col-md-4" onclick="toggleCard(this)">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="pak-safiie.jpg"
                alt="Avatar"
                style="width: 300px; height: 300px"
              />
            </div>
            <div class="flip-card-back">
              <p>Direktur Utama</p>
              <h1>Mochamad Safiie</h1>
              <p>PT. Pupuk Indonesia Utilitas</p>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-4 d-flex rounded-image">
                <div>
                    <img src="../assets/Manajemen/Direksi/Nuri Kristiawan - Direktur Keuangan.jpg" class="img-fluid img-fixed" alt="">
                    <h4>Nuri Kristiawan</h4>
                    <span>Direktur Keuangan</span>
                </div>
            </div> -->

        <div class="col-md-4 d-flex rounded-image">
          <div>
            <img
              src="../assets/Manajemen/Direksi/Mochamad Safiie - Direktur Utama.jpg"
              class="img-fluid img-fixed"
              alt=""
            />
            <h4>Mochamad Safiie</h4>
            <span>Direktur Utama</span>
          </div>
        </div>

        <div class="col-md-4 d-flex rounded-image">
          <div>
            <img
              src="../assets/Manajemen/Direksi/Anis Ernani - Direktur Operasi.jpg"
              class="img-fluid img-fixed"
              alt=""
            />
            <h4>Anis Ernani</h4>
            <span>Direktur Operasi</span>
          </div>
        </div>
      </div>
      <div class="section-header text-center">
        <br />
        <br />
        <h3>Komisaris</h3>
        <br />
      </div>
      <div class="row">
        <div class="col-md-4 d-flex rounded-image">
          <div>
            <img
              src="../assets/Manajemen/Komisaris/Sumyana Sukandar - Komisaris Utama.jpg"
              class="img-fluid img-fixed"
              alt=""
            />
            <h4>Sumyana Sukandar</h4>
            <span>Komisaris Utama</span>
          </div>
        </div>

        <div class="col-md-4 d-flex rounded-image">
          <div>
            <img
              src="../assets/Manajemen/Komisaris/Imam Mujahidin Fahmid - Komisaris.jpg"
              class="img-fluid img-fixed"
              alt=""
            />
            <h4>Imam Mujahidin Fahmid</h4>
            <span>Komisaris</span>
          </div>
        </div>

        <div class="col-md-4 d-flex rounded-image">
          <div>
            <img
              src="../assets/Manajemen/Komisaris/Monica Desideria - Komisaris.jpg"
              class="img-fluid img-fixed"
              alt=""
            />
            <h4>Monica Desideria</h4>
            <span>Komisaris</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ManagementList",
  methods: {
    toggleCard(card) {
      card.classList.toggle("flipped");
    },
  },
};
</script>

<style>
.img-fixed {
  width: 100%; /* Adjust as needed */
  height: 300px; /* Adjust as needed */
  object-fit: cover;
}
.rounded-image {
  border-radius: 50px; /* Adjust the border-radius to control the roundness of the corners */
  overflow: hidden;
}
.flip-card {
  perspective: 1000px; /* Set the perspective for the 3D effect */
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; /* Preserve the 3D transformation */
  transition: transform 0.6s; /* Set the transition duration for the flip effect */
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg); /* Flip the card on hover */
}

.flip-card-front,
.flip-card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden; /* Hide the back face during the flip */
}

.flip-card-front {
  z-index: 1; /* Set a higher z-index for the front face */
}

.flip-card-back {
  transform: rotateY(180deg); /* Initial rotation for the back face */
  background-color: #f1f1f1; /* Set the background color for the back face */
}
</style>
