<template>
    <div style="background-color: rgba(3, 112, 177, 1);">
    <div class="container">
        <div class="row" style="display: flex; justify-content: space-between;">
            <div class="col-md-4 mt-3 mb-3 d-flex align-items-center">
                <div class="centered-justify">
                    <h1 style="text-align: start;"><b>Portofolio Bisnis Perusahaan</b></h1>
                    <p>PT Pupuk Indonesia Utilitas memiliki aset fasilitas produksi di 2 (dua) lokasi, yaitu:</p>
                    <ul>
                        <li>Gresik Gas Cogeneration Plant di Gresik : GTG 22 MW, HRSG 60 tph, PB 100 tph</li>
                        <li>Cogeneration Plant di Bontang, melalui subsidiary PT Kaltim Daya Mandiri (KDM): GTG 34 MW, HRSG 156 tph, N2 Plant 500 Nm3/h, SWRO 2x50 m3/h, dan jaringan integrasi listrik. Melalui anak perusahaannya yaitu PT Kaltim Daya Mandiri Agro Energy (KDM-AE), KDM melakukan pengembangan lini bisnis pada bidang trading batubara. Sampai dengan tahun 2019 KDM-AE sudah melakukan pengiriman batubara hingga 270.000 MT/year ke wilayah Kalimantan Timur dan Sulawesi Barat.</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-7">
                <div class="row mt-5 mb-5">
                    <div class="col-md-12">
                        <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#ggcp">
                            <span class="default-content image-button">
                                <img class="img-fluid" src="../assets/pabrik/GGCP/ggcp4.jpg"/>
                                <div class="overlay1"></div>
                            </span>
                            <span class="hover-content image-button" style="background-color: white;">
                                <div class="p-3">
                                    <h3 class="mb-3">GGCP</h3>
                                    <div class="row text-start">
                                        <div class="col-md-4 mb-5">
                                            <p>GTG 22MW</p>
                                        </div>
                                        <div class="col-md-4 mb-5">
                                            <p>HRSG 60 tph</p>
                                            <p>PB 100 tph</p>
                                        </div>
                                        <div class="col-md-4 mb-5">
                                            <p>Poly 4.2 kWp</p>
                                            <p>Mono 4.6 kWp</p>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </button>
                    </div>

                    <div class="modal fade" id="ggcp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img class="img-fluid" src="../assets/pabrik/GGCP/pub_ggcp.jpg"/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#kdm">
                            <span class="default-content image-button">
                                <img class="img-fluid" src="../assets/pabrik/KDM/kdm2.jpg"/>
                                <div class="overlay2"></div>
                            </span>
                            <span class="hover-content image-button" style="background-color: white;">
                                <div class="p-3">
                                    <h3 class="mb-3">KDM</h3>
                                    <div class="row text-start">
                                        <div class="col-md-4 mb-5">
                                            <p>GTG 22MW</p>
                                        </div>
                                        <div class="col-md-4 mb-5">
                                            <p>HRSG 156 tph</p>
                                        </div>
                                        <div class="col-md-4 mb-5">
                                            <p>500 Nm<sup>3</sup>/hr</p>
                                        </div>
                                        <div class="col-md-4">
                                            <p>Coal Trading</p>
                                        </div>
                                        <div class="col-md-4">
                                            <p>Integrasi List. 33 kV, 200 MVA</p>
                                        </div>
                                        <div class="col-md-4">
                                            <p>PLTS 1.2 MWp</p>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </button>
                    </div>

                    <div class="modal fade" id="kdm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img class="img-fluid" src="../assets/pabrik/KDM/pub_kdm.jpg"/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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

<script>
    export default {
        name: 'BusinessProfile',
    }
</script>

<style scoped>
    .centered-justify {
        text-align: justify;
        color: white;
    }
    .image-button {
        position: relative;
        width: 100%;
        height: 300px;
        border: none;
        padding: 0;
        background: none;
        border-radius: 0;
    }
    .image-button img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .image-button .default-content {
        display: block;
    }
    .image-button .hover-content {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .image-button:hover .default-content {
        display: none;
    }
    .image-button:hover .hover-content {
        display: block;
    }
    .image-button .default-content {
        position: relative;
    }
    .image-button .default-content .overlay1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(218, 93, 42, 0.5);
    }
    .image-button .default-content .overlay2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(16, 146, 72, 0.5);
    }
</style>