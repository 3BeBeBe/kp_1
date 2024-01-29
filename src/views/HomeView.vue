<template>
  <div class="home">
    <NavBar/>
    <CarousalInfo/>
    <FlashInfo/>
    <ItemCard/>
    <!-- <FlashNews/> -->
    <NewsCarousal/>
    <FooterSection/>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemCard from '@/components/ItemCard.vue'
import CarousalInfo from '@/components/CarousalInfo.vue'
import NavBar from '@/components/NavBar.vue'
import FlashInfo from '@/components/FlashInfo.vue'
// import FlashNews from '@/components/FlashNews.vue'
import FooterSection from '@/components/FooterSection.vue'
import NewsCarousal from '@/components/NewsCarousal.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    CarousalInfo,
    ItemCard,
    FlashInfo,
    // FlashNews,
    FooterSection,
    NewsCarousal
  }
}
</script>
