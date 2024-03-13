<template>
    <div class="media">
        <NavBar />
        <ContactUs />
        <FooterSection />
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import ContactUs from '@/components/ContactUs.vue'

    export default {
        name: 'ContactView',
        components: {
            NavBar,
            FooterSection,
            ContactUs
        }
    }
</script>