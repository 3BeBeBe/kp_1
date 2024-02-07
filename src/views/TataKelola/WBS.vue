<template>
    <div class="wbs">
        <NavBar/>
        <WhistleBlowing/>
        <FooterSection/>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import WhistleBlowing from '@/components/WhistleBlowing.vue'

    export default {
        name: 'WBS',
        components: {
            NavBar,
            FooterSection,
            WhistleBlowing
        }
    }
</script>