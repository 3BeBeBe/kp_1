<template>
<div class="full-s">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="carousel-image-container" data-bs-interval="100">
                    <img src="../assets/Carousal/1.jpg" class="d-block w-100 carousel-image">
                </div>
                <div class="d-md-block overlay-text">
                    <h1><i>Sekilas Tentang Kami</i></h1>
                    <p>PT Pupuk Indonesia Utilitas (PI Utilitas) didirikan pada tanggal 14 Agustus 2014, guna memenuhi pasokan listrik dan steam untuk menunjang bisnis utama PT Pupuk Indonesia (Persero) beserta anak perusahaannya.</p>
                    <div class="d-inline-flex me-3">
                        <router-link to="/sejarah" class="btn btn-primary">Sejarah Kami</router-link>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-image-container" data-bs-interval="100">
                    <img src="../assets/pabrik/GGCP/ggcp1.jpg" class="d-block w-100 carousel-image">
                </div>
                <div class="d-md-block overlay-text">
                    <h1><i>Gresik Gas Cogeneration Plant (GGCP)</i></h1>
                    <p>Dibangun untuk memenuhi kebutuhan listrik dan steam dari <b>PT Petrokimia Gresik</b> yang saat ini sedang mengembangkan fasilitas produksi terbarunya, <b>Pabrik Amurea II.</b></p>
                    <div class="d-inline-flex me-3">
                        <router-link to="/ggcp" class="btn btn-primary">Pabrik Kami</router-link>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-image-container" data-bs-interval="100">
                    <img src="../assets/pabrik/KDM/kdm1.jpg" class="d-block w-100 carousel-image">
                </div>
                <div class="d-md-block overlay-text">
                    <h1><i>Kaltim Daya Mandiri (KDM)</i></h1>
                    <p>Didirikan dengan tujuan untuk <b>menyuplai kebutuhan utilitas pada fasilitas produksi dan perumahan PT Pupuk Kaltim</b> serta perusahan-perusahaan lain yang berada di lingkungan <b>Kaltim Industrial Estate.</b></p>
                    <div class="d-inline-flex me-3">
                        <router-link to="/ggcp" class="btn btn-primary">Anak Perusahaan</router-link>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-image-container" data-bs-interval="100">
                    <img src="https://www.pi-utilitas.com/files/media/2021/06/banner-2.jpg" class="d-block w-100 carousel-image">
                </div>
                <div class="d-md-block overlay-text">
                    <h1><i>Tolak Gratifikasi</i></h1>
                    <p>Seluruh keluarga PT Pupuk Indonesia Utilitas <b><u>MENOLAK</u></b> segala bentuk suap serta mendukung terwujudnya prinsip-prinsip <b>Tata Kelola Perusahaan yang Baik (Good Corporate Governance).</b></p>
                    <div class="d-inline-flex me-3">
                        <router-link to="/wbs" class="btn btn-primary">Laporkan</router-link>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  <div class="test-height">
    <div class="container">
      <div class="row mt-3 d-flex justify-content-center align-items-center">
        <div class="col-md-4">
            <div class="card card-listrik">
              <div class="card-background-1"></div>
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="card-text-wrapper" style="z-index: 2;">
                    <h1 class="big-number-listrik text-start">76 MW/h</h1>
                    <p class="title-listrik card-title">Listrik</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card card-steam">
              <div class="card-background-2"></div>
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="card-text-wrapper" style="z-index: 2;">
                    <h1 class="big-number-steam text-start">316 Ton/h</h1>
                    <p class="title-steam card-title">Steam</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card card-nitrogen">
              <div class="card-background-3"></div>
                <div class="card-body">
                  
                  <div class="d-flex align-items-center">
                    <div class="card-text-wrapper" style="z-index: 2;">
                        <h1 class="big-number-nitrogen text-start">500 Nm<sup>3</sup>/h</h1>
                        <p class="title-nitrogen card-title">Nitrogen</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
    export default {
        name: 'CarousalInfo'
    }
</script>
<style scoped>
    .btn{
        border-radius: 0;
    }
    .overlay-text {
      position: absolute;
      top: 50%;
      left: 43%; /* Adjust this value to move the text to the left */
      transform: translate(-50%, -50%);
      color: rgb(255, 255, 255);
      font-size: 20px;
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
        /* background: rgba(0, 0, 0, 0.5); */
        background: linear-gradient(to right, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 100%);
    }

    .carousel-image {
        height: 70vh; /* Adjust this value to your desired height */
        object-fit: cover;
    }
    .full-s{
        height: 100vh; /* Adjust this value to your desired height */
        object-fit: cover;
    }
    .test-height{
        height: 30vh; /* Adjust this value to your desired height */
        object-fit: cover;
    }
    p {
        width: 75%; /* Adjust as needed */
        word-wrap: break-word;
    }

    .card{
    border-radius: 0;
  }
  .big-number {
    font-size: 60px; /* Adjust as needed */
    text-align: center;
    margin-right: 1rem; /* Add space between big number and text */
  }
  .card-listrik {
    box-shadow: 0 4px 8px rgba(8, 78, 139, 0.25);
    transition: transform 0.3s ease;
  }
  
  .card-listrik:hover {
    box-shadow: 0 8px 16px rgba(8, 78, 139, 0.5);
    transform: scale(1.1);
  }
  .card-steam {
    box-shadow: 0 4px 8px rgba(19, 147, 74, 0.25);
    transition: transform 0.3s ease;
  }
  
  .card-steam:hover {
    box-shadow: 0 8px 16px rgba(19, 147, 74, 0.5);
    transform: scale(1.1);
  }
  .card-nitrogen {
    box-shadow: 0 4px 8px rgba(221, 89, 37, 0.25);
    transition: transform 0.3s ease;
  }
  
  .card-nitrogen:hover {
    box-shadow: 0 8px 16px rgba(221, 89, 37, 0.5); /* Adjust as needed */
    transform: scale(1.1);
  }
  .card-title {
    text-align: center;
    font-style: italic;
    font-size: 30px;
    font-weight: 600;
    position: relative; /* Ensure proper z-index */
    z-index: 2; /* Ensure proper stacking order */
  }
  
  .title-listrik {
    color: #084e8b;
    text-align: left;
    /* z-index: 2; Remove z-index from here */
  }
  
  .title-steam {
    color: #13934a;
    text-align: left;
  }
  
  .title-nitrogen {
    color: #dd5925;
    text-align: left;
  }
  
  .big-number-listrik {
    font-size: 50px; /* Adjust as needed */
    text-align: center;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #084e8b;
    position: relative; /* Ensure proper z-index */
    z-index: 2; /* Ensure proper stacking order */
  }
  .big-number-steam {
    font-size: 50px; /* Adjust as needed */
    text-align: center;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #13934a;
    z-index: 2;
  }
  .big-number-nitrogen {
    font-size: 50px; /* Adjust as needed */
    text-align: center;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #dd5925;
    z-index: 2;
  }
  
  .small-text-nitrogen {
    font-size: 0.75rem; /* Adjust the font size of the small text */
    margin-top: 5px; /* Adjust the spacing between the big number and the small text */
    z-index: 2;
  }
  
  .small-text {
    z-index: 2;
  }

  .card-background-1 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0)
    ), 
    url("../assets/pabrik/KDM/kdm1.jpg");
  background-size: cover;
  background-position: right;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
}

.card-background-2 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0)
    ),
    url("../assets/pabrik/KDM/kdm2.jpg");
  background-size: cover;
  background-position: right;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
}

.card-background-3 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0)
    ),
    url("../assets/pabrik/GGCP/ggcp1.jpg");
  background-size: cover;
  background-position: right;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
}
</style> 