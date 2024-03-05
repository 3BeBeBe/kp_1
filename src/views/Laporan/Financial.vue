<template>
    <div class="/laporan">
        <NavBar/>
        <ReportMoney/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import ReportMoney from '@/components/ReportMoney.vue'

    export default {
        name: 'FinancialView',
        components: {
            NavBar,
            FooterSection,
            ReportMoney
        }
    }
</script>