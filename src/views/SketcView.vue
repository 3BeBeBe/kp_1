<template>
    <div class="sketch">
        <TryThis/>
        <NewsPages/>
    </div>
</template>
<script>
    import TryThis from '@/components/TryThis.vue'
    import NewsPages from '@/components/NewsPages.vue';
    export default {
        name: "SketchView",
        components: {
            TryThis,
            NewsPages
        }
    }  
</script>