<template>
    <div class="news">
        <NavBar/>
        <NewsCarousal/>
        <ArticleSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue';
    import NewsCarousal from '@/components/NewsCarousal.vue';
    import ArticleSection from '@/components/ArticleSection.vue';

    export default {
        name: 'NewsView',
        components: {
            NavBar,
            NewsCarousal,
            ArticleSection
        }
    }

</script>