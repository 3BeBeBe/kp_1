<template>
    <div class="continer m-5">
        <div class="row justify-content-center">
            <div class="col-md-3 mb-3">

                <router-link to="/pabrik" style="text-decoration: none;"> <div class="card card-listrik">
                    <img src="https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg" class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="title-listrik card-title">Pembangkit Listrik</h5>
                        <p class="card-text">Router-link to pabrik implemented</p>
                    </div>
                </div>
                </router-link>
            </div>
            <div class="col-md-3">
                <div class="card card-steam">
                    <img src="https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg" class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="title-steam card-title">Steam</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-nitrogen">
                    <img src="https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg" class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="title-nitrogen card-title">Nitrogen</h5>
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
    height: 475px;
    
}

.card-listrik {
    box-shadow: 0 4px 8px rgba(8, 78, 139, 0.25);
    transition: transform 0.3s ease;
}

.card-listrik:hover {
    box-shadow: 0 8px 16px rgba(8, 78, 139, 0.5); /* Adjust as needed */
    transform: scale(1.1);
}
.card-steam {
    box-shadow: 0 4px 8px rgba(19, 147, 74, 0.25);
    transition: transform 0.3s ease;
}

.card-steam:hover {
    box-shadow: 0 8px 16px rgba(19, 147, 74, 0.5); /* Adjust as needed */
    transform: scale(1.1);
}
.card-nitrogen {
    box-shadow: 0 4px 8px rgba(221, 89, 37, 0.25);
    transition: transform 0.3s ease;
}

.card-nitrogen:hover {
    box-shadow: 0 8px 16px rgba(221, 89, 37, 0.5); /* Adjust as needed */
    transform: scale(1.1);
}
.card-title {
    text-align: center;
    font-style: italic;
    font-size: 32px;
    font-weight: 600;
}

.title-listrik {
    color: #084e8b;
}

.title-steam {
    color: #13934a;
}

.title-nitrogen {
    color: #dd5925;
}
</style>