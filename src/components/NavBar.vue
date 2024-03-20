<template>
  <nav
    class="navbar transparent-navbar sticky-top navbar-expand-lg bg-body-tertiary border-bottom border-body"
  >
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../assets/Salinan LOGO PIU Warna.png" width="180" height="144">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="row justify-content-end">
          <div class="col-md-12">
            <ul
              class="navbar-nav navbar-auto d-flex justify-content-end align-items-center"
            >
              <li class="nav-item">
                <router-link class="nav-link" to="/wbs"
                  >Whistle Blowing System</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link d-flex justify-content-end align-items-center" to="/sketchy">
                  <!-- <img
                    src="../assets/ButtonDesign/ButtonDesign - Tester.png"
                    style="width: 65%"
                    alt="Kontak Kami"
                  /> -->
                  Kontak Kami
                </router-link>
              </li>
            </ul>
          </div>
          <hr>
          <div class="col-md-12">
            <div class="row d-flex justify-content-end">
              <!-- <div
                class="col-md-2 d-flex justify-content-start align-items-center"
              >
                <a class="navbar-brand" href="/">
                  <img
                    src="../assets/Salinan LOGO PIU Warna.png"
                    width="120"
                    height="96"
                  />
                </a>
              </div> -->
              <div
                class="col-md-8 d-flex justify-content-end align-items-center"
              >
                <ul class="navbar-nav navbar-auto">
                  <li class="nav-item dropdown">
                    <router-link
                      class="nav-link dropdown-toggle"
                      to="/media"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Profile</router-link
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <router-link class="dropdown-item" to="/sejarah"
                          >Sejarah</router-link
                        >
                      </li>
                      <!-- <li>
                                                <router-link class="dropdown-item" to="/visimisi" >Visi Misi</router-link>
                                            </li>
                                            <li>
                                                <router-link class="dropdown-item" to="/nilai" >Nilai-Nilai</router-link>
                                            </li> -->
                      <li>
                        <router-link class="dropdown-item" to="/manajemen"
                          >Manajemen</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/struktur"
                          >Struktur</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/penghargaan"
                          >Penghargaan</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <!-- <li class="nav-item">
                                        <router-link class="nav-link" to="/governance" >Tata Kelola</router-link>
                                    </li> -->

                  <li class="nav-item dropdown">
                    <router-link
                      class="nav-link dropdown-toggle"
                      to="/media"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Tata Kelola</router-link
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <router-link class="dropdown-item" to="/governance"
                          >Pedoman Tata Kelola</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/audit"
                          >Audit Charter</router-link
                        >
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
                    <router-link
                      class="nav-link dropdown-toggle"
                      to="/media"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Produk & Layanan</router-link
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <router-link class="dropdown-item" to="/ggcp"
                          >Produk</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/kdm"
                          >Anak Perusahaan</router-link
                        >
                      </li>
                    </ul>
                  </li>

                  <!-- <li class="nav-item">
                                        <router-link class="nav-link" to="/pengadaan" >Pengadaan</router-link>
                                    </li> -->

                  <!-- <li class="nav-item dropdown">
                                        <router-link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Publikasi</router-link>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link class="dropdown-item" to="/galeri" >CSR</router-link>
                                            </li>
                                            <li>
                                                <router-link class="dropdown-item" to="/laporan" >Laporan</router-link>
                                            </li>
                                        </ul>
                                    </li> -->

                  <li class="nav-item dropdown">
                    <router-link
                      class="nav-link dropdown-toggle"
                      to="/laporan"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Laporan</router-link
                    >
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
                        <router-link class="dropdown-item" to="/laptah"
                          >Laporan Tahunan</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/lapkeu"
                          >Laporan Keuangan</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/lapkeb"
                          >Laporan Keberlanjutan</router-link
                        >
                      </li>
                    </ul>
                  </li>

                  <!-- <li class="nav-item">
                                        <router-link class="nav-link" to="/berita" >Berita</router-link>
                                    </li> -->
                  <li class="nav-item dropdown">
                    <router-link
                      class="nav-link dropdown-toggle"
                      to="/berita"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Berita</router-link
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <router-link class="dropdown-item" to="/artikel"
                          >Artikel</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/pers"
                          >Siaran Pers</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/buzz"
                          >Bulletin BUZZ</router-link
                        >
                      </li>
                    </ul>
                  </li>

                  <!-- <li class="nav-item dropdown">
                                        <router-link class="nav-link dropdown-toggle" to="/pelaporan" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pelaporan</router-link>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link class="dropdown-item" to="/complaint" >Customer Complaint</router-link>
                                            </li>
                                            <li>
                                                <router-link class="dropdown-item" to="/wbs" >Whistle Blowing System (WBS)</router-link>
                                            </li>
                                        </ul>
                                    </li> -->

                  <li class="nav-item">
                    <router-link class="nav-link" to="/pengadaan"
                      >Pengadaan</router-link
                    >
                  </li>

                  <li class="nav-item">
                    <router-link class="nav-link" to="/galeri">CSR</router-link>
                  </li>
                </ul>
              </div>
              <div
                class="col-md-3 d-flex justify-content-end align-items-center"
              >
                <form class="d-flex" role="search" @submit.prevent="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    v-model="searchQuery"
                  />
                  <button class="btn btn-outline-primary" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <!-- <hr style="color: white;"> -->
            <!-- <ul class="navbar-nav navbar-auto me-auto d-flex justify-content-center align-items-center">
                            <li class="nav-item dropdown me-2">
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

                            <li class="nav-item dropdown me-2">
                                <router-link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tata Kelola</router-link>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link class="dropdown-item" to="/governance" >Governance</router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item" to="/audit" >Audit Charter</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown me-2">
                                <router-link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Produk & Layanan</router-link>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link class="dropdown-item" to="/ggcp" >Produk</router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item" to="/kdm" >Anak Perusahaan</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown me-2">
                                <router-link class="nav-link dropdown-toggle" to="/laporan" role="button" data-bs-toggle="dropdown" aria-expanded="false">Laporan</router-link>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link class="dropdown-item" to="/laptah">Laporan Tahunan</router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item" to="/lapkeu">Laporan Keuangan</router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item" to="/lapkeb">Laporan Keberlanjutan</router-link>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown me-2">
                                <router-link class="nav-link dropdown-toggle" to="/berita" role="button" data-bs-toggle="dropdown" aria-expanded="false">Berita</router-link>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link class="dropdown-item" to="/artikel" >Artikel</router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item" to="/pers" >Siaran Pers</router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item" to="/buzz" >Bulletin BUZZ</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item me-2">
                                <router-link class="nav-link" to="/pengadaan" >Pengadaan</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" to="/galeri" >CSR</router-link>
                            </li>

                            <li class="nav-item ms-5 d-flex justify-content-end">
                                <form class="d-flex" role="search" @submit.prevent="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery">
                                    <button class="btn btn-outline-light" type="submit">Search</button>
                                </form>
                            </li>
                        </ul> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.$router.push({ name: "Berita", query: { q: this.searchQuery } });
    },
  },
};
</script>

<style scoped>
/* .btn, .form-control, .dropdown-menu {
    border-radius: 0px;
} */
.nav-link {
    color: #084e8b !important;
    font-weight: bold;
}
.nav-link:hover {
  color: #0d6efd !important;
}
.dropdown-item {
  transition: background-color 0.3s ease;
}
.transparent-navbar {
  background-color: transparent;
}
.dropdown-item:hover {
  background-color: #0d6efd;
  color: #fff;
  cursor: pointer;
}
</style>
