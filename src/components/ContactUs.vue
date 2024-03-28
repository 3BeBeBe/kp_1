<template>
  <div class="another-container">
    <br />
    <div class="container mt-0 md-5">
      <div class="text-start pb-5">
        <h2
          style="
            font-style: italic;
            color: #084e8b;
            font-weight: 800;
            text-align: center;
            margin-top: 10px;
          "
        >
          Kontak Kami
        </h2>
        <br />
        <div class="new-container">
          <div class="card card-contact">
            <div class="card-background"></div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-5">
                  <div class="card card-contact" style="background-color: rgba(3, 112, 177, 1);">
                    <div class="card-body">
                      <div class="d-flex flex-column" style=" color: white;">
                        <p style="font-weight: 650; font-size: 30px">Kantor Pusat</p>
                        <p>Suara anda sangat berarti untuk kami. Kirimkan kami pesan menggunakan form berikut atau melalui kontak dibawah ini.</p>
                        <div class="d-flex mt-3">
                          <div class="bolding-text" style="overflow: hidden;">
                            <div class="row">
                              <div class="col-md-2 d-flex justify-content-center">
                                <img class="" src="../assets/icons/landmarkw5.png"  style="width: 30px; height: 30px;">
                              </div>
                              <div class="col-md-10 d-flex align-items-center">
                                <p class="">Alamanda Tower Lt 26,Jl. T.B. Simatupang No 22-26, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta</p>
                              </div>
                              <div class="col-md-2 d-flex justify-content-center">
                                <img class="" src="../assets/icons/phoneringw5.png" style="width: 30px; height: 30px;">
                              </div>
                              <div class="col-md-10 d-flex align-items-center">
                                <p class="">(021) 29661630</p>
                              </div>
                              <div class="col-md-2 d-flex justify-content-center">
                                <img class="" src="../assets/icons/mailplanew5.png" style="width: 30px; height: 30px;">
                              </div>
                              <div class="col-md-10 d-flex align-items-center">
                                <p class="">info@pi-utilitas.com</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-4 d-flex justify-content-center">
                          <div class="col-2 d-flex justify-content-start">
                              <a href="https://twitter.com/PIUtilitas" target="_blank">
                                  <img class="img-fluid" src="../assets/Ikon SosMed/1.png" width="40" height="40">
                              </a>
                          </div>
                          
                          <div class="col-2 d-flex justify-content-start">
                              <a href="https://www.facebook.com/Pupuk.Indonesia" target="_blank">
                                  <img class="img-fluid" src="../assets/Ikon SosMed/2.png" width="40" height="40">
                              </a>
                          </div>

                          <div class="col-2 d-flex justify-content-start">
                              <a href="https://www.instagram.com/pi_utilitas/" target="_blank">
                                  <img class="img-fluid" src="../assets/Ikon SosMed/3.png" width="40" height="40">
                              </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="" style="">
                    <form @submit.prevent="submitForm">
                      <div class="row" style="color: black">
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label for="inputNama" class="form-label"
                              >Nama Lengkap</label
                            >
                            <input
                              type="nama"
                              class="form-control"
                              id="inputNama"
                              v-model="nama"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="inputNama" class="form-label"
                              >Nomor Telepon</label
                            >
                            <input
                              type="nama"
                              class="form-control"
                              id="inputTelepon"
                              v-model="telepon"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="inputTelepon" class="form-label"
                              >E-mail</label
                            >
                            <input
                              type="telepon"
                              class="form-control"
                              id="inputEmail"
                              v-model="email"
                            />
                          </div>
                        </div>

                        <div class="col-md-12 mb-3">
                          <label for="inputDetail" class="form-label"
                            >Pesan</label
                          >
                          <textarea
                            class="form-control"
                            id="inputDetail"
                            rows="5"
                            v-model="detail"
                          ></textarea>
                        </div>
                        <div class="col-md-12">
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
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

<style scoped>
.card-contact {
  width: 100%;
  height: auto;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(3, 205, 255, 0.205);
}

.card-divider {
  text-align: center;
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(58, 58, 58, 0.15);
  width: 80%;
  display: flex;
  justify-content: center;
}

.another-container {
  background-color: #f0f5f8;
}

.short-line {
  width: 50%;
  margin: 20px auto;
  color: rgba(0, 0, 0, 0.5);
}

.flex-column {
  flex-direction: column;
}

.flex-column-wrapper {
  display: flex;
  justify-content: space-between;
}

.bolding-text {
  font-weight: 500;
}
</style>

<script>
import axios from "axios";

export default {
  name: "ContactUs",
  data() {
    return {
      nama: "",
      telepon: "",
      jenis: "",
      lokasi: "",
      detail: "",
      // Add more fields as needed...
    };
  },
  methods: {
    submitForm() {
      const formData = {
        nama: this.nama,
        telepon: this.telepon,
        jenis: this.jenis,
        lokasi: this.lokasi,
        detail: this.detail,
        // Add more fields as needed...
      };

      axios
        .post("http://localhost:8081/send-email", formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
