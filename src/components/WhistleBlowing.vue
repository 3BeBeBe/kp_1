<template>
    <div class="good-corporate carousel-image-container">
    <div class="container mt-5">
        <br>
        <h2 class="gover-overlay-text">WHISTLEBLOWING SYSTEM</h2>
        <div class="row gover-overlay-text">
            
            <div class="col-md-7">
                <div>
                    <p>Whistleblowing system adalah mekanisme pelaporan yang dapat diajukan oleh internal perusahaan atau eksternal perusahaan untuk melaporkan adanya perbuatan yang melanggar hukum, atau peraturan lain yang berlaku, atau perbuatan menentang etika yang dilakukan oleh karyawan di perusahaan dengan tetap menjaga rahasia dari si pelapor. Setiap pihak baik insan Perusahaan maupun pihak eksternal memiliki kesempatan yang sama dalam melaporkan dugaan tindak pelanggaran di Perusahaan. WBS merupakan bagian dari sistem pengendalian internal dalam mencegah penyimpangan dan kecurangan serta memperkuat penerapan praktik Tata Kelola Perusahaan.
                    </p>
                    <p>Whistleblower PI Utilitas dapat di akses di https://wbs.pupuk-indonesia.com/
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
                <form>
                    <div class="row" style="color: black;">
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
        </div>
        <br>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'WhistleBlowing'
    }
</script>

<style scoped>
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