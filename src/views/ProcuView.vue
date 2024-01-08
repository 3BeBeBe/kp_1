<template>
    <div class="pengadaan">
        <NavBar />
        <img class="img-fluid" src="https://www.pi-energi.com/files/media/2020/09/image-banner-csr.jpg">
        <ProcurementSection />
        <FooterSection />
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'    
    import ProcurementSection from '@/components/ProcurementSection.vue'
    import FooterSection from '@/components/FooterSection.vue'

    export default {
        name: 'ProcuView',
        components: {
            NavBar,
            ProcurementSection,
            FooterSection
        }
    }   
</script>