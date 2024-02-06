<template>
    <!-- <div style="background-color: #143464;"> -->
    <div class="d-flex justify-content-center align-items-center">
        <div class="background-overlay"></div>
        <div class="background-image"></div>
        <div class="container mt-3 text-white">
            
            <div class="row justify-content-center">
                <div class="col-md-4 d-flex flex-column justify-content-center align-items-start">
                    <p class="">- Have fun reading {{ selectedImageDetails.name }}</p>
                    <h2 class="">Catch Phrase (Kalo bisa yang panjang dikit)</h2>
                    <p class="">{{ selectedImageDetails.subName }}</p>
                    <!-- <p class="">- {{ selectedImageDetails.name }}</p>
                    <h2 class="">{{ selectedImageDetails.subName }}</h2> -->

                    <hr>

                    <div class="row d-flex">
                        <div class="col-md-12">
                            <a :href="selectedImageDetails.readMoreLink" class="btn btn-primary mb-3" download>{{ selectedImageDetails.name }} Download</a>
                        </div>
                        <div class="col-md-6 col-4">
                            <p>Pages:</p>
                            <p>{{ selectedImageDetails.pages }} Pages</p>
                        </div>
                        <div class="col-md-6 col-4">
                            <p>Year:</p>
                            <p>{{ selectedImageDetails.year }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center align-items-start">
                    <img class="img-fixed" :src="selectedImage">
                    <!-- <img class="img-fixed" src="../assets/bulletinBUZZ/edisi6.png" > -->
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div v-for="(images, index) in images" :key="index" class="col-md-3 d-flex justify-content-center align-items-start p-5">
                <button class="btn me-2" :class="{ 'selected': selectedImage === images.path }" :style="buttonStyle(images.path)" @click="selectImage(images.path)">
                </button>
            </div>
        <!-- <div class="col-md-3 d-flex justify-content-center align-items-start p-5">
            <button class="btn me-2" :class="{ 'selected': selectedImage === require('@/assets/bulletinBUZZ/edisi6.png') }" :style="buttonStyle(require('@/assets/bulletinBUZZ/edisi6.png'))" @click="changeImage(require('@/assets/bulletinBUZZ/edisi6.png'))">
            </button>
        </div>
        <div class="col-md-3 d-flex justify-content-center align-items-start p-5">        
            <button class="btn me-2" :class="{ 'selected': selectedImage === require('@/assets/bulletinBUZZ/edisi5.png') }" :style="buttonStyle(require('@/assets/bulletinBUZZ/edisi5.png'))" @click="changeImage(require('@/assets/bulletinBUZZ/edisi5.png'))">
            </button>
        </div>
        <div class="col-md-3 d-flex justify-content-center align-items-start p-5">
            <button class="btn me-2" :class="{ 'selected': selectedImage === require('@/assets/bulletinBUZZ/edisi4.png') }" :style="buttonStyle(require('@/assets/bulletinBUZZ/edisi4.png'))" @click="changeImage(require('@/assets/bulletinBUZZ/edisi4.png'))">
            </button>
        </div>
        <div class="col-md-3 d-flex justify-content-center align-items-start p-5">
            <button class="btn me-2" :class="{ 'selected': selectedImage === require('@/assets/bulletinBUZZ/edisi3.jpg') }" :style="buttonStyle(require('@/assets/bulletinBUZZ/edisi3.jpg'))" @click="changeImage(require('@/assets/bulletinBUZZ/edisi3.jpg'))">
            </button>
        </div>
        <div class="col-md-3 d-flex justify-content-center align-items-start p-5">
            <button class="btn me-2" :class="{ 'selected': selectedImage === require('@/assets/bulletinBUZZ/edisi2.jpg') }" :style="buttonStyle(require('@/assets/bulletinBUZZ/edisi2.jpg'))" @click="changeImage(require('@/assets/bulletinBUZZ/edisi2.jpg'))">
            </button>
        </div> -->
        </div>
        <!-- <div class="row">
            <div class="col-md-3 d-flex justify-content-center align-items-start p-5">
                <button class="btn">
                <img class="img-fixed" src="../assets/bulletinBUZZ/edisi6.png" >
                </button>
            </div>
            <div class="col-md-3 d-flex justify-content-center align-items-start p-5">
                <button class="btn">
                <img class="img-fixed" src="../assets/bulletinBUZZ/edisi5.png" >
                </button>
            </div>
            <div class="col-md-3 d-flex justify-content-center align-items-start p-5">
                <button class="btn">
                <img class="img-fixed" src="../assets/bulletinBUZZ/edisi4.png" >
                </button>
            </div>
            <div class="col-md-3 d-flex justify-content-center align-items-start p-5">
                <button class="btn">
                <img class="img-fixed" src="../assets/bulletinBUZZ/edisi3.jpg" >
                </button>
            </div>
            <div class="col-md-3 d-flex justify-content-center align-items-start p-5">
                <button class="btn">
                <img class="img-fixed" src="../assets/bulletinBUZZ/edisi2.jpg" >
                </button>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'BulletinBuzz',
        data() {
            return {
                selectedImage: require('@/assets/bulletinBUZZ/edisi6.png'), 
                // selectedImage: null,
                images: [
                    { name: 'BUZZ 6', subName: 'Transformasi & Penyelarasan Bisnis', path: require('@/assets/bulletinBUZZ/edisi6.png'), readMoreLink: '@/assets/bulletinBUZZ/PIU_BULETIN_JUNI-2023_FINAL-WEB_compressed.pdf', pages: '36', year: '2023' },
                    { name: 'BUZZ 5', subName: 'Tata Kelola & Strategi Baru Korporasi', path: require('@/assets/bulletinBUZZ/edisi5.png'), readMoreLink: '@/assets/bulletinBUZZ/PIU_BULETIN_DESEMBER-2022_FINAL-CETAK-HIRES.pdf', pages: '32', year: '2022' },
                    { name: 'BUZZ 4', subName: 'Energi Baru', path: require('@/assets/bulletinBUZZ/edisi4.png'), readMoreLink: '@/assets/bulletinBUZZ/BUZZ-edisi-4.pdf', pages: '32', year: '2021' },
                    { name: 'BUZZ 3', subName: 'Inovasi Di Tengah Pandemi', path: require('@/assets/bulletinBUZZ/edisi3.jpg'), readMoreLink: '@/assets/bulletinBUZZ/BUZZ-III-Agustus-2020.pdf', pages: '32', year: '2020' },
                    { name: 'BUZZ 2', subName: 'Inovasi Berkelanjutan', path: require('@/assets/bulletinBUZZ/edisi2.jpg'), readMoreLink: '@/assets/bulletinBUZZ/BUZZ-II-Februari-2019(1).pdf', pages: '32', year: '2019' },
                    // {
                    //     name: 'edisi6',
                    //     readMoreLink: '@/assets/bulletinBUZZ/PIU_BULETIN_JUNI-2023_FINAL-WEB_compressed.pdf',
                    //     pages: '20 pages',
                    //     year: '2023'
                    // },
                    // {
                    //     name: 'edisi5',
                    //     readMoreLink: '@/assets/bulletinBUZZ/PIU_BULETIN_DESEMBER-2022_FINAL-CETAK-HIRES.pdf',
                    //     pages: '30 pages',
                    //     year: '2024'
                    // },
                    // Add more images as needed
                ]
            };
        },
        computed: {
            selectedImageDetails() {
                return this.images.find(images => images.path === this.selectedImage) || {
                    readMoreLink: '@/assets/bulletinBUZZ/PIU_BULETIN_JUNI-2023_FINAL-WEB_compressed.pdf',
                    pages: '20 pages',
                    year: '2023'
                };
            }
        },
        methods: {
            changeImage(imagePath) {
                this.selectedImage = imagePath;
            },
            buttonStyle(imagePath) {
                return {
                    background: `url(${imagePath}) no-repeat center center / cover`,
                    width: '100%',
                    height: '250px',
                };
            },
            selectImage(imagePath) {
                this.selectedImage = imagePath;
            },
        },
    }
</script>

<style>
    .size-image {
      max-width: 100%; /* Adjust the maximum width as needed */
      max-height: 500px; /* Adjust the maximum height as needed */
      height: auto; /* Maintain aspect ratio */
      display: block; /* Prevents extra space below inline images */
      margin: 0 auto; /* Center the image within the container */
    }
    .img-fixed {
        width: 80%;
        height: 400px;
        object-fit: cover;
    }
    .btn{
        border-radius: 0px;
    }
    .selected {
        background-color: #007bff;
        border-color: #007bff;
    }
    .background-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(8, 78, 139, 0.9); /* Use rgba for the background color with alpha channel */
        content: "";
        z-index: -1;
        opacity: 0.9;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("@/assets/Carousal/Laporan.jpg");
        background-blend-mode: overlay; /* Adjust the blend mode as needed */
        background-size: cover; /* Ensure the background image covers the container */
        z-index: -2;
    }
</style>