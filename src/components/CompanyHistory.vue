<template>
  <div class="company-history-container">
    <div class="container">
      <div class="background-overlay"></div>
      <div class="background-image"></div>
      <div class="row justify-content-center">
        <div class="col-md-12 mt-5 fade-in-right" ref="fadeInElement3">
          <h2>
            <i><b>Sejarah Perusahaan</b></i>
          </h2>
          <br />
        </div>
        <div class="col-md-6 fade-in-right" ref="fadeInElement1">
          <div class="img-container">
            <img src="../assets/FO_1.jpg" class="img-fluid" />
          </div>

          <p class="text-justify">
            Perusahaan yang bergerak dalam bidang industri penghasil energi dan
            utilitas untuk seluruh Anak Perusahaan yang bernaung di dalam
            kelompok usaha PT Pupuk Indonesia (Persero) yang bergerak di bidang
            industri pupuk dan agrokimia.
          </p>
          <p class="text-justify">
            Pendirian Perusahaan dimaksudkan sebagai langkah untuk meningkatkan
            daya saing BUMN Pupuk dan mengupayakan efisiensi biaya produksi
            pupuk oleh BUMN Pupuk melalui usaha penggunaan teknologi yang ramah
            lingkungan dan melakukan penghematan bahan baku dan energi.
          </p>
        </div>

        <div class="col-md-6 fade-in-left" ref="fadeInElement2">
          <div class="">
            <p class="text-justify">
              Dengan kecenderungan produksi Gas Bumi Nasional yang menurun serta
              tren harga gas yang terus meningkat, dan untuk menjalankan amanat
              Instruksi Presiden No. 2 Tahun 2010 tentang revitalisasi industri
              pupuk guna tetap menjaga keberlangsungan usaha dan daya saing
              Perusahaan Pupuk di grup PIHC, PT Pupuk Indoensia (Persero)
              bersama-sama dengan Anak Perusahaannya yaitu PT Petrokima Gresik,
              PT Pupuk Kujang Cikampek, PT Pupuk Kalimantan Timur, PT Pupuk
              Iskandar Muda, PT Pupuk Sriwidjaja Palembang dan Rekayasa Industri
              mendirikan PI Utilitas untuk memproduksi dan mensuplai energi dan
              utilitas ke Perusahaan-Perusahaan di lingkungan kelompok usaha PT
              Pupuk Indonesia (Persero) pada khususnya, serta ke industri atau
              Perusahaan lainnya pada umumnya.
            </p>
          </div>
          <div>
            <p class="text-justify">
              Tanggal 1 Desember 2021 PT Pupuk Indonesia Utilitas melakukan
              rebranding dari yang sebelumnya bernama PT Pupuk Indonesia Energi
              sesuai dengan perubahan Anggaran Dasar PT Pupuk Indonesia Utilitas
              yang terakhir dimuat dalam Akta No. 02 Tanggal 28 Oktober 2021.
              Rebranding ini mengukuhkan PI Utilitas sebagai one stop utility
              provider untuk menunjang tiga komponen kebutuhan utama pabrik
              pupuk meliputi utilitas, amoniak, dan urea. Utilitas berupa
              listrik, steam, air, dan nitrogen membuat ruang lingkup bisnis
              perusahaan lebih luas dan potensi pasar juga lebih besar.
            </p>
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

  // Listen for resize events
  window.addEventListener("resize", this.handleScroll);

  // Initial observation on mount
  this.$nextTick(() => {
    this.handleScroll();
  });
},
  unmounted() {
    // Clean up event listeners when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const fadeInElements = [
        this.$refs.fadeInElement1,
        this.$refs.fadeInElement2,
        this.$refs.fadeInElement3,
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
.img-container {
  width: 100%;
  height: 40%;
}

.img-container img{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  background-color: rgba(7, 63, 111, 0.9); /* Use rgba for the background color with alpha channel */
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

.fade-in-left {
  opacity: 1;
  transform: translateX(20px); /* Adjust this value for the desired direction */
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in-right {
  opacity: 1;
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

.fade-in.in-viewport {
  opacity: 1;
  transform: translateX(0);
}

.in-viewport {
  opacity: 1;
  transform: translateX(0);
}

@media screen and (max-width: 768px) {
  .company-history-container {
    padding: 20px; /* Adjust padding for smaller screens */
  }

  .col-md-6 {
    width: 100%; /* Make columns full width on smaller screens */
    margin-bottom: 20px; /* Add space between columns */
  }

  .background-overlay {
    opacity: 0.7; /* Reduce opacity of background overlay */
  }

  .background-image {
    background-attachment: scroll; /* Change background attachment for scrolling */
    background-position: center center; /* Adjust background position */
  }

  .company-history img {
    height: auto; /* Allow images to scale proportionally on smaller screens */
  }

  .fade-in-right,
  .fade-in-left {
    opacity: 1; /* Ensure fading-in elements are visible by default on smaller screens */
    transform: none; /* Reset transform for smaller screens */
  }

  .in-viewport {
    opacity: 1;
    transform: none;
  }

  .fade-in,
  .fade-in-right.in-viewport,
  .fade-in-left.in-viewport {
    transition: none; /* Disable transition for fading-in elements on smaller screens */
  }
}

</style>
