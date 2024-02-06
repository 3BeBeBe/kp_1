<template>
    <div class="container mt-5">
        <h2 class="text-center" style="color: #084e8b; font-weight: 700; font-style: italic;">Struktur Perusahaan</h2>
        <img
            src="../assets/strukturorganiasinew.jpg"
            class="img-fluid zoomable-image d-block mx-auto"
            alt=""
        />
    </div>
</template>

<script>
    export default {
        name: 'CompanyStructure'
    }
</script>

<style scoped>
    .zoomable-image {
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .zoomable-image:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
</style>
