<template>
    <div class="good-corporate carousel-image-container d-flex flex-column justify-content-center">
    <div class="container p-5">
        <div class="row mt-5 mb-5 gover-overlay-text">
            <h2>WHISTLEBLOWING SYSTEM</h2>
            <div class="col-md-7">
                <div>
                    <p>Whistleblowing system adalah mekanisme pelaporan yang dapat diajukan oleh internal perusahaan atau eksternal perusahaan untuk melaporkan adanya perbuatan yang melanggar hukum, atau peraturan lain yang berlaku, atau perbuatan menentang etika yang dilakukan oleh karyawan di perusahaan dengan tetap menjaga rahasia dari si pelapor. Setiap pihak baik insan Perusahaan maupun pihak eksternal memiliki kesempatan yang sama dalam melaporkan dugaan tindak pelanggaran di Perusahaan. WBS merupakan bagian dari sistem pengendalian internal dalam mencegah penyimpangan dan kecurangan serta memperkuat penerapan praktik Tata Kelola Perusahaan.
                    </p>
                    <p>Whistleblower PI Utilitas dapat di akses di <a href="https://wbs.pupuk-indonesia.com/">https://wbs.pupuk-indonesia.com/</a>
                    </p>   

                    <p class="d-inline-flex gap-1 me-3">
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Pengajuan
                        </button>
                    </p>
                    <div class="d-inline-flex gap-1">
                        <a href="../assets/tataKelola/PEDOMAN-WHISTLE-BLOWING-SYSTEM-WBS.pdf" class="btn btn-primary" download>Pedoman WBS</a>
                    </div>

                </div>
            </div>
        </div>
        
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <form @submit.prevent="submitForm">
                    <div class="row" style="color: black;">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="inputNama" class="form-label">Nama Terlapor</label>
                                <input type="nama" class="form-control" id="inputNama" v-model="nama">
                            </div>
                            <div class="mb-3">
                                <label for="inputTelepon" class="form-label">Waktu Kejadian</label>
                                <input type="telepon" class="form-control" id="inputTelepon" v-model="telepon">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="inputJenis" class="form-label">Unit Kerja</label>
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
                                <label for="inputLokasi" class="form-label">Tempat Kejadian</label>
                                <input type="email" class="form-control" id="inputLokasi" v-model="lokasi">
                            </div>
                        </div>
                        
                        <div class="mb-3">
                                <label for="inputDetail" class="form-label">Detail Pengaduan</label>
                                <textarea class="form-control" id="inputDetail" rows="5" v-model="detail"></textarea>
                            </div>
                        <div class="mb-3">
                            <label for="formFileMultiple" class="form-label">File Pendukung</label>
                            <input class="form-control" type="file" id="formFileMultiple" multiple>
                        </div>
                        <div class="col">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <br>
    </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'WhistleBlowing',
            data() {
            return {
                nama: '',
                telepon: '',
                jenis: '',
                lokasi: '',
                detail: '',
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

                axios.post('http://localhost:8081/send-email', formData)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
        },
    }
</script>

<style scoped>
    .btn, .form-control, .form-select, .card {
        border-radius: 0px;
    }
    .gover-overlay-text {
        position: relative;
        color: rgb(255, 255, 255);
        /* font-size: 24px;
        font-weight: bold; */
    }

    .good-corporate {
        background-image: url('../assets/tataKelola/whistle blowing.png');
        background-size: cover; /* Cover the entire area of the component */
        background-position: center; /* Center the image */
        color: white;
        
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
        background: linear-gradient(to right, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    }
    
</style>