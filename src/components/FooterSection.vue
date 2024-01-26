<template>
    <div class="mt-5 mb-5 custom-container">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h5><b>PT. PUPUK INDONESIA UTILITAS</b></h5>
                <p>Alamanda Tower Lt 26,Jl. T.B. Simatupang No 22-26, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430</p>
                <p>Phone: (021) 29661630</p>
                <p>Email:
                    <a href=mailto:info@pi-utilitas.com>info@pi-utilitas.com</a>
                </p>
            </div>
            <div class="col-md-3">
                <h5><b>IPP GRESIK (GRESIK GAS COGENERATION PLANT)</b></h5>
                <p>Jalan Gubernur Suryo, Pabrik 3 PT. Petrokimia Gresik, Gresik, Jawa Timur</p>
                <p>Phone: -</p>
                <p>Email: 
                    <a href=mailto:info@pi-utilitas.com>info@pi-utilitas.com</a>
                </p>
            </div>
            <div class="col-md-3">
                <h5><b>MEDIA SOSIAL</b></h5>
                <div class="row mt-4 mb-4 justify-content-center">
                    <div class="col-md-4">
                        <a href="https://twitter.com/PIUtilitas" target="_blank">

                            <img class="img-fluid" src="../assets/Ikon SosMed/1.png" width="50" height="50">
                            <!-- <img class="img-fluid rounder-circle" src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-official-vector-download_691560-10797.jpg" width="50" height="50"> -->
                        </a>
                    </div>
                    
                    <div class="col-md-4">
                        <a href="https://www.facebook.com/Pupuk.Indonesia" target="_blank">
                            <img class="img-fluid" src="../assets/Ikon SosMed/2.png" width="50" height="50">
                        </a>
                    </div>

                    <div class="col-md-4">
                        <a href="https://www.instagram.com/pi_utilitas/" target="_blank">
                            <img class="img-fluid" src="../assets/Ikon SosMed/3.png" width="50" height="50">
                        </a>
                    </div>
                </div>
                <ul>
                    <li>Syarat & Ketentuan Penggunaan Website</li>
                    <li>Kebijakan Privasi</li>
                </ul>
            </div>
            <div class="col-md-3">
                <h5><b>ANAK USAHA DARI</b></h5>
                <img class="img-fluid mt-4" src="../assets/LOGO PIU Putih.png" >
                <div class="row">
                    <div class="col-md-4">
                        <img class="img-fluid" src="../assets/ISO/iso9001-2015.png">
                    </div>
                    
                    <div class="col-md-4">
                        <img class="img-fluid" src="../assets/ISO/iso14001-2015.png">
                    </div>

                    <div class="col-md-4">
                        <img class="img-fluid" src="../assets/ISO/iso137001-2016.png">
                    </div>
                </div>
            </div>
        </div> 
        <hr>
    </div>
    <div class="row text-center">
            <p> | 
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
             | </p>
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
      background-color: #084e8b; /* Custom background color (gold) */
      color: #ffffff; /* Custom text color (dark gray) */
      padding: 20px; /* Custom padding */
      border-radius: 0px; /* Custom border radius */
      /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Custom box shadow */
    }
    .custom-container a {
        color: #ffffff;
    }
    .rounder-circle {
        border-radius: 50%;
    }
    .rounded-circle-container {
        display: inline-block; /* Ensures the container only takes the space it needs */
        overflow: hidden; /* Clips the image within the container */
        background-color: white;
        border-radius: 50%; /* Creates a circular shape */
    }

    .rounded-circle-container img {
        display: block;
        width: 50%; /* Make the image take up 100% of the container width */
        height: 50%; /* Make the image take up 100% of the container height */
        object-fit: cover;
    }
</style>