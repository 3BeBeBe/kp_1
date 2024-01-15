<template>
    <div class="/pers">
        <NavBar/>
        <PersContent/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import PersContent from '@/components/PersContent.vue'

    export default {
        name: 'PersView',
        components: {
            NavBar,
            FooterSection,
            PersContent
        }
    }
</script>