<template>
    <div class="nilai">
        <NavBar/>
        <CompanyValue/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import CompanyValue from '@/components/CompanyValue.vue'

    export default {
        name: 'nilaiNilai',
        components: {
            NavBar,
            FooterSection,
            CompanyValue
        },
    }
</script>