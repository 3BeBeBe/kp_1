<template>
    <div class="complaint">
        <NavBar/>
        <Complaint/>
        <FooterSection/>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import Complaint from '@/components/CustomerComplaint.vue'

    export default {
        name: 'CustomerComplaint',
        components: {
            NavBar,
            FooterSection,
            Complaint
        }
    }
</script>