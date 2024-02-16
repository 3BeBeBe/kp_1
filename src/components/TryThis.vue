<template>
  <div>
    <button class="btn image-button" data-bs-toggle="modal" data-bs-target="#kom1">
          <img src="../assets/Manajemen/Komisaris/Imam Mujahidin Fahmid - Komisaris.jpg" alt="Image 1">
          <div class="overlay-text">
            <div class="text-start">
              <h4>Komisaris</h4>
              <h5>Imam Mujahidin Fahmid</h5>
            </div>
          </div>
        </button>
        <!-- modal -->
        <div class="modal fade" id="kom1" tabindex="-1" aria-hidden="true">
          <div
            class="modal-dialog modal-dialog-centered modal-xl"
          >
            <div class="modal-content">
              <!-- <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div> -->
              <div class="modal-body ">
                <div class="row d-flex align-items-center">
                  <div class="col-md-12 d-flex justify-content-end">
                    
                  </div>
                  <div class="col-md-6 col-12 order-2 order-md-1">
                    <h2 class="modal-title">Imam Mujahidin Fahmid</h2>
                    <h4 class="card-text text-start  mb-3">
                      Komisaris
                    </h4>
                    <p>
                      Lahir di Bima, 23 Desember 1966. Menjabat sebagai Komisaris PT Pupuk Indonesai Utilitas sejak 27 Desember 2021. Saat ini juga menjabat sebagai Staf Khusus Menteri Bidang Kebijakan Pertanian, Kementerian Pertanian RI (2019 – Sekarang) dan Staf Pengajar Fakultas Pertanian & Pasca Sarjana Unhas, Makassar (1992 – Sekarang). Sebelumnya menjabat sebagai Direktur Publication Manajement Center Unhas, Makasar (2015-2018), Ketua Dewan Riset Daerah Pemprov Sulawesi Selatan, Makasar (2011-2018), Ketua Tim Ahli Gubernur Pemerintah Propinsi Sulawesi Selatan, Makasar (2009-2018), Tenaga Ahli Bappeda; Dinas Perkebunan; Dinas Pertanian; Tanaman Pangan dan Hirtikultura; Badan Ketahana Pangan Propinsi Sulawesi Selatan (2009-2018), Ketua Badan Perusda Pemprov Sulawesi Selatan (2014-2018), Komisaris GMTDC, Tbk (2009-2014). Meraih gelar Sarjana Sosial Ekonomi Pertanian Universitas Hasanudin (1990), gelar Master of Trade and Development, Newcastle University, Australia (2001), gelar Doktor Ekologi Manusia Institut Pertanian Bogor (2011). 
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary d-flex align-items-end"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >Tutup</button>
                  </div>
                  <div class="col-md-6 col-12 order-1 order-md-1">
                    <img
                      src="../assets/Manajemen/Komisaris/Imam Mujahidin Fahmid - Komisaris.jpg"
                      class="img-fluid mx-auto d-block p-3"
                    />
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- modal end -->
</div>
</template>

<script>
export default {
  name: 'TryThis',
};
</script>

<style scoped>
.image-button {
  position: relative;
  width: 40%;
  height: 400px;
  border: none;
  padding: 0;
  background: none;
}
.image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  color: white;
  text-align: center;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.5);
}
.modal-content {
  border-radius: 0;
}


.btn {
  border-radius: 0;
}
p{
  text-align: justify;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Other styles as needed */
}
</style>