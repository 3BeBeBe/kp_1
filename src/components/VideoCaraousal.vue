<template>
  <div class="video-background video-container">
    <video playsinline autoplay muted loop disablePictureInPicture>
      <source src="@/assets/video/COMPRO 1.mp4" type="video/mp4">
    </video>
    <!-- <div class="content">
      <p>hello world</p>
    </div> -->
    <div class="overlay"></div>
    <nav class="navbar sticky-top bg-transparent navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="../assets/LOGO_PIU_BnW.png" width="120" height="96">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav navbar-auto me-auto">
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/profile" >Profile</router-link>
                    </li> -->

                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</router-link>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/sejarah" >Sejarah</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/visimisi" >Visi Misi</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/nilai" >Nilai-Nilai</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/manajemen" >Manajemen</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/struktur" >Struktur</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/penghargaan" >Penghargaan</router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/governance" >Tata Kelola</router-link>
                    </li> -->

                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tata Kelola</router-link>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/governance" >Governance</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/audit" >Audit Charter</router-link>
                            </li>
                            <!-- <li>
                                <router-link class="dropdown-item" to="/complaint" >Customer Complaint</router-link>
                            </li> -->
                            <!-- <li>
                                <router-link class="dropdown-item" to="/procurement" >Pengadaan</router-link>
                            </li> -->
                            <!-- <li>
                                <router-link class="dropdown-item" to="/wbs" >Whistle Blowing System</router-link>
                            </li> -->
                        </ul>
                    </li>

                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/pabrik" >Pabrik</router-link>
                    </li> -->

                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Lingkungan</router-link>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/kdm" >Anak Perusahaan</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/ggcp" >Pabrik</router-link>
                            </li>
                        </ul>
                    </li>

                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/pengadaan" >Pengadaan</router-link>
                    </li> -->
                    
                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Publikasi</router-link>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/galeri" >CSR</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/laporan" >Laporan</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/buzz" >Bulletin BUZZ</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/laporan" role="button" data-bs-toggle="dropdown" aria-expanded="false">Laporan</router-link>
                        <ul class="dropdown-menu">
                            <!-- <li>
                                <router-link class="dropdown-item" to="/laporan" >Laporan Tahunan</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/laporan" >Laporan Keuangan</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/laporan" >Laporan Keberlanjutan</router-link>
                            </li> -->
                            <li>
                                <router-link class="dropdown-item" to="/laporan">Laporan Tahunan</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/lapkeu">Laporan Keuangan</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/laporan">Laporan Keberlanjutan</router-link>
                            </li>

                        </ul>
                    </li>

                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/berita" >Berita</router-link>
                    </li> -->
                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/berita" role="button" data-bs-toggle="dropdown" aria-expanded="false">Berita</router-link>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/artikel" >Artikel</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/pers" >Siaran Pers</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/pelaporan" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pelaporan</router-link>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/complaint" >Customer Complaint</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/wbs" >Whistle Blowing System (WBS)</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/pengadaan" >Pengadaan</router-link>
                    </li>
                    
                </ul>
                <form class="d-flex ms-5 mb-2 mt-2" role="search" @submit.prevent="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <div class="container">
      <div class="overlay-text">
        <p><b>One Stop Utility Provider</b></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoCaraousal',
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100vh; /* This makes the container take up the full height of the viewport */
  overflow: hidden;
}
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-background {
  position: relative;
  overflow: hidden;
}
.video-background video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* This creates a semi-transparent black overlay */
}
.overlay-text {
  position: absolute;
  bottom: 10%; /* Position from the bottom */
  color: white;
  font-size: 3em;
}
.content {
  position: relative;
  z-index: 1;
}
@media (max-width: 768px) {
  .overlay-text {
    font-size: 1.5em;
  }
}
@media (max-width: 480px) {
  .video-container {
    position: relative;
    width: 100%;
    height: 50vh; /* This makes the container take up the full height of the viewport */
    overflow: hidden;
  }
  .overlay-text {
    position: absolute;
    bottom: 10%; /* Position from the bottom */
    color: white;
    font-size: 1em;
  }
}
</style>