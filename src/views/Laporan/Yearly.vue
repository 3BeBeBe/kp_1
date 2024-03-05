<template>
    <div class="/laporan">
        <NavBar/>
        <ReportYearly/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import ReportYearly from '@/components/ReportYearly.vue'

    export default {
        name: 'YearlyView',
        components: {
            NavBar,
            FooterSection,
            ReportYearly
        }
    }
</script>