<template>
    <div class="governance">
        <NavBar/>
        <!-- <img src="../assets/Carousal/TataKelola.jpg" class="d-block w-100"> -->
        <GoodCorporate/>
        <SOPTable/>
        <!-- <GCGAssesment/> -->
        <AuditCharter/>
        <CustomerComplaint/>
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
    import CustomerComplaint from '@/components/CustomerComplaint.vue';
    // import GCGAssesment from '@/components/GCGAssesment.vue';

    export default {
        name: 'GovernanceView',
        components: {
            NavBar,
            GoodCorporate,
            SOPTable,
            AuditCharter,
            WhistleBlowing,
            FooterSection,
            CustomerComplaint
            // GCGAssesment
        }
    }
</script>