<template>
    <div class="container mt-5">
        <div class="row no-gutters">
            <div class="col-md-6">
                <div class="overlay-container">
                    <img src="../assets/Galeri/Kunjungan ke PT RDM/1.jpeg" class="img-fluid">
                    <div class="overlay-text">
                        <h2><b>Kunjungan ke PT RDM </b></h2>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row no-gutters">
                    <div class="col-md-12 bg-primary">
                    <div class="overlay-container">
                        <img src="../assets/Galeri/Sedekah Hewan Qurban/1.jpeg" class="img-fluid">
                        <div class="overlay-text">
                            <h3><b>Sedekah Hewan Qurban</b></h3>
                        </div>
                    </div>
                </div>
                    <div class="col-md-6">
                        <div class="overlay-container">
                            <img src="../assets/Galeri/Donor Darah Sewindu PI Utilitas/1.jpg" class="img-fluid">
                            <div class="overlay-text">
                                <h3><b>Donor Darah Sewindu PI Utilitas</b></h3>
                            </div>
                        </div>
                    </div>
                <div class="col-md-6">
                    <div class="overlay-container">
                        <img src="../assets/Galeri/Penanaman Mangrove/1.jpg" class="img-fluid">
                        <div class="overlay-text">
                            <h3><b>Penanaman Mangrove</b></h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="overlay-container">
                        <img src="../assets/Galeri/Pelatihan Manajemen Destinasi Wisata/1.jpeg" class="img-fluid">
                        <div class="overlay-text">
                            <h3><b>Pelatihan Manajemen Destinasi Wisata</b></h3>
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
        name: 'GaleryContent'
    }
</script>
<style>
    .responsive-image {
      width: 100%; /* Set the width to 100% to make the image responsive */
      height: 50%; /* Maintain the aspect ratio */
    }

    .overlay-text {
      position: absolute;
      top: 80%;
      left: 5%; /* Adjust this value to move the text to the left */
      transform: translate(0%, -70%);
      color: white;
      font-size: 20px;
      font-weight: bold;
    }

    .overlay-container {
      position: relative;
      width: 100%;
      height: 100%;
    }
</style>