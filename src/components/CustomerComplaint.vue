<template>
<div class="container mt-5 mb-5">
    <div class="">
        <h2>KELUHAN PELANGGAN</h2>
    <hr>
    </div>
    <form @submit.prevent="handleSubmit">
        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label for="inputNama" class="form-label">Nama</label>
                    <input type="email" class="form-control" id="inputNama" v-model="nama">
                </div>
                <div class="mb-3">
                    <label for="inputTelepon" class="form-label">No. telepon</label>
                    <input type="email" class="form-control" id="inputTelepon" v-model="telepon">
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Alamat email</label>
                    <input type="email" class="form-control" id="inputEmail" v-model="email">
                </div>
                <!-- <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="inputJenis" class="form-label">Jenis Pengaduan</label>
                    <select class="form-select" aria-label="Default select example" v-model="jenis">
                        <option selected>---</option>
                        <option value="1">Unit Kerja Pengadaan</option>
                        <option value="2">Keuangan</option>
                        <option value="3">Akuntansi</option>
                        <option value="4">Unit IPP Gresik</option>
                        <option value="5">Lainnya</option>
                    </select>
                </div>
                <div class="mb-5">
                    <label for="inputDetail" class="form-label">Detail Pengaduan</label>
                    <textarea class="form-control" id="inputDetail" rows="7" v-model="detail"></textarea>
                </div>
            </div>
        </div>
    </form>
    <p>{{ message }}</p>
</div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'CustomerComplaint',
        data() {
            return {
                nama: '',
                telepon: '',
                email: '',
                jenis: '',
                detail: '',
                message: '', // Add this line
            };
        },
        methods: {
            handleSubmit() {
                const formData = {
                    nama: this.nama,
                    telepon: this.telepon,
                    email: this.email,
                    jenis: this.jenis,
                    detail: this.detail
                };

                axios.post('https://myapi.com/users', formData)
                .then(response => {
                    console.log(response);
                    this.message = 'Form submitted successfully!'; // Add this line
                })
                .catch(error => {
                    console.error(error);
                    this.message = 'An error occurred while submitting the form.'; // Add this line
                });
            }
        }
    }   
</script>
<style scoped>

    .container {
        min-height: 53.2vh;
    }
</style>