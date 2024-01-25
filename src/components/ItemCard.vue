<template>
    <div class="continer m-5">
        <div class="row justify-content-center">
            <div class="col-md-3 mb-3">

                <router-link to="/pabrik" style="text-decoration: none;"> <div class="card">
                    <img src="https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg" class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">Pembangkit Listrik</h5>
                        <p class="card-text">Router-link to pabrik implemented</p>
                    </div>
                </div>
                </router-link>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg" class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">ntah ini apa</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg" class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">card size 600px</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ItemCard'
    }
</script>

<style scoped>
.card {
    width: 100%;
    height: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adjust as needed */
    transform: scale(1.1);
}
</style>