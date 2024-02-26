<template>
  <div class="home">
    <!-- <NavBar/> -->
    <VideoCaraousal/>
    <!-- <FlashInfo/> -->
    <!-- <ItemCard/> -->
    <!-- <ItemCardTester/> -->
    <!-- <FlashNews/> -->
    <PillarTest/>
    <BusinessProfile/>
    <NewsCarousal/>
    <!-- <NewsCarousal2/> -->
    <FooterSection/>
  </div>
</template>

<script>
// @ is an alias to /src
// import ItemCard from '@/components/ItemCard.vue'
import VideoCaraousal from '@/components/VideoCaraousal.vue'
import PillarTest from '@/components/PillarTest.vue'
// import NavBar from '@/components/NavBar.vue'
// import FlashInfo from '@/components/FlashInfo.vue'
// import FlashNews from '@/components/FlashNews.vue'
import FooterSection from '@/components/FooterSection.vue'
import NewsCarousal from '@/components/NewsCarousal.vue'
// import NewsCarousal2 from '@/components/NewsCarousal2.vue'
// import ItemCardTester from '@/components/ItemCardTester.vue'
import BusinessProfile from '@/components/BusinessProfile.vue'

export default {
  name: 'HomeView',
  components: {
    // NavBar,
    VideoCaraousal,
    PillarTest,
    // ItemCard,
    // FlashInfo,
    // FlashNews,
    FooterSection,
    NewsCarousal,
    // NewsCarousal2,
    // ItemCardTester
    BusinessProfile
  }
}
</script>
