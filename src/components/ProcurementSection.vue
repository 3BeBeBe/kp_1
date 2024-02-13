<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-6">
                <p>Untuk dapat mengakses laman e-procurement dapat mengunjungi link di bawah ini dengan menggunakan kredensial yang telah Anda miliki sewaktu mendaftar: </p>
                <div class="d-inline-flex me-3">
                    <a href="https://eprocurement.pupuk-indonesia.com/beranda" target=”_blank” class="btn btn-primary">E-Procurement</a>
                </div>
                <p class="d-inline-flex">
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Unduh Dokumen
                    </button>
                </p>
            </div>

            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    <p>Anda dapat melakukan permintaan untuk mengunduh dokumen pengadaan yang sedang berlangsung saat ini dengan mengisi form di bawah ini, kami akan melakukan peninjauan terhadap data yang Anda berikan dan mengirimkan dokumen pengadaan jika disetujui.</p>
                    <form @submit.prevent="submitForm">
                        <div class="row">
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
    .btn, .form-control, .form-label, .card {
        border-radius: 0;
    }
</style>