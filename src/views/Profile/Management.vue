<template>
    <div class="manajemen">
        <NavBar/>
        <ManagementList/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import ManagementList from '@/components/ManagementList.vue'

    export default {
        name: 'manajemenDireksiKomisaris',
        components: {
            NavBar,
            FooterSection,
            ManagementList
        },
    }
</script>