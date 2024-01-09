<template>
    <div class="/laporan">
        <NavBar/>
        <img src="https://www.pi-energi.com/files/media/2020/09/image-banner-report.jpg" class="d-block w-100">
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