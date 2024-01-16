<template>
    <div class="container mt-5">
        <h2>WHISTLEBLOWING SYSTEM</h2>
        <div class="row">
            <div class="col-md-8">
                <div>
                    <p>Whistleblowing system adalah mekanisme pelaporan yang dapat diajukan oleh internal perusahaan atau eksternal perusahaan untuk melaporkan adanya perbuatan yang melanggar hukum, atau peraturan lain yang berlaku, atau perbuatan menentang etika yang dilakukan oleh karyawan di perusahaan dengan tetap menjaga rahasia dari si pelapor. Setiap pihak baik insan Perusahaan maupun pihak eksternal memiliki kesempatan yang sama dalam melaporkan dugaan tindak pelanggaran di Perusahaan. WBS merupakan bagian dari sistem pengendalian internal dalam mencegah penyimpangan dan kecurangan serta memperkuat penerapan praktik Tata Kelola Perusahaan.
                    </p>
                    <p>Whistleblower PI Utilitas dapat di akses di https://wbs.pupuk-indonesia.com/
                    </p>   
                </div>
            </div>
            <div class="col-md-4">
                <div class="rounded-image">
                    <img src="../assets/Galeri/Kunjungan ke PT RDM/1.jpeg" class="img-fluid">
                </div>
            </div> 
        </div>
        <form>
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="inputNama" class="form-label">Nama Terlapor</label>
                    <input type="nama" class="form-control" id="inputNama" aria-describedby="namaHelp">
                </div>
                <div class="mb-3">
                    <label for="inputTelepon" class="form-label">Waktu Kejadian</label>
                    <input type="telepon" class="form-control" id="inputTelepon" aria-describedby="teleponHelp">
                </div>
                
                <!-- <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="inputJenis" class="form-label">Unit Kerja</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>---</option>
                        <option value="1">Unit Kerja Pengadaan</option>
                        <option value="2">Keuangan</option>
                        <option value="3">Akuntansi</option>
                        <option value="4">Unit IPP Gresik</option>
                        <option value="5">Lainnya</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Tempat Kejadian</label>
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
                </div>
            </div>
            
            <div class="mb-3">
                    <label for="inputDetail" class="form-label">Detail Pengaduan</label>
                    <textarea class="form-control" id="inputDetail" rows="5"></textarea>
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
</template>

<script>
    export default {
        name: 'WhistleBlowing'
    }
</script>