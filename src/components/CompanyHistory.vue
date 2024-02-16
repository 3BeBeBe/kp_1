<template>
  <div class="good-corporate carousel-image-container">
    <div class="container gover-overlay-text">
      <div class="row mt-5 mb-5">
        <div class="col-md-12">
          <h2>
            <i><b>Sejarah Perusahaan</b></i>
          </h2>
          <br />
        </div>
        <div class="col-md-6">
          
          <img src="../assets/FO_3.jpg" class="img-fluid " />
         
          <p>
            Perusahaan yang bergerak dalam bidang industri penghasil energi dan
            utilitas untuk seluruh Anak Perusahaan yang bernaung di dalam
            kelompok usaha PT Pupuk Indonesia (Persero) yang bergerak di bidang
            industri pupuk dan agrokimia.
          </p>
          <p>
            Pendirian Perusahaan dimaksudkan sebagai langkah untuk meningkatkan
            daya saing BUMN Pupuk dan mengupayakan efisiensi biaya produksi
            pupuk oleh BUMN Pupuk melalui usaha penggunaan teknologi yang ramah
            lingkungan dan melakukan penghematan bahan baku dan energi.
          </p>
        </div>

        <div class="col-md-6">
          <div class="">
            <p>
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
            <p>
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
};
</script>

<style scoped>
p {
  text-align: justify;
}
.gover-overlay-text {
  position: relative;
  color: rgb(0, 0, 0);
        /* font-size: 24px;
        font-weight: bold; */
}

.good-corporate {
  background-image: url('../assets/pabrik/GGCP/ggcp1.jpg');
  display: flex;
  background-size: cover; /* Cover the entire area of the component */
  background-position: center; /* Center the image */
  color: white;
}

.carousel-image-container {
  position: relative;
}

.carousel-image-container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
        /* background: linear-gradient(to right, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 100%); */
}
</style>
