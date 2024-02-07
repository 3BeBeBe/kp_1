<template>
    <div class="governance">
        <NavBar/>
        <Governance/>
        <SOPTableVue/>
        <FooterSection/>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import Governance from '@/components/GoodCorporate.vue'
    import SOPTableVue from '@/components/SOPTable.vue';

    export default {
        name: 'GovernanceCorporate',
        components: {
            NavBar,
            FooterSection,
            Governance,
            SOPTableVue
        }
    }
</script>