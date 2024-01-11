<template>
    <div class="media">
        <NavBar />
        <FooterSection />
        <h1>Media</h1>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'

    export default {
        name: 'MediaView',
        components: {
            NavBar,
            FooterSection
        }
    }
</script>