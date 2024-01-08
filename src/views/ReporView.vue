<template>
    <div class="/laporan">
        <NavBar/>
        <img src="https://www.pi-energi.com/files/media/2020/09/image-banner-report.jpg" class="d-block w-100">
        <YearlyReport/>
        <FinanceReport/>
        <ContinuityReport/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import YearlyReport from '@/components/YearlyReport.vue'
    import FinanceReport from '@/components/FinanceReport.vue'
    import ContinuityReport from '@/components/ContinuityReport.vue'
    import FooterSection from '@/components/FooterSection.vue'

    export default {
        name: 'RaporView',
        components: {
            NavBar,
            YearlyReport,   
            FinanceReport,
            ContinuityReport,
            FooterSection
        }
    }
</script>