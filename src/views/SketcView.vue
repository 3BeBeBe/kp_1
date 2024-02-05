<template>
    <div class="sketch">
        <NewsPages/>
        <TryThis/>
    </div>
</template>
<script>
    import NewsPages from '@/components/NewsPages.vue';
    import TryThis from '@/components/TryThis.vue'

    export default {
        name: "SketchView",
        components: {
            TryThis,
            NewsPages
        }
    }  
</script>