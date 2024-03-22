<template>
    <div class="another-container">
        <div class="container" style="background-color: white;">
            <h2 class="text-center mt-5" style="color: #084e8b; font-weight: 700; font-style: italic;">Struktur Perusahaan</h2>
            <hr><br>
            <!-- <img
                src="../assets/strukturorganiasinew.jpg"
                class="img-fluid zoomable-image d-block mx-auto"
                alt=""
            />
            <br/> -->
            <!-- <img
                src="../assets/Struktur/TEST_1.png"
                class="img-fluid zoomable-image d-block mx-auto"
                alt=""
            />
            <br/> -->
            <img
                src="../assets/Struktur/TEST_2.png"
                class="img-fluid zoomable-image d-block mx-auto mb-5"
                alt=""
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompanyStructure'
    }
</script>

<style scoped>
    .container {
        padding: 20px;
        background-color: white;
    }

    .zoomable-image {
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .zoomable-image:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .another-container {
        background-image: url("../assets/Pattern_2.png");
        background-size: cover;
        display: flex;
        background-repeat: no-repeat;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1; /* Ensure the container is above the overlay */
        min-height: 65vh;
    }

    .another-container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        z-index: -1; /* Ensure the overlay is behind the container */
    }
</style>
