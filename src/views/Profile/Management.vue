<template>
    <div class="manajemen">
        <NavBar/>
        <ComisariesInfo/>
        <DirectorInfo/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import DirectorInfo from '@/components/DirectorInfo.vue'
    import ComisariesInfo from '@/components/ComisariesInfo.vue'

    export default {
        name: 'manajemenDireksiKomisaris',
        components: {
            NavBar,
            FooterSection,
            DirectorInfo,
            ComisariesInfo
        },
    }
</script>