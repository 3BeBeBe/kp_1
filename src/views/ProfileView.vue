<template>
  <div class="profile">
    <NavBar/>
    <!-- <img src="../assets/Carousal/Profile.jpg" class="d-block w-100">
     -->
     <div class="image-container">
      <img src="../assets/Carousal/Profile.jpg" class="d-block w-100">
      <div class="image-overlay"></div>
      <div class="image-text">
        <h1 style="font-weight: 600; font-size: 72px; font-style: italic;">Profile</h1>
        <!-- <p>Discover our story and mission.</p> -->
      </div>
    </div>
    <CompanyHistory/>
    <VisionMision/>
    <CompanyValue/>
    <ManagementList/>
    <CompanyStructure/>
    <AwardInfo/>
    <FooterSection/>
  </div>
</template>
  
<script>
  import NavBar from '@/components/NavBar.vue';
  import CompanyHistory from '@/components/CompanyHistory.vue';
  import CompanyValue from '@/components/CompanyValue.vue';
  import ManagementList from '@/components/ManagementList.vue';
  import CompanyStructure from '@/components/CompanyStructure.vue';
  import VisionMision from '@/components/VisionMision.vue';  
  import AwardInfo from '@/components/AwardInfo.vue';
  import FooterSection from '@/components/FooterSection.vue';
  

  export default {
    name: 'ProfileView',
    components: {
      NavBar,
      CompanyValue,
      ManagementList,
      CompanyHistory,
      CompanyStructure,
      VisionMision,
      AwardInfo,
      FooterSection
    }
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
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(8, 78, 139, 0.5) 50%, rgba(8, 78, 139, 1) 100%);
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