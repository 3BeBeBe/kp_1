<template>
    <div class="kdm">
        <NavBar/>
        <div class="slide-content bg-shade fit-bg d-flex align-items-center"  :style="{ backgroundImage: `url(${selectedImage})` }">
            <div class="container p-3">
                            
                <div class="row d-flex align-items-center mb-2">
                    <div class="col-md-6 place-holder">
                        <img class="img-fluid" :src="selectedImage">
                        <div class="flex-container mt-2">
                    
                            <button class="btn me-2" v-if="selectedImage !== require('@/assets/pabrik/KDM/kdm1.jpg')" :style="buttonStyle(require('@/assets/pabrik/KDM/kdm1.jpg'))" @click="changeImage(require('@/assets/pabrik/KDM/kdm1.jpg'))">
                            </button>
                        
                            <button class="btn me-2" v-if="selectedImage !== require('@/assets/pabrik/KDM/kdm2.jpg')" :style="buttonStyle(require('@/assets/pabrik/KDM/kdm2.jpg'))" @click="changeImage(require('@/assets/pabrik/KDM/kdm2.jpg'))">
                            </button>

                            <button class="btn me-2" v-if="selectedImage !== require('@/assets/pabrik/KDM/kdm3.jpg')" :style="buttonStyle(require('@/assets/pabrik/KDM/kdm3.jpg'))" @click="changeImage(require('@/assets/pabrik/KDM/kdm3.jpg'))">
                            </button>
                            
                            <button class="btn me-2" v-if="selectedImage !== require('@/assets/pabrik/KDM/kdm4.jpg')" :style="buttonStyle(require('@/assets/pabrik/KDM/kdm4.jpg'))" @click="changeImage(require('@/assets/pabrik/KDM/kdm4.jpg'))">
                            </button>
                            
                            <button class="btn me-2" v-if="selectedImage !== require('@/assets/pabrik/KDM/kdm5.jpg')" :style="buttonStyle(require('@/assets/pabrik/KDM/kdm5.jpg'))" @click="changeImage(require('@/assets/pabrik/KDM/kdm5.jpg'))">
                            </button>
                            
                        </div>
                        <div class="col-md-6" style="color: white;">
                        </div>
                        <h2 style="font-weight: 700;">Kaltim Daya Mandiri</h2>
                        <p>Kaltim Daya Mandiri (KDM) adalah salah satu perusahaan utilitas dan Energi yang didirikan dengan tujuan untuk menyuplai kebutuhan utilitas pada fasilitas produksi dan perumahan PT Pupuk Kaltim serta perusahan-perusahaan lain yang berada di lingkungan Kaltim Industrial Estate.</p>
                        <p>PT Kaltim Daya Mandiri (KDM), anak perusahaan PT Pupuk Indonesia Energi, berdiri sejak 14 September 1995. Awalnya, KDM menginvestasikan 1 unit Gas Turbine Generator (GTG) 34 MW, kemudian menambahkan 1 unit Heat Recovery Steam Generator (HRSG) 168 ton/jam dan 1 unit Demin Water Plant 156 m³/h pada tahun 2000. Pada tahun-tahun berikutnya, KDM membangun 1 unit Nitrogen Plant 500 Nm³/h, integrasi kelistrikan 200 MVA, dan 1 unit SWRO 2x50 m³/h. Di 2008, KDM membentuk anak usaha PT KDM Argo Energy dan mengakuisisi perusahaan energi terbarukan, PT Banyumas Energy Lestari dan PT Mitra Daya Kencana, pada 2015.</p>
                        <p>Bisnis utama KDM adalah memproduksi listrik, steam, demineralized water, nitrogen, dan jasa integrasi listrik untuk kebutuhan pabrik Pupuk Kaltim dan perusahaan-perusahaan yang ada di kawasan industri.</p>
                    </div>
                </div>
            </div>
        </div>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'

    export default {
        name: 'KDM',
        components: {
            NavBar,
            FooterSection
        },
        data() {
            return {
                selectedImage: require('@/assets/pabrik/KDM/kdm1.jpg'),
            };
        },
        methods: {
            changeImage(url) {
                this.selectedImage = url;
            },
            buttonStyle(url) {
                return {
                    background: `url(${url}) no-repeat center center / cover`,
                    width: '15%',
                    height: '80px',
                };
            },
        },
    }
</script>
<style scoped>
    .btn {
        border-radius: 0px;
    }
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
        background: rgba(0, 0, 0, 0.7);
        /* background: linear-gradient(to right, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 70%); */
    }
    .fit-bg {
        height: 90vh; /* Adjust this value to your desired height */
        object-fit: cover;
    }
    .flex-container {
        display: flex;
        /* width: 75%; */
        margin: auto;
    }
    .container {
        position: relative;
    }
    .factory-info {
        transform: translate(0%, -75px);
        font-weight: 600;
        font-size: 72px;
        font-style: italic;
    }
    @media (max-width: 576px){
        .fit-bg {
            height: 100%; /* Adjust this value to your desired height */
            object-fit: cover;
        }
    }
</style>