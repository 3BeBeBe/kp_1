<template>
    <div class="penghargaan">
        <NavBar/>
        <AwardInfo/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import AwardInfo from '@/components/AwardInfo.vue'

    export default {
        name: 'penghargaanPerusahaan',
        components: {
            NavBar,
            FooterSection,
            AwardInfo
        },
    }
</script>