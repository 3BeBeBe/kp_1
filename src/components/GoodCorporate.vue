<template>
    <div class="good-corporate carousel-image-container">
        <div class="container">
            <br>
            <div class="row justify-content-center">
                <div class="col-md-5 mb-5 d-flex align-items-center justify-content-center">
                    <div class="gover-overlay-text">             
                        <h2><b>Komitmen PT Pupuk Indonesia Utilitas Penerapan Tata Kelola Perusahaan yang Baik (Good Corporate Governance)</b></h2>
                    </div>
                </div>
            
                <div class="col-md-7">
                    <div class="mb-5 gover-overlay-text">                        
                        <p class="text-justify">Dalam rangka mewujudkan tujuan perusahaan menjadi penyedia solusi bagi sektor agro industri nasional, dengan ini Direksi dan Dewan Komisaris PT Pupuk Indonesia Utilitas, berkomitmen :</p>

                        <ol>
                            <li>Melaksanakan setiap transaksional dan pengambilan keputusan berdasarkan prinsip-prinsip Good Corporate Governance (GCG) dan kepatuhan terhadap peraturan perundangan yang berlaku.</li>
                            <li>Melaksanakan tugas dan tanggungjawab sesuai dengan Pedoman Good Corporate Governance, Board Policy Manual, Pedoman Etika Bisnis & Etika Kerja dan pedoman pendukung lainnya yang terkait dengan penerapan GCG secara konsisten dan penuh tanggung jawab.</li>
                            <li>Melaksanakan pedoman lainnya terkait penerapan GCG bagi seluruh Insan PI Utilitas agar tercipta lingkungan kerja yang beretika dan bermartabat.</li>
                            <li>Menerapkan laporan Manajemen dan Laporan Keuangan perusahaan yang disajikan secara transparan, akurat dan tepat waktu, serta memastikan terpenuhinya kewajiban transparasi lainnya sesuai dengan peraturan perundang-undangan yang berlaku.</li>
                            <li>Memberikan keteladanan dalam semua hal dan menciptakan lingkungan kondusif dalam rangka pelaksanaan PI Utilitas bersih terhadap praktik Korupsi, Kolusi dan Nepotisme serta praktik kecurangan (Fraud) dan praktik pelanggaran hukum lainnya dengan menerapkan sanksi yang tegas untuk setiap pelanggaran.</li>
                        </ol>

                        <p class="text-justify">Komitmen Direksi dan Dewan Komisaris dalam penerapan Tata Kelola Perusahaan yang Baik (Good Corporate Governance), dilaksanakan dalam Pedoman Penerapan Tata Kelola Perusahaan yang Baik (Pedoman GCG) sebagaimana terlampir:</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GoodCorporate'
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
        background-image: url('../assets/Carousal/TataKelola.jpg');
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
        background: rgba(0, 0, 0, 0.8);
        /* background: linear-gradient(to right, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 100%); */
    }

    
</style>