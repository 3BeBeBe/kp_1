<template>
    <div style="background-color: rgba(3, 112, 177, 1);">
    <div class="container">
        <div class="row" style="display: flex; justify-content: space-between;">
            <div class="col-md-3 mt-3 mb-3 d-flex align-items-center">
                <div>
                    <h1><b>Layanan</b></h1>
                    <p>Lorem ipsum dolor bla blabla tesat i dont know what to put here</p>
                </div>
            </div>
            <div class="col-md-7">
                <div class="row mt-5 mb-5">
                    <div class="col-md-12">
                        <button class="btn image-button">
                            <span class="default-content image-button">
                                <img class="img-fluid" src="../assets/pabrik/GGCP/ggcp4.jpg"/>
                                <div class="overlay1"></div>
                            </span>
                            <span class="hover-content image-button" style="background-color: white;">
                                <h3 class="mb-3">GGCP</h3>
                                <div class="row justify-content-center">
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
                            </span>
                        </button>
                    </div>
                    <div class="col-md-12">
                        <button class="btn image-button">
                            <span class="default-content image-button">
                                <img class="img-fluid" src="../assets/pabrik/KDM/kdm2.jpg"/>
                                <div class="overlay2"></div>
                            </span>
                            <span class="hover-content image-button" style="background-color: white;">
                                <h3 class="mb-3">KDM</h3>
                                <div class="row d-flex align-items-center">
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
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'NewsPages',
    }
</script>

<style scoped>
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