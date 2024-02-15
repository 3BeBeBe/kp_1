<template>
    <div class="pengadaan">
        <NavBar />
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