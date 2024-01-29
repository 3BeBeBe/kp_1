<template>
    <div class="container">
        <div class="row mt-4 ">
            <div class="col-md-4">
                <img class="img-fluid size-image mt-2" src="../assets/bulletinBUZZ/edisi6.png">
                <h4><a href="../assets/bulletinBUZZ/PIU_BULETIN_JUNI-2023_FINAL-WEB_compressed.pdf" target="_blank">BUZZ VI</a></h4>
            </div>
            <div class="col-md-4">
                <img class="img-fluid size-image mt-2" src="../assets/bulletinBUZZ/edisi5.png">
                <h4><a href="../assets/bulletinBUZZ/PIU_BULETIN_DESEMBER-2022_FINAL-CETAK-HIRES.pdf" target="_blank">BUZZ V</a></h4>
            </div>
            <div class="col-md-4">
                <img class="img-fluid size-image mt-2" src="../assets/bulletinBUZZ/edisi4.png">
                <h4><a href="../assets/bulletinBUZZ/BUZZ-edisi-4.pdf" target="_blank">BUZZ VI</a></h4>
            </div>
            <div class="col-md-4">
                <img class="img-fluid size-image mt-2" src="../assets/bulletinBUZZ/edisi3.jpg">
                <h4><a href="../assets/bulletinBUZZ/BUZZ-III-Agustus-2020.pdf" target="_blank">BUZZ III</a></h4>
            </div>
            <div class="col-md-4">
                <img class="img-fluid size-image mt-2" src="../assets/bulletinBUZZ/edisi2.jpg">
                <h4><a href="../assets/bulletinBUZZ/BUZZ-II-Februari-2019(1).pdf" target="_blank">BUZZ II</a></h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BulletinBuzz'
    }
</script>

<style>
  .size-image {
      max-width: 100%; /* Adjust the maximum width as needed */
      max-height: 500px; /* Adjust the maximum height as needed */
      height: auto; /* Maintain aspect ratio */
      display: block; /* Prevents extra space below inline images */
      margin: 0 auto; /* Center the image within the container */
    }
</style>