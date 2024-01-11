<template>
    <div class="galeri">
        <NavBar/>
        <GaleryContent/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import GaleryContent from '@/components/GaleryContent.vue'

    export default {
        name: 'GalerView',
        components: {
            NavBar,
            FooterSection,
            GaleryContent
        }
    }
</script>