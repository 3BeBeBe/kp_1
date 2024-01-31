<template>
    <div class="container mt-0">
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-md-8">
                <h2 class="card-title"><i><b>Visi</b></i></h2>
                <h4 class="card-text">Menjadi Perusahaan Energi dan Utilitas terintegrasi kelas dunia untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta anak perusahaannya.</h4>    
            </div>
            <div class="col-md-4">
                <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/11/2023/09/30/6B977B2A-D585-4BB6-A126-B5D8A8E355BE-4088439324.jpeg" class="img-fluid img-fixed">
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-md-4">
                <img src="https://www.pi-utilitas.com/files/media/2020/09/image-mission.jpg" class="img-fluid img-fixed">
            </div>
            <div class="col-md-8">
                <h2 class="card-title"> 
                    <i class="colored-text-white"><b>Misi</b></i>
                </h2>
                <ul class="card-text justify-content-center">
                    <li class="colored-text-white">
                        Melakukan usaha dalam bidang penyediaan energi dan utilitas.
                    </li>
                    <li class="colored-text-white">
                        Memberikan nilai tambah bagi stakeholders.
                    </li>
                    <li>
                        Mengutamakan keselamatan dan kesehatan kerja serta menjaga pelestarian lingkungan hidup dalam setiap kegiatan operasional.
                    </li>
                    <li>
                        Memberikan kontribusi terhadap ketahanan energi nasional.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TryThis'
    }
</script>
<style scoped>
    .img-fixed {
        width: 100%; /* Adjust as needed */
        height: 250px; /* Adjust as needed */
        object-fit: cover;
    }

    .card-custom-color {
        background-color: #123456;
        color: #abcdef;
    }
    
    .intersect-card-1 {
        position: absolute;
        top: 200px; /* Adjust this value to change the vertical position of the second card */
        right: 50px; /* Adjust this value to change the horizontal position of the second card */
    }

    .intersect-card-2 {
        position: absolute;
        top: 400px; /* Adjust this value to change the vertical position of the third card */
        left: 50; /* Adjust this value to change the horizontal position of the third card */
    }
</style>