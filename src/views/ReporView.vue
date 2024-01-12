<template>
    <div class="/laporan">
        <NavBar/>
        <img src="../assets/Carousal/Laporan.jpg" class="d-block w-100">
        <ReportContent/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import ReportContent from '@/components/ReportContent.vue'

    export default {
        name: 'RaporView',
        components: {
            NavBar,
            FooterSection,
            ReportContent
        }
    }
</script>