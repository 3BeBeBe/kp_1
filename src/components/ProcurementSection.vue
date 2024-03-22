<template>
    <div class="good-corporate carousel-image-container d-flex flex-column justify-content-center">
        <div class="container mt-5 mb-5 p-5">
            <div class="row mt-5 mb-5 p-5 gover-overlay-text">
                <div class="col-md-12">
                    <h2 style="font-style: italic; color: white; font-weight: 700">Pengadaan</h2>
                </div>
                <div class="col-md-6">
                    <p>Untuk dapat mengakses laman e-procurement dapat mengunjungi link di bawah ini dengan menggunakan kredensial yang telah Anda miliki sewaktu mendaftar: </p>
                    <div class="d-inline-flex me-3">
                        <a href="https://eprocurement.pupuk-indonesia.com/beranda" target=”_blank” class="btn d-flex justify-content-center" style="width: 230px;">
                            <div class="d-flex flex-column justify-content-center align-items-center" style="background-color: #0088ff; border: 3px solid #0088ff; border-radius: 50px 0px 0px 50px;">
                                <p class="text-white m-0 p-2 ms-2"><b>PROCUREMENT</b></p>
                            </div>
                            <div class="d-flex justify-content-center align-items-center" style="background-color: #ffffff; border: 3px solid #0088ff; border-radius: 0px 50px 50px 0px;">
                                <img src="../assets/logo PIU.png" class="me-3" style="max-width: 50%; max-height: 100%; height: auto; display: block; margin: 5px auto;">
                            </div>
                        </a>
                    </div>
                    <div class="d-inline-flex">
                        <a data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" class="btn d-flex justify-content-center" style="width: 210px;">
                            <div class="d-flex flex-column justify-content-center align-items-center" style="background-color: #0088ff; border: 3px solid #0088ff; border-radius: 50px 0px 0px 50px;">
                                <p class="text-white m-0 p-2 ms-2"><b>DOWNLOAD</b></p>
                            </div>
                            <div class="d-flex justify-content-center align-items-center" style="background-color: #ffffff; border: 3px solid #0088ff; border-radius: 0px 50px 50px 0px;">
                                <img src="../assets/logo PIU.png" class="me-3" style="max-width: 50%; max-height: 100%; height: auto; display: block; margin: 5px auto;">
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="collapse" id="collapseExample">
                <div class="card card-body" style="color: black;">
                    <p>Anda dapat melakukan permintaan untuk mengunduh dokumen pengadaan yang sedang berlangsung saat ini dengan mengisi form di bawah ini, kami akan melakukan peninjauan terhadap data yang Anda berikan dan mengirimkan dokumen pengadaan jika disetujui.</p>
                    <form @submit.prevent="submitForm">
                        <div class="row" style="color: black;">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="inputNama" class="form-label">Nama PIC</label>
                                <input type="nama" class="form-control" id="inputNama" v-model="nama">
                            </div>
                            <div class="mb-3">
                                <label for="inputTelepon" class="form-label">No Telepon PIC</label>
                                <input type="telepon" class="form-control" id="inputTelepon" v-model="telepon">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="inputLokasi" class="form-label">Email PIC</label>
                                <input type="email" class="form-control" id="inputLokasi" v-model="lokasi">
                            </div>
                            <div class="mb-3">
                                <label for="inputJenis" class="form-label">Kategori</label>
                                <select type="jenis" class="form-select" v-model="jenis">
                                    <option selected>---</option>
                                    <option value="1">Perusahaan</option>
                                    <option value="2">Individu</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label for="inputDetail" class="form-label">Detail Pengaduan</label>
                                <textarea class="form-control" id="inputDetail" rows="5" v-model="detail"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ProcurementSection'
    }
</script>
<style scoped>
    /* .btn, .form-control, .form-label, .card {
        border-radius: 0;
    } */
    .gover-overlay-text {
        position: relative;
        color: rgb(255, 255, 255);
        /* font-size: 24px;
        font-weight: bold; */
    }

    .good-corporate {
        background-image: url('../assets/Carousal/Pengadaan.jpg');
        background-size: cover;
        background-position: center;
        color: white;
        min-height: 63.3vh;
    }

    .carousel-image-container {
        position: relative;
    }

    .carousel-image-container::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /* background: rgba(0, 0, 0, 0.8); */
        background: linear-gradient(to right, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%);
        /* background: linear-gradient(to right, rgb(0, 0, 0) 50%, rgba(3, 112, 177, 1) 51%, rgba(16, 146, 72, 1) 52%, rgba(218, 93, 42, 1) 53%, rgba(255, 255, 255, 0) 54%); */
    }

    .hidden-button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
</style>