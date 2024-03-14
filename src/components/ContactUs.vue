<template>
  <div class="another-container">
    <br />
    <div class="container mt-0 md-5">
      <div class="text-start">
        <h2
          style="
            font-style: italic;
            color: #084e8b;
            font-weight: 700;
            text-align: center;
            margin-top: 10px;
          "
        >
          Contact Us
        </h2>
        <br />
        <div class="new-container">
          <div class="card card-contact">
            <div class="card-background"></div>
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-center">
                <h5 class="text-center">
                  As the largest fertilizer industry holding in Indonesia, PT
                  Pupuk Indonesia (Persero) strives to continuously improve
                  services to customers through 'Suara Pelanggan' service.
                </h5>
              </div>

              <hr class="short-line" />

              <div class="d-flex">
                <div
                  class="d-flex flex-column justify-content-left"
                  style="margin-left: 50px"
                >
                  <!-- First flex-column -->
                  <p style="font-weight: 650; font-size: 30px">
                    Suara Pelanggan
                  </p>
                  <p>moment</p>
                  <p>moment2</p>
                </div>
                <div
                  class="d-flex flex-column justify-content-end"
                  style="
                    margin-left: auto;
                    text-align: left;
                    margin-right: 50px;
                  "
                >
                  <!-- Second flex-column with ml-auto class -->
                  <p style="font-weight: 650; font-size: 30px">
                    International Contact⠀⠀⠀⠀⠀⠀⠀
                  </p>
                  <p>moment</p>
                  <p>moment2</p>
                </div>
              </div>

              <!-- <hr class="short-line" /> -->

              <div
                class="card card-divider align-items-center justify-content-center mt-3"
                style="margin-left: auto; margin-right: auto"
              >
                <div class="card-body">
                  Any customer's complaints that we receive through the
                  toll-free service media (hotline), sms and e-mail will be
                  responded by the relevant work unit no later than 2 (two)
                  hours after receiving the report. For complaints submitted
                  through other media that are not directly monitored and
                  related to technical matters in the field will be responded no
                  later than 5 (five) working days after the report is
                  submitted.
                </div>
              </div>

              <h2
                style="
                  font-style: italic;
                  color: #084e8b;
                  font-weight: 700;
                  text-align: center;
                  margin-top: 25px;
                "
              >
                Offices
              </h2>

              <hr class="short-line" />

              <div class="d-flex">
                <div class="d-flex flex-column" style="margin-left: 50px">
                  <p style="font-weight: 650; font-size: 30px">Main Office</p>
                  <div class="d-flex flex-row">
                    <img
                      src="../assets/logo PIU.png"
                      style="
                        width: 15%;
                        height: auto;
                        align-self: center;
                        margin-right: 25px;
                      "
                    />
                    <div class="bolding-text">
                      <p>Alamanda Tower Lt 26,Jl. T.B. Simatupang No 22-26</p>
                      <p>Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta</p>
                      <div class="d-flex flex-row align-items-center">
                        <p>(021) 29661630</p>
                        <!-- <img
                          src="../assets/084retrophone.png"
                          style="width: 7.5%; height: auto; margin-left: 10px; margin-bottom: 15px;"
                        /> -->
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <p>info@pi-utilitas.com</p>
                        <!-- <img
                          src="../assets/084email.png"
                          style="width: 7.5%; height: auto; margin-left: 10px; margin-bottom: 15px;"
                          /> -->
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                <p style="font-weight: 650; font-size: 30px">
                    Gresik Gas Congregation Plant
                  </p>

                <div
                  class="d-flex flex-column justify-content-end"
                  style="
                    margin-left: auto;
                    text-align: left;
                    margin-right: 50px;
                  "
                >
                  <p>moment</p>
                  <p>moment2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mt-5">
            <h3>tester</h3>
          </div>

          <div
            class="col-md-6 d-flex flex-column justify-content-end"
            style="margin-left: auto"
          >
            <div class="card card-body card-form mt-5">
              <form @submit.prevent="submitForm">
                <div class="row" style="color: black">
                  <div class="col-md-6">
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
                    <div class="mb-3">
                      <label for="inputTelepon" class="form-label"
                        >Waktu Kejadian</label
                      >
                      <input
                        type="telepon"
                        class="form-control"
                        id="inputTelepon"
                        v-model="telepon"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="inputJenis" class="form-label"
                        >Unit Kerja</label
                      >
                      <select type="jenis" class="form-select" v-model="jenis">
                        <option selected>---</option>
                        <option value="1">Unit Kerja Pengadaan</option>
                        <option value="2">Keuangan</option>
                        <option value="3">Akuntansi</option>
                        <option value="4">Unit IPP Gresik</option>
                        <option value="5">Lainnya</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="inputLokasi" class="form-label"
                        >Tempat Kejadian</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="inputLokasi"
                        v-model="lokasi"
                      />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="inputDetail" class="form-label"
                      >Detail Pengaduan</label
                    >
                    <textarea
                      class="form-control"
                      id="inputDetail"
                      rows="5"
                      v-model="detail"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="formFileMultiple" class="form-label"
                      >File Pendukung</label
                    >
                    <input
                      class="form-control"
                      type="file"
                      id="formFileMultiple"
                      multiple
                    />
                  </div>
                  <div class="col">
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
    <br />
  </div>
</template>

<style scoped>
.card-contact {
  width: 100%;
  height: auto;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 15px;
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

.bolding-text{
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
