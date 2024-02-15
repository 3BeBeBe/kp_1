<template>
    <div class="sejarah">
        <NavBar/>
        <!-- <div class="image-container">
            <img src="@/assets/Carousal/Profile.jpg" class="d-block w-100">
            <div class="image-overlay"></div>
        </div> -->
        <CompanyHistory/>
        <FooterSection/>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import CompanyHistory from '@/components/CompanyHistory.vue'

    export default {
        name: 'sejarahPerusahaan',
        components: {
            NavBar,
            FooterSection,
            CompanyHistory
        },
    }
</script>
<style scoped>
.image-container {
  position: relative;
}
.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%; /* Adjust this value to control the height of the fade */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(8, 78, 139, 0.5) 50%, rgba(7, 63, 111, 0.9) 100%);
}
.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 300px);
  text-align: center;
  color: white; /* Adjust text color as needed */
}
.image-text {
  color: #ffffff;
}
</style>