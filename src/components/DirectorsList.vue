<template>
  <div class="container" data-aos="fade-up">
    <div class="section-header text-center">
      <h2>Direksi</h2>
      <p>
        Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro
        nihil id ratione ea sunt quis dolorem dolore earum
      </p>
    </div>

    <div class="row gy-4">
      <div
        class="col-xl-4 col-md-6 d-flex"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="member">
          <img
            src="https://www.pi-utilitas.com/files/media/2022/08/pak-kris.jpg"
            class="img-fluid"
            alt=""
          />
          <h4>Nuri Kristiawan</h4>
          <span>Direktur Keuangan</span>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <!-- End Team Member -->

      <div
        class="col-xl-4 col-md-6 d-flex"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="member">
          <img
            src="https://www.pi-utilitas.com/files/media/2022/08/pak-kris-1.jpg"
            class="img-fluid"
            alt=""
          />
          <h4>Mochamad Safiie</h4>
          <span>Direktur Utama</span>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <!-- End Team Member -->

      <vue-flip active-click="true" width="200px" height="200px">
        <template v-slot:back>
          <img
            src="https://www.pi-utilitas.com/files/media/2022/08/pak-kris-1.jpg"
            width="350px"
            height="auto"
          />
        </template>
        <template v-slot:front>
          <div class="back-content">
            <p>Direktur Utama</p>
            <h1>Mochamad Safiie</h1>
            <p>PT. Pupuk Indonesia Utilitas</p>
          </div>
        </template>
      </vue-flip>

      <!-- end of testing -->

      <div
        class="col-xl-4 col-md-6 d-flex"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="member">
          <img
            src="https://www.pi-utilitas.com/files/media/2022/08/bu-anis-web.jpg"
            class="img-fluid"
            alt=""
          />
          <h4>Anis Ernani</h4>
          <span>Direktur Operasi</span>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <!-- End Team Member -->
    </div>
  </div>
</template>

<style>
.back-content {
  width: 350px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  background-color: #2980b9; /* Change background color to blue */
  color: white;
}
</style>

<script>
import { VueFlip } from "vue-flip";
export default {
  name: "DirectorsList",
  components: {
    "vue-flip": VueFlip,
  },
};
</script>
