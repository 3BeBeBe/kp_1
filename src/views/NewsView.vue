<template>
    <div class="news">
        <NavBar/>
        <NewsCarousal/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue';
    import NewsCarousal from '@/components/NewsCarousal.vue';

    export default {
        name: 'NewsView',
        components: {
            NavBar,
            NewsCarousal
        }
    }

</script>