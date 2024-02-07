<template>
    <div class="procurement">
        <NavBar/>
        <Procurement/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import Procurement from '@/components/ProcurementSection.vue'

    export default {
        name: 'ProcurementRequest',
        components: {
            NavBar,
            FooterSection,
            Procurement
        }
    }
</script>