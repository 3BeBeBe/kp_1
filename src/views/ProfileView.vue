<template>
  <div class="profile">
    <NavBar/>
    <img src="https://www.pi-energi.com/files/media/2020/09/image-banner-profile.jpg" class="d-block w-100">
    <CompanyHistory/>
    <VisionMision/>
    <CompanyValue/>
    <h2 class="text-center">Manajemen</h2>
    <ComisariesList/>
    <DirectorsList/>
    <CompanyStructure/>
    <AwardInfo/>
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
      AwardInfo
    }
  }
</script>