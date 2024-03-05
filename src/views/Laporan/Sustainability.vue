<template>
    <div class="/laporan">
        <NavBar/>
        <ReportSustainability/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import ReportSustainability from '@/components/ReportSustainability.vue'

    export default {
        name: 'SustainabilityView',
        components: {
            NavBar,
            FooterSection,
            ReportSustainability
        }
    }
</script>