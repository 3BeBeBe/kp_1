<template>
    <nav class="navbar sticky-top bg-body-tertiary navbar-expand-lg bg-body-tertiary border-bottom border-body py-0" style="padding: 0.5rem 1rem;">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="../assets/Salinan LOGO PIU Warna.png" width="60" height="48">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav navbar-auto me-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile" >Profile</router-link>
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
                            <li>
                                <router-link class="dropdown-item" to="/complaint" >Customer Complaint</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/procurement" >Pengadaan</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/wbs" >Whistle Blowing System</router-link>
                            </li>
                        </ul>
                    </li>

                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/pabrik" >Pabrik</router-link>
                    </li> -->

                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Lingkungan</router-link>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/ggcp" >Gresik Gas Cogeneration Plant</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/kdm" >Kaltim Daya Mandiri</router-link>
                            </li>
                        </ul>
                    </li>

                    <!--<li class="nav-item">
                        <router-link class="nav-link" to="/pengadaan" >Pengadaan</router-link>
                    </li>-->
                    
                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Publikasi</router-link>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/galeri" >Galeri</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/laporan" >Laporan</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/buzz" >Bulletin BUZZ</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/berita" >Berita</router-link>
                    </li>
                </ul>
                <form class="d-flex mb-2 mt-2" role="search" @submit.prevent="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery">
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        search() {
            this.$router.push({ name: 'Berita', query: { q: this.searchQuery } });
        },
    },
}
</script>

<style scoped>
.form-control {
    border-radius: 0px;
}
.nav-link {
    color: #084e8b !important
}
.nav-link:hover{
    color: #0d6efd !important
}
</style>