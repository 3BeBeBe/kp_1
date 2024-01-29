<template>
    <div class="buzz">
        <NavBar/>
        <BulletinBuzz/>
        <FooterSection/>    
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import BulletinBuzz from '@/components/BulletinBUZZ.vue'

    export default {
        name: 'BUZZView',
        components: {
            NavBar,
            FooterSection,
            BulletinBuzz
        }
    }
</script>
