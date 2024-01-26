<template>
    <div class="bg-shade fit-bg" :class="{ 'fade-transition': isTransitioning }"  :style="{ backgroundImage: `url(${selectedImage})` }">
    <div class="container p-3">
                    
        <div class="row d-flex align-items-center mb-2">
            <div class="col-md-6 place-holder">
                <img class="img-fluid" :src="selectedImage">
            </div>
            <div class="col-md-6" style="color: white;">
                <h2>GRESIK GAS COGENERATION PLANT(GGCP)</h2>
                <p>PT Pupuk Indonesia Utilitas (PI Utilitas) atau sebelumnya bernama PT Pupuk Indonesia Energi didirikan berdasarkan Akta No. 11 tanggal 18 Agustus 2014. Di tahun yang sama terjadi pula inisiasi Pembangunan Gresik Gas Cogeneration Plant (GGCP di Gresik, Jawa Timur). Pada 2015, PI Utilitas mulai melakukan Konstruksi Fisik Gresik Gas Cogeneration Plant. Tepat pada April 2018, Pabrik Gresik Gas Cogeneration Plant (GGCP) resmi beroperasi secara komersil hingga saat ini.</p>
                <p>Proyek Gresik Gas Cogeneration Plant (GGCP) yang sudah mulai dijalankan dan dioptimalkan di tahun 2018 senantiasa mendorong Kinerja PI Utilitas untuk terus unggul dalam persaingan usaha tanpa melupakan tanggung jawabnya sebagai korporasi yang tumbuh di tengah publik. Dengan mengedepankan prinsip penerapan bisnis yang tetap memperhatikan lingkungan, PI Utilitas yakin akan mampu terus tumbuh menjadi korporasi yang berkelanjutan dan berintegritas tinggi.</p>
            </div>
        </div>

        <div class="justify-content-end flex-container">
            
                <button class="btn ms-2" v-if="selectedImage !== 'https://www.pi-energi.com/files/media/2020/09/DJI_0228.jpg'" style="background: url('https://www.pi-energi.com/files/media/2020/09/DJI_0228.jpg') no-repeat center center / cover; width: 70%; height: 100px;" @click="changeImage('https://www.pi-energi.com/files/media/2020/09/DJI_0228.jpg')">
                </button>
        
                <button class="btn ms-2" v-if="selectedImage !== 'https://www.pi-energi.com/files/media/2020/09/GGCP_Agustus5.jpg'" style="background: url('https://www.pi-energi.com/files/media/2020/09/GGCP_Agustus5.jpg') no-repeat center center / cover; width: 70%; height: 100px;" @click="changeImage('https://www.pi-energi.com/files/media/2020/09/GGCP_Agustus5.jpg')">
                </button>
            
                <button class="btn ms-2" v-if="selectedImage !== 'https://www.pi-energi.com/files/media/2020/09/GGCP_Maret2.jpg'" style="background: url('https://www.pi-energi.com/files/media/2020/09/GGCP_Maret2.jpg') no-repeat center center / cover; width: 70%; height: 100px;" @click="changeImage('https://www.pi-energi.com/files/media/2020/09/GGCP_Maret2.jpg')">
                </button>
            
                <button class="btn ms-2" v-if="selectedImage !== 'https://www.pi-energi.com/files/media/2020/09/GGCP_Okt3.jpg'"
                style="background: url('https://www.pi-energi.com/files/media/2020/09/GGCP_Okt3.jpg') no-repeat center center / cover; width: 70%; height: 100px;" @click="changeImage('https://www.pi-energi.com/files/media/2020/09/GGCP_Okt3.jpg')">
                </button>
            
                <button class="btn ms-2" v-if="selectedImage !== 'https://www.pi-energi.com/files/media/2020/09/IG_Pekerja-GGCP2.jpg'" style="background: url('https://www.pi-energi.com/files/media/2020/09/IG_Pekerja-GGCP2.jpg') no-repeat center center / cover; width: 70%; height: 100px;" @click="changeImage('https://www.pi-energi.com/files/media/2020/09/IG_Pekerja-GGCP2.jpg')">
                </button>
            
                <button class="btn ms-2" v-if="selectedImage !== 'https://www.pi-energi.com/files/media/2020/09/IG_Proyek-GGCP1.jpg'"  style="background: url('https://www.pi-energi.com/files/media/2020/09/IG_Proyek-GGCP1.jpg') no-repeat center center / cover; width: 70%; height: 100px;" @click="changeImage('https://www.pi-energi.com/files/media/2020/09/IG_Proyek-GGCP1.jpg')">
                </button>
            
        </div>
    </div>
        <!-- <div class="row">
            <div class="col-md-3">
                <img class="img-fluid" src="https://www.pi-energi.com/files/media/2020/09/DJI_0228.jpg">
                <img class="img-fluid" src="https://www.pi-energi.com/files/media/2020/09/GGCP_Agustus5.jpg">
                <img class="img-fluid" src="https://www.pi-energi.com/files/media/2020/09/GGCP_Maret2.jpg">
            </div>
            <div class="col-md-3">
                <img class="img-fluid" src="https://www.pi-energi.com/files/media/2020/09/GGCP_Okt3.jpg">
                <img class="img-fluid" src="https://www.pi-energi.com/files/media/2020/09/IG_Pekerja-GGCP2.jpg">
                <img class="img-fluid" src="https://www.pi-energi.com/files/media/2020/09/IG_Proyek-GGCP1.jpg">
            </div>
            <div class="col-md-6">
                <h2>GRESIK GAS COGENERATION PLANT(GGCP)</h2>
                <p>PT Pupuk Indonesia Utilitas (PI Utilitas) atau sebelumnya bernama PT Pupuk Indonesia Energi didirikan berdasarkan Akta No. 11 tanggal 18 Agustus 2014. Di tahun yang sama terjadi pula inisiasi Pembangunan Gresik Gas Cogeneration Plant (GGCP di Gresik, Jawa Timur). Pada 2015, PI Utilitas mulai melakukan Konstruksi Fisik Gresik Gas Cogeneration Plant. Tepat pada April 2018, Pabrik Gresik Gas Cogeneration Plant (GGCP) resmi beroperasi secara komersil hingga saat ini.</p>
                <p>Proyek Gresik Gas Cogeneration Plant (GGCP) yang sudah mulai dijalankan dan dioptimalkan di tahun 2018 senantiasa mendorong Kinerja PI Utilitas untuk terus unggul dalam persaingan usaha tanpa melupakan tanggung jawabnya sebagai korporasi yang tumbuh di tengah publik. Dengan mengedepankan prinsip penerapan bisnis yang tetap memperhatikan lingkungan, PI Utilitas yakin akan mampu terus tumbuh menjadi korporasi yang berkelanjutan dan berintegritas tinggi.</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-6">
                <h2>KALTIM DAYA MANDIRI</h2>
                <p>Kaltim Daya Mandiri (KDM) adalah salah satu perusahaan utilitas dan Energi yang didirikan dengan tujuan untuk menyuplai kebutuhan utilitas pada fasilitas produksi dan perumahan PT. Pupuk Kaltim serta perusahan-perusahaan lain yang berada di lingkungan Kaltim Industrial Estate.</p>
            </div>
            <div class="col-md-3">
                <img class="img-fluid" src="https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-5100-Final.jpg">
                <img class="img-fluid" src="https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-7748-Final.jpg">
                <img class="img-fluid" src="https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-8041-Final.jpg">
            </div>
            <div class="col-md-3">
                <img class="img-fluid" src="https://www.pi-energi.com/files/media/2020/09/KDM_4.jpg">
                <img class="img-fluid" src="https://www.pi-energi.com/files/media/2020/09/KDM_1.jpg">
            </div>
        </div> -->
    </div>

    <div class="bg-shade fit-bg d-flex align-items-center" :class="{ 'fade-transition': isTransitioning }"  :style="{ backgroundImage: `url(${selectedImage2})` }">
    <div class="container p-3">
                    
        <div class="row d-flex align-items-center mb-5">
            <div class="col-md-6 place-holder">
                <img class="img-fluid" :src="selectedImage2">
            </div>
            <div class="col-md-6" style="color: white;">
                <h2>KALTIM DAYA MANDIRI</h2>
                <p>Kaltim Daya Mandiri (KDM) adalah salah satu perusahaan utilitas dan Energi yang didirikan dengan tujuan untuk menyuplai kebutuhan utilitas pada fasilitas produksi dan perumahan PT. Pupuk Kaltim serta perusahan-perusahaan lain yang berada di lingkungan Kaltim Industrial Estate.</p>
            </div>
        </div>

        <div class="justify-content-end flex-container">
            
                <button class="btn ms-2" v-if="selectedImage2 !== 'https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-5100-Final.jpg'" style="background: url('https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-5100-Final.jpg') no-repeat center center / cover; width: 60%; height: 100px;" @click="changeImage2('https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-5100-Final.jpg')">
                </button>
        
                <button class="btn ms-2" v-if="selectedImage2 !== 'https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-7748-Final.jpg'" style="background: url('https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-7748-Final.jpg') no-repeat center center / cover; width: 60%; height: 100px;" @click="changeImage2('https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-7748-Final.jpg')">
                </button>
            
                <button class="btn ms-2" v-if="selectedImage2 !== 'https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-8041-Final.jpg'" style="background: url('https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-8041-Final.jpg') no-repeat center center / cover; width: 60%; height: 100px;" @click="changeImage2('https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-8041-Final.jpg')">
                </button>
            
                <button class="btn ms-2" v-if="selectedImage2 !== 'https://www.pi-energi.com/files/media/2020/09/KDM_4.jpg'"
                style="background: url('https://www.pi-energi.com/files/media/2020/09/KDM_4.jpg') no-repeat center center / cover; width: 60%; height: 100px;" @click="changeImage2('https://www.pi-energi.com/files/media/2020/09/KDM_4.jpg')">
                </button>
            
                <button class="btn ms-2" v-if="selectedImage2 !== 'https://www.pi-energi.com/files/media/2020/09/KDM_1.jpg'" style="background: url('https://www.pi-energi.com/files/media/2020/09/KDM_1.jpg') no-repeat center center / cover; width: 60%; height: 100px;" @click="changeImage2('https://www.pi-energi.com/files/media/2020/09/KDM_1.jpg')">
                </button>
            
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        name: 'TryThis',
        data() {
            return {
                selectedImage: 'https://www.pi-energi.com/files/media/2020/09/DJI_0228.jpg', // Default image
                selectedImage2: 'https://www.pi-utilitas.com/files/media/2020/09/KDM-BontangFactory-5100-Final.jpg',
                isTransitioning: false,
            };
        },
        watch: {
            selectedImage() {
                this.isTransitioning = true;
                setTimeout(() => {
                    this.isTransitioning = false;
                }, 1000); // Transition duration
            },
        },
        methods: {
            changeImage(url) {
                this.selectedImage = url;
            },
            changeImage2(url) {
                this.selectedImage2 = url;
            },
        },
    }
</script>
<style scoped>
    .img-fixed {
        width: 80%; /* Adjust as needed */
        height: 100px; /* Adjust as needed */
        object-fit: cover;
    }

    .bg-shade{
        position: relative;
    }

    .bg-shade::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        /* background: linear-gradient(to right, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 70%); */

    }

    .fit-bg {
        height: 100vh; /* Adjust this value to your desired height */
        object-fit: cover;
    }

    .flex-container {
        display: flex;
        justify-content: flex-end;
        width: 75%;
        margin: auto;
    }
    .container {
        position: relative;
    }

    .fade-transition {
        transition: background-image 1s ease-in-out;
    }
</style>