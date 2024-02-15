<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="carousel-image-container" data-bs-interval="100">
                    <img src="../assets/pabrik/GGCP/ggcp1.jpg" class="d-block w-100 carousel-image">
                </div>
                <div class="d-md-block overlay-text">
                    <h1><i>Gresik Gas Cogeneration Plant (GGCP)</i></h1>
                    <br>
                    <h4>Dibangun untuk memenuhi kebutuhan listrik dan steam dari <b>PT Petrokimia Gresik</b> yang saat ini sedang mengembangkan fasilitas produksi terbarunya, <b>Pabrik Amurea II.</b></h4>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-image-container" data-bs-interval="100">
                    <img src="../assets/pabrik/KDM/kdm1.jpg" class="d-block w-100 carousel-image">
                </div>
                <div class="d-md-block overlay-text">
                    <h1><i>Kaltim Daya Mandiri (KDM)</i></h1>
                    <br>
                    <h4>Didirikan dengan tujuan untuk <b>menyuplai kebutuhan utilitas pada fasilitas produksi dan perumahan PT. Pupuk Kaltim</b> serta perusahan-perusahaan lain yang berada di lingkungan <b>Kaltim Industrial Estate.</b></h4>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-image-container" data-bs-interval="100">
                    <img src="https://www.pi-utilitas.com/files/media/2021/06/banner-2.jpg" class="d-block w-100 carousel-image">
                </div>
                <div class="d-none d-md-block overlay-text">
                    <h1><i>Tolak Gratifikasi</i></h1>
                    <br>
                <h4>Seluruh keluarga PT Pupuk Indonesia Utilitas <b><u>MENOLAK</u></b> segala bentuk suap serta mendukung terwujudnya prinsip-prinsip <b>Tata Kelola Perusahaan yang Baik (Good Corporate Governance).</b></h4>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<script>
    export default {
        name: 'CarousalInfo'
    }
</script>
<style scoped>
    .responsive-image {
      width: 100%; /* Set the width to 100% to make the image responsive */
      height: 50%; /* Maintain the aspect ratio */
    }

    .overlay-text {
      position: absolute;
      top: 50%;
      left: 40%; /* Adjust this value to move the text to the left */
      transform: translate(-50%, -50%);
      color: rgb(255, 255, 255);
      font-size: 24px;
      font-weight: bold;
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
        /* background: rgba(0, 0, 0, 0.5); */
        background: linear-gradient(to right, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 100%);
    }

    .carousel-image {
        height: 90vh; /* Adjust this value to your desired height */
        object-fit: cover;
    }
    h4 {
        width: 75%; /* Adjust as needed */
    }
</style>