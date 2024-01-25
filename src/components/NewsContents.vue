<template>
    <div class="container justify-content-center mx-auto m-5">
        <div class="row justify-content-center mx-auto">
            <!-- <div class="col-md-3">   -->
                <!-- <div class="card"> -->
                    <div class="card-header text-center"> 
                        <ul class="nav nav-tabs justify-content-start mt-2 mb-2 d-flex align-items-end">
                            <li class="nav-item" v-for="tab in tabs" :key="tab.id">
                                <h2 :class="{ 'active-tab': tab.active, 'inactive-tab': !tab.active }">
                                    <a :id="tab.id" class="nav-link" :class="{ active: tab.active }" data-bs-toggle="tab" aria-current="true" :href="tab.href" @click="switchTab(tab.id)">
                                        {{ tab.name }}
                                    </a>
                                </h2>
                            </li>
                        </ul>
                    </div>
                <!-- </div> -->
            <!-- </div>    -->
            
            <!-- <div class="col-md-9"> -->
                <div class="container tab-content">

                    <div class="tab-pane fade show active" id="pers">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/siaranPers/SP-1.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">PT Pupuk Indonesia Utilitas Raih Indonesian Quality Award 2022</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">13 Desember 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers1" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>PT Pupuk Indonesia Utilitas Raih Indonesian Quality Award 2022</h2>
                                                <img src="../assets/siaranPers/SP-1.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">13 Desember 2022</small></p>
                                                
                                                <p class="text-justify">
                                                    PT Pupuk Indonesia Utilitas berhasil meraih penghargaan dalam ajang Indonesian Quality Award (IQA) tahun 2022 yang diselenggarakan oleh Indonesian Quality Award Foundation (IQAF) bersama BUMN Executive Club (BEC) di hotel Fairmont Jakarta pada Senin, 12 Desember 2022. Dalam ajang ini, PT Pupuk Indonesia Utilitas berhasil meraih predikat “Good Performance” dengan skor 508 atau mengalami peningkatan 31 poin dari pencapaian tahun sebelumnya yaitu 477 (berdasarkan penilaian KPKU)
                                                </p>

                                                <p class="text-justify">
                                                    Untuk diketahui, Good Performance adalah kategori dalam asesmen dengan implementasi kerangka BEF yang memiliki skor 476-575.
                                                </p>
                                                    
                                                <p class="text-justify">
                                                    IQA merupakan bentuk penghargaan terhadap penilaian kinerja ekselen berbasiskan Kriteria Baldrige atau yang juga dikenal dengan istilah Malcolm Baldrige Criteria for Performance Excellence (MBCfPE).
                                                </p>

                                                <p class="text-justify">
                                                    Penilaian mengacu pada kriteria kinerja ekselen Malcolm Baldrige Education Critera for Performance Excellence. Kriteria ini terdiri dari tujuh kategori, yaitu leadership, strategic planning, customer focus, measurement analysis & knowledge management, workforce focus, Process Management, dan result.
                                                </p>

                                                <p class="text-justify">
                                                    Direktur Utama PT Pupuk Indonesia Utilitas, Agus Subekti mengatakan bahwa penghargaan ini sebagai komitmen untuk mendorong kinerja unggul perusahaan sekaligus menjadi semangat bagi kami untuk terus melakukan transformasi bisnis dan meningkatkan kinerja perusahaan ditengah tantangan atas ketidakpastian lingkungan bisnis dan ekonomi global.
                                                </p>

                                                <p class="text-justify">
                                                    Kegiatan penilaian ini akan menjadi agenda rutin perusahaan dalam penerapan Baldridge Excellence Framework (BFF) yang berkelanjutan sehingga dapat membantu peningkatan kinerja pada tahun-tahun selanjutnya.
                                                </p>

                                                <p class="text-justify">
                                                    Adapun tema yang diusung pada tahun 2022 ini “Membangun Ketangguhan Organisasi Untuk Pemulihan Nasional dan Unggul Dalam Persaiangan Global”. Tema ini sejalan dengan semangat perusahaan yang dibuktikan dengan mencatatkan pencapaian kinerja yang baik dan meningkat dimasa Covid-19 serta mampu menjawab tantangan yang ada pada lingkungan bisnis dan ketidakpastian ekonomi global melalui 5 (lima) strategi yang diterapkan perusahaan, pertama meningkatkan kehandalan pabrik, kedua meningkatkan kompetensi Sumber Daya Manusia (SDM) yang dimiliki, ketiga menjaga tingkat kesehatan karyawan, keempat melakukan efisiensi biaya dan yang terakhir atau kelima sekaligus yang terpenting adalah menjaga kepuasan pelanggan”. 
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers2">
                                    <img src="../assets/siaranPers/SP-2.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Pupuk Indonesia Lunurkan Program Kompetisi Jurnalistik</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">5 Oktober 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers2" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>PT Pupuk Indonesia Utilitas Raih Indonesian Quality Award 2022</h2>
                                                <img src="../assets/siaranPers/SP-2.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">5 Oktober 2022</small></p>
                                                
                                                <p class="text-justify">
                                                    PT Pupuk Indonesia (Persero) resmi membuka program kompetisi karya jurnalistik Pupuk Indonesia Media Award (PIMA) 2022. Dengan mengusung tema besar “Makmur Bersama Indonesia”, kompetisi ini terbuka bagi seluruh wartawan, baik dari media massa tingkat nasional maupun seluruh media massa di daerah.
                                                </p>

                                                <p class="text-justify">
                                                    SVP Komunikasi Korporat, Wijaya Laksana, menyatakan bahwa program ini masih dalam rangka peringatan satu dekade Pupuk Indonesia pada tahun 2022. Wijaya menyebutkan bahwa ajang ini adalah perdana bagi perusahaan. Oleh karena itu, PIMA 2022 diharapkan dapat memperkenalkan lebih jauh tentang industri pupuk dan transformasi bisnis di Pupuk Indonesia dan anak perusahaannya.
                                                </p>
                                                    
                                                <p class="text-justify">
                                                    “Selain itu, program ini juga bentuk apresiasi kami atas kinerja serta dukungan seluruh wartawan melalui berbagai publikasi seputar bisnis utama hingga aktivitas operasional perusahaan, baik terkait Pupuk Indonesia maupun anak perusahaan,” jelas Wijaya.
                                                </p>

                                                <p class="text-justify">
                                                    Lebih lanjut Wijaya menyebutkan bahwa tujuan lain dari program ini adalah untuk menjadi sarana edukasi dan sosialisasi, khususnya bagi wartawan maupun masyarakat pada umumnya. Mulai dari kontribusi perusahaan pada sektor pertanian hingga berbagai program transformasi bisnis Pupuk Indonesia. Karena saat ini Pupuk Indonesia dan anak perusahannya tengah melakukan banyak terobosan dan inovasi di berbagai bidang untuk meningkatkan daya saing.
                                                </p>

                                                <p class="text-justify">
                                                    Pupuk Indonesia sendiri telah menjalankan program transformasi bisnis sejak tahun 2020. Program ini menyasar ke berbagai lini bisnis perusahaan, mulai dari bidang produksi, supply chain atau distribusi, pemasaran, SDM atau human capital, pengembangan, digitalisasi, hingga berbagai program lainnya yang berkontribusi terhadap sektor pertanian dan perekonomian nasional.
                                                </p>

                                                <p class="text-justify">
                                                    Oleh karena itu, kompetisi jurnalistik ini tidak hanya terbatas pada publikasi seputar kinerja Pupuk Indonesia saja. Melainkan juga publikasi kinerja dan aktivitas dari kesepuluh anak perusahaannya. Adapun kesepuluh anak usaha Pupuk Indonesia adalah PT Pupuk Iskandar Muda, PT Pupuk Sriwidjadja Palembang, PT Pupuk Kujang Cikampek, PT Pupuk Kalimantan Timur, PT Petrokimia Gresik, PT Rekayasa Industri, PT Mega Eltra, PT Pupuk Indonesia Utilitas, PT Pupuk Indonesia Pangan, dan PT Pupuk Indonesia Logistik.
                                                </p>

                                                <p class="text-justify">
                                                    Setidaknya terdapat dua sub tema dalam ajang ini. Pertama, terkait upaya Pupuk Indonesia dan anak perusahannya dalam mendukung produktivitas pertanian melalui penyediaan pupuk dan nutrisi tanaman, hingga membangun ekosistem pertanian. Sub tema kedua, transformasi Pupuk Indonesia dan anak perusahaannya dalam beradaptasi di era disruptif guna meningkatkan daya saing bisnis dan kontribusi terhadap perekonomian nasional.
                                                </p>

                                                <p class="text-justify">
                                                    Dalam ajang ini, Pupuk Indonesia akan memberikan apresiasi ratusan juta rupiah untuk seluruh pemenang dan nominasi. Adapaun kategori dalam kompetisi ini terdiri dari kategori Media Cetak, Media Online, Media Televisi, dan Fotografi. Sedangkan untuk periode lomba berlaku mulai bulan September hingga November 2022. Penghargaan sendiri direncanakan akan digelar pada bulan Desember 2022.
                                                </p>

                                                <p class="text-justify">
                                                    “Semoga melalui program ini publik semakin mendapat banyak informasi dan pengetahuan, khususnya tentang kinerja dan beragam inovasi dan transformasi Pupuk Indonesia grup dalam mendukung program ketahanan pangan nasional dan berkontribusi dalam perekonomian nasional,” tutup Wijaya.
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers3">
                                    <img src="../assets/siaranPers/SP-3.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Pupuk Indonesia Utilitas Raih Tiga Penghargaan di Ajang TOP GRC Awards 2022 </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">7 September 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers3" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Pupuk Indonesia Utilitas Raih Tiga Penghargaan di Ajang TOP GRC Awards 2022 </h2>
                                                <img src="../assets/siaranPers/SP-3.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">7 September 2022</small></p>
                                                
                                                <p class="text-justify">
                                                    Setiap hasil review, evaluasi dan audit bisa dijadikan pengembangan perbaikan. Perseroan juga sedang mengembangkan BCMS (Business Continuity Management System).
                                                </p>

                                                <p class="text-justify"> 
                                                    Pupuk Indonesia Utilitas (PI Utilitas), salah satu anak perusahaan Pupuk Indonesia (Persero) berhasil meraih tiga penghargaan TOP Governance, Risk and Compilance (Tata Kelola, Risiko dan Kepatuhan) Awards 2022 yang digelar di Hotel Raffles, Jakarta, Selasa, 6 September 2022.
                                                </p>

                                                <p class="text-justify">
                                                    Berdasarkan hasil penilain dewan juri, pada tahun ini PI Utilitas meraih penghargaan sebagai berikut:
                                                </p>

                                                <ol>
                                                    <li>The most committed GRC Leader 2022 : Direktur Utama PI Utilitas Agus Subekti.</li>
                                                    <li>Three Star Top GRC Award 2022 untuk PI Utilitas.</li>
                                                    <li>Special appreciation of Top GRC Award 2022 on Top Special Recognition untuk PI Utilitas.</li>
                                                </ol>
                                                
                                                <p class="text-justify">
                                                    Direktur Utama PI Utilitas, Agus Subekti, usai menerima penghargaan mengemukakan jika pandemi Covid-19 memang telah memberikan pengaruh terhadap kinerja perseroan pada 2021. Agus mencatat ada lima pengaruh yaitu, pertama adanya pengaturan sistem kerja, mulai dari Work from Home (WFH), Work from Office (WFO) hingga pengaturan jadwal kerja/shift.
                                                </p>
                                                
                                                <p class="text-justify">
                                                    Selanjutnya yang kedua menurut Agus adalah penerapan/implementasi digital office. Kemudian yang ketiga adalah optimalisasi fasilitas teknologi berbasis digital seperti zoom meeting, google meet dan microsoft teams. Keempat adalah penerapan protokol kesehatan (prokes) yaitu 5M (Mencuci tangan, Memakai masker, Menjaga jarak, Menjauhi kerumunan, Mengurangi mobilitas).
                                                </p>
                                                
                                                <p class="text-justify">
                                                    “Terakhir atau kelima adalah efisiensi biaya administrasi umum,” katanya.
                                                </p>
                                                <p class="text-justify">
                                                    Sebagai upaya antisipasi agar pandemi tidak terlalu berpengaruh terhadap kinerja perseroan, Agus mengatakan ada lima strategi yang diterapkan perusahaan yang dipimpinnya yaitu, pertama meningkatkan keandalan pabrik, kedua meningkatkan kompetensi sumber daya manusia (SDM) yang dimiliki oleh perseroan, ketiga menjaga kesehatan SDM dan keempat adalah dengan melakukan efisiensi biaya.
                                                </p>

                                                <p class="text-justify">
                                                    “Terakhir atau yang kelima sekaligus yang terpenting adalah menjaga kepuasan pelanggan,” ujarnya.
                                                </p>

                                                <p class="text-justify">
                                                    Agus mengutarakan PI Utilitas mampu menjawab tantangan atas ketidakpastian lingkungan bisnis dan ekonomi global melalui kedisiplinan penerapan GRC secara terpadu dan terkoordinasi. Agus mengatakan GRC adalah cerminan komitmen PI Utilitas untuk mengembangkan kebijakan dan meningkatkan tata kelola perusahaan, manajemen risiko dan kepatuhan terhadap regulasi.
                                                </p>

                                                <p class="text-justify">
                                                    "Sehingga akuntabilitas atas proses yang dijalankan dapat selalu terjaga," katanya.
                                                </p>

                                                <p class="text-justify">
                                                    Dalam penerapan tata kelola dan kepatuhan, Agus menjelaskan PI Utilitas juga telah mengembangkan antara lain melalui implementasi fraud control system, penerapan Sistem Manajemen Anti Penyuapan (SMAP) ISO 37001:2016, dan secara konsisten juga ikut serta dalam asesmen Good Corporate Governance (GCG) setiap tahunnya yang dilakukan oleh Badan Pemeriksa Keuangan dan Pembangunan (BPKP) maupun konsultan internal.
                                                </p>
                                                
                                                <p class="text-justify">
                                                    Itu semua menurut Agus adalah bagian dari komitmen dalam membangun kelengkapan sistem dan infrastruktur tata kelola dan kepatuhan perusahaan. Sedangkan untuk penerapan implementasi manajemen risiko, Agus mengutarakan jika perusahaan melakukan pengelolaan risiko berbasis teknologi informasi melalui aplikasi Prisma (Pupuk Indonesia Risk Management System).
                                                </p>
                                                
                                                <p class="text-justify">
                                                    Selain itu, Agus menambahkan secara bersamaan, perseroan juga sedang mengembangkan BCMS (Business Continuity Management System). Sebuah sistem yang berfungsi untuk melihat secara holistic dan mengidentifikasi ancaman potensial serta yang berdampak kepada operasional organisasi.
                                                </p>
                                                
                                                <p class="text-justify">
                                                    Terakhir, Agus menambahkan dengan implementasi GRC yang optimal, setiap hasil review, evaluasi dan audit bisa dijadikan pengembangan perbaikan.
                                                </p>
                                                
                                                <p class="text-justify">
                                                    “Maka bisnis perusahaan pun akan tetap aman dan tumbuh dengan baik,” katanya {}
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers4">
                                    <img src="../assets/siaranPers/SP-4.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Genap Berusia Sewindu, PI Utilitas Rumuskan Sembilan Rencana Strategis</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">22 Agustus 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers4" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Genap Berusia Sewindu, PI Utilitas Rumuskan Sembilan Rencana Strategis </h2>
                                                <img src="../assets/siaranPers/SP-4.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">22 Agustus 2022</small></p>
                                                
                                                <p class="text-justify">Mulai dari rencana pembangunan pabrik nitrogen hingga pembangkit listrik tenaga surya. Selain itu, juga dilakukan lima penandatangan kerja sama.</p>

                                                <p class="text-justify">JAKARTA - Pada 18 Agustus 2022, PT Pupuk Indonesia Utilitas (“PI Utilitas”), salah satu anak perusahaan PT Pupuk Indonesia (Persero) genap berusia delapan tahun (sewindu).</p>

                                                <p class="text-justify">Direktur Utama (Dirut) PI Utilitas, Agus Subekti, mengemukakan jika ada sembilan rencana strategis perseroan yang akan segera direalisasikan. Rencana tersebut diungkapkan Agus pada perayaan ulang tahun kedelapan yang digelar secara hybrid di Hotel Le Meridien Jakarta, Kamis, 18 Agustus 2022.</p>

                                                <p class="text-justify">“PI Utilitas akan terus melakukan transformasi dan peningkatan ekspansi bisnis. Beberapa rencana strategis proyek pengembangan PI Utilitas ke depan saat ini ada yang sedang dalam proses tender dan ada juga dalam tahapan kajian yang dilakukan oleh internal PI Utilitas dan konsultan,” katanya.</p>

                                                <p class="text-justify">Agus menjelaskan beberapa program pengembangan yang saat ini sedang dilakukan yaitu, pertama rencana pembangunan Cikampek Nitrogen & Oxygen Plant (“CNOP”) di Kawasan Cikampek, Jawa Barat yang saat ini sedang dalam tahapan proses tender dan pembangunannya ditargetkan selesai awal tahun 2024. Kedua, perseroan juga sedang mempersiapkan rencana akuisisi salah satu perusahaan pembangkit listrik yang Insya Allah akan terealisasi pada tahun ini. Ketiga, rencana pembangunan Pembangkit Listrik Tenaga Surya (PLTS) untuk mendukung program Dekarbonisasi di Grup PT Pupuk Indonesia (Persero)</p>

                                                <p class="text-justify">“Keempat, Pembangunan Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) juga menjadi bagian dari rencana strategis yang akan kami lakukan ke depan,” ujarnya.</p>

                                                <p class="text-justify">Kelima, menurut Agus, pada saat ini juga sedang dilakukan kajian pembangunan panel surya (solar cell) di Grup PT Pupuk Indonesia. Keenam. Operation and Maintenance (O&M) Water Treatment Plant System. Ketujuh, kajian pembangunan package boiler untuk pabrik soda ash di kawasan industri Petrokimia Gresik di Kabupaten Gresik, Jawa Timur.</p>

                                                <p class="text-justify">“Kedelapan adalah rencana pembangunan gas engine untuk kawasan industri di Lhokseumawe, Aceh dan Kesembilan atau terakhir kajian terkait rencana trading gas industri,” katanya.</p>

                                                <p class="text-justify">Terkait dengan rencana strategis tersebut, Agus mengatakan pada hari ini telah dilakukan penandatanganan lima kerjasama. Pertama, Head of Agreement (HOA) antara PI Utilitas dengan PT Rekayasa Industri. Kemudian yang kedua adalah Memorandum of Understanding (MoU) antara PI Utilitas dengan PT Metito Indonesia tentang kerja sama dalam bidang water treatment plant (WTP) system. Ketiga, adalah MoU antara PI-Utilitas dengan PT Empat Mitra Indika Tenaga Surya.</p>

                                                <p class="text-justify">“Tentang pengembangan energi baru terbarukan,” ujarnya.</p>

                                                <p class="text-justify">Selain itu, Agus menambahkan yang keempat adalah penandatanganan kesepakatan bersama tentang rencana kerja sama strategis antara PT Pupuk Kujang dan PI Utilitas. Terakhir atau kelima adalah kesepakatan bersama antara PI Utilitas dan PT Hurip Putera Husada.</p>

                                                <p class="text-justify">“Mengenai rencana kerja sama strategis penyediaan oksigen,” katanya {}.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers5">
                                    <img src="../assets/siaranPers/SP-5.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Pupuk Indonesia Energi Melakukan Rebranding Menjadi Pupuk Indonesia Utilitas</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">1 Desember 2021</small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers5" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Pupuk Indonesia Energi Melakukan Rebranding Menjadi Pupuk Indonesia Utilitas</h2>
                                                <img src="../assets/siaranPers/SP-5.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">1 Desember 2021</small></p>
                                                
                                                <p class="text-justify">Jakarta – PT Pupuk Indonesia Energi (PI Energi), salah satu anak usaha PT Pupuk Indonesia (Persero), melakukan rebranding dengan mengubah nama menjadi Pupuk Indonesia Utilitas (PI Utilitas).</p>

                                                <p class="text-justify">Direktur Utama Pupuk Indonesia Utilitas, Agus Subekti mengemukakan bahwa perubahan nama atau rebranding ini akan mengukuhkan posisi Pupuk Indonesia Utilitas sebagai one stop utility provider, yaitu klaster utilitas yang didedikasikan dibangun untuk menunjang salah satu dari tiga komponen utama dari pabrik pupuk yaitu pabrik utilitas (listrik, steam, air dan nitrogen), pabrik urea dan pabrik amoniak.</p>

                                                <p class="text-justify">“Sehingga terminologi utilitas jauh lebih familiar dan melengkapi kebutuhan industri pupuk,” ujarnya.</p>

                                                <p class="text-justify">Produsen pupuk anak usaha Pupuk Indonesia seperti Pupuk Kalimantan Timur, Pupuk Kujang Cikampek, Pupuk Sriwidjaja Palembang, Pupuk Iskandar Muda, hingga Petrokimia Gresik, ketiga komponen utama tersebut telah menjadi bagian integral ke dalam pabrik.</p>

                                                <p class="text-justify">Selain itu, Agus menambahkan jika ruang lingkup bisnis utilitas tentu jauh lebih luas dibanding bisnis energi. Dia menegaskan bahwa energi merupakan bagian dari utilitas. Jadi utilitas menurut Agus bisa berupa energi, listrik, uap (steam), air proses hingga air utilitas dan udara instrumen.</p>

                                                <p class="text-justify">“Itu semua dibutuhkan oleh pabrik pupuk,” katanya.</p>

                                                <p class="text-justify">Tak sekadar perubahan nama, Agus mengatakan rebranding juga menjadi turning point transformasi bisnis, sehingga juga dilakukan terhadap Anggaran Dasar (AD) maupun Anggaran Rumah Tangga (ART) perusahaan. Agus menambahkan jika logo dan mars perusahaan juga berubah secara resmi pada hari ini.</p>

                                                <p class="text-justify">Kedepan, PI Utilitas juga akan membangun pabrik pengolahan udara dengan estimasi commercial operation date pada akhir 2023 yang direncanakan memproduksi gas industri dengan produk nitrogen dan oksigen dengan target market lebih luas untuk menjangkau industri di luar grup Pupuk Indonesia.</p>

                                                <p class="text-justify">“Semoga perubahan ini menjadikan perusahaan lebih baik ke depan,” ujarnya.</p>

                                                <p class="text-justify">Sementara itu, Direktur Utama Pupuk Indonesia, Bakir Pasaman menyatakan bahwa nama Pupuk Indonesia Utilitas ini adalah salah satu inisiatif strategis sebagai bagian dari upaya restrukturisasi dan pengembangan anak usaha Pupuk Indonesia Group. Pergantian nama dan logo ini disebut memiliki makna yang sangat substansial karena akan sangat mempengaruhi pengembangan bisnis Pupuk Indonesia Utilitas ke depan.</p>

                                                <p class="text-justify">“Kami berharap dengan pergantian nama ini, Pupuk Indonesia Utilitas memiliki keberanian dan kreativitas untuk merambah bisnis-bisnis lain di luar bisnis energi yang saat ini dijalani,” ujar Bakir.</p>

                                                <p class="text-justify">Pupuk Indonesia Utilitas adalah perusahaan dengan kepemilikan saham holding Pupuk Indonesia sebesar 60 persen. Sementara selebihnya adalah Pupuk Kalimantan Timur (10 persen), Petrokimia Gresik (10 persen), Pupuk Sriwidjaja Palembang (7 persen), Rekayasa Industri (3 persen), Pupuk Kujang Cikampek (5 persen), dan Pupuk Iskandar Muda (5 persen).</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers6">
                                    <img src="../assets/siaranPers/SP-6.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">PI Utilitas Raih Sertifikasi ISO 9001:2015 Terkait Manajemen Mutu </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">8 Oktober 2020 </small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers6" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>PI Utilitas Raih Sertifikasi ISO 9001:2015 Terkait Manajemen Mutu </h2>
                                                <img src="../assets/siaranPers/SP-6.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">8 Oktober 2020 </small></p>
                                              
                                                <p class="text-justify">Pupuk Indonesia Energi (PI Energi), salah satu anak perusahaan Pupuk Indonesia (Persero) berhasil meraih sertifikasi ISO 9001:2015 terkait Manajemen Mutu pada, Selasa 6 Oktober 2020.</p>

                                                <p class="text-justify">Perlu digarisbawahi jika ISO 9001 adalah standar internasional yang menetapkan persyarahan untuk sistem manajemen mutu (SMM). Organisasi menggunakan standar untuk menunjukkan kemampuan secara konsisten, terutama dalam menyediakan produk dan layanan yang memenuhi keinginan pelanggan dan persyaratan peraturan.</p>

                                                <p class="text-justify">Sebagai auditor terakreditasi untuk melakukan sertifikasi ISO 9001:2015, TUV NORD Indonesia menyatakan pada Selasa, 6 Oktober 2020, PI Energi berhak mendapatkan sertifikasi ISO 9001:2015 terkait Manajemen Mutu. Adapun lingkup sertifikasi yang dilakukan oleh TUV NORD Indonesia pada audit ISO 9001:2015 meliputi produk Listrik dan Steam, dimana kedua produk tersebut adalah produk utama dari PI Energi.</p>

                                                <p class="text-justify">Menanggapi capaian perusahaan yang telah berdiri selama enam tahun sejak 2014 lalu, Direktur Utama PI Energi Tentaminarto Tri Februartono memberikan apresiasi kepada seluruh Insan PI Energi yang telah bekerja keras untuk memperoleh sertifikasi ISO 9001:2015 ini, sekaligus berkomitmen untuk memberikan yang terbaik bagi seluruh stakeholders.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers7">
                                    <img src="../assets/siaranPers/SP-7.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">PI-Energi Salurkan Bantuan Sembako untuk Pondok Pesantren </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">15 Juli 2020 </small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers7" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>PI-Energi Salurkan Bantuan Sembako untuk Pondok Pesantren </h2>
                                                <img src="../assets/siaranPers/SP-7.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">15 Juli 2020 </small></p>
                                                
                                                <p class="text-justify">PT Pupuk Indonesia Energi (PI-Energi) menyerahkan bantuan sembako kepada salah satu pesantren di Kawasan Bogor, Jawa Barat pada 11 Juli 2020. Penyerahan bantuan sembako secara simbolis dilakukan oleh Direktur Utama PI Energi, Tentaminarto Tri Februartono dan Direktur Keuangan PI Energi, Nendroyogi Hadiputro serta didampingi oleh VP Komunikasi Internal PT Pupuk Indonesia (Persero), M Tony Houston.</p>

                                                <p class="text-justify">Bantuan sembako ini diberikan kepada Pondok Pesantren Aladzievie, Bogor, Jawa Barat. Bantuan sembako terdiri dari beras, masker, vitamin C, gula, sarden, mie instan, susu, minyak goreng dan lain-lain.</p>

                                                <p class="text-justify">Pondok Pesantren Aladzievie sendiri merupakan pondok pesantren binaan Ustad Subhan Bawazier yang saat ini mendidik kurang lebih 200 santri dengan jenjang pendidikan SD hingga SMA. Meskipun terbuka untuk umum, Pondok Pesantren Aladzievie membebaskan biaya pendidikan untuk Yatim Piatu serta meringankan biaya pendidikan untuk kaum Dhuafa.</p>

                                                <p class="text-justify">Tentaminarto selaku Direktur Utama PI-Energi menyampaikan, penyerahan bantuan ini merupakan bentuk kepedulian perusahaan kepada para santri untuk mendukung pondok pesantren dalam menghadapi wabah COVID-19.</p>

                                                <p class="text-justify">“PT Pupuk Indonesia Energi menyerahkan bantuan ini dengan harapan dapat meringankan beban pondok pesantren agar ketersediaan bahan pangan pokok tetap stabil untuk para santri yang sedang melanjutkan pendidikannya. Dalam membentuk akhlak yang baik untuk generasi muda tentunya diperlukan kepedulian sosial yang tinggi. Penyebaran COVID-19 masih terus meningkat setiap harinya. Kami harap santri dapat menjaga kesehatan dengan menekuni pendidikan sambil #diPondokAja.” ujar Tentaminarto.</p>

                                                <p class="text-justify">PI-Energi menyadari sepenuhnya bahaya COVID-19 dan akan terus berkomitmen untuk menjaga kebersihan dan kesehatan seluruh insanPIE serta masyarakat sekitar. Kami menghimbau untuk seluruh insan PIE dan masyarakat untuk meminimalisir bepergian tanpa alasan penting sebagai upaya untuk mengurangi dan memutus rantai penyebaran COVID-19.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers8">
                                    <img src="../assets/siaranPers/SP-8.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Langkah Preventif PI-Energi Cegah COVID-19 </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">10 Juni 2020 </small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers8" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Langkah Preventif PI-Energi Cegah COVID-19 </h2>
                                                <img src="../assets/siaranPers/SP-8.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">10 Juni 2020 </small></p>
                                                
                                                <p class="text-justify">Selasa (02/06/2020) PT Pupuk Indonesia Energi(PI-Energi) telah melakukan rapid test dalam rangka mencegah potensi penyebaran virus COVID-19 di kantor pusat PI-Energi di Jakarta, sebagai persiapan memasuki era New Normal. Empat tenaga medis bertugas menangani rapid test yang diikuti oleh Direksi dan seluruh Karyawan PI-Energi.</p>

                                                <p class="text-justify">Sebagai informasi, rapid test adalah metode skrining awal untuk mendeteksi atau mendiagnosa infeksi COVID-19 pada tubuh. Prosedur pemeriksaan dimulai dengan mengambil sampel darah dari ujung jari yang kemudian diteteskan ke alat rapid test. Hasil dari tes tersebut akan muncul dalam 10 hingga 15 menit.</p>

                                                <p class="text-justify">"Alhamdulillah, berdasarkan kegiatan rapid test yang telah dilakukan, sampai saat ini hasilnya seluruh insan PI-Energi kantor pusat dalam keadaan sehat. Kami berupaya maksimal untuk terus waspada dan menghimbau seluruh insan PI-Energi untuk tetap menjaga kebersihan dan kesehatan masing-masing demi produktivitas perusahaan.“ ujar Benny Nasution, Sekretaris Perusahaan PI-Energi.</p>

                                                <p class="text-justify">Tak hanya itu, pabrik pembangkit listrik milik PI-Energi di Gresik, Jawa Timur, bekerjasama dengan RS Petrokimia Gresik juga telah melakukan rapid test untuk seluruh insan PI-Energi yang bertugas di sana. Rapid test dilakukan secara bertahap pada 12 Mei 2020 dan 22 Mei 2020. Rapid test dilakukan oleh empat tenaga medis dan diikuti sebanyak 57 karyawan yang terdiri dari Manajer, Staf Ahli, Engineer, Operator, dan sebagainya.</p>

                                                <p class="text-justify">PI-Energi berusaha semaksimal mungkin untuk melakukan pencegahan penyebaran COVID-19 dengan memberlakukan beberapa prosedur, diantaranya adalah melakukan rapid test, pembentukan Tim Gugus Pencegahan dan Penanggulangan COVID-19, penerapan shifting Work From Home(WFH) dan Work From Office(WFO), himbauan wajib menggunakan masker, pengecekan suhu tubuh sebelum memasuki wilayah kantor dan pabrik serta penyediaan hand sanitizer, masker dan vitamin C untuk insan PI-Energi.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers9">
                                    <img src="../assets/siaranPers/SP-9.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">PI-Energi Bagikan Sembako Untuk Yayasan Yatim Piatu </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">10 Juni 2020 </small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers9" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>PI-Energi Bagikan Sembako Untuk Yayasan Yatim Piatu </h2>
                                                <img src="../assets/siaranPers/SP-9.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">10 Juni 2020 </small></p>
                                                
                                                <p class="text-justify">PI-Energi menyalurkan bantuan sembako kepada panti asuhan di wilayah Jakarta Pusat pada 06 Mei 2020. Bantuan ini merupakan bentuk dukungan pemenuhan kebutuhan pangan bagi anak yatim piatu di masa pendemi Covid-19. Bantuan sembako diberikan kepada Yayasan Yatim Piatu Rasulullah SAW dan Pondok Yatim & Dhuafa yang terdiri dari beras, gula, mie instant, telur, susu, minyak, dan lain-lain. Bantuan ini diberikan secara simbolis oleh perwakilan staff Milenial PI-Energi.</p>

                                                <p class="text-justify">Benny Nasution, Sekretaris Perusahaan PI-Energi, menjelaskan bantuan ini merupakan upaya PI-Energi untuk senantiasa hadir, berbagi, dan memberikan manfaat sosial bagi masyarakat yang membutuhkan. PI-Energi berharap dengan tersalurkannya bantuan ini, PI-Energi dapat terus berkomitmen dan berkontribusi bagi masyarakat sekitar.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers10">
                                    <img src="../assets/siaranPers/SP-10.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Kunjungi Yogyakarta, Dirut PI-Energi Dalami Potensi Energi Baru Terbarukan</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">28 Februari 2020</small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers10" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Kunjungi Yogyakarta, Dirut PI-Energi Dalami Potensi Energi Baru Terbarukan</h2>
                                                <img src="../assets/siaranPers/SP-10.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">28 Februari 2020</small></p>
                                                
                                                <p class="text-justify">Dalam rangka pengembangan Energi baru dan terbarukan, Pupuk Indonesia Energi (PI-Energi) terus melakukan studi banding untuk perencanaan implementasi instalasi pembangkit listrik energi baru dan terbarukan. Direktur Utama PI-Energi Tentaminarto telah mengunjungi Pantai Baru, Bantul, Yogyakarta, dan Baron Technopark, Gunung Kidul, Yogyakarta, pada Senin, 24 Februari 2020.</p>

                                                <p class="text-justify">Pada kesempatan itu, Tenta didampingi Rama Usvika (General Manager Investasi), Hisar Desmon Yosua (Manager Pabrik IPP Gresik), Zakky Syafaristanto (Electrical Engineer), dan Candrika Ajeng (Staf Investasi dan Pengembangan).</p>

                                                <p class="text-justify">“PI-Energi harus menjadi perusahaan yang leading dalam bidang energi konvensional, non konvensional bahkan energi baru dan terbarukan. Kami terus berupaya memaksimalkan pengelolaan yang baik dan bijak pada sumber energi baru dan terbarukan,” ujar Tenta.</p>

                                                <p class="text-justify">Kunjungan tersebut merupakan bentuk komitmen dari PI-Energi untuk meningkatkan kualitas teknologi perusahaan. Dengan tercapainya kualitas teknologi yang baik, PI-Energi percaya dapat membawa perubahan yang signifikan untuk masa depan perusahaan.</p>

                                                <p class="text-justify">Pantai Baru, Bantul yang dikunjungi tim, terkenal dengan pantainya yang asri dan teduh berkat deretan pohon cemara. Pantai ini populer sebagai destinasi wisata lingkungan dan wisata edukasi. Di kawasan ini juga terdapat belasan menara kincir angin setinggi 10-18 meter, dengan total 34 unit kincir angin. Banyak pelajar datang untuk mempelajari cara kerja kincir angin ini, mulai dari siswa taman kanak-kanak hingga mahasiswa.</p>

                                                <p class="text-justify">Adapun Baron Technopark merupakan pusat penelitian dan pengembangan teknologi energi terbarukan, sekaligus sarana diseminasi IPTEK Energi Terbarukan. Pembangkit listrik yang dikembangkan di Baron Technopark ini merupakan Sistem PLTH (Pembangkit Listrik Tenaga Hibrida) yang dapat menghasilkan listrik dari energi sinar matahari, angin, dan mesin diesel.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers11">
                                    <img src="../assets/siaranPers/SP-11.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Lestarikan Ekowisata, PT Pupuk Indonesia Energi Salurkan Dana CSR</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">17 Februari 2020 </small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers11" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Lestarikan Ekowisata, PT Pupuk Indonesia Energi Salurkan Dana CSR</h2>
                                                <img src="../assets/siaranPers/SP-11.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">17 Februari 2020 </small></p>
                                                
                                                <p class="text-justify">Sebagai wujud dukungan pelestarian ekowisata, PT Pupuk Indonesia Energi (PI Energi) menyalurkan bantuan kepedulian dalam rangka pelaksanaan Corporate Social Responsibility (CSR) di akhir tahun 2019.</p>

                                                <p class="text-justify">Dana bantuan sebesar Rp368.000.000 diberikan kepada kawasan Gresik, Jawa Timur. Kegiatan CSR ini merupakan upaya rehabilitasi ekosistem alam dan penghijauan jalan desa. Tak hanya itu, dana CSR juga akan dimanfaatkan untuk membangun fasilitas pendukung Ekowisata. PI Energi secara rutin terus menerus memantau perkembangan pengerjaan kegiatan CSR yang sudah dimulai sejak Desember 2019 itu, agar kelak terealisasi dengan baik.</p>

                                                <p class="text-justify">Benny Swastika Nasution selaku Sekretaris Perusahaan mengungkapkan tujuan kegiatan CSR ini adalah bentuk dukungan PI Energi akan pemeliharaan lingkungan, sesuai dengan tata nilai perusahaan kami yaitu PIE-GO. Salah satu tata nilainya adalah peduli terhadap lingkungan. Dengan landasan tata nilai perusahaan tersebut, kami berupaya terus berkontribusi mendukung pelestarian lingkungan. PI Energi, selaku anak perusahaan dari PT Pupuk Indonesia (Persero), berusaha untuk menjunjung tinggi tata nilai PI Energi, PIE-GO. Terdapat salah satu pilar PIE-GO yaitu Environmentally friendly, Health, and Safety.</p>

                                                <p class="text-justify">Dalam pilar tersebut, PI Energi berkomitmen untuk terus menjunjung tinggi kelestarian dana pemeliharaan lingkungan alam. Hal ini menunjukkan komitmen PI Energi untuk terus mendukung pelestarian lingkungan sehingga dapat memberi lebih banyak dampak dan manfaat positif bagi masyarakat luas.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers12">
                                    <img src="../assets/siaranPers/SP-12.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">PI-Energi Raih Penghargaan Temu Karya Mutu dan Produktivitas Nasional</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">25 November 2019</small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers12" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>PI-Energi Raih Penghargaan Temu Karya Mutu dan Produktivitas Nasional</h2>
                                                <img src="../assets/siaranPers/SP-12.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">25 November 2019</small></p>
                                                
                                                <p class="text-justify">Digelar di Solo Jawa Tengah. Mulai 19-22 November 2019.</p>

                                                <p class="text-justify">SOLO – Pupuk Indonesia Energi (PI-Energi) berhasil meraih penghargaan Temu Karya Mutu dan Produktivitas Nasional (TKMPN) ke-23 yang digelar di Solo, Jawa Tengah, Jumat, 22 November 2019.</p>

                                                <p class="text-justify">Meski baru pertama kali menjadi peserta di ajang TKMPN, dua tim yang dikirim berhasil meraih prestasi yang membanggakan perseroan.</p>

                                                <p class="text-justify">Direktur Utama (Dirut) PI-Energi, Tentaminarto Tri Februartono, yang akrab disapa Tenta mengemukakan pada event yang digelar sejak Selasa, 19 November 2019 hingga Jumat, 22 November 2019, Tim QCC Energize berhasil meraih platinum. Sementara tim QCC Cogen menyabet emas.</p>

                                                <p class="text-justify">“Sebagai pendatang baru, tentu prestasi yang berhasil diraih patut untuk diapresiasi,” katanya.</p>

                                                <p class="text-justify">Tenta mengutarakan prestasi yang berhasil diraih tentunya bukanlah sebuah akhir. Namun harus dijadikan sebuah awal yang baik untuk meraih prestasi-prestasi berikutnya.</p>

                                                <p class="text-justify">“Perseroan tentu akan memberikan dukungan penuh,” ujarnya {}.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers13">
                                    <img src="../assets/siaranPers/SP-13.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Pemegang Saham PI Energi Angkat Direktur Operasi Baru </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">6 September 2019</small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers13" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Pemegang Saham PI Energi Angkat Direktur Operasi Baru </h2>
                                                <img src="../assets/siaranPers/SP-13.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">6 September 2019</small></p>
                                                
                                                <p class="text-justify">PT Pupuk Indonesia Energi, anak perusahaan Pupuk Indonesia (Persero), mengangkat Digna Jatiningsih sebagai Direktur Operasi.</p>

                                                <p class="text-justify">Digna menggantikan Kuntari Laksmitadewi Wahyuningdyah yang akrab disapa Tata. Acara pisah sambut tersebut digelar di Kantor Pusat Pupuk Indonesia Energi Jakarta, pada Rabu, 4 September 2019.</p>

                                                <p class="text-justify">“Seluruh jajaran manajemen dan karyawan mengucapkan terima kasih sebesar-besarnya untuk segenap kontribusi, baik pikiran maupun tenaga yang telah diberikan oleh Bu Tata selama hampir lima tahun terakhir di PI-Energi,” ujar Direktur Utama Tentaminarto Tri Febriartono pada acara tersebut.</p>

                                                <p class="text-justify">Adapun Digna Jatiningsih sebelumnya menjabat sebagai SVP Perencanaan Korporat di PT Pupuk Indonesia (PERSERO) dan ditunjuk sebagai Plt. Direktur Operasi PI Energi sejak 30 Agustus 2019.</p>

                                                <p class="text-justify">Perempuan kelahiran Bantul, Yogyakarta ini sudah berkarier dalam industri pupuk selama 25 tahun, dan bergabung dengan PT Pupuk Indonesia (PERSERO) sejak 2015.</p>

                                                <p class="text-justify">“Selamat datang sekaligus selamat bertugas, Bu Digna. Pengurus perseroan boleh datang dan pergi. Namun PI-Energi harus tetap tumbuh dan berkembang seperti yang telah kita cita-citakan bersama,” ujar Tentaminarto.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers14">
                                    <img src="../assets/siaranPers/SP-14.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Serahkan Bantuan Pendidikan, PI-Energi Fokus Kembangkan SDM Di Indonesia</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">26 Agustus 2019 </small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers14" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Serahkan Bantuan Pendidikan, PI-Energi Fokus Kembangkan SDM Di Indonesia</h2>
                                                <img src="../assets/siaranPers/SP-14.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">26 Agustus 2019 </small></p>
                                                
                                                <p class="text-justify">Perseroan harus terus tumbuh dan berkembang. Sehingga kontribusi terhadap lingkungan sekitar dapat terus ditingkatkan.</p>

                                                <p class="text-justify">Gresik – Pupuk Indonesia Energi (PI-Energi) menyerahkan bantuan kepada Sekolah Dasar Negeri (SDN) Roomo, Gresik, Jawa Timur, Senin, 26 Agustus 2019.</p>

                                                <p class="text-justify">Bantuan diserahkan langsung oleh Direktur Utama (Dirut) Pupuk Indonesia Energi (PI-Energi), Tentaminarto Tri Februartono, yang akrab disapa Tenta. Tenta didampingi Direktur Keuangan (Dirkeu) Nendrayogi Hadiputro.</p>

                                                <p class="text-justify">Tenta mengharapkan lapangan olah raga yang dibangun PI-Energi dapat dimanfaatkan sebaik-baiknya bagi tumbuh kembang siswa maupun siswi di SD Negeri Roomo, Kecamatan Manyar. Selain itu, Tenta juga berharap agar perusahaan yang dipimpinnya dapat terus maju dan berkembang.</p>

                                                <p class="text-justify">“Sehingga konstribusi terhadap lingkungan sekitar juga dapat terus ditingkatkan,” katanya.</p>

                                                <p class="text-justify">Pada acara yang juga dihadiri Kepala Sekolah beserta guru SD Negeri Roomo dan juga perwakilan dari Dinas Pendidikan Kabupaten Gresik, Tenta mengutarakan jika PI-Energi yang genap berusia lima tahun pada 18 Agustus 2019 lalu berkomitmen untuk fokus dalam pengembangan SDM Indonesia. Khususnya SDM di sekitar lingkungan wilayah operasi PI Energi. Tenta juga yakin dan percaya jika PI- Energi akan maju dan berkembang seiring dengan perkembangan Sumber Daya Manusia (SDM) di lingkungan sekitar perusahaan berdiri. Hal itu menurut Tenta sesuai tagline yang diangkat sebagai tema ulang tahun kelima PI-Energi.</p>

                                                <p class="text-justify">“SDM unggul, PI-Energi maju,” ujarnya.</p>

                                                <p class="text-justify">Dalam melaksanakan komitmen tersebut, Tenta berujar pada tahun 2018 lalu, PI-Energi telah memberikan beasiswa kepada siswa dan siswi mulai dari tingkat Sekolah Dasar (SD) hingga Sekolah Lanjutan Tingkat Atas (SLTA) di Gresik.</p>

                                                <p class="text-justify">“Termasuk beberara siswa/siswi di SDN Roomo,” katanya.</p>

                                                <p class="text-justify">Di PI-Energi, saat ini ada tiga karyawan yang pernah bersekolah di SDN Roomo. Pada masa mendatang, Tenta berharap jumlahnya akan terus bertambah. Selain itu, Tenta juga mengharapkan pada masa yang akan datang akan ada alumni siswa SD Roomo yang menjadi salah datu pimpinan di PI-Energi.</p>

                                                <p class="text-justify">“Jadi gantungkanlah cita-citamu setinggi langit,” katanya.</p>

                                                <p class="text-justify">Sekadar informasi, pembangkit pertama milik PI-Energi yang telah beroperasi sejak tahun 2018 lalu yaitu Gresik Gas Cogeneration Plant (GGCP) terletak di Desa Roomo, Kecamatan Manyar, Kabupaten Gresik, Jawa Timur {}.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers15">
                                    <img src="../assets/siaranPers/SP-15.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Kembangkan Bisnis, Pupuk Indonesia Energi Gandeng Universitas Padjajaran </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">2 Agustus 2019 </small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers15" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Kembangkan Bisnis, Pupuk Indonesia Energi Gandeng Universitas Padjajaran </h2>
                                                <img src="../assets/siaranPers/SP-15.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">2 Agustus 2019 </small></p>
                                                
                                                <p class="text-justify">Kualitas sumber daya manusia (SDM) harus terus menerus ditingkatkan. Kerja sama meliputi penerapan hasil penelitian hingga job recruitment.</p>

                                                <p class="text-justify">Bandung – Direktur Utama (Dirut) Pupuk Indonesia Energi (PI-Energi), Tentaminarto Tri Februartono menandatangi Nota Kesepahaman/Memorandum of Understanding (MoU) dengan Dekan Fakultas Ekonomi dan Bisnis Universitas Padjadjaran (FEB-Unpad), Yudi Azis, yang mewakili Pelaksana Tugas (Plt) Rektor Unpad. Penandatanganan MoU dilakukan di The 101 Hotel, Bandung, Selasa, 30 Juli 2019.</p>

                                                <p class="text-justify">Ruang lingkup kerja sama meliputi kajian pengembangan bisnis, penugasan tenaga ahli, penelitian dan pengembangan teknologi baru serta pemanfaatan dan penerapan hasil-hasil penelitian yang telah ada. Selain itu, kerja sama juga menyepakati pemberian bantuan teknis, serta pendidikan dan pelatihan, mulai dari workshop, kunjungan, kuliah umum, magang dosen dan mahasiswa hingga Job Recruitment.</p>

                                                <p class="text-justify">Dirut PI-Energi, Tentaminarto Tri Februartono, yang akrab disapa Tenta mengemukakan jika pada tahun ini, anak perusahaan Badan Usaha Milik Negara (BUMN) yang dipimpinnya genap berusia lima tahun.</p>

                                                <p class="text-justify">“Tepatnya pada 18 Agustus 2019,” katanya.</p>

                                                <p class="text-justify">Menurut Tenta, PI-Energi membutuhkan peningkatan sumber daya manusia (SDM) sekaligus pengembangan bisnis. Tenta menggarisbawahi kedua faktor itulah yang melatarbelakangi kerja sama yang dilakukan dengan FEB-Unpad.</p>

                                                <p class="text-justify">“Terutama di bidang pendidikan dan penelitian,” ujarnya.</p>

                                                <p class="text-justify">Dekan FEB-Unpad, Yudi Azis dalam sambutannya mengutarakan potensi Unpad untuk melakukan kerja sama dengan lembaga-lembaga strategis.</p>

                                                <p class="text-justify">“Khususnya di bidang energi,” katanya.</p>

                                                <p class="text-justify">Mewakili pihak rektorat, Yudi mengatakan jika Plt Rektor Unpad, Rina Indiastuti, mengapresiasi kerja sama strategis yang telah disepakati dengan PI-Energi. Menurut Yudi, kesepakatan sangat sesuai dengan tuntutan Tri Dharma Perguruan Tinggi.</p>

                                                <p class="text-justify">“Yaitu pendidikan, penelitian dan pengabdian masyarakat” ujarnya.</p>

                                                <p class="text-justify">Selain itu, Yudi juga mengharapkan jika kerja sama yang telah disepakati membawa dampak positif bagi kemajuan kedua belah pihak.</p>

                                                <p class="text-justify">“Terutama peningkatan sumber daya manusia,” ujarnya.</p>

                                                <p class="text-justify">Acara penandatanganan juga dihadiri Direktur Operasi (Dirops) PI-Energi, Kuntari Laksmitadewi Wahyuningdyah dan Yudi Faisal dari Pusat Studi Manajemen Unpad.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers16">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Dirgahayu PT Pupuk Indonesia Energi Ke-2</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">21 Desember 2016</small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers16" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Dirgahayu PT Pupuk Indonesia Energi Ke-2</h2>
                                                <img src="../assets/siaranPers/SP-16.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">21 Desember 2016</small></p>
                                                
                                                <p class="text-justify">Dalam rangka memperingati hari ulang tahunnya yang ke-2 pada tanggal 18 Agustus 2016, bertempat di Gedung Petrokimia Gresik Jakarta, PT. Pupuk Indonesia Energi (PI Energi) menggelar acara syukuran dengan potong tumpeng dan doa bersama yang dihadiri oleh Direksi, karyawan, dan tamu-tamu undangan.</p>

                                                <p class="text-justify">Diusianya yang sangat muda ini, PI-Energi telah melakukan beberapa hal penting, yaitu pada tanggal 16 November 2015 PI-Energi dan PT Petrokimia Gresik menandatangani perjanjian tenaga listrik dan steam. Perjanjian ini akan berlaku selama 20 (dua puluh) tahun dan akan berlaku efektif pada Februari 2018 dengan skema Built, Operate, Own (BOO).</p>

                                                <p class="text-justify">Kemudian pada tanggal 18 November 2015 PI- Energi dan PT Perumahan Persero (Tbk) (PT PP) menandatangani kontrak EPCC untuk pembangunan Gresik Gas Cogeneration Plant (GGCP). Perjanjian kontrak yang berlangsung dalam jangka waktu 22 (dua puluh dua) bulan ini memiliki nilai kontrak sekitar USD47 juta. Proyek tersebut memiliki kapasitas terpasang 22 MW listrik dan 160 ton/jam uap untuk menyuplai kebutuhan listrik dan uap pabrik Amonia-Urea II milik PT Petrokimia Gresik yang berlokasi di kawasan industri Petrokimia Gresik dengan progress pembangunan sampai dengan saat ini telah mencapai sekitar 32%. Proyek dimulai sejak akhir November 2015 dan ditargetkan akan selesai pada bulan September 2017, dan akan beroperasi komersial penuh sekitar bulan November 2017.</p>

                                                <p class="text-justify">Serta yang terbaru, pada tanggal 27 Juli 2016, PI-Energi, menandatangani Perjanjian Kredit dengan PT Bank Sumitomo Mitsui Indonesia (Bank SMBC) untuk membiayai pembangunan Proyek Gresik Gas Cogeneration Plant. Plafon pinjaman yang diperoleh oleh PI-Energi dari Bank SMBC adalah sebesar US$ 63,5 juta dan Rp 400 Miliar dengan tenor 8 tahun dan dapat diperpanjang untuk 3 tahun berikutnya.</p>

                                                <p class="text-justify">Acara syukuran dilakukan secara sederhana sebagai simbol bahwa kemeriahan bukanlah point yang dicari tetapi kekompakan serta kebersamaan yang menjadi tujuan pada acara ini. Hal tersebut dilakukan agar rasa kekeluargaan antar karyawan serta karyawati dapat bertambah, yang menjadikan PI-Energi semakin maju dimasa yang akan datang.</p>

                                                <p class="text-justify">Bersama-sama kita bangun PI-Energi yang lebih baik lagi, karena dengan kekompakan akan muncul kesuksesan, dan semoga di umur yang ke-2 tahun ini PI-Energi akan semakin maju ungkap ungkap Tentaminarto, Direktur Utama PI-Energi.</p>

                                                <p class="text-justify">Dalam kesempatan yang sama Dana Sudjana selaku Komisaris PI-Energi mengungkapkan bahwa PI-Energi hingga saat ini telah melakukan pencapaian sesuai target dan diharapkan dapat lebih baik lagi.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers17">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Penandatanganan Kontrak EPCC Gresik Gas Cogeneration Plant </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">14 Oktober 2016 </small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers17" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Penandatanganan Kontrak EPCC Gresik Gas Cogeneration Plant </h2>
                                                <img src="../assets/siaranPers/SP-16.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">14 Oktober 2016 </small></p>
                                                
                                                <p class="text-justify">Pada tanggal 18 November 2015, PT Pupuk Indonesia Energi dan PT Pembangunan Perumahan (Persero) Tbk (PT PP) menandatangani kontrak EPCC untuk pembangunan Gresik Gas Cogeneration Plant (GGCP). Perjanjian kontrak yang berlangsung dalam jangka waktu 22 (dua puluh dua) bulan ini memiliki nilai kontrak sekitar USD 47 Juta. Kapasitas pembangkit listrik yang diberikan sekitar 22 (dua puluh dua) mega watt, serta kapasitas produksi steam sekitar 160 ton per jam.</p>

                                                <p class="text-justify">Direktur Utama PI-Energi, Tentaminarto T. F. didampingi Direktur Operasi PI-Energi, Ibu Kuntari Laksmitadewi Wahyuningdyah bersama-sama dengan Direktur EPC PT PP, Harry Nugroho yang didampingi oleh Kepala Divisi EPC PT PP.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers18">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Pupuk Indonesia Energi Bangun Pembangkit Listrik di Gresik </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">13 Oktober 2016 </small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers18" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>Pupuk Indonesia Energi Bangun Pembangkit Listrik di Gresik </h2>
                                                <img src="../assets/siaranPers/SP-16.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">13 Oktober 2016 </small></p>
                                              
                                                <p class="text-justify">PT Pupuk Indonesia Energi (PI-Energi), anak perusahaan dari PT Pupuk Indonesia (Persero), menandatangani Perjanjian Kredit dengan PT Bank Sumitomo Mitsui Indonesia (Bank SMBC) untuk membiayai pembangunan Proyek Gresik Gas Cogeneration Plant milik PI-Energi dan Perjanjian Kredit ditandatangani oleh Direktur Utama PI-Energi Tentaminarto, Direktur Utama Bank SMBC Kazuhisa Miyagawa, langsung disaksikan oleh Direktur Keuangan Pupuk Indonesia, Indarto Pamoengkas. Penandatangan dilakukan Kantor PI-Energi di Gedung Petrokimia Gresik, Jakarta Pusat. Rabu, (27/7).</p>

                                                <p class="text-justify">Direktur Keuangan Pupuk Indonesia, Indarto Pamoengkas mengatakan Pupuk Indonesia saat ini mempunyai 10 Anak usaha, salah satunya adalah Pupuk Indonesia Energi yang bergerak di bidang energi yang memproduksi dan mensuplai listrik dan utilitas ke pabrik-pabrik pupuk di lingkungan kelompok usaha PT Pupuk Indonesia (Persero), Pupuk Indonesia Group terus melakukan berbagai proyek pengembangan diantaranya pembangunan pabrik baru, revitalisasi pabrik dan sejumlah proyek yang sedang berlangsung antara lain Pusri IIB di Palembang, Amurea II di Gresik, pengembangan NPK Cluster di Bontang, serta pembangunan sejumlah infrastruktur pendukung di anggota-anggota holding lainnya, seperti pembangunan dermaga, gudang, dan lain-lain katanya.</p>

                                                <p class="text-justify">PI -Energi resmi berdiri pada tanggal 18 Agustus 2014 dan bergerak di bidang uap panas (steam) dan listrik. Perusahaan yang berlokasi di Jakarta ini sahamnya dimiliki oleh PT Pupuk Indonesia (Persero) 50%, PT Pupuk Sriwidjaja Palembang 10%, PT Petrokimia Gresik 10 %, PT Pupuk Kalimantan Timur 10%, PT Pupuk Kujang 5%, PT Pupuk Iskandar Muda 5% dan PT Rekayasa Industri 10%.</p>

                                                <p class="text-justify">Saat ini PI-Energi sedang membangun pembangkit tenaga listrik dan uap berbahan bakar gas bumi dengan kapasitas terpasang 22 MW listrik dan 160 ton/jam uap untuk menyuplai kebutuhan listrik dan uap pabrik Amonia-Urea II milik PT Petrokimia Gresik yang berlokasi di kawasan industri Petrokimia Gresik dengan progress pembangunan sampai dengan saat ini telah mencapai sekitar 32%. Proyek tersebut dimulai sejak akhir November 2015 dan ditargetkan akan selesai pada bulan September 2017, serta akan beroperasi komersial penuh sekitar bulan November 2017.</p>

                                                <p class="text-justify">Plafon pinjaman yang diperoleh oleh PI-Energi dari Bank SMBC adalah sebesar US$ 63,5 juta dan Rp 400 Miliar dengan tenor 8 tahun dan dapat diperpanjang untuk 3 tahun berikutnya, ungkap Tentaminarto, Direktur Utama PI-Energi. Ini merupakan prestasi bagi PI-Energi bahwa di usianya yang masih sangat belia ini telah mendapat kepercayaan dari Bank berskala internasional untuk memperoleh pinjaman dengan nilai yang begitu besar, tambahnya.</p>

                                                <p class="text-justify">Pada kesempatan yang sama Direktur Operasi PI-Energi, Kuntari Laksmitadewi Wahyuningdyah mengatakan, kami sangat senang dengan ditandatanganinya Perjanjian Kredit ini, semoga kami dapat menyelesaikan Proyek Gresik Gas Cogeneration tepat waktu, sehingga dapat mendukung program pembangunan infrastruktur kelistrikan dan ketahanan pangan yang dicanangkan oleh Pemerintah.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers19">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">PT Pupuk Indonesia Raih Annual Report Award 2015 </h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">12 Oktober 2016</small></p>
                                    </div>
                                </button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="pers19" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-fullscreen-md-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="container modal-body p-3">
                                            <h2>PT Pupuk Indonesia Raih Annual Report Award 2015 </h2>
                                                <img src="../assets/siaranPers/SP-16.jpg" class="img-fluid p-3">
                                                <p class="card-text text-start"><small class="text-body-secondary">12 Oktober 2016</small></p>
                                                
                                                <p class="text-justify">REPUBLIKA.CO.ID, Pemerintah terus mendorong penerapan good corporate governance (GCG) bagi perusahaan-perusahaan di Indonesia melalui peningkatan kualitas keterbukaan informasi pada laporan tahunan. Kegiatan ini diwujudkan dalam bentuk penganugerahaan Annual Report Award (ARA). ARA terselenggara atas kerja sama tujuh instansi yaitu Otoritas Jasa Keuangan, Kementerian Badan Milik Usaha Negara, Bank Indonesia, Direktorat Jenderal Pajak Kementerian Keuangan, Komite Nasional Kebijakan Governance, Bursa Efek Indonesia, dan Ikatan Akuntan Indonesia.</p>

                                                <p class="text-justify">Melalui keterangan yang diterima Republika.co.id, kemarin, menyebutkan, dari ratusan peserta yang mengikuti ARA ini, telah menghasilkan 33 perusahaan terbaik di Indonesia. Salah satunya diraih oleh PT Pupuk Indonesia (Persero) Tbk dan anak perusahaannya PT Pupuk Kaltim. Penghargaan ini diterima PT Pupuk Indonesia, pekan kemarin.</p>

                                                <p class="text-justify">Penganugerahan ARA 2015 dihadiri Menteri Koordinator Bidang Perekonomian Darmin Nasution, Menteri Keuangan Sri Mulyani, Ketua OJK Muliaman D. Hadad, Direktur Utama PT Bursa Efek Indonesia Tito Sulistio, dan sejumlah tokoh lainnya. ARA terselenggara atas kerja sama tujuh instansi terdiri dari OJK, Kementerian Badan Usaha Milik Negara (BUMN), Bank Indonesia, Direktorat Jenderal Pajak, Komite Nasional Kebijakan Governance, BEI, dan Ikatan Akuntan Indonesia.</p>

                                                <p class="text-justify">Penilaian ARA 2015 terdiri dari delapan kriteria kualitas informasi dalam laporan tahunan, khususnya menyangkut aspek transparansi dan GCG. Bobot masing-masing yakni Umum 2 perseb, Ikhtisar data keuangan penting 5 persen, Laporan dewan komisaris dan direksi 3 persen, profil perusahaan 8 persen, analisa dan pembahasan manajemen atas kinerja 22 persen. Kemudian, GCG 35 persen, informasi keuangan 20 persen, dan lainnya 5 persen. Penilaian dilakukan oleh dewan juri yang berasal dari tujuh institusi, praktisi, pengamat, dan akademisi.</p>

                                                <p class="text-justify"><a href="http://nasional.republika.co.id/berita/nasional/daerah/16/10/04/oei6d5396-pt-pupuk-indonesia-raih-annual-report-award-2015">Sumber</a></p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="tab-pane fade" id="artikel">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_1.jpeg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Berdayakan Kelompok Wanita, PI Utilitas Bentuk Bank Sampah Desa Banyuwangi</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">11 November 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_2.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title"> Terus Kembangkan Potensi, PI Utilitas Bekali Warga Cara Mengolah Buah Nipah</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">28 Oktober 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_3.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Komisi VII DPR RI Lakukan Kunjungan Kerja Spesifik ke GGCP</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">17 September 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_4.jpeg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title"> PI Utilitas Disiplin Implementasikan GRC</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">31 Agustus 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_5.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Dukungan Keuangan untuk Pengembangan Bisnis Utilitas Berbasis Energi Baru Terbarukan</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">24 Agustus 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_6.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Bisnis Utilitas Berbasis Energi Baru Terbarukan</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">12 Agustus 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_7.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Masa Depan Bisnis Utilitas</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">1 Agustus 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_8.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">PT Pupuk Indonesia Utilitas Catatkan Kinerja Positif Selama Tahun 2021</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">11 Juli 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_9.png" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">e-Announcement LHKPN Pupuk Indonesia Group</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">29 Januari 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_10.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Dua Sertifikat ISO Diraih Sekaligus Oleh PT Pupuk Indonesia Utilitas</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">8 Januari 2022</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_11.png" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Kebijakan Mutu, Keselamatan dan Kesehatan Kerja, Lindung Lingkungan dan Anti Penyuapan</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">2 April 2021</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_12.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Tingkatkan Kompetensi SDM, PI Utilitas Tandatangani MoU dengan UGM</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">9 Februari 2021</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_13.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Kunjungi Yogyakarta, Dirut PI-Energi Dalami Potensi Energi Baru Terbarukan</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">29 Februari 2020</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/artikel/Artikel_14.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Lestarikan Ekowisata, PT Pupuk Indonesia Energi Salurkan Dana CSR</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">17 Februari 2020</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Jelajah</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">29 November 2019</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Tiga Masalah, Tiga Solusi</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">29 November 2019</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Tumbuh Kembang Energi Listrik Di Indonesia</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">29 November 2019</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title"> Prospek Energi Surya Dan Mini Hidro Di Indonesia</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">29 November 2019</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title"> Efisiensi Yang Telah Teruji</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">29 November 2019</small></p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-md-4 mb-3">
                                <button class="card card-fixed" data-bs-toggle="modal" data-bs-target="#pers1">
                                    <img src="../assets/siaranPers/SP-16.jpg" class="card-img-top img-fixed">
                                    <div class="card-body text-start">
                                        <h5 class="card-title">Pupuk Indonesia Energi, Hadir Untuk Efisiensi</h5>

                                        <p class="card-text text-start"><small class="text-body-secondary">29 November 2019</small></p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div> 
        
            <!-- </div> -->
        </div>
    </div>

    
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
        box-shadow: 0 4px 8px rgba(0, 183, 255, 0.25);
        transition: transform 0.3s ease;
    }

    .card-fixed:hover {
        box-shadow: 0 8px 16px rgba(0, 195, 255, 0.4); /* Adjust as needed */
        transform: scale(1.05);
    }
</style>