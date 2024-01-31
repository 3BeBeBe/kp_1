<template>
    <div class="company-history-container">
      <div class="background-overlay"></div>
      <div class="background-image"></div>
      <div class="container mt-0">
        <h2 class="fade-in-right" ref="fadeInElement3"><i><b>Sejarah Perusahaan</b></i></h2>
        <div class="row justify-content-center">
          
          <div class="col-md-6 pr-md-5 fade-in-right" ref="fadeInElement1">
            
            <br>
            <div class="rounded-image">
              <img src="https://cdn0-production-images-kly.akamaized.net/woCFFqsNnzDtDC1MsvT5AwPbZIQ=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4322775/original/070909200_1676296324-IMG-20230213-WA0014.jpg" class="img-fluid">
            </div>
            <p class="text-justify">Perusahaan yang bergerak dalam bidang industri penghasil energi dan utilitas untuk seluruh Anak Perusahaan yang bernaung di dalam kelompok usaha PT Pupuk Indonesia (Persero) yang bergerak di bidang industri pupuk dan agrokimia.</p>
            <p class="text-justify">Pendirian Perusahaan dimaksudkan sebagai langkah untuk meningkatkan daya saing BUMN Pupuk dan mengupayakan efisiensi biaya produksi pupuk oleh BUMN Pupuk melalui usaha penggunaan teknologi yang ramah lingkungan dan melakukan penghematan bahan baku dan energi.</p>
          </div>
  
          <div class="col-md-6 pl-mb-5 fade-in-left" ref="fadeInElement2">
            <div class="mb-4">
              <br>
              <p class="text-justify">Dengan kecenderungan produksi Gas Bumi Nasional yang menurun serta tren harga gas yang terus meningkat, dan untuk menjalankan amanat Instruksi Presiden No. 2 Tahun 2010 tentang revitalisasi industri pupuk guna tetap menjaga keberlangsungan usaha dan daya saing Perusahaan Pupuk di grup PIHC, PT Pupuk Indoensia (Persero) bersama-sama dengan Anak Perusahaannya yaitu PT Petrokima Gresik, PT Pupuk Kujang Cikampek, PT Pupuk Kalimantan Timur, PT Pupuk Iskandar Muda, PT Pupuk Sriwidjaja Palembang dan Rekayasa Industri mendirikan PI Utilitas untuk memproduksi dan mensuplai energi dan utilitas ke Perusahaan-Perusahaan di lingkungan kelompok usaha PT Pupuk Indonesia (Persero) pada khususnya, serta ke industri atau Perusahaan lainnya pada umumnya.</p>
            </div>
            <div>
              <div class="rounded-image">
                <!-- <img src="https://www.pi-energi.com/files/media/2020/09/image-banner-factory.jpg" class="img-fluid"> -->
              </div>
              <p class="text-justify">Tanggal 1 Desember 2021 PT Pupuk Indonesia Utilitas melakukan rebranding dari yang sebelumnya bernama PT Pupuk Indonesia Energi sesuai dengan perubahan Anggaran Dasar PT Pupuk Indonesia Utilitas yang terakhir dimuat dalam Akta No. 02 Tanggal 28 Oktober 2021. Rebranding ini mengukuhkan PI Utilitas sebagai one stop utility provider untuk menunjang tiga komponen kebutuhan utama pabrik pupuk meliputi utilitas, amoniak, dan urea. Utilitas berupa listrik, steam, air, dan nitrogen membuat ruang lingkup bisnis perusahaan lebih luas dan potensi pasar juga lebih besar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: "CompanyHistory",
  data() {
    return {
      lastScrollTop: 0,
    };
  },
  mounted() {
    // Listen for scroll events
    window.addEventListener("scroll", this.handleScroll);

    // Initial observation on mount
    this.handleScroll();
  },
  unmounted() {
    // Clean up event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const fadeInElements = [
        this.$refs.fadeInElement1,
        this.$refs.fadeInElement2,
        this.$refs.fadeInElement3
      ].filter(Boolean);

      fadeInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const offsetFromTop = rect.top + window.scrollY;
        const windowHeight = window.innerHeight;
        const triggerOffset = windowHeight * 0.8; // Adjust this value for the desired offset

        if (
          offsetFromTop < windowHeight - triggerOffset &&
          !element.classList.contains("in-viewport")
        ) {
          element.classList.add("in-viewport");
        }
      });
    },
  },
};
</script>

  <style scoped>
  .company-history {
    margin-top: 100px;
  }
  
  .company-history-container {
  position: relative;
  color: white; /* Set text color to contrast with the background */
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(8, 78, 139, 0.8); /* Use rgba for the background color with alpha channel */
  content: "";
  z-index: -1;
  opacity: 0.9;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://www.pi-energi.com/files/media/2020/09/image-banner-factory.jpg");
  background-blend-mode: overlay; /* Adjust the blend mode as needed */
  background-size: cover; /* Ensure the background image covers the container */
  z-index: -2;
}

.background-image::before,
.background-image::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 20%; /* Adjust the height of the fade effect as needed */
  pointer-events: none; /* Ensure the pseudo-elements do not interfere with interactions */
}

.background-image::before {
  top: 0;
  background: linear-gradient(rgba(8, 78, 139, 0.8), rgba(8, 78, 139, 0));
}

.background-image::after {
  bottom: 0;
  background: linear-gradient(rgba(8, 78, 139, 0), rgba(8, 78, 139, 0.8));
}
  
  .company-history img {
    width: 100%;
    height: 50%;
    opacity: 0.5;
  }
  
  .rounded-image {
    border-radius: 25px; /* Adjust the border-radius to control the roundness of the corners */
    overflow: hidden;
  }
  
  .fade-in-left {
  opacity: 0;
  transform: translateX(20px); /* Adjust this value for the desired direction */
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in-right {
  opacity: 0;
  transform: translateX(
    -20px
  ); /* Adjust this value for the desired direction */
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-left.in-viewport,
.fade-in-right.in-viewport {
  opacity: 1;
  transform: translateX(0);
}

.fade-in {
  opacity: 0;
  transform: translateY(20px); /* Adjust this value for the desired direction */
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in.in-viewport{
    opacity: 1;
    transform: translateX(0);
}
</style>
