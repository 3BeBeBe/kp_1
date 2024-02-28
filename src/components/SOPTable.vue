    <template>
    <div class="container mt-5 mb-5">
        <div class="row justify-content-center">
        <div class="col-md-6 mb-3 d-flex flex-column justify-content-between">
            <div>
                <h3 >Pedoman GCG</h3>
                <p>Tata Kelola Perusahaan berisi Arahan Strategis Direksi dan Dewan Komisaris dalam Penerapan GCG di Perusahaan dan menjadi induk kebijakan perusahaan  yang menjadi acuan bagi seluruh kegiatan Indonesia Power meliputi Hubungan antara Perusahaan dengan Pemegang Saham, Fungsi serta peran Dewan Komisaris dan Direksi, Hubungan Perusahaan dengan pemangku kepentingan (Stakeholder) dan prinsip-prinsip mengenai kebijakan pokok Perusahaan.</p>
            </div>
                <div class="text-end d-flex justify-content-end">
                    <button class="btn btn-primary me-2" type="button" data-bs-toggle="collapse" data-bs-target="#gcg" aria-expanded="false" aria-controls="gcg">
                        GCG Assesment
                    </button>
                    
                    <a href="../assets/tataKelola/PEDOMAN-PENILAIAN-PENERAPAN-GCG-GCG-ASSESSMENT.pdf" class="btn btn-primary" download>Download</a>
                </div>
                <hr>
        </div>
        
        <div class="col-md-6 mb-3 d-flex flex-column justify-content-between order-3 order-md-2">
            <div>                
                <h3 >Board Manual</h3>
                <p>Pedoman Etika Perusahaan merupakan acuan dalam melakukan interaksi di antara manajemen, pegawai serta para pemangku kepentingan (stakeholder) sesuai dengan nilai dan budaya perusahaan dan prinsip-prinsip GCG. COC ini mengatur mengenai apa yang patut dan tidak patut, baik dan tidak baik, hal-hal yang terpuji dan yang tercela, serta hal-hal yang dihargai dan tidak dihargai yang  dilakukann oleh pegawai IP dalam relasinya dengan semua stakeholder Perusahaan.</p>
            </div>
                <div class="text-end">
                    <a href="../assets/tataKelola/Board-Manual_compressed.pdf" class="btn btn-primary" download>Download</a>
                </div>
                <hr>
        </div>

        <div class="col-md-12 mb-3 d-flex flex-column justify-content-between order-1 order-md-2">
            <div class="collapse multi-collapse" id="gcg">
                <div class="card card-body">
                    <GCGAssesment/>
                </div>
            </div>
        </div>

        <div class="col-md-6 mb-3 d-flex flex-column justify-content-between order-2 order-md-2">
            <div> 
                <h3 >Pedoman COC</h3>
                <p>Board Manual merupakan dokumen yang menjelaskan secara garis besar hak, kewajiban, tugas, wewenang, Dewan Komisaris dan Direksi sebagai Organ Utama Perusahaan serta proses hubungan dan fungsi anatara kedua organ tersebut.</p>
            </div>
                <div class="text-end">
                    <a href="../assets/tataKelola/PEDOMAN-ETIKA-DAN-PERILAKU-CODE-OF-CONDUCT.pdf" download>
                        <img src="../assets/ButtonDesign/ButtonDesign - Download.png" alt="Download" />
                    </a>
                </div>
                <hr>
        </div>
        <div class="col-md-6 mb-3 d-flex flex-column justify-content-between order-3 order-md-2">
            <div> 
                <h3 >Pedoman Pengendalian Gratifikasi</h3>
                <p>Kebijakan Pengendalian Gratifikasi memberikan panduan bagi pegawai untuk memahami definisi dan konsep Gratifikasi serta memahami cara bersikap apabila menghadapi adanya praktik Gratifikasi.</p>
            </div> 
                <div class="text-end">
                    <a href="../assets/tataKelola/gratifikasi.pdf" class="btn btn-primary" download>Download</a>
                </div>
                <hr>
        </div>
        </div>
    </div>
</template>
<script>
    import GCGAssesment from './GCGAssesment.vue'

    export default {
        name: 'SOPTable',
        components: {
            GCGAssesment
        }
    }   
</script>
<style scoped>
    .btn{
        border-radius: 0;
    }
</style>