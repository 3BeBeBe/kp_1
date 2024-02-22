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
        name: 'RaporView',
        components: {
            NavBar,
            FooterSection,
            ReportMoney
        }
    }
</script>