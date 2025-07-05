<template>
    <div class="background-overlay background-image-container">
        <div class=" overlay-text carousel-image d-flex justify-content-center align-items-center ">
            
            <div class="row d-flex justify-content-center align-items-center ">
                <div class="col-md-6">
                    <div class="image-container">
                        <img class="img-fixed" :src="selectedImage">
                    </div>
                </div>
                <div class="col-md-6">
                    <div>
                        <p class="text-with-line" style="font-weight: bold;">Selamat membaca {{ selectedImageDetails.name }}</p>
                        <h2 class="" style="font-weight: bold;">Buletin Setiap Semester</h2>
                        <h4 class="" style="font-weight: bold;">PT Pupuk Indonesia Utilitas</h4>
                        <p class="">{{ selectedImageDetails.subName }}</p>

                        <hr>

                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <a :href="selectedImageDetails.readMoreLink" download class="btn d-flex justify-content-center" style="width: 160px;">
                                    <div class="d-flex justify-content-center align-items-center" style="background-color: #0088ff; border: 3px solid #0088ff; border-radius: 50px 0px 0px 50px;">
                                        <p class="text-white m-0 p-1 ms-2" style="white-space: nowrap;"><b>{{ selectedImageDetails.name }}</b></p>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center" style="background-color: #ffffff; border: 3px solid #0088ff; border-radius: 0px 50px 50px 0px;">
                                        <img src="../assets/logo PIU.png" class="me-3" style="width: 50%; height: 100%; height: auto; display: block; margin: 5px auto;">
                                    </div>
                                </a>
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
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-5 mb-5">
        <div class="row">
            <div v-for="(images, index) in images" :key="index" class="col-md-3 d-flex justify-content-center align-items-start p-5">
                <button class="btn me-2" :class="{ 'selected': selectedImage === images.path }" :style="buttonStyle(images.path)" @click="selectImage(images.path)">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BulletinBuzz',
        data() {
            return {
                selectedImage: require('@/assets/bulletinBUZZ/edisi7.png'), 
                images: [
                    { name: 'BUZZ 09', subName: 'Strengthening the Foundation for A Better Future', path: require('@/assets/bulletinBUZZ/edisi9.png'), readMoreLink: '@/assets/bulletinBUZZ/PIU_buletin FULL FINAL_OKE OKE OKE_9.pdf', pages: '35', year: '2024' },
                    { name: 'BUZZ 08', subName: 'Powering the Future', path: require('@/assets/bulletinBUZZ/edisi8.png'), readMoreLink: '@/assets/bulletinBUZZ/PIU_buletin FULL FINAL_OKE OKE OKE_8.pdf', pages: '35', year: '2024' },
                    { name: 'BUZZ 07', subName: 'Amplify Teamwork Building Partership', path: require('@/assets/bulletinBUZZ/edisi7.png'), readMoreLink: '@/assets/bulletinBUZZ/PIU_buletin FULL FINAL_OKE OKE OKE.pdf', pages: '19', year: '2023' },
                    { name: 'BUZZ 06', subName: 'Transformasi & Penyelarasan Bisnis', path: require('@/assets/bulletinBUZZ/edisi6.png'), readMoreLink: '@/assets/bulletinBUZZ/PIU_BULETIN_JUNI-2023_FINAL-WEB_compressed.pdf', pages: '36', year: '2023' },
                    { name: 'BUZZ 05', subName: 'Tata Kelola & Strategi Baru Korporasi', path: require('@/assets/bulletinBUZZ/edisi5.png'), readMoreLink: '@/assets/bulletinBUZZ/PIU_BULETIN_DESEMBER-2022_FINAL-CETAK-HIRES.pdf', pages: '32', year: '2022' },
                    { name: 'BUZZ 04', subName: 'Energi Baru', path: require('@/assets/bulletinBUZZ/edisi4.png'), readMoreLink: '@/assets/bulletinBUZZ/BUZZ-edisi-4.pdf', pages: '32', year: '2021' },
                    { name: 'BUZZ 03', subName: 'Inovasi Di Tengah Pandemi', path: require('@/assets/bulletinBUZZ/edisi3.jpg'), readMoreLink: '@/assets/bulletinBUZZ/BUZZ-III-Agustus-2020.pdf', pages: '32', year: '2020' },
                    { name: 'BUZZ 02', subName: 'Inovasi Berkelanjutan', path: require('@/assets/bulletinBUZZ/edisi2.jpg'), readMoreLink: '@/assets/bulletinBUZZ/BUZZ-II-Februari-2019(1).pdf', pages: '32', year: '2019' },
                ]
            };
        },
        computed: {
            selectedImageDetails() {
                return this.images.find(images => images.path === this.selectedImage)
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

<style scoped>
    .image-container {
        width: 500px;  /* Set the width of the container */
        height: 400px;  /* Set the height of the container */
        overflow: hidden;  /* Hide the parts of the image that don't fit in the container */
    }

    .img-fixed {
        width: 500px;  /* Make the image fill the width of the container */
        height: 400px;  /* Make the image fill the height of the container */
        object-fit: contain;  /* Make the image maintain its aspect ratio */
    }
    /* .btn{
        border-radius: 0px;
    } */
    .selected {
        background-color: #007bff;
        border-color: #007bff;
    }

    .overlay-text {
        position: relative;
        color: rgb(255, 255, 255);
        /* font-size: 24px;
        font-weight: bold; */
    }

    .background-overlay {
        background-image: url('@/assets/Carousal/Laporan.jpg');
        background-size: cover; /* Cover the entire area of the component */
        background-position: center; /* Center the image */
        color: white;
    }

    .background-image-container {
        position: relative;
    }

    .background-image-container::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(3, 55, 100, 0.9);
        /* background: linear-gradient(to right, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 100%); */
    }
    .carousel-image {
        height: 75vh; /* Adjust this value to your desired height */
        object-fit: cover;
    }

    .text-with-line {
        position: relative;
        padding-left: 30px; /* Adjust as needed */
    }

    .text-with-line::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 20px; /* Adjust as needed */
        height: 2px; /* Adjust as needed */
        background-color: #db4c21;
    }
</style>