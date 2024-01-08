<template>
  <div class="home">
    <NavBar/>
    <CarousalInfo/>
    <FlashInfo/>
    <ItemCard/>
    <FlashNews/>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemCard from '@/components/ItemCard.vue'
import CarousalInfo from '@/components/CarousalInfo.vue'
import NavBar from '@/components/NavBar.vue'
import FlashInfo from '@/components/FlashInfo.vue'
import FlashNews from '@/components/FlashNews.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    CarousalInfo,
    ItemCard,
    FlashInfo,
    FlashNews
  }
}
</script>
