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
                            <div class="col-md-4">
                                <img class="img-fluid" src="https://www.pi-utilitas.com/files/media/2022/09/TOP-GRC-AWARDS.jpg">

                                <h4>Pupuk Indonesia Utilitas Raih Tiga Penghargaan di Ajang TOP GRC Awards 2022 </h4>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="artikel">
                        <div class="row">
                            <div class="col-md-4">
                                <img class="img-fluid" src="https://www.pi-utilitas.com/files/media/2022/11/WhatsApp-Image-2022-11-18-at-11.19.02.jpeg">

                                <h4>Berdayakan Kelompok Wanita, PI Utilitas Bentuk Bank Sampah Desa Banyuwangi</h4>
                            </div>
                            <div class="col-md-4">
                                <img class="img-fluid" src="https://www.pi-utilitas.com/files/media/2022/10/buah-nipah.jpg">

                                <h4>Terus Kembangkan Potensi, PI Utilitas Bekali Warga Cara Mengolah Buah Nipah </h4>
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
</style>