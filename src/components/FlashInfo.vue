<template>
    <div class="container mt-5 mb-5">
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div>
                        <img src="https://www.pi-utilitas.com/files/media/2020/09/welocmeimage01.jpg" class="img-fluid">
                    </div>
                </div>
            
                <div class="col-md-7 d-flex align-items-center justify-content-center">
                    <div class="mb-4">         
                        <h2 style="color: #084e8b;"><i>Sekilas tentang kami</i></h2>              
                        <p class="text-justify">PT Pupuk Indonesia Utilitas (PI Utilitas) didirikan pada tanggal 14 Agustus 2014, guna memenuhi pasokan listrik dan steam untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta anak perusahaannya. 
                        </p>
                        <div class="d-inline-flex me-3">
                            <router-link to="/sejarah" class="btn btn-primary">Tentang Kami</router-link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
</template>

<script>
    export default {
        name: 'FlashInfo'
    }
</script>

<style scoped>
    .btn{
        border-radius: 0;
    }
</style>