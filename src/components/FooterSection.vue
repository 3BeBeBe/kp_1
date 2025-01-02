<template>
    <div class="good-corporate carousel-image-container">
    <div class="container">
        <div class="row">
            <div class="col-md-3 mt-3">
                <div class="gover-overlay-text">
                    <h5><b>PT PUPUK INDONESIA UTILITAS</b></h5>
                    <p>Alamanda Tower Lt 26,Jl. T.B. Simatupang No 22-26, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta</p>
                    <p>Phone: (021) 29661630</p>
                    <p>Email:
                        <a href=mailto:info@pi-utilitas.com>info@pi-utilitas.com</a>
                    </p>
                </div>
            </div>
            <div class="col-md-3 mt-3">
                <div class="gover-overlay-text">
                    <h5><b>IPP GRESIK (GRESIK GAS COGENERATION PLANT)</b></h5>
                    <p>Jalan Gubernur Suryo, Pabrik 3 PT Petrokimia Gresik, Gresik, Jawa Timur</p>
                    <p>Phone: -</p>
                    <p>Email: 
                        <a href=mailto:info@pi-utilitas.com>info@pi-utilitas.com</a>
                    </p>
                </div>
            </div>
            <div class="col-md-3 mt-3">
                <div class="gover-overlay-text">
                    <h5><b>MEDIA SOSIAL</b></h5>
                    <div class="row mt-4 mb-4 d-flex justify-content-center">
                        <div class="col-3 d-flex justify-content-center">
                            <a href="https://twitter.com/PIUtilitas" target="_blank">
                                <img class="img-fluid" src="../assets/Ikon SosMed/1.png" width="40" height="40">
                                <!-- <img class="img-fluid rounder-circle" src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-official-vector-download_691560-10797.jpg" width="50" height="50"> -->
                            </a>
                        </div>
                        
                        <div class="col-3 d-flex justify-content-center">
                            <a href="https://www.facebook.com/Pupuk.Indonesia" target="_blank">
                                <img class="img-fluid" src="../assets/Ikon SosMed/2.png" width="40" height="40">
                            </a>
                        </div>

                        <div class="col-3 d-flex justify-content-center">
                            <a href="https://www.instagram.com/pi_utilitas/" target="_blank">
                                <img class="img-fluid" src="../assets/Ikon SosMed/3.png" width="40" height="40">
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li>Syarat & Ketentuan Penggunaan Website</li>
                        <li>Kebijakan Privasi</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 mt-3">
                <div class="gover-overlay-text">
                    <h5><b>SERTIFIKASI SISTEM MANAJEMEN ISO</b></h5>
                    <div class="row mt-3 d-flex justify-content-center">
                        <div class="col-12 mb-2 d-flex justify-content-center">    
                            <img class="img-fluid" src="../assets/LOGO PIU Putih.png" width="200">
                        </div>
                        <div class="col-3">
                            <img class="img-fluid" src="../assets/ISO/iso9001-2015.png" width="60">
                        </div>
                        
                        <div class="col-3">
                            <img class="img-fluid" src="../assets/ISO/iso9001-2015.png" width="60">
                        </div>
                        
                        <div class="col-3">
                            <img class="img-fluid" src="../assets/ISO/iso14001-2015.png" width="60">
                        </div>

                        <div class="col-3">
                            <img class="img-fluid" src="../assets/ISO/iso137001-2016.png" width="60">
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <hr>
        <div class="d-flex justify-content-center gover-overlay-text">
            <div class="row text-center text-holder">
                <p>
                    <a href="https://bumn.go.id/">KEMENTRIAN BUMN</a>
                    | 
                    <a href="https://www.pupuk-indonesia.com/">PT PUPUK INDONESIA</a>
                    | 
                    <a href="https://www.petrokimia-gresik.com/">PT PETROKIMIA GRESIK</a>
                    |             
                    <a href="https://www.pupuk-kujang.co.id/">PT PUPUK KUJANG CIKAMPEK</a>
                    | 
                    <a href="http://www.rekayasa.com/">PT REKAYASA INDUSTRI</a>
                    | 
                    <a href="http://www.pupukkaltim.com/">PT PUPUK KALIMANTAN TIMUR</a>
                    | 
                    <a href="https://www.pusri.co.id/">PT PUPUK SRIWIDJAJA PALEMBANG</a>
                    | 
                    <a href="https://www.pim.co.id/">PT PUPUK ISKANDAR MUDA</a>
                    | 
                    <a href="https://kaltimdayamandiri.co.id/">PT KALTIM DAYA MANDIRI</a> 
                </p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        name: 'FooterSection'
}

    
</script>
<style scoped>
    .custom-container {
      position: relative;
      background-color: #084e8b;
      color: #ffffff;
      padding: 20px;
      border-radius: 0px;
      background-image: url('../assets/LOGO PIU Footer.png');
      background-size: cover;
      background-position: 5% center;
      background-size: 13%;
      background-repeat: no-repeat;
    }

    /* Add overlay to the background image */
    .custom-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(8, 78, 139, 0.3); /* Adjust the opacity as needed */
      z-index: 0; /* Ensure the overlay is positioned behind the content */
      border-radius: 0px; /* Inherit border radius from the container */
    }

    .custom-container p, .custom-container h5, .custom-container ul, .custom-container img {
        position: relative;
        z-index: 1; /* Ensure text and images remain above the overlay */
        font-size: large;
    }

    .custom-container p {
        font-size: small;
    }

    .custom-container a {
        color: #ffffff;
        position: relative; /* Ensure links are clickable */
        z-index: 2; /* Ensure links are positioned above the overlay and text */
    }
    p, li {
        font-size: 13px; /* Adjust as needed */
    }

    h5 {
        font-size: 17px; /* Adjust as needed */
    }
    .text-holder {
        width: 88%;
    }
    .gover-overlay-text{
        position: relative;
        color: rgb(255, 255, 255);
        /* font-size: 24px;
        font-weight: bold; */
    }

    .gover-overlay-text a{
        position: relative;
        color: rgb(255, 255, 255);
        /* font-size: 24px;
        font-weight: bold; */
    }

    .good-corporate {
        background-color: #084e8b;
        background-image: url('../assets/LOGO PIU Footer.png');
        background-position: 50px center; /* Center the image */
        background-repeat: no-repeat;
        background-size: 30%;
        color: #000;
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
        background: rgba(3, 57, 105, 0);
        /* background: linear-gradient(to right, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 100%); */
    }
</style>