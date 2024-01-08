<template>
    <div class="pengadaan">
        <NavBar />
        <img class="img-fluid" src="https://www.pi-energi.com/files/media/2020/09/image-banner-csr.jpg">
        <ProcurementSection />
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'    
    import ProcurementSection from '@/components/ProcurementSection.vue'

    export default {
        name: 'ProcuView',
        components: {
            NavBar,
            ProcurementSection
        }
    }   
</script>