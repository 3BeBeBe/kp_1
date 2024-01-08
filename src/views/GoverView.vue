<template>
    <div class="governance">
        <NavBar/>
        <img src="https://www.pi-energi.com/files/media/2020/09/image-banner-gcg.jpg" class="d-block w-100">
        <GoodCorporate/>
        <SOPTable/>
        <AuditCharter/>
        <WhistleBlowing/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import GoodCorporate from '@/components/GoodCorporate.vue'
    import SOPTable from '@/components/SOPTable.vue';
    import AuditCharter from '@/components/AuditCharter.vue';
    import WhistleBlowing from '@/components/WhistleBlowing.vue';
    import FooterSection from '@/components/FooterSection.vue';

    export default {
        name: 'GovernanceView',
        components: {
            NavBar,
            GoodCorporate,
            SOPTable,
            AuditCharter,
            WhistleBlowing,
            FooterSection
        }
    }
</script>