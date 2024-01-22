<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <button class="card">
                    <img src="../assets/Galeri/Bantuan Sarana Olahraga Untuk SDN Roomo Gresik/1.jpeg" alt="Card image">
                    <div class="card-overlay">
                        <div class="card-overlay-text">
                            <h4>Bantuan Sarana Olahraga Untuk SDN Roomo Gresik</h4>
                        </div>
                    </div>
                </button>
            </div>
            <div class="col-md-4">
                <button class="card">
                    <img src="../assets/Galeri/Bantuan Untuk TK PIKPG/1.jpeg" alt="Card image">
                    <div class="card-overlay">
                        <div class="card-overlay-text">                        
                            <h4>Bantuan Untuk TK PIKPG</h4>
                        </div>
                    </div>
                </button>
            </div>
            <div class="col-md-4">
                <button class="card">
                    <img src="../assets/Galeri/Donor Darah Sewindu PI Utilitas/1.jpg" alt="Card image">
                    <div class="card-overlay">
                        <div class="card-overlay-text">
                            <h4>Donor Darah Sewindu PI Utilitas</h4>
                        </div>
                    </div>
                </button>
            </div>
            <!-- Add more columns as needed... -->
        </div>


        <div class="row mt-4">
            <div class="col-md-4">
                <button class="card">
                    <img src="../assets/Galeri/Gebyar Ramadhan Bersama PMI/1.jpg" alt="Card image">
                    <div class="card-overlay">
                        <div class="card-overlay-text">
                            <h4>Gebyar Ramadhan Bersama PMI</h4>
                        </div>
                    </div>
                </button>
            </div>
            <div class="col-md-4">
                <button class="card">
                    <img src="../assets/Galeri/Gelar Buah Nusantara/1.jpg" alt="Card image">
                    <div class="card-overlay">
                        <div class="card-overlay-text">                        
                            <h4>Gelar Buah Nusantara</h4>
                        </div>
                    </div>
                </button>
            </div>
            <div class="col-md-4">
                <button class="card">
                    <img src="../assets/Galeri/Idul Adha 2019/1.jpeg" alt="Card image">
                    <div class="card-overlay">
                        <div class="card-overlay-text">
                            <h4>Idul Adha 2019</h4>
                        </div>
                    </div>
                </button>
            </div>
            <!-- Add more columns as needed... -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompanyValue'
}
</script>

<style scoped>
    .card {
        position: relative;
        height: 200px;
        width: 100%;
        border: none;
        padding: 0;
        background: none;
    }
    .card img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .card-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .card-overlay-text {
        color: #fff; 
        display: flex; 
        justify-content: flex-start; /* Align items to the left */
        align-items: flex-end; 
        padding: 30px;
        text-align: left;
    }
</style>
