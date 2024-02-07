<template>
    <div class="audit">
        <NavBar/>
        <AuditCharter/>
        <FooterSection/>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import AuditCharter from '@/components/AuditCharter.vue'

    export default {
        name: 'AuditCharterPlaque',
        components: {
            NavBar,
            FooterSection,
            AuditCharter
        }
    }
</script>