<template>
<div class="container mt-5 mb-5">
    <div class="text-center">
        <h2>KELUHAN PELANGGAN</h2>
    </div>
    <form>
        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label for="inputNama" class="form-label">Nama</label>
                    <input type="email" class="form-control" id="inputNama" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="inputTelepon" class="form-label">No. telepon</label>
                    <input type="email" class="form-control" id="inputTelepon" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Alamat email</label>
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
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
                    <select class="form-select" aria-label="Default select example">
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
                    <textarea class="form-control" id="inputDetail" rows="7"></textarea>
                </div>
            </div>
        </div>
    </form>
</div>
</template>
<script>
    export default {
        name: 'CustomerComplaint'
    }   
</script>
<style scoped>
    .btn, .form-control, .form-select, .card {
        border-radius: 0px;
    }
</style>
```