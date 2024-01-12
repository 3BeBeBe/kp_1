<template>
  <div class="profile">
    <NavBar/>
    <img src="../assets/Carousal/Profile.jpg" class="d-block w-100">
    <CompanyHistory/>
    <VisionMision/>
    <CompanyValue/>
    <h2 class="text-center">MANAJEMEN</h2>
    <DirectorsList/>
    <ComisariesList/>    
    <CompanyStructure/>
    <AwardInfo/>
    <FooterSection/>
  </div>
</template>
  
<script>
  import NavBar from '@/components/NavBar.vue';
  import CompanyHistory from '@/components/CompanyHistory.vue';
  import CompanyValue from '@/components/CompanyValue.vue';
  import ComisariesList from '@/components/ComisariesList.vue';
  import DirectorsList from '@/components/DirectorsList.vue';
  import CompanyStructure from '@/components/CompanyStructure.vue';
  import VisionMision from '@/components/VisionMision.vue';  
  import AwardInfo from '@/components/AwardInfo.vue';
  import FooterSection from '@/components/FooterSection.vue';
  

  export default {
    name: 'ProfileView',
    components: {
      NavBar,
      CompanyValue,
      CompanyHistory,
      ComisariesList,
      DirectorsList,
      CompanyStructure,
      VisionMision,
      AwardInfo,
      FooterSection
    }
  }
</script>