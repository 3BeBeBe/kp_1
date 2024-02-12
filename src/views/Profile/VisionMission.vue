<template>
    <div class="visimisi">
        <NavBar/>
        <VisionMision/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import VisionMision from '@/components/VisionMision.vue'

    export default {
        name: 'visiMisi',
        components: {
            NavBar,
            FooterSection,
            VisionMision
        },
    }
</script>