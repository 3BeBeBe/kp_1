<template>
    <div class="container mt-5">
        <!-- <div class="row">
            <div class="col-md-3">  -->
                <!-- <div class="card">
                    <div class="card-header text-center">  -->
                        <ul class="nav nav-tabs justify-content-start mt-2 mb-2 d-flex align-items-end">
                            <li class="nav-item" v-for="tab in tabs" :key="tab.id">
                                <h2 :class="{ 'active-tab': tab.active, 'inactive-tab': !tab.active }">
                                    <a :id="tab.id" class="nav-link" :class="{ active: tab.active }" data-bs-toggle="tab" aria-current="true" :href="tab.href" @click="switchTab(tab.id)">
                                        {{ tab.name }}
                                    </a>
                                </h2>
                            </li>
                        </ul>
                    <!-- </div>
                </div> -->
            <!-- </div>   
            
            <div class="col-md-9"> -->
                <div class="container tab-content">

                    <div class="tab-pane fade show active" id="pers">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-1.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">PT Pupuk Indonesia Utilitas Raih Indonesian Quality Award 2022</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">13 Desember 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-2.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Pupuk Indonesia Lunurkan Program Kompetisi Jurnalistik</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">5 Oktober 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-3.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Pupuk Indonesia Utilitas Raih Tiga Penghargaan di Ajang TOP GRC Awards 2022 </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">7 September 2022</small></p>
                                    </div>
                                </button>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-4.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">PGenap Berusia Sewindu, PI Utilitas Rumuskan Sembilan Rencana Strategis</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">22 Agustus 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-5.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Pupuk Indonesia Energi Melakukan Rebranding Menjadi Pupuk Indonesia Utilitas</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">1 Desember 2021</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-6.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">PI Utilitas Raih Sertifikasi ISO 9001:2015 Terkait Manajemen Mutu </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">8 Oktober 2020 </small></p>
                                    </div>
                                </button>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-7.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">PI-Energi Salurkan Bantuan Sembako untuk Pondok Pesantren </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">15 Juli 2020 </small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-8.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Langkah Preventif PI-Energi Cegah COVID-19 </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">10 Juni 2020 </small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-9.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">PI-Energi Bagikan Sembako Untuk Yayasan Yatim Piatu </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">10 Juni 2020 </small></p>
                                    </div>
                                </button>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-10.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Kunjungi Yogyakarta, Dirut PI-Energi Dalami Potensi Energi Baru Terbarukan</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">28 Februari 2020</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-11.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Lestarikan Ekowisata, PT Pupuk Indonesia Energi Salurkan Dana CSR</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">17 Februari 2020 </small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-12.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">PI-Energi Raih Penghargaan Temu Karya Mutu dan Produktivitas Nasional</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">25 November 2019</small></p>
                                    </div>
                                </button>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-13.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Pemegang Saham PI Energi Angkat Direktur Operasi Baru </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">6 September 2019</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-14.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Serahkan Bantuan Pendidikan, PI-Energi Fokus Kembangkan SDM Di Indonesia</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">26 Agustus 2019 </small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-15.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Kembangkan Bisnis, Pupuk Indonesia Energi Gandeng Universitas Padjajaran </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">2 Agustus 2019 </small></p>
                                    </div>
                                </button>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Dirgahayu PT Pupuk Indonesia Energi Ke-2</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">21 Desember 2016</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Penandatanganan Kontrak EPCC Gresik Gas Cogeneration Plant </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">14 Oktober 2016 </small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Pupuk Indonesia Energi Bangun Pembangkit Listrik di Gresik </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">13 Oktober 2016 </small></p>
                                    </div>
                                </button>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">PT Pupuk Indonesia Raih Annual Report Award 2015 </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">12 Oktober 2016</small></p>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>


                    <div class="tab-pane fade" id="artikel">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="https://www.pi-utilitas.com/files/media/2022/09/TOP-GRC-AWARDS.jpg" class="card-img-top img-fixed" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Pupuk Indonesia Utilitas Raih Tiga Penghargaan di Ajang TOP GRC Awards 2022 </h5>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed">
                                    <img src="https://www.pi-utilitas.com/files/media/2022/09/TOP-GRC-AWARDS.jpg" class="card-img-top img-fixed" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Pupuk Indonesia Utilitas Raih Tiga Penghargaan di Ajang TOP GRC Awards 2022 </h5>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div> 
            <!-- </div> -->
        </div>
    <!-- </div> -->
</template>
<script>
    export default {
        name: 'NewsContents',
            data() {
            return {
                tabs: [
                    { id: 'tab1', name: 'SIARAN PERS', href: '#pers', active: true },
                    { id: 'tab2', name: 'ARTIKEL', href: '#artikel', active: false }
                ]
            }
        },
        methods: {
            switchTab(clickedTabId) {
                this.tabs = this.tabs.map(tab => ({
                    ...tab,
                    active: tab.id === clickedTabId
                })).sort((a, b) => b.active - a.active);
            }
        }
    }
</script>

<style scoped>
    .active-tab {
        font-size: 3em; /* Adjust as needed */
        font-weight: bold;
    }

    .inactive-tab {
        font-size: 1em; /* Adjust as needed */
    }

    .img-fixed {
        width: 100%; /* Adjust as needed */
        height: 200px; /* Adjust as needed */
        object-fit: cover;
    }

    .card-fixed {
        width: 100%; /* Adjust as needed */
        height: 350px; /* Adjust as needed */
    }
</style>