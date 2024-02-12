<template>
    <div class="struktur">
        <NavBar/>
        <CompanyStructure/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import CompanyStructure from '@/components/CompanyStructure.vue'

    export default {
        name: 'strukturPerusahaan',
        components: {
            NavBar,
            FooterSection,
            CompanyStructure
        },
    }
</script>