<template>
  <div class="home">
    <!-- <NavBar/> -->
    <VideoCaraousal/>
    <!-- <FlashInfo/> -->
    <!-- <ItemCard/> -->
    <!-- <ItemCardTester/> -->
    <!-- <FlashNews/> -->
    <NewsCarousal/>
    <!-- <NewsCarousal2/> -->
    <FooterSection/>
  </div>
</template>

<script>
// @ is an alias to /src
// import ItemCard from '@/components/ItemCard.vue'
import VideoCaraousal from '@/components/VideoCaraousal.vue'
// import NavBar from '@/components/NavBar.vue'
// import FlashInfo from '@/components/FlashInfo.vue'
// import FlashNews from '@/components/FlashNews.vue'
import FooterSection from '@/components/FooterSection.vue'
import NewsCarousal from '@/components/NewsCarousal.vue'
// import NewsCarousal2 from '@/components/NewsCarousal2.vue'
// import ItemCardTester from '@/components/ItemCardTester.vue'

export default {
  name: 'HomeView',
  components: {
    // NavBar,
    VideoCaraousal,
    // ItemCard,
    // FlashInfo,
    // FlashNews,
    FooterSection,
    NewsCarousal,
    // NewsCarousal2,
    // ItemCardTester
  }
}
</script>
