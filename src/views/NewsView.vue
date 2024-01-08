<template>
    <div class="news">
        <NavBar/>
        <NewsCarousal/>
        <NewsContents/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue';
    import NewsCarousal from '@/components/NewsCarousal.vue';
    import NewsContents from '@/components/NewsContents.vue';

    export default {
        name: 'NewsView',
        components: {
            NavBar,
            NewsCarousal,
            NewsContents
        }
    }
</script>