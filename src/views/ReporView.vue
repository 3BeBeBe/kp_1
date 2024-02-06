<template>
    <div class="/laporan">
        <NavBar/>
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