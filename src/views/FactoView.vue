<template>
<div class="pabrik">
    <NavBar/>
    <FactoryInfo/>
    <FooterSection/>
    
</div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import FactoryInfo from '@/components/FactoryInfo.vue'

    export default {
        name: 'FactoView',
        components: {
            NavBar,
            FooterSection,
            FactoryInfo
        }
    }
</script>