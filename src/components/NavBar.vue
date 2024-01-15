<template>
    <nav class="navbar sticky-top bg-body-tertiary navbar-expand-lg bg-body-tertiary" color="white">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="../assets/Salinan LOGO PIU Warna.png" width="90" height="72">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav navbar-collapse justify-content-end me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile" >Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/governance" >Tata Kelola</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/pabrik" >Pabrik</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/pengadaan" >Pengadaan</router-link>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Publikasi</router-link>
                    <ul class="dropdown-menu">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/berita" >Berita</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/pers">Siaran Pers</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/laporan" >Reports</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/galeri" >Galeri</router-link>
                        </li>
                        <!-- <li><hr class="dropdown-divider"></li> -->
                    </ul>
                    </li>

                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>