<template>
  <div class="container mt-3 justify-content-center">
    <div class="row justify-content-center mx-auto">
      <!-- <div class="col-md-3">   -->
      <!-- <div class="card"> -->
      <div class="text-center">
        <ul
          class="nav nav-underline justify-content-start mt-2 mb-2 d-flex align-items-end"
        >
          <li class="nav-item" v-for="tab in tabs" :key="tab.id">
            <h2
              :class="{ 'active-tab': tab.active, 'inactive-tab': !tab.active }"
            >
              <a
                :id="tab.id"
                class="nav-link"
                :class="{ active: tab.active }"
                data-bs-toggle="tab"
                aria-current="true"
                :href="tab.href"
                @click="switchTab(tab.id)"
              >
                {{ tab.name }}
              </a>
            </h2>
          </li>
        </ul>
      </div>
      <!-- </div> -->
      <!-- </div>    -->

      <hr />

      <!-- <div class="col-md-9"> -->
      <div class="container tab-content">
        <div class="tab-pane fade show active" id="pers">
          <div class="row">
            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers1"
              >
                <img src="../assets/siaranPers/SP-1.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    PT Pupuk Indonesia Utilitas Raih Indonesian Quality Award
                    2022
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">13 Desember 2022</small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="pers1" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      PT Pupuk Indonesia Utilitas Raih Indonesian Quality Award
                      2022
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-1.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >13 Desember 2022</small
                      >
                    </p>

                    <p class="text-justify">
                      PT Pupuk Indonesia Utilitas berhasil meraih penghargaan
                      dalam ajang Indonesian Quality Award (IQA) tahun 2022 yang
                      diselenggarakan oleh Indonesian Quality Award Foundation
                      (IQAF) bersama BUMN Executive Club (BEC) di hotel Fairmont
                      Jakarta pada Senin, 12 Desember 2022. Dalam ajang ini, PT
                      Pupuk Indonesia Utilitas berhasil meraih predikat “Good
                      Performance” dengan skor 508 atau mengalami peningkatan 31
                      poin dari pencapaian tahun sebelumnya yaitu 477
                      (berdasarkan penilaian KPKU)
                    </p>

                    <p class="text-justify">
                      Untuk diketahui, Good Performance adalah kategori dalam
                      asesmen dengan implementasi kerangka BEF yang memiliki
                      skor 476-575.
                    </p>

                    <p class="text-justify">
                      IQA merupakan bentuk penghargaan terhadap penilaian
                      kinerja ekselen berbasiskan Kriteria Baldrige atau yang
                      juga dikenal dengan istilah Malcolm Baldrige Criteria for
                      Performance Excellence (MBCfPE).
                    </p>

                    <p class="text-justify">
                      Penilaian mengacu pada kriteria kinerja ekselen Malcolm
                      Baldrige Education Critera for Performance Excellence.
                      Kriteria ini terdiri dari tujuh kategori, yaitu
                      leadership, strategic planning, customer focus,
                      measurement analysis & knowledge management, workforce
                      focus, Process Management, dan result.
                    </p>

                    <p class="text-justify">
                      Direktur Utama PT Pupuk Indonesia Utilitas, Agus Subekti
                      mengatakan bahwa penghargaan ini sebagai komitmen untuk
                      mendorong kinerja unggul perusahaan sekaligus menjadi
                      semangat bagi kami untuk terus melakukan transformasi
                      bisnis dan meningkatkan kinerja perusahaan ditengah
                      tantangan atas ketidakpastian lingkungan bisnis dan
                      ekonomi global.
                    </p>

                    <p class="text-justify">
                      Kegiatan penilaian ini akan menjadi agenda rutin
                      perusahaan dalam penerapan Baldridge Excellence Framework
                      (BFF) yang berkelanjutan sehingga dapat membantu
                      peningkatan kinerja pada tahun-tahun selanjutnya.
                    </p>

                    <p class="text-justify">
                      Adapun tema yang diusung pada tahun 2022 ini “Membangun
                      Ketangguhan Organisasi Untuk Pemulihan Nasional dan Unggul
                      Dalam Persaiangan Global”. Tema ini sejalan dengan
                      semangat perusahaan yang dibuktikan dengan mencatatkan
                      pencapaian kinerja yang baik dan meningkat dimasa Covid-19
                      serta mampu menjawab tantangan yang ada pada lingkungan
                      bisnis dan ketidakpastian ekonomi global melalui 5 (lima)
                      strategi yang diterapkan perusahaan, pertama meningkatkan
                      kehandalan pabrik, kedua meningkatkan kompetensi Sumber
                      Daya Manusia (SDM) yang dimiliki, ketiga menjaga tingkat
                      kesehatan karyawan, keempat melakukan efisiensi biaya dan
                      yang terakhir atau kelima sekaligus yang terpenting adalah
                      menjaga kepuasan pelanggan”.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers2"
              >
                <img src="../assets/siaranPers/SP-2.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    Pupuk Indonesia Lunurkan Program Kompetisi Jurnalistik
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">5 Oktober 2022</small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="pers2" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Pupuk Indonesia Lunurkan Program Kompetisi Jurnalistik
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-2.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy">5 Oktober 2022</small>
                    </p>

                    <p class="text-justify">
                      PT Pupuk Indonesia (Persero) resmi membuka program
                      kompetisi karya jurnalistik Pupuk Indonesia Media Award
                      (PIMA) 2022. Dengan mengusung tema besar “Makmur Bersama
                      Indonesia”, kompetisi ini terbuka bagi seluruh wartawan,
                      baik dari media massa tingkat nasional maupun seluruh
                      media massa di daerah.
                    </p>

                    <p class="text-justify">
                      SVP Komunikasi Korporat, Wijaya Laksana, menyatakan bahwa
                      program ini masih dalam rangka peringatan satu dekade
                      Pupuk Indonesia pada tahun 2022. Wijaya menyebutkan bahwa
                      ajang ini adalah perdana bagi perusahaan. Oleh karena itu,
                      PIMA 2022 diharapkan dapat memperkenalkan lebih jauh
                      tentang industri pupuk dan transformasi bisnis di Pupuk
                      Indonesia dan anak perusahaannya.
                    </p>

                    <p class="text-justify">
                      “Selain itu, program ini juga bentuk apresiasi kami atas
                      kinerja serta dukungan seluruh wartawan melalui berbagai
                      publikasi seputar bisnis utama hingga aktivitas
                      operasional perusahaan, baik terkait Pupuk Indonesia
                      maupun anak perusahaan,” jelas Wijaya.
                    </p>

                    <p class="text-justify">
                      Lebih lanjut Wijaya menyebutkan bahwa tujuan lain dari
                      program ini adalah untuk menjadi sarana edukasi dan
                      sosialisasi, khususnya bagi wartawan maupun masyarakat
                      pada umumnya. Mulai dari kontribusi perusahaan pada sektor
                      pertanian hingga berbagai program transformasi bisnis
                      Pupuk Indonesia. Karena saat ini Pupuk Indonesia dan anak
                      perusahannya tengah melakukan banyak terobosan dan inovasi
                      di berbagai bidang untuk meningkatkan daya saing.
                    </p>

                    <p class="text-justify">
                      Pupuk Indonesia sendiri telah menjalankan program
                      transformasi bisnis sejak tahun 2020. Program ini menyasar
                      ke berbagai lini bisnis perusahaan, mulai dari bidang
                      produksi, supply chain atau distribusi, pemasaran, SDM
                      atau human capital, pengembangan, digitalisasi, hingga
                      berbagai program lainnya yang berkontribusi terhadap
                      sektor pertanian dan perekonomian nasional.
                    </p>

                    <p class="text-justify">
                      Oleh karena itu, kompetisi jurnalistik ini tidak hanya
                      terbatas pada publikasi seputar kinerja Pupuk Indonesia
                      saja. Melainkan juga publikasi kinerja dan aktivitas dari
                      kesepuluh anak perusahaannya. Adapun kesepuluh anak usaha
                      Pupuk Indonesia adalah PT Pupuk Iskandar Muda, PT Pupuk
                      Sriwidjadja Palembang, PT Pupuk Kujang Cikampek, PT Pupuk
                      Kalimantan Timur, PT Petrokimia Gresik, PT Rekayasa
                      Industri, PT Mega Eltra, PT Pupuk Indonesia Utilitas, PT
                      Pupuk Indonesia Pangan, dan PT Pupuk Indonesia Logistik.
                    </p>

                    <p class="text-justify">
                      Setidaknya terdapat dua sub tema dalam ajang ini. Pertama,
                      terkait upaya Pupuk Indonesia dan anak perusahannya dalam
                      mendukung produktivitas pertanian melalui penyediaan pupuk
                      dan nutrisi tanaman, hingga membangun ekosistem pertanian.
                      Sub tema kedua, transformasi Pupuk Indonesia dan anak
                      perusahaannya dalam beradaptasi di era disruptif guna
                      meningkatkan daya saing bisnis dan kontribusi terhadap
                      perekonomian nasional.
                    </p>

                    <p class="text-justify">
                      Dalam ajang ini, Pupuk Indonesia akan memberikan apresiasi
                      ratusan juta rupiah untuk seluruh pemenang dan nominasi.
                      Adapaun kategori dalam kompetisi ini terdiri dari kategori
                      Media Cetak, Media Online, Media Televisi, dan Fotografi.
                      Sedangkan untuk periode lomba berlaku mulai bulan
                      September hingga November 2022. Penghargaan sendiri
                      direncanakan akan digelar pada bulan Desember 2022.
                    </p>

                    <p class="text-justify">
                      “Semoga melalui program ini publik semakin mendapat banyak
                      informasi dan pengetahuan, khususnya tentang kinerja dan
                      beragam inovasi dan transformasi Pupuk Indonesia grup
                      dalam mendukung program ketahanan pangan nasional dan
                      berkontribusi dalam perekonomian nasional,” tutup Wijaya.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers3"
              >
                <img src="../assets/siaranPers/SP-3.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Pupuk Indonesia Utilitas Raih Tiga Penghargaan di Ajang TOP
                    GRC Awards 2022
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">7 September 2022</small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="pers3" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Pupuk Indonesia Utilitas Raih Tiga Penghargaan di Ajang
                      TOP GRC Awards 2022
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-3.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >7 September 2022</small
                      >
                    </p>

                    <p class="text-justify">
                      Setiap hasil review, evaluasi dan audit bisa dijadikan
                      pengembangan perbaikan. Perseroan juga sedang
                      mengembangkan BCMS (Business Continuity Management
                      System).
                    </p>

                    <p class="text-justify">
                      Pupuk Indonesia Utilitas (PI Utilitas), salah satu anak
                      perusahaan Pupuk Indonesia (Persero) berhasil meraih tiga
                      penghargaan TOP Governance, Risk and Compilance (Tata
                      Kelola, Risiko dan Kepatuhan) Awards 2022 yang digelar di
                      Hotel Raffles, Jakarta, Selasa, 6 September 2022.
                    </p>

                    <p class="text-justify">
                      Berdasarkan hasil penilain dewan juri, pada tahun ini PI
                      Utilitas meraih penghargaan sebagai berikut:
                    </p>

                    <ol>
                      <li>
                        The most committed GRC Leader 2022 : Direktur Utama PI
                        Utilitas Agus Subekti.
                      </li>
                      <li>Three Star Top GRC Award 2022 untuk PI Utilitas.</li>
                      <li>
                        Special appreciation of Top GRC Award 2022 on Top
                        Special Recognition untuk PI Utilitas.
                      </li>
                    </ol>

                    <p class="text-justify">
                      Direktur Utama PI Utilitas, Agus Subekti, usai menerima
                      penghargaan mengemukakan jika pandemi Covid-19 memang
                      telah memberikan pengaruh terhadap kinerja perseroan pada
                      2021. Agus mencatat ada lima pengaruh yaitu, pertama
                      adanya pengaturan sistem kerja, mulai dari Work from Home
                      (WFH), Work from Office (WFO) hingga pengaturan jadwal
                      kerja/shift.
                    </p>

                    <p class="text-justify">
                      Selanjutnya yang kedua menurut Agus adalah
                      penerapan/implementasi digital office. Kemudian yang
                      ketiga adalah optimalisasi fasilitas teknologi berbasis
                      digital seperti zoom meeting, google meet dan microsoft
                      teams. Keempat adalah penerapan protokol kesehatan
                      (prokes) yaitu 5M (Mencuci tangan, Memakai masker, Menjaga
                      jarak, Menjauhi kerumunan, Mengurangi mobilitas).
                    </p>

                    <p class="text-justify">
                      “Terakhir atau kelima adalah efisiensi biaya administrasi
                      umum,” katanya.
                    </p>
                    <p class="text-justify">
                      Sebagai upaya antisipasi agar pandemi tidak terlalu
                      berpengaruh terhadap kinerja perseroan, Agus mengatakan
                      ada lima strategi yang diterapkan perusahaan yang
                      dipimpinnya yaitu, pertama meningkatkan keandalan pabrik,
                      kedua meningkatkan kompetensi sumber daya manusia (SDM)
                      yang dimiliki oleh perseroan, ketiga menjaga kesehatan SDM
                      dan keempat adalah dengan melakukan efisiensi biaya.
                    </p>

                    <p class="text-justify">
                      “Terakhir atau yang kelima sekaligus yang terpenting
                      adalah menjaga kepuasan pelanggan,” ujarnya.
                    </p>

                    <p class="text-justify">
                      Agus mengutarakan PI Utilitas mampu menjawab tantangan
                      atas ketidakpastian lingkungan bisnis dan ekonomi global
                      melalui kedisiplinan penerapan GRC secara terpadu dan
                      terkoordinasi. Agus mengatakan GRC adalah cerminan
                      komitmen PI Utilitas untuk mengembangkan kebijakan dan
                      meningkatkan tata kelola perusahaan, manajemen risiko dan
                      kepatuhan terhadap regulasi.
                    </p>

                    <p class="text-justify">
                      "Sehingga akuntabilitas atas proses yang dijalankan dapat
                      selalu terjaga," katanya.
                    </p>

                    <p class="text-justify">
                      Dalam penerapan tata kelola dan kepatuhan, Agus
                      menjelaskan PI Utilitas juga telah mengembangkan antara
                      lain melalui implementasi fraud control system, penerapan
                      Sistem Manajemen Anti Penyuapan (SMAP) ISO 37001:2016, dan
                      secara konsisten juga ikut serta dalam asesmen Good
                      Corporate Governance (GCG) setiap tahunnya yang dilakukan
                      oleh Badan Pemeriksa Keuangan dan Pembangunan (BPKP)
                      maupun konsultan internal.
                    </p>

                    <p class="text-justify">
                      Itu semua menurut Agus adalah bagian dari komitmen dalam
                      membangun kelengkapan sistem dan infrastruktur tata kelola
                      dan kepatuhan perusahaan. Sedangkan untuk penerapan
                      implementasi manajemen risiko, Agus mengutarakan jika
                      perusahaan melakukan pengelolaan risiko berbasis teknologi
                      informasi melalui aplikasi Prisma (Pupuk Indonesia Risk
                      Management System).
                    </p>

                    <p class="text-justify">
                      Selain itu, Agus menambahkan secara bersamaan, perseroan
                      juga sedang mengembangkan BCMS (Business Continuity
                      Management System). Sebuah sistem yang berfungsi untuk
                      melihat secara holistic dan mengidentifikasi ancaman
                      potensial serta yang berdampak kepada operasional
                      organisasi.
                    </p>

                    <p class="text-justify">
                      Terakhir, Agus menambahkan dengan implementasi GRC yang
                      optimal, setiap hasil review, evaluasi dan audit bisa
                      dijadikan pengembangan perbaikan.
                    </p>

                    <p class="text-justify">
                      “Maka bisnis perusahaan pun akan tetap aman dan tumbuh
                      dengan baik,” katanya {}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers4"
              >
                <img src="../assets/siaranPers/SP-4.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    Genap Berusia Sewindu, PI Utilitas Rumuskan Sembilan Rencana
                    Strategis
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">22 Agustus 2022</small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="pers4" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Genap Berusia Sewindu, PI Utilitas Rumuskan Sembilan
                      Rencana Strategis
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-4.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >22 Agustus 2022</small
                      >
                    </p>

                    <p class="text-justify">
                      Mulai dari rencana pembangunan pabrik nitrogen hingga
                      pembangkit listrik tenaga surya. Selain itu, juga
                      dilakukan lima penandatangan kerja sama.
                    </p>

                    <p class="text-justify">
                      JAKARTA - Pada 18 Agustus 2022, PT Pupuk Indonesia
                      Utilitas (“PI Utilitas”), salah satu anak perusahaan PT
                      Pupuk Indonesia (Persero) genap berusia delapan tahun
                      (sewindu).
                    </p>

                    <p class="text-justify">
                      Direktur Utama (Dirut) PI Utilitas, Agus Subekti,
                      mengemukakan jika ada sembilan rencana strategis perseroan
                      yang akan segera direalisasikan. Rencana tersebut
                      diungkapkan Agus pada perayaan ulang tahun kedelapan yang
                      digelar secara hybrid di Hotel Le Meridien Jakarta, Kamis,
                      18 Agustus 2022.
                    </p>

                    <p class="text-justify">
                      “PI Utilitas akan terus melakukan transformasi dan
                      peningkatan ekspansi bisnis. Beberapa rencana strategis
                      proyek pengembangan PI Utilitas ke depan saat ini ada yang
                      sedang dalam proses tender dan ada juga dalam tahapan
                      kajian yang dilakukan oleh internal PI Utilitas dan
                      konsultan,” katanya.
                    </p>

                    <p class="text-justify">
                      Agus menjelaskan beberapa program pengembangan yang saat
                      ini sedang dilakukan yaitu, pertama rencana pembangunan
                      Cikampek Nitrogen & Oxygen Plant (“CNOP”) di Kawasan
                      Cikampek, Jawa Barat yang saat ini sedang dalam tahapan
                      proses tender dan pembangunannya ditargetkan selesai awal
                      tahun 2024. Kedua, perseroan juga sedang mempersiapkan
                      rencana akuisisi salah satu perusahaan pembangkit listrik
                      yang Insya Allah akan terealisasi pada tahun ini. Ketiga,
                      rencana pembangunan Pembangkit Listrik Tenaga Surya (PLTS)
                      untuk mendukung program Dekarbonisasi di Grup PT Pupuk
                      Indonesia (Persero)
                    </p>

                    <p class="text-justify">
                      “Keempat, Pembangunan Stasiun Pengisian Kendaraan Listrik
                      Umum (SPKLU) juga menjadi bagian dari rencana strategis
                      yang akan kami lakukan ke depan,” ujarnya.
                    </p>

                    <p class="text-justify">
                      Kelima, menurut Agus, pada saat ini juga sedang dilakukan
                      kajian pembangunan panel surya (solar cell) di Grup PT
                      Pupuk Indonesia. Keenam. Operation and Maintenance (O&M)
                      Water Treatment Plant System. Ketujuh, kajian pembangunan
                      package boiler untuk pabrik soda ash di kawasan industri
                      Petrokimia Gresik di Kabupaten Gresik, Jawa Timur.
                    </p>

                    <p class="text-justify">
                      “Kedelapan adalah rencana pembangunan gas engine untuk
                      kawasan industri di Lhokseumawe, Aceh dan Kesembilan atau
                      terakhir kajian terkait rencana trading gas industri,”
                      katanya.
                    </p>

                    <p class="text-justify">
                      Terkait dengan rencana strategis tersebut, Agus mengatakan
                      pada hari ini telah dilakukan penandatanganan lima
                      kerjasama. Pertama, Head of Agreement (HOA) antara PI
                      Utilitas dengan PT Rekayasa Industri. Kemudian yang kedua
                      adalah Memorandum of Understanding (MoU) antara PI
                      Utilitas dengan PT Metito Indonesia tentang kerja sama
                      dalam bidang water treatment plant (WTP) system. Ketiga,
                      adalah MoU antara PI-Utilitas dengan PT Empat Mitra Indika
                      Tenaga Surya.
                    </p>

                    <p class="text-justify">
                      “Tentang pengembangan energi baru terbarukan,” ujarnya.
                    </p>

                    <p class="text-justify">
                      Selain itu, Agus menambahkan yang keempat adalah
                      penandatanganan kesepakatan bersama tentang rencana kerja
                      sama strategis antara PT Pupuk Kujang dan PI Utilitas.
                      Terakhir atau kelima adalah kesepakatan bersama antara PI
                      Utilitas dan PT Hurip Putera Husada.
                    </p>

                    <p class="text-justify">
                      “Mengenai rencana kerja sama strategis penyediaan
                      oksigen,” katanya {}.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers5"
              >
                <img src="../assets/siaranPers/SP-5.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    Pupuk Indonesia Energi Melakukan Rebranding Menjadi Pupuk
                    Indonesia Utilitas
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">1 Desember 2021</small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="pers5" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Pupuk Indonesia Energi Melakukan Rebranding Menjadi Pupuk
                      Indonesia Utilitas
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-5.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >1 Desember 2021</small
                      >
                    </p>

                    <p class="text-justify">
                      Jakarta – PT Pupuk Indonesia Energi (PI Energi), salah
                      satu anak usaha PT Pupuk Indonesia (Persero), melakukan
                      rebranding dengan mengubah nama menjadi Pupuk Indonesia
                      Utilitas (PI Utilitas).
                    </p>

                    <p class="text-justify">
                      Direktur Utama Pupuk Indonesia Utilitas, Agus Subekti
                      mengemukakan bahwa perubahan nama atau rebranding ini akan
                      mengukuhkan posisi Pupuk Indonesia Utilitas sebagai one
                      stop utility provider, yaitu klaster utilitas yang
                      didedikasikan dibangun untuk menunjang salah satu dari
                      tiga komponen utama dari pabrik pupuk yaitu pabrik
                      utilitas (listrik, steam, air dan nitrogen), pabrik urea
                      dan pabrik amoniak.
                    </p>

                    <p class="text-justify">
                      “Sehingga terminologi utilitas jauh lebih familiar dan
                      melengkapi kebutuhan industri pupuk,” ujarnya.
                    </p>

                    <p class="text-justify">
                      Produsen pupuk anak usaha Pupuk Indonesia seperti Pupuk
                      Kalimantan Timur, Pupuk Kujang Cikampek, Pupuk Sriwidjaja
                      Palembang, Pupuk Iskandar Muda, hingga Petrokimia Gresik,
                      ketiga komponen utama tersebut telah menjadi bagian
                      integral ke dalam pabrik.
                    </p>

                    <p class="text-justify">
                      Selain itu, Agus menambahkan jika ruang lingkup bisnis
                      utilitas tentu jauh lebih luas dibanding bisnis energi.
                      Dia menegaskan bahwa energi merupakan bagian dari
                      utilitas. Jadi utilitas menurut Agus bisa berupa energi,
                      listrik, uap (steam), air proses hingga air utilitas dan
                      udara instrumen.
                    </p>

                    <p class="text-justify">
                      “Itu semua dibutuhkan oleh pabrik pupuk,” katanya.
                    </p>

                    <p class="text-justify">
                      Tak sekadar perubahan nama, Agus mengatakan rebranding
                      juga menjadi turning point transformasi bisnis, sehingga
                      juga dilakukan terhadap Anggaran Dasar (AD) maupun
                      Anggaran Rumah Tangga (ART) perusahaan. Agus menambahkan
                      jika logo dan mars perusahaan juga berubah secara resmi
                      pada hari ini.
                    </p>

                    <p class="text-justify">
                      Kedepan, PI Utilitas juga akan membangun pabrik pengolahan
                      udara dengan estimasi commercial operation date pada akhir
                      2023 yang direncanakan memproduksi gas industri dengan
                      produk nitrogen dan oksigen dengan target market lebih
                      luas untuk menjangkau industri di luar grup Pupuk
                      Indonesia.
                    </p>

                    <p class="text-justify">
                      “Semoga perubahan ini menjadikan perusahaan lebih baik ke
                      depan,” ujarnya.
                    </p>

                    <p class="text-justify">
                      Sementara itu, Direktur Utama Pupuk Indonesia, Bakir
                      Pasaman menyatakan bahwa nama Pupuk Indonesia Utilitas ini
                      adalah salah satu inisiatif strategis sebagai bagian dari
                      upaya restrukturisasi dan pengembangan anak usaha Pupuk
                      Indonesia Group. Pergantian nama dan logo ini disebut
                      memiliki makna yang sangat substansial karena akan sangat
                      mempengaruhi pengembangan bisnis Pupuk Indonesia Utilitas
                      ke depan.
                    </p>

                    <p class="text-justify">
                      “Kami berharap dengan pergantian nama ini, Pupuk Indonesia
                      Utilitas memiliki keberanian dan kreativitas untuk
                      merambah bisnis-bisnis lain di luar bisnis energi yang
                      saat ini dijalani,” ujar Bakir.
                    </p>

                    <p class="text-justify">
                      Pupuk Indonesia Utilitas adalah perusahaan dengan
                      kepemilikan saham holding Pupuk Indonesia sebesar 60
                      persen. Sementara selebihnya adalah Pupuk Kalimantan Timur
                      (10 persen), Petrokimia Gresik (10 persen), Pupuk
                      Sriwidjaja Palembang (7 persen), Rekayasa Industri (3
                      persen), Pupuk Kujang Cikampek (5 persen), dan Pupuk
                      Iskandar Muda (5 persen).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers6"
              >
                <img src="../assets/siaranPers/SP-6.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    PI Utilitas Raih Sertifikasi ISO 9001:2015 Terkait Manajemen
                    Mutu
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">8 Oktober 2020 </small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="pers6" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      PI Utilitas Raih Sertifikasi ISO 9001:2015 Terkait
                      Manajemen Mutu
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-6.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >8 Oktober 2020
                      </small>
                    </p>

                    <p class="text-justify">
                      Pupuk Indonesia Energi (PI Energi), salah satu anak
                      perusahaan Pupuk Indonesia (Persero) berhasil meraih
                      sertifikasi ISO 9001:2015 terkait Manajemen Mutu pada,
                      Selasa 6 Oktober 2020.
                    </p>

                    <p class="text-justify">
                      Perlu digarisbawahi jika ISO 9001 adalah standar
                      internasional yang menetapkan persyarahan untuk sistem
                      manajemen mutu (SMM). Organisasi menggunakan standar untuk
                      menunjukkan kemampuan secara konsisten, terutama dalam
                      menyediakan produk dan layanan yang memenuhi keinginan
                      pelanggan dan persyaratan peraturan.
                    </p>

                    <p class="text-justify">
                      Sebagai auditor terakreditasi untuk melakukan sertifikasi
                      ISO 9001:2015, TUV NORD Indonesia menyatakan pada Selasa,
                      6 Oktober 2020, PI Energi berhak mendapatkan sertifikasi
                      ISO 9001:2015 terkait Manajemen Mutu. Adapun lingkup
                      sertifikasi yang dilakukan oleh TUV NORD Indonesia pada
                      audit ISO 9001:2015 meliputi produk Listrik dan Steam,
                      dimana kedua produk tersebut adalah produk utama dari PI
                      Energi.
                    </p>

                    <p class="text-justify">
                      Menanggapi capaian perusahaan yang telah berdiri selama
                      enam tahun sejak 2014 lalu, Direktur Utama PI Energi
                      Tentaminarto Tri Februartono memberikan apresiasi kepada
                      seluruh Insan PI Energi yang telah bekerja keras untuk
                      memperoleh sertifikasi ISO 9001:2015 ini, sekaligus
                      berkomitmen untuk memberikan yang terbaik bagi seluruh
                      stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers7"
              >
                <img src="../assets/siaranPers/SP-7.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    PI-Energi Salurkan Bantuan Sembako untuk Pondok Pesantren
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">15 Juli 2020 </small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="pers7" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      PI-Energi Salurkan Bantuan Sembako untuk Pondok Pesantren
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-7.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy">15 Juli 2020 </small>
                    </p>

                    <p class="text-justify">
                      PT Pupuk Indonesia Energi (PI-Energi) menyerahkan bantuan
                      sembako kepada salah satu pesantren di Kawasan Bogor, Jawa
                      Barat pada 11 Juli 2020. Penyerahan bantuan sembako secara
                      simbolis dilakukan oleh Direktur Utama PI Energi,
                      Tentaminarto Tri Februartono dan Direktur Keuangan PI
                      Energi, Nendroyogi Hadiputro serta didampingi oleh VP
                      Komunikasi Internal PT Pupuk Indonesia (Persero), M Tony
                      Houston.
                    </p>

                    <p class="text-justify">
                      Bantuan sembako ini diberikan kepada Pondok Pesantren
                      Aladzievie, Bogor, Jawa Barat. Bantuan sembako terdiri
                      dari beras, masker, vitamin C, gula, sarden, mie instan,
                      susu, minyak goreng dan lain-lain.
                    </p>

                    <p class="text-justify">
                      Pondok Pesantren Aladzievie sendiri merupakan pondok
                      pesantren binaan Ustad Subhan Bawazier yang saat ini
                      mendidik kurang lebih 200 santri dengan jenjang pendidikan
                      SD hingga SMA. Meskipun terbuka untuk umum, Pondok
                      Pesantren Aladzievie membebaskan biaya pendidikan untuk
                      Yatim Piatu serta meringankan biaya pendidikan untuk kaum
                      Dhuafa.
                    </p>

                    <p class="text-justify">
                      Tentaminarto selaku Direktur Utama PI-Energi menyampaikan,
                      penyerahan bantuan ini merupakan bentuk kepedulian
                      perusahaan kepada para santri untuk mendukung pondok
                      pesantren dalam menghadapi wabah COVID-19.
                    </p>

                    <p class="text-justify">
                      “PT Pupuk Indonesia Energi menyerahkan bantuan ini dengan
                      harapan dapat meringankan beban pondok pesantren agar
                      ketersediaan bahan pangan pokok tetap stabil untuk para
                      santri yang sedang melanjutkan pendidikannya. Dalam
                      membentuk akhlak yang baik untuk generasi muda tentunya
                      diperlukan kepedulian sosial yang tinggi. Penyebaran
                      COVID-19 masih terus meningkat setiap harinya. Kami harap
                      santri dapat menjaga kesehatan dengan menekuni pendidikan
                      sambil #diPondokAja.” ujar Tentaminarto.
                    </p>

                    <p class="text-justify">
                      PI-Energi menyadari sepenuhnya bahaya COVID-19 dan akan
                      terus berkomitmen untuk menjaga kebersihan dan kesehatan
                      seluruh insanPIE serta masyarakat sekitar. Kami menghimbau
                      untuk seluruh insan PIE dan masyarakat untuk meminimalisir
                      bepergian tanpa alasan penting sebagai upaya untuk
                      mengurangi dan memutus rantai penyebaran COVID-19.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers8"
              >
                <img src="../assets/siaranPers/SP-8.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    Langkah Preventif PI-Energi Cegah COVID-19
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">10 Juni 2020 </small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="pers8" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Langkah Preventif PI-Energi Cegah COVID-19
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-8.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy">10 Juni 2020 </small>
                    </p>

                    <p class="text-justify">
                      Selasa (02/06/2020) PT Pupuk Indonesia Energi(PI-Energi)
                      telah melakukan rapid test dalam rangka mencegah potensi
                      penyebaran virus COVID-19 di kantor pusat PI-Energi di
                      Jakarta, sebagai persiapan memasuki era New Normal. Empat
                      tenaga medis bertugas menangani rapid test yang diikuti
                      oleh Direksi dan seluruh Karyawan PI-Energi.
                    </p>

                    <p class="text-justify">
                      Sebagai informasi, rapid test adalah metode skrining awal
                      untuk mendeteksi atau mendiagnosa infeksi COVID-19 pada
                      tubuh. Prosedur pemeriksaan dimulai dengan mengambil
                      sampel darah dari ujung jari yang kemudian diteteskan ke
                      alat rapid test. Hasil dari tes tersebut akan muncul dalam
                      10 hingga 15 menit.
                    </p>

                    <p class="text-justify">
                      "Alhamdulillah, berdasarkan kegiatan rapid test yang telah
                      dilakukan, sampai saat ini hasilnya seluruh insan
                      PI-Energi kantor pusat dalam keadaan sehat. Kami berupaya
                      maksimal untuk terus waspada dan menghimbau seluruh insan
                      PI-Energi untuk tetap menjaga kebersihan dan kesehatan
                      masing-masing demi produktivitas perusahaan.“ ujar Benny
                      Nasution, Sekretaris Perusahaan PI-Energi.
                    </p>

                    <p class="text-justify">
                      Tak hanya itu, pabrik pembangkit listrik milik PI-Energi
                      di Gresik, Jawa Timur, bekerjasama dengan RS Petrokimia
                      Gresik juga telah melakukan rapid test untuk seluruh insan
                      PI-Energi yang bertugas di sana. Rapid test dilakukan
                      secara bertahap pada 12 Mei 2020 dan 22 Mei 2020. Rapid
                      test dilakukan oleh empat tenaga medis dan diikuti
                      sebanyak 57 karyawan yang terdiri dari Manajer, Staf Ahli,
                      Engineer, Operator, dan sebagainya.
                    </p>

                    <p class="text-justify">
                      PI-Energi berusaha semaksimal mungkin untuk melakukan
                      pencegahan penyebaran COVID-19 dengan memberlakukan
                      beberapa prosedur, diantaranya adalah melakukan rapid
                      test, pembentukan Tim Gugus Pencegahan dan Penanggulangan
                      COVID-19, penerapan shifting Work From Home(WFH) dan Work
                      From Office(WFO), himbauan wajib menggunakan masker,
                      pengecekan suhu tubuh sebelum memasuki wilayah kantor dan
                      pabrik serta penyediaan hand sanitizer, masker dan vitamin
                      C untuk insan PI-Energi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers9"
              >
                <img src="../assets/siaranPers/SP-9.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    PI-Energi Bagikan Sembako Untuk Yayasan Yatim Piatu
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">10 Juni 2020 </small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="pers9" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      PI-Energi Bagikan Sembako Untuk Yayasan Yatim Piatu
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-9.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy">10 Juni 2020 </small>
                    </p>

                    <p class="text-justify">
                      PI-Energi menyalurkan bantuan sembako kepada panti asuhan
                      di wilayah Jakarta Pusat pada 06 Mei 2020. Bantuan ini
                      merupakan bentuk dukungan pemenuhan kebutuhan pangan bagi
                      anak yatim piatu di masa pendemi Covid-19. Bantuan sembako
                      diberikan kepada Yayasan Yatim Piatu Rasulullah SAW dan
                      Pondok Yatim & Dhuafa yang terdiri dari beras, gula, mie
                      instant, telur, susu, minyak, dan lain-lain. Bantuan ini
                      diberikan secara simbolis oleh perwakilan staff Milenial
                      PI-Energi.
                    </p>

                    <p class="text-justify">
                      Benny Nasution, Sekretaris Perusahaan PI-Energi,
                      menjelaskan bantuan ini merupakan upaya PI-Energi untuk
                      senantiasa hadir, berbagi, dan memberikan manfaat sosial
                      bagi masyarakat yang membutuhkan. PI-Energi berharap
                      dengan tersalurkannya bantuan ini, PI-Energi dapat terus
                      berkomitmen dan berkontribusi bagi masyarakat sekitar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers10"
              >
                <img src="../assets/siaranPers/SP-10.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    Kunjungi Yogyakarta, Dirut PI-Energi Dalami Potensi Energi
                    Baru Terbarukan
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">28 Februari 2020</small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="pers10"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Kunjungi Yogyakarta, Dirut PI-Energi Dalami Potensi Energi
                      Baru Terbarukan
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-10.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >28 Februari 2020</small
                      >
                    </p>

                    <p class="text-justify">
                      Dalam rangka pengembangan Energi baru dan terbarukan,
                      Pupuk Indonesia Energi (PI-Energi) terus melakukan studi
                      banding untuk perencanaan implementasi instalasi
                      pembangkit listrik energi baru dan terbarukan. Direktur
                      Utama PI-Energi Tentaminarto telah mengunjungi Pantai
                      Baru, Bantul, Yogyakarta, dan Baron Technopark, Gunung
                      Kidul, Yogyakarta, pada Senin, 24 Februari 2020.
                    </p>

                    <p class="text-justify">
                      Pada kesempatan itu, Tenta didampingi Rama Usvika (General
                      Manager Investasi), Hisar Desmon Yosua (Manager Pabrik IPP
                      Gresik), Zakky Syafaristanto (Electrical Engineer), dan
                      Candrika Ajeng (Staf Investasi dan Pengembangan).
                    </p>

                    <p class="text-justify">
                      “PI-Energi harus menjadi perusahaan yang leading dalam
                      bidang energi konvensional, non konvensional bahkan energi
                      baru dan terbarukan. Kami terus berupaya memaksimalkan
                      pengelolaan yang baik dan bijak pada sumber energi baru
                      dan terbarukan,” ujar Tenta.
                    </p>

                    <p class="text-justify">
                      Kunjungan tersebut merupakan bentuk komitmen dari
                      PI-Energi untuk meningkatkan kualitas teknologi
                      perusahaan. Dengan tercapainya kualitas teknologi yang
                      baik, PI-Energi percaya dapat membawa perubahan yang
                      signifikan untuk masa depan perusahaan.
                    </p>

                    <p class="text-justify">
                      Pantai Baru, Bantul yang dikunjungi tim, terkenal dengan
                      pantainya yang asri dan teduh berkat deretan pohon cemara.
                      Pantai ini populer sebagai destinasi wisata lingkungan dan
                      wisata edukasi. Di kawasan ini juga terdapat belasan
                      menara kincir angin setinggi 10-18 meter, dengan total 34
                      unit kincir angin. Banyak pelajar datang untuk mempelajari
                      cara kerja kincir angin ini, mulai dari siswa taman
                      kanak-kanak hingga mahasiswa.
                    </p>

                    <p class="text-justify">
                      Adapun Baron Technopark merupakan pusat penelitian dan
                      pengembangan teknologi energi terbarukan, sekaligus sarana
                      diseminasi IPTEK Energi Terbarukan. Pembangkit listrik
                      yang dikembangkan di Baron Technopark ini merupakan Sistem
                      PLTH (Pembangkit Listrik Tenaga Hibrida) yang dapat
                      menghasilkan listrik dari energi sinar matahari, angin,
                      dan mesin diesel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers11"
              >
                <img src="../assets/siaranPers/SP-11.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    Lestarikan Ekowisata, PT Pupuk Indonesia Energi Salurkan
                    Dana CSR
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy"
                      >17 Februari 2020
                    </small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="pers11"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Lestarikan Ekowisata, PT Pupuk Indonesia Energi Salurkan
                      Dana CSR
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-11.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >17 Februari 2020
                      </small>
                    </p>

                    <p class="text-justify">
                      Sebagai wujud dukungan pelestarian ekowisata, PT Pupuk
                      Indonesia Energi (PI Energi) menyalurkan bantuan
                      kepedulian dalam rangka pelaksanaan Corporate Social
                      Responsibility (CSR) di akhir tahun 2019.
                    </p>

                    <p class="text-justify">
                      Dana bantuan sebesar Rp368.000.000 diberikan kepada
                      kawasan Gresik, Jawa Timur. Kegiatan CSR ini merupakan
                      upaya rehabilitasi ekosistem alam dan penghijauan jalan
                      desa. Tak hanya itu, dana CSR juga akan dimanfaatkan untuk
                      membangun fasilitas pendukung Ekowisata. PI Energi secara
                      rutin terus menerus memantau perkembangan pengerjaan
                      kegiatan CSR yang sudah dimulai sejak Desember 2019 itu,
                      agar kelak terealisasi dengan baik.
                    </p>

                    <p class="text-justify">
                      Benny Swastika Nasution selaku Sekretaris Perusahaan
                      mengungkapkan tujuan kegiatan CSR ini adalah bentuk
                      dukungan PI Energi akan pemeliharaan lingkungan, sesuai
                      dengan tata nilai perusahaan kami yaitu PIE-GO. Salah satu
                      tata nilainya adalah peduli terhadap lingkungan. Dengan
                      landasan tata nilai perusahaan tersebut, kami berupaya
                      terus berkontribusi mendukung pelestarian lingkungan. PI
                      Energi, selaku anak perusahaan dari PT Pupuk Indonesia
                      (Persero), berusaha untuk menjunjung tinggi tata nilai PI
                      Energi, PIE-GO. Terdapat salah satu pilar PIE-GO yaitu
                      Environmentally friendly, Health, and Safety.
                    </p>

                    <p class="text-justify">
                      Dalam pilar tersebut, PI Energi berkomitmen untuk terus
                      menjunjung tinggi kelestarian dana pemeliharaan lingkungan
                      alam. Hal ini menunjukkan komitmen PI Energi untuk terus
                      mendukung pelestarian lingkungan sehingga dapat memberi
                      lebih banyak dampak dan manfaat positif bagi masyarakat
                      luas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers12"
              >
                <img src="../assets/siaranPers/SP-12.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    PI-Energi Raih Penghargaan Temu Karya Mutu dan Produktivitas
                    Nasional
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">25 November 2019</small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="pers12"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      PI-Energi Raih Penghargaan Temu Karya Mutu dan
                      Produktivitas Nasional
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-12.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >25 November 2019</small
                      >
                    </p>

                    <p class="text-justify">
                      Digelar di Solo Jawa Tengah. Mulai 19-22 November 2019.
                    </p>

                    <p class="text-justify">
                      SOLO – Pupuk Indonesia Energi (PI-Energi) berhasil meraih
                      penghargaan Temu Karya Mutu dan Produktivitas Nasional
                      (TKMPN) ke-23 yang digelar di Solo, Jawa Tengah, Jumat, 22
                      November 2019.
                    </p>

                    <p class="text-justify">
                      Meski baru pertama kali menjadi peserta di ajang TKMPN,
                      dua tim yang dikirim berhasil meraih prestasi yang
                      membanggakan perseroan.
                    </p>

                    <p class="text-justify">
                      Direktur Utama (Dirut) PI-Energi, Tentaminarto Tri
                      Februartono, yang akrab disapa Tenta mengemukakan pada
                      event yang digelar sejak Selasa, 19 November 2019 hingga
                      Jumat, 22 November 2019, Tim QCC Energize berhasil meraih
                      platinum. Sementara tim QCC Cogen menyabet emas.
                    </p>

                    <p class="text-justify">
                      “Sebagai pendatang baru, tentu prestasi yang berhasil
                      diraih patut untuk diapresiasi,” katanya.
                    </p>

                    <p class="text-justify">
                      Tenta mengutarakan prestasi yang berhasil diraih tentunya
                      bukanlah sebuah akhir. Namun harus dijadikan sebuah awal
                      yang baik untuk meraih prestasi-prestasi berikutnya.
                    </p>

                    <p class="text-justify">
                      “Perseroan tentu akan memberikan dukungan penuh,” ujarnya
                      {}.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers13"
              >
                <img src="../assets/siaranPers/SP-13.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    Pemegang Saham PI Energi Angkat Direktur Operasi Baru
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">6 September 2019</small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="pers13"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Pemegang Saham PI Energi Angkat Direktur Operasi Baru
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-13.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >6 September 2019</small
                      >
                    </p>

                    <p class="text-justify">
                      PT Pupuk Indonesia Energi, anak perusahaan Pupuk Indonesia
                      (Persero), mengangkat Digna Jatiningsih sebagai Direktur
                      Operasi.
                    </p>

                    <p class="text-justify">
                      Digna menggantikan Kuntari Laksmitadewi Wahyuningdyah yang
                      akrab disapa Tata. Acara pisah sambut tersebut digelar di
                      Kantor Pusat Pupuk Indonesia Energi Jakarta, pada Rabu, 4
                      September 2019.
                    </p>

                    <p class="text-justify">
                      “Seluruh jajaran manajemen dan karyawan mengucapkan terima
                      kasih sebesar-besarnya untuk segenap kontribusi, baik
                      pikiran maupun tenaga yang telah diberikan oleh Bu Tata
                      selama hampir lima tahun terakhir di PI-Energi,” ujar
                      Direktur Utama Tentaminarto Tri Febriartono pada acara
                      tersebut.
                    </p>

                    <p class="text-justify">
                      Adapun Digna Jatiningsih sebelumnya menjabat sebagai SVP
                      Perencanaan Korporat di PT Pupuk Indonesia (PERSERO) dan
                      ditunjuk sebagai Plt. Direktur Operasi PI Energi sejak 30
                      Agustus 2019.
                    </p>

                    <p class="text-justify">
                      Perempuan kelahiran Bantul, Yogyakarta ini sudah berkarier
                      dalam industri pupuk selama 25 tahun, dan bergabung dengan
                      PT Pupuk Indonesia (PERSERO) sejak 2015.
                    </p>

                    <p class="text-justify">
                      “Selamat datang sekaligus selamat bertugas, Bu Digna.
                      Pengurus perseroan boleh datang dan pergi. Namun PI-Energi
                      harus tetap tumbuh dan berkembang seperti yang telah kita
                      cita-citakan bersama,” ujar Tentaminarto.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers14"
              >
                <img src="../assets/siaranPers/SP-14.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    Serahkan Bantuan Pendidikan, PI-Energi Fokus Kembangkan SDM
                    Di Indonesia
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">26 Agustus 2019 </small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="pers14"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Serahkan Bantuan Pendidikan, PI-Energi Fokus Kembangkan
                      SDM Di Indonesia
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-14.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >26 Agustus 2019
                      </small>
                    </p>

                    <p class="text-justify">
                      Perseroan harus terus tumbuh dan berkembang. Sehingga
                      kontribusi terhadap lingkungan sekitar dapat terus
                      ditingkatkan.
                    </p>

                    <p class="text-justify">
                      Gresik – Pupuk Indonesia Energi (PI-Energi) menyerahkan
                      bantuan kepada Sekolah Dasar Negeri (SDN) Roomo, Gresik,
                      Jawa Timur, Senin, 26 Agustus 2019.
                    </p>

                    <p class="text-justify">
                      Bantuan diserahkan langsung oleh Direktur Utama (Dirut)
                      Pupuk Indonesia Energi (PI-Energi), Tentaminarto Tri
                      Februartono, yang akrab disapa Tenta. Tenta didampingi
                      Direktur Keuangan (Dirkeu) Nendrayogi Hadiputro.
                    </p>

                    <p class="text-justify">
                      Tenta mengharapkan lapangan olah raga yang dibangun
                      PI-Energi dapat dimanfaatkan sebaik-baiknya bagi tumbuh
                      kembang siswa maupun siswi di SD Negeri Roomo, Kecamatan
                      Manyar. Selain itu, Tenta juga berharap agar perusahaan
                      yang dipimpinnya dapat terus maju dan berkembang.
                    </p>

                    <p class="text-justify">
                      “Sehingga konstribusi terhadap lingkungan sekitar juga
                      dapat terus ditingkatkan,” katanya.
                    </p>

                    <p class="text-justify">
                      Pada acara yang juga dihadiri Kepala Sekolah beserta guru
                      SD Negeri Roomo dan juga perwakilan dari Dinas Pendidikan
                      Kabupaten Gresik, Tenta mengutarakan jika PI-Energi yang
                      genap berusia lima tahun pada 18 Agustus 2019 lalu
                      berkomitmen untuk fokus dalam pengembangan SDM Indonesia.
                      Khususnya SDM di sekitar lingkungan wilayah operasi PI
                      Energi. Tenta juga yakin dan percaya jika PI- Energi akan
                      maju dan berkembang seiring dengan perkembangan Sumber
                      Daya Manusia (SDM) di lingkungan sekitar perusahaan
                      berdiri. Hal itu menurut Tenta sesuai tagline yang
                      diangkat sebagai tema ulang tahun kelima PI-Energi.
                    </p>

                    <p class="text-justify">
                      “SDM unggul, PI-Energi maju,” ujarnya.
                    </p>

                    <p class="text-justify">
                      Dalam melaksanakan komitmen tersebut, Tenta berujar pada
                      tahun 2018 lalu, PI-Energi telah memberikan beasiswa
                      kepada siswa dan siswi mulai dari tingkat Sekolah Dasar
                      (SD) hingga Sekolah Lanjutan Tingkat Atas (SLTA) di
                      Gresik.
                    </p>

                    <p class="text-justify">
                      “Termasuk beberara siswa/siswi di SDN Roomo,” katanya.
                    </p>

                    <p class="text-justify">
                      Di PI-Energi, saat ini ada tiga karyawan yang pernah
                      bersekolah di SDN Roomo. Pada masa mendatang, Tenta
                      berharap jumlahnya akan terus bertambah. Selain itu, Tenta
                      juga mengharapkan pada masa yang akan datang akan ada
                      alumni siswa SD Roomo yang menjadi salah datu pimpinan di
                      PI-Energi.
                    </p>

                    <p class="text-justify">
                      “Jadi gantungkanlah cita-citamu setinggi langit,” katanya.
                    </p>

                    <p class="text-justify">
                      Sekadar informasi, pembangkit pertama milik PI-Energi yang
                      telah beroperasi sejak tahun 2018 lalu yaitu Gresik Gas
                      Cogeneration Plant (GGCP) terletak di Desa Roomo,
                      Kecamatan Manyar, Kabupaten Gresik, Jawa Timur {}.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers15"
              >
                <img src="../assets/siaranPers/SP-15.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Kembangkan Bisnis, Pupuk Indonesia Energi Gandeng
                    Universitas Padjajaran
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">2 Agustus 2019 </small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="pers15"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Kembangkan Bisnis, Pupuk Indonesia Energi Gandeng
                      Universitas Padjajaran
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-15.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >2 Agustus 2019
                      </small>
                    </p>

                    <p class="text-justify">
                      Kualitas sumber daya manusia (SDM) harus terus menerus
                      ditingkatkan. Kerja sama meliputi penerapan hasil
                      penelitian hingga job recruitment.
                    </p>

                    <p class="text-justify">
                      Bandung – Direktur Utama (Dirut) Pupuk Indonesia Energi
                      (PI-Energi), Tentaminarto Tri Februartono menandatangi
                      Nota Kesepahaman/Memorandum of Understanding (MoU) dengan
                      Dekan Fakultas Ekonomi dan Bisnis Universitas Padjadjaran
                      (FEB-Unpad), Yudi Azis, yang mewakili Pelaksana Tugas
                      (Plt) Rektor Unpad. Penandatanganan MoU dilakukan di The
                      101 Hotel, Bandung, Selasa, 30 Juli 2019.
                    </p>

                    <p class="text-justify">
                      Ruang lingkup kerja sama meliputi kajian pengembangan
                      bisnis, penugasan tenaga ahli, penelitian dan pengembangan
                      teknologi baru serta pemanfaatan dan penerapan hasil-hasil
                      penelitian yang telah ada. Selain itu, kerja sama juga
                      menyepakati pemberian bantuan teknis, serta pendidikan dan
                      pelatihan, mulai dari workshop, kunjungan, kuliah umum,
                      magang dosen dan mahasiswa hingga Job Recruitment.
                    </p>

                    <p class="text-justify">
                      Dirut PI-Energi, Tentaminarto Tri Februartono, yang akrab
                      disapa Tenta mengemukakan jika pada tahun ini, anak
                      perusahaan Badan Usaha Milik Negara (BUMN) yang
                      dipimpinnya genap berusia lima tahun.
                    </p>

                    <p class="text-justify">
                      “Tepatnya pada 18 Agustus 2019,” katanya.
                    </p>

                    <p class="text-justify">
                      Menurut Tenta, PI-Energi membutuhkan peningkatan sumber
                      daya manusia (SDM) sekaligus pengembangan bisnis. Tenta
                      menggarisbawahi kedua faktor itulah yang melatarbelakangi
                      kerja sama yang dilakukan dengan FEB-Unpad.
                    </p>

                    <p class="text-justify">
                      “Terutama di bidang pendidikan dan penelitian,” ujarnya.
                    </p>

                    <p class="text-justify">
                      Dekan FEB-Unpad, Yudi Azis dalam sambutannya mengutarakan
                      potensi Unpad untuk melakukan kerja sama dengan
                      lembaga-lembaga strategis.
                    </p>

                    <p class="text-justify">
                      “Khususnya di bidang energi,” katanya.
                    </p>

                    <p class="text-justify">
                      Mewakili pihak rektorat, Yudi mengatakan jika Plt Rektor
                      Unpad, Rina Indiastuti, mengapresiasi kerja sama strategis
                      yang telah disepakati dengan PI-Energi. Menurut Yudi,
                      kesepakatan sangat sesuai dengan tuntutan Tri Dharma
                      Perguruan Tinggi.
                    </p>

                    <p class="text-justify">
                      “Yaitu pendidikan, penelitian dan pengabdian masyarakat”
                      ujarnya.
                    </p>

                    <p class="text-justify">
                      Selain itu, Yudi juga mengharapkan jika kerja sama yang
                      telah disepakati membawa dampak positif bagi kemajuan
                      kedua belah pihak.
                    </p>

                    <p class="text-justify">
                      “Terutama peningkatan sumber daya manusia,” ujarnya.
                    </p>

                    <p class="text-justify">
                      Acara penandatanganan juga dihadiri Direktur Operasi
                      (Dirops) PI-Energi, Kuntari Laksmitadewi Wahyuningdyah dan
                      Yudi Faisal dari Pusat Studi Manajemen Unpad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers16"
              >
                <img src="../assets/siaranPers/SP-16.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    Dirgahayu PT Pupuk Indonesia Energi Ke-2
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">21 Desember 2016</small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="pers16"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Dirgahayu PT Pupuk Indonesia Energi Ke-2
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-16.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >21 Desember 2016</small
                      >
                    </p>

                    <p class="text-justify">
                      Dalam rangka memperingati hari ulang tahunnya yang ke-2
                      pada tanggal 18 Agustus 2016, bertempat di Gedung
                      Petrokimia Gresik Jakarta, PT Pupuk Indonesia Energi (PI
                      Energi) menggelar acara syukuran dengan potong tumpeng dan
                      doa bersama yang dihadiri oleh Direksi, karyawan, dan
                      tamu-tamu undangan.
                    </p>

                    <p class="text-justify">
                      Diusianya yang sangat muda ini, PI-Energi telah melakukan
                      beberapa hal penting, yaitu pada tanggal 16 November 2015
                      PI-Energi dan PT Petrokimia Gresik menandatangani
                      perjanjian tenaga listrik dan steam. Perjanjian ini akan
                      berlaku selama 20 (dua puluh) tahun dan akan berlaku
                      efektif pada Februari 2018 dengan skema Built, Operate,
                      Own (BOO).
                    </p>

                    <p class="text-justify">
                      Kemudian pada tanggal 18 November 2015 PI- Energi dan PT
                      Perumahan Persero (Tbk) (PT PP) menandatangani kontrak
                      EPCC untuk pembangunan Gresik Gas Cogeneration Plant
                      (GGCP). Perjanjian kontrak yang berlangsung dalam jangka
                      waktu 22 (dua puluh dua) bulan ini memiliki nilai kontrak
                      sekitar USD47 juta. Proyek tersebut memiliki kapasitas
                      terpasang 22 MW listrik dan 160 ton/jam uap untuk
                      menyuplai kebutuhan listrik dan uap pabrik Amonia-Urea II
                      milik PT Petrokimia Gresik yang berlokasi di kawasan
                      industri Petrokimia Gresik dengan progress pembangunan
                      sampai dengan saat ini telah mencapai sekitar 32%. Proyek
                      dimulai sejak akhir November 2015 dan ditargetkan akan
                      selesai pada bulan September 2017, dan akan beroperasi
                      komersial penuh sekitar bulan November 2017.
                    </p>

                    <p class="text-justify">
                      Serta yang terbaru, pada tanggal 27 Juli 2016, PI-Energi,
                      menandatangani Perjanjian Kredit dengan PT Bank Sumitomo
                      Mitsui Indonesia (Bank SMBC) untuk membiayai pembangunan
                      Proyek Gresik Gas Cogeneration Plant. Plafon pinjaman yang
                      diperoleh oleh PI-Energi dari Bank SMBC adalah sebesar US$
                      63,5 juta dan Rp 400 Miliar dengan tenor 8 tahun dan dapat
                      diperpanjang untuk 3 tahun berikutnya.
                    </p>

                    <p class="text-justify">
                      Acara syukuran dilakukan secara sederhana sebagai simbol
                      bahwa kemeriahan bukanlah point yang dicari tetapi
                      kekompakan serta kebersamaan yang menjadi tujuan pada
                      acara ini. Hal tersebut dilakukan agar rasa kekeluargaan
                      antar karyawan serta karyawati dapat bertambah, yang
                      menjadikan PI-Energi semakin maju dimasa yang akan datang.
                    </p>

                    <p class="text-justify">
                      Bersama-sama kita bangun PI-Energi yang lebih baik lagi,
                      karena dengan kekompakan akan muncul kesuksesan, dan
                      semoga di umur yang ke-2 tahun ini PI-Energi akan semakin
                      maju ungkap ungkap Tentaminarto, Direktur Utama PI-Energi.
                    </p>

                    <p class="text-justify">
                      Dalam kesempatan yang sama Dana Sudjana selaku Komisaris
                      PI-Energi mengungkapkan bahwa PI-Energi hingga saat ini
                      telah melakukan pencapaian sesuai target dan diharapkan
                      dapat lebih baik lagi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers17"
              >
                <img src="../assets/siaranPers/SP-16.jpg" class="img-fixed" />
                <div class="card-body">
                  <h5 class="card-title text-start">
                    Penandatanganan Kontrak EPCC Gresik Gas Cogeneration Plant
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">14 Oktober 2016 </small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="pers17"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Penandatanganan Kontrak EPCC Gresik Gas Cogeneration Plant
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-16.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >14 Oktober 2016
                      </small>
                    </p>

                    <p class="text-justify">
                      Pada tanggal 18 November 2015, PT Pupuk Indonesia Energi
                      dan PT Pembangunan Perumahan (Persero) Tbk (PT PP)
                      menandatangani kontrak EPCC untuk pembangunan Gresik Gas
                      Cogeneration Plant (GGCP). Perjanjian kontrak yang
                      berlangsung dalam jangka waktu 22 (dua puluh dua) bulan
                      ini memiliki nilai kontrak sekitar USD 47 Juta. Kapasitas
                      pembangkit listrik yang diberikan sekitar 22 (dua puluh
                      dua) mega watt, serta kapasitas produksi steam sekitar 160
                      ton per jam.
                    </p>

                    <p class="text-justify">
                      Direktur Utama PI-Energi, Tentaminarto T. F. didampingi
                      Direktur Operasi PI-Energi, Ibu Kuntari Laksmitadewi
                      Wahyuningdyah bersama-sama dengan Direktur EPC PT PP,
                      Harry Nugroho yang didampingi oleh Kepala Divisi EPC PT
                      PP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers18"
              >
                <img src="../assets/siaranPers/SP-16.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Pupuk Indonesia Energi Bangun Pembangkit Listrik di Gresik
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">13 Oktober 2016 </small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="pers18"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Pupuk Indonesia Energi Bangun Pembangkit Listrik di Gresik
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-16.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >13 Oktober 2016
                      </small>
                    </p>

                    <p class="text-justify">
                      PT Pupuk Indonesia Energi (PI-Energi), anak perusahaan
                      dari PT Pupuk Indonesia (Persero), menandatangani
                      Perjanjian Kredit dengan PT Bank Sumitomo Mitsui Indonesia
                      (Bank SMBC) untuk membiayai pembangunan Proyek Gresik Gas
                      Cogeneration Plant milik PI-Energi dan Perjanjian Kredit
                      ditandatangani oleh Direktur Utama PI-Energi Tentaminarto,
                      Direktur Utama Bank SMBC Kazuhisa Miyagawa, langsung
                      disaksikan oleh Direktur Keuangan Pupuk Indonesia, Indarto
                      Pamoengkas. Penandatangan dilakukan Kantor PI-Energi di
                      Gedung Petrokimia Gresik, Jakarta Pusat. Rabu, (27/7).
                    </p>

                    <p class="text-justify">
                      Direktur Keuangan Pupuk Indonesia, Indarto Pamoengkas
                      mengatakan Pupuk Indonesia saat ini mempunyai 10 Anak
                      usaha, salah satunya adalah Pupuk Indonesia Energi yang
                      bergerak di bidang energi yang memproduksi dan mensuplai
                      listrik dan utilitas ke pabrik-pabrik pupuk di lingkungan
                      kelompok usaha PT Pupuk Indonesia (Persero), Pupuk
                      Indonesia Group terus melakukan berbagai proyek
                      pengembangan diantaranya pembangunan pabrik baru,
                      revitalisasi pabrik dan sejumlah proyek yang sedang
                      berlangsung antara lain Pusri IIB di Palembang, Amurea II
                      di Gresik, pengembangan NPK Cluster di Bontang, serta
                      pembangunan sejumlah infrastruktur pendukung di
                      anggota-anggota holding lainnya, seperti pembangunan
                      dermaga, gudang, dan lain-lain katanya.
                    </p>

                    <p class="text-justify">
                      PI -Energi resmi berdiri pada tanggal 18 Agustus 2014 dan
                      bergerak di bidang uap panas (steam) dan listrik.
                      Perusahaan yang berlokasi di Jakarta ini sahamnya dimiliki
                      oleh PT Pupuk Indonesia (Persero) 50%, PT Pupuk Sriwidjaja
                      Palembang 10%, PT Petrokimia Gresik 10 %, PT Pupuk
                      Kalimantan Timur 10%, PT Pupuk Kujang 5%, PT Pupuk
                      Iskandar Muda 5% dan PT Rekayasa Industri 10%.
                    </p>

                    <p class="text-justify">
                      Saat ini PI-Energi sedang membangun pembangkit tenaga
                      listrik dan uap berbahan bakar gas bumi dengan kapasitas
                      terpasang 22 MW listrik dan 160 ton/jam uap untuk
                      menyuplai kebutuhan listrik dan uap pabrik Amonia-Urea II
                      milik PT Petrokimia Gresik yang berlokasi di kawasan
                      industri Petrokimia Gresik dengan progress pembangunan
                      sampai dengan saat ini telah mencapai sekitar 32%. Proyek
                      tersebut dimulai sejak akhir November 2015 dan ditargetkan
                      akan selesai pada bulan September 2017, serta akan
                      beroperasi komersial penuh sekitar bulan November 2017.
                    </p>

                    <p class="text-justify">
                      Plafon pinjaman yang diperoleh oleh PI-Energi dari Bank
                      SMBC adalah sebesar US$ 63,5 juta dan Rp 400 Miliar dengan
                      tenor 8 tahun dan dapat diperpanjang untuk 3 tahun
                      berikutnya, ungkap Tentaminarto, Direktur Utama PI-Energi.
                      Ini merupakan prestasi bagi PI-Energi bahwa di usianya
                      yang masih sangat belia ini telah mendapat kepercayaan
                      dari Bank berskala internasional untuk memperoleh pinjaman
                      dengan nilai yang begitu besar, tambahnya.
                    </p>

                    <p class="text-justify">
                      Pada kesempatan yang sama Direktur Operasi PI-Energi,
                      Kuntari Laksmitadewi Wahyuningdyah mengatakan, kami sangat
                      senang dengan ditandatanganinya Perjanjian Kredit ini,
                      semoga kami dapat menyelesaikan Proyek Gresik Gas
                      Cogeneration tepat waktu, sehingga dapat mendukung program
                      pembangunan infrastruktur kelistrikan dan ketahanan pangan
                      yang dicanangkan oleh Pemerintah.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#pers19"
              >
                <img src="../assets/siaranPers/SP-16.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    PT Pupuk Indonesia Raih Annual Report Award 2015
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">12 Oktober 2016</small>
                  </p>
                </div>
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="pers19"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      PT Pupuk Indonesia Raih Annual Report Award 2015
                    </h2>
                    <img
                      src="../assets/siaranPers/SP-16.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >12 Oktober 2016</small
                      >
                    </p>

                    <p class="text-justify">
                      REPUBLIKA.CO.ID, Pemerintah terus mendorong penerapan good
                      corporate governance (GCG) bagi perusahaan-perusahaan di
                      Indonesia melalui peningkatan kualitas keterbukaan
                      informasi pada laporan tahunan. Kegiatan ini diwujudkan
                      dalam bentuk penganugerahaan Annual Report Award (ARA).
                      ARA terselenggara atas kerja sama tujuh instansi yaitu
                      Otoritas Jasa Keuangan, Kementerian Badan Milik Usaha
                      Negara, Bank Indonesia, Direktorat Jenderal Pajak
                      Kementerian Keuangan, Komite Nasional Kebijakan
                      Governance, Bursa Efek Indonesia, dan Ikatan Akuntan
                      Indonesia.
                    </p>

                    <p class="text-justify">
                      Melalui keterangan yang diterima Republika.co.id, kemarin,
                      menyebutkan, dari ratusan peserta yang mengikuti ARA ini,
                      telah menghasilkan 33 perusahaan terbaik di Indonesia.
                      Salah satunya diraih oleh PT Pupuk Indonesia (Persero) Tbk
                      dan anak perusahaannya PT Pupuk Kaltim. Penghargaan ini
                      diterima PT Pupuk Indonesia, pekan kemarin.
                    </p>

                    <p class="text-justify">
                      Penganugerahan ARA 2015 dihadiri Menteri Koordinator
                      Bidang Perekonomian Darmin Nasution, Menteri Keuangan Sri
                      Mulyani, Ketua OJK Muliaman D. Hadad, Direktur Utama PT
                      Bursa Efek Indonesia Tito Sulistio, dan sejumlah tokoh
                      lainnya. ARA terselenggara atas kerja sama tujuh instansi
                      terdiri dari OJK, Kementerian Badan Usaha Milik Negara
                      (BUMN), Bank Indonesia, Direktorat Jenderal Pajak, Komite
                      Nasional Kebijakan Governance, BEI, dan Ikatan Akuntan
                      Indonesia.
                    </p>

                    <p class="text-justify">
                      Penilaian ARA 2015 terdiri dari delapan kriteria kualitas
                      informasi dalam laporan tahunan, khususnya menyangkut
                      aspek transparansi dan GCG. Bobot masing-masing yakni Umum
                      2 perseb, Ikhtisar data keuangan penting 5 persen, Laporan
                      dewan komisaris dan direksi 3 persen, profil perusahaan 8
                      persen, analisa dan pembahasan manajemen atas kinerja 22
                      persen. Kemudian, GCG 35 persen, informasi keuangan 20
                      persen, dan lainnya 5 persen. Penilaian dilakukan oleh
                      dewan juri yang berasal dari tujuh institusi, praktisi,
                      pengamat, dan akademisi.
                    </p>

                    <p class="text-justify">
                      <a
                        href="http://nasional.republika.co.id/berita/nasional/daerah/16/10/04/oei6d5396-pt-pupuk-indonesia-raih-annual-report-award-2015"
                        >Sumber</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="artikel">
          <div class="row">
            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art1"
              >
                <img src="../assets/artikel/Artikel_1.jpeg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Berdayakan Kelompok Wanita, PI Utilitas Bentuk Bank Sampah
                    Desa Banyuwangi
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">11 November 2022</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art1" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Berdayakan Kelompok Wanita, PI Utilitas Bentuk Bank Sampah
                      Desa Banyuwangi
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_1.jpeg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >11 November 2022</small
                      >
                    </p>
                    <!-- </div>
                                                <div class="col-md-6"> -->
                    <p class="head-modal">"Berilah kail, jangan ikannya."</p>
                    <p class="text-justify">
                      Makna dari pepatah inilah yang menjadi semangat PI
                      Utilitas dalam menjalankan program Corporate Social
                      Responsibility (CSR). Mewujudkan kemandirian masyarakat
                      melalui pemberdayaan dilakukan agar program yang dilakukan
                      memenuhi prinsip berkelanjutan. Artinya, PI Utilitas
                      menjadi pendamping dengan peran dominan di awal program,
                      yang selanjutnya diharapkan mampu berdikari mengelola
                      kegiatannya sendiri.
                    </p>

                    <p class="text-justify">
                      Dengan prinsip di atas, PI Utilitas melakukan rangkaian
                      pendampingan pembentukan program Bank Sampah di Desa
                      Banyuwangi, Gresik, Jawa Timur. Said Ridho Fadlan, Plt.
                      Sekretaris Perusahaan menjelaskan bahwa kegiatan ini
                      merupakan sub program CSR PI Utilitas yaitu Desa Wisata
                      Terintegrasi dan Berkelanjutan ‘Desibel’ Pecuk Indah
                      Ecoriparian.
                    </p>

                    <p class="text-justify">
                      Ridho sapaan akrabnya, juga menambahkan bahwa inisiasi
                      pembentukan Bank Sampah dilatarbelakangi oleh kesadaran
                      masyarakat sekitar desa wisata untuk mengelola sampah yang
                      masih perlu ditingkatkan guna mewujudkan lingkungan yang
                      bersih sebagai syarat utama kenyamanan wisatawan yang
                      berkunjung. Selain itu, program Bank Sampah ini mampu
                      menjadi komoditi ekonomi baru bagi masyarakat Desa
                      Banyuwangi.
                    </p>

                    <p class="text-justify">
                      Rangkaian program ini diawali pada tanggal 29 Oktober 2022
                      dengan memberikan edukasi mengenai pengelolaan sistem Bank
                      Sampah kepada 45 peserta dari kelompok wanita di Desa
                      Banyuwangi. Bekerjasama dengan tim ahli dari Yayasan Esa
                      Khatulistiwa dan LSM setempat, peserta dikenalkan mulai
                      dari pentingnya peran Bank Sampah, jenis-jenis sampah,
                      hingga administrasi manajemen Bank Sampah. Hasilnya,
                      terbentuk Bank Sampah induk tingkat desa yang mengelola 13
                      kelompok Bank Sampah dari setiap Rukun Tetangga (RT).
                    </p>
                    <!-- </div> -->

                    <p class="text-justify">
                      Selanjutnya, program dilanjutkan dengan penyerahan
                      alat-alat Bank Sampah pada tanggal 10 November 2022.
                      Alat-alat yang diberikan berupa buku register, buku
                      tabungan nasabah, serta prasarana lain seperti timbangan,
                      sarung tangan, cutter, dan karung sampah.
                    </p>

                    <p class="text-justify">
                      “Rangkaian program ini akan terus berlanjut dengan
                      pendampingan kepada para peserta dan senantiasa kami akan
                      jalin kolaborasi dengan para stakeholders terkait,
                      utamanya Pemerintah Desa Banyuwangi”, pungkas Ridho. (MA)
                    </p>

                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art2"
              >
                <img src="../assets/artikel/Artikel_2.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Terus Kembangkan Potensi, PI Utilitas Bekali Warga Cara
                    Mengolah Buah Nipah
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">28 Oktober 2022</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art2" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Terus Kembangkan Potensi, PI Utilitas Bekali Warga Cara
                      Mengolah Buah Nipah
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_2.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >28 Oktober 2022</small
                      >
                    </p>
                    <!-- </div>
                                                <div class="col-md-6"> -->
                    <p class="head-modal">Gresik, Jawa Timur</p>
                    <p class="text-justify">
                      PI Utilitas terus mengembangkan potensi Desa Wisata binaan
                      yang menjadi program CSR PI Utilitas yaitu Desa Wisata
                      Terintegrasi dan Berkelanjutan “Desibel” Pecuk Indah
                      Ecoriparian melalui optimalisasi potensi hasil alam yang
                      ada di wilayah desa wisata berupa buah nipah yang
                      diwujudkan dalam program “Pelatihan Cara Mengolah Buah
                      Nipah” yang dilaksanakan pada tanggal 12 dan 13 Oktober
                      2022.
                    </p>

                    <p class="text-justify">
                      Kegiatan yang bertempat di Aula Gazebo Pecuk Indah
                      Ecoriparian ini diikuti oleh 37 peserta dari kelompok
                      masyarakat lokal yaitu Kelompok Pemberdayaan dan
                      Kesejahteraan Keluarga (PKK), Kelompok Sadar Wisata
                      (Pokdarwis), dan Perangkat Desa Banyuwangi, Gresik, Jawa
                      Timur.
                    </p>

                    <p class="text-justify">
                      Buah Nipah, yang memiliki nama ilmiah Nypa fruticans,
                      tumbuh subur di Kawasan Pecuk Indah Ecoriparian, tetapi
                      keberadaannya kurang diperhatikan dan dimanfaatkan oleh
                      warga setempat. Padahal buah nipah termasuk bahan pangan
                      potensial yang dapat diolah menjadi berbagai macam produk
                      pangan alternatif. Kandungan karbohidrat dan antioksidan
                      alami yang tinggi dalam buah nipah juga membuat buah ini
                      memiliki banyak manfaat seperti menurunkan risiko penyakit
                      kanker dan diabetes, serta menangkal radikal bebas.
                    </p>

                    <p class="text-justify">
                      Bekerjasama dengan tim ahli dari Universitas Negeri
                      Sebelas Maret (UNS) Surakarta dan Lembaga Swadaya
                      Masyarakat (LSM) lokal, PI Utilitas menghadirkan pelatihan
                      mengolah buah nipah menjadi produk olahan berupa sirup,
                      manisan kering, tepung, dan dodol.
                    </p>
                    <!-- </div> -->

                    <p class="text-justify">
                      Plt. Sekretaris Perusahaan PI Utilitas, Said Ridho Fadlan,
                      atau Ridho sapaan akrabnya, mengungkapkan bahwa selain
                      untuk memaksimalkan potensi alam Desa Wisata Pecuk Indah
                      Ecoriparian, pelatihan ini bertujuan untuk meningkatkan
                      kapasitas masyarakat dengan harapan dapat menambah
                      kesiapan kelompok masyarakat setempat untuk menjadi
                      kelompok binaan CSR PI Utilitas yang mandiri dan berdaya
                      dalam mengelola Desa Wisata.
                    </p>

                    <p class="text-justify">
                      "Kedepannya, PI Utilitas akan terus meningkatkan nilai
                      tambah produk dengan pelatihan pengemasan dan pemasaran
                      sehingga produk dapat dijadikan buah tangan khas dari
                      Pecuk Indah Ecoriparian,” tukasnya.
                    </p>

                    <p class="text-justify">
                      Menurutnya, keterlibatan berbagai pihak mulai dari
                      Pemerintah Desa Banyuwangi, Komunitas-komunitas lokal, dan
                      para akademisi sangat membantu keberhasilan pengembangan
                      program Desa Wisata Terintegrasi dan Berkelanjutan
                      “Desibel” Pecuk Indah Ecoriparian. Meskipun ada berbagai
                      tantangan, lanjut Ridho, kolaborasi serta komunikasi dari
                      semua pihak dapat menjadi kunci keberlangsungan program
                      ini.
                    </p>

                    <p class="text-justify">
                      “PI Utilitas akan terus berkomitmen memberikan manfaat
                      yang bernilai tambah bagi masyarakat dan lingkungan dalam
                      setiap operasional bisnisnya sebagai bagian dari strategi
                      dan kontribusi Perusahaan untuk mencapai Sustainable
                      Development Goas (SDGs) atau Tujuan Pembangunan
                      Berkelanjutan (TPB) khususnya nomor 8 tentang pekerjaan
                      layak dan pertumbuhan ekonomi”, tutup RIdho. (MA)
                    </p>

                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art3"
              >
                <img src="../assets/artikel/Artikel_3.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Komisi VII DPR RI Lakukan Kunjungan Kerja Spesifik ke GGCP
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy"
                      >17 September 2022</small
                    >
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art3" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Komisi VII DPR RI Lakukan Kunjungan Kerja Spesifik ke GGCP
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_3.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >17 September 2022</small
                      >
                    </p>
                    <!-- </div>
                                                <div class="col-md-6"> -->
                    <p class="text-justify">
                      Kamis, 15 September 2022, Jajaran Komisaris, Direksi, dan
                      Karyawan PT Pupuk Indonesia Utilitas (PI Utilitas)
                      menerima Kunjungan Kerja Spesifik Komisi VII DPR RI di
                      pabrik PI Utilitas yaitu Gresik Gas Cogeneration Plant
                      (GGCP), Gresik, Jawa Timur. Adapun Komisi VII merupakan
                      komisi yang memiliki tugas pada ruang lingkup energi,
                      riset dan inovasi, serta industri.
                    </p>

                    <p class="text-justify">
                      Turut hadir dalam kunjungan ini, Tifatul Sembiring selaku
                      Pimpinan Kunjungan Kerja Spesifik Komisi VII DPR RI ke
                      GGCP beserta anggota Komisi VII DPR RI, Bob Indiarto
                      selaku Direktur Produksi PT Pupuk Indonesia (Persero),
                      serta Direktur Operasi dan Produksi PT Petrokimia Gresik,
                      Digna Jatiningsih.
                    </p>

                    <p class="text-justify">
                      Kunjungan kerja spesifik ini dalam rangka melihat kinerja
                      perusahaan dan memastikan subsidi gas yang diberikan oleh
                      pemerintah untuk mengelola pupuk dapat dengan mudah
                      diperoleh masyarakat, khususnya petani.
                    </p>

                    <p class="text-justify">
                      Dalam sambutanya, Anis Ernani selaku Direktur Operasi PI
                      Utilitas menyambut baik kegiatan kunjungan kerja Komisi
                      VII DPR RI ke pabrik milik PI Utilitas yang terletak di
                      Gresik ini. Selain itu, di hadapan jajaran komisi VII DPR
                      RI, Anis menyampaikan paparan mengenai profil perusahaan,
                      sejumlah portofolio bisnis, serta rencana strategis
                      ekspansi bisnis PI Utilitas kedepan.
                    </p>
                    <!-- </div> -->

                    <p class="text-justify">
                      PI Utilitas memiliki peta jalan pengembangan strategi
                      usaha hingga 2024 yang berorientasi pada ekspansi dan
                      diversifikasi bisnis. Hal ini sebagai upaya untuk
                      menghadapi dinamika bisnis global yang menuntut perusahaan
                      untuk selalu berinovasi dan bertransformasi.
                    </p>
                    <p class="text-justify">
                      “Saat ini PI Utilitas sedang melakukan rencana pembangunan
                      Cikampek Nitrogen & Oxygen Plant (CNOP) yang akan
                      memproduksi nitrogen dengan kapasitas 1.200 Nm3/h dan
                      oksigen berkapasitas 314 Nm3/h di Kawasan Cikampek, Jawa
                      Barat,” ujar anis. Proyek CNOP saat ini masih dalam
                      tahapan proses tender dan ditargetkan beroperasi secara
                      komersial pada triwulan II tahun 2024,” katanya.
                    </p>

                    <p class="text-justify">
                      Pembangunan CNOP ini menjadi bagian program perseroan
                      dalam melakukan diversifikasi produk yang nantinya akan
                      menghasilkan produk Nitrogen yang akan digunakan oleh PT
                      Pupuk Kujang Cikampek (PKC) dan produk Oksigen yang akan
                      dijual ke fasilitas Kesehatan yang masih cukup besar juga
                      kebutuhannya.
                    </p>

                    <p class="text-justify">
                      “Dengan melakukan diversifikasi portofolio sebagai
                      produsen gas industri, maka PI Utilitas akan menjadi
                      perusahaan penyedia utilitas industri terintegrasi
                      (Listrik, Steam, Gas Industri, dll) dan bermanfaat bagi
                      masyarakat luas,” ujar Anis kembali.
                    </p>

                    <p class="text-justify">
                      “Selain itu PI Utilitas juga sedang mempersiapkan rencana
                      akuisisi salah satu perusahaan pembangkit listrik yang
                      insya Allah akan terealisasi pada tahun ini,” tambah Anis.
                    </p>

                    <p class="text-justify">
                      Rencana akuisisi salah satu perusahaan pembangkit listrik
                      yang berlokasi di wilayah Indonesia bagian tengan dan
                      timur akan menjadi enabler untuk PI Utilitas menjual
                      listrik ke luar Pupuk Indonesia Grup, dan hal iniakan
                      membuka peluang pengembangan Pembangkit Listrik Tenaga Uap
                      (PLTU) EBT di wilayah Indonesia bagian tengah dan timur
                      dikarenakan besarnya potensi pengembangan EBT di daerah
                      sana. salah satu arahan strategis yang akan dijalankan
                      oleh PIUtilitas pada Pabrik PLTU yang akan di akusisi
                      adalah melakukan program cofiring biomassa pada kisaran
                      5-10% dari total penggunaan Batu Bara sehingga dapat
                      berkontribusi terhadap peningkatan bauran EBT Nasional.
                      Akuisisi Pembangkitan listrik ini telah direncanakan dalam
                      Rencana Jangka Panjang Perusahaan (RJPP) PI-Utilitas
                      Periode 2020- 2024.
                    </p>

                    <p class="text-justify">
                      Dengan berbagai proyek strategis ini, wilayah operasi PI
                      Utilitas pun akan semakin luas. Sebelumnya, PI Utilitas
                      memiliki wilayah operasi di Jakarta yaitu Head Office,
                      Pabrik GGCP yang berlokasi di Gresik, Jawa Timur dan di
                      Bontang, Kalimantan Timur yaitu tempat berdirinya PT
                      Kaltim Daya Mandiri (KDM) sebagai anak perusahaan.
                      Kedepannya, wilayah operasi akan terus bertambah seiring
                      dengan rencana strategis pengembangan perseroan yang akan
                      segera direalisasikan.
                    </p>

                    <p class="text-justify">
                      Selanjutnya, Anis juga menyampaikan ucapan terimakasih
                      atas sejumlah arahan dan dukungan yang disampaikan oleh
                      Komisi VII DPR RI kepada PI Utilitas.
                    </p>

                    <p class="text-justify">
                      “Kami mengucapkan terima kasih sebesar-besarnya atas
                      kunjungan yang dilakukan Komisi VII DPR RI serta atas
                      arahan dan dukungan kepada PI Utilitas untuk senantiasa
                      melakukan transformasi bisnis melalui ekspansi sehingga
                      menghasilkan produk yang lain yang dapat dirasakan
                      manfaatnya oleh masyarakat,” pungkas Anis. (MA)
                    </p>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art4"
              >
                <img src="../assets/artikel/Artikel_4.jpeg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    PI Utilitas Disiplin Implementasikan GRC
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">31 Agustus 2022</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art4" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      PI Utilitas Disiplin Implementasikan GRC
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_4.jpeg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >31 Agustus 2022</small
                      >
                    </p>
                    <!-- </div>
                                                <div class="col-md-6"> -->
                    <p class="text-justify">
                      PT Pupuk Indonesia Utilitas (PI Utilitas) mampu menjawab
                      tantangan atas ketidakpastian lingkungan bisnis dan
                      ekonomi global melalui kedisiplinan penerapan Governance,
                      Risk and Compliance (GRC) secara terpadu dan terkordinasi.
                    </p>
                    <p class="text-justify">
                      Hal ini disampaikan oleh Direktur Utama PI Utilitas, Agus
                      Subekti, saat menjadi narasumber dalam Webinar TOP GRC
                      Awards 2022 bertajuk “Sharing of GRC Empowerment in
                      Digital Era and Its Support to G20 Indonesia Presidency”
                      (Selasa, 30/08/2022).
                    </p>
                    <p class="text-justify">
                      Agus mengutarakan bahwa implementasi GRC dalam tubuh PI
                      Utilitas dilakukan secara menyeluruh melalui penerapan
                      seluruh sistem manajemen yaitu ISO 9001:2015 tentang
                      Sistem Manajemen Mutu, ISO 14001:2015 Sistem Manajemen
                      Lingkungan, dan ISO 37001:2016 tentang Sistem Manajemen
                      Anti Penyuapan (SMAP), Sistem Manajemen Keselamatan dan
                      Kesehatan Kerja (SMK3) secara optimal, pengimplementasian
                      manajemen risiko yang mempertimbangkan risiko kepatuhan
                      hukum dan regulasi serta tata kelola, dan pelaksanaan
                      sistem serta regulasi yang mengedepankan aspek risiko
                      selain aspek kepatuhan.
                    </p>
                    <p class="text-justify">
                      “Selain itu, juga dilakukan audit berkala melalui audit
                      sistem manajemen, audit kepatuhan dan audit sistem
                      pengendalian internal perusahaan,” ujar Agus.
                    </p>
                    <!-- </div> -->

                    <p class="text-justify">
                      Keberhasilan PI Utilitas dalam penerapan GRC mendapat
                      validasi dari raihan skor penilaian Good Corporate
                      Governance (GCG) tahun 2021 sebesar 83,87 dengan kategori
                      “baik”, melampaui signifikan dari skor target yaitu
                      sebesar 78. “Kami mendapatkan peningkatan skor KPKU
                      sebesar 95,5 point dari 382 dengan band Early improvement
                      menjadi 477,5 dengan band Good Perfomance,” tambah Agus.
                    </p>
                    <p class="text-justify">
                      Sesuai dengan tema webinar yang diselenggarakan oleh
                      Majalah Top Business ini, Agus juga memaparkan
                      pengimplementasian GRC dalam perusahaan yang sesuai dengan
                      tujuan Presidensi G20 Indonesia. Disampaikan olehnya bahwa
                      pada tahun 2023, PI Utilitas telah menargetkan
                      pengembangan bisnis berwawasan lingkungan untuk mewujudkan
                      transisi energi melalui pengambangan Pembangkit Listrik
                      Tenaga Surya (PLTS), termasuk subtitusi energi primer
                      melalui Co-Firing Biomass.
                    </p>
                    <p class="text-justify">
                      Menurut Agus, “Hal ini merupakan bagian inisiatif
                      strategis untuk mendukung pemerintah dalam mencapai target
                      23% pengembangan Energi Baru Terbarukan (EBT) tahun 2025
                      serta mewujudkan emisi karbon nasional sebesar 29%”.
                    </p>
                    <p class="text-justify">
                      GRC dinilainya sebagai cerminan komitmen PI Utilitas untuk
                      mengembangkan kebijakan dan meningkatkan tata kelola
                      perusahaan, manajemen risiko, dan kepatuhan terhadap
                      regulasi sehingga akuntabilitas atas proses yang
                      dijalankan dapat selalu terjaga.
                    </p>
                    <p class="text-justify">
                      “Dengan implementasi GRC yang optimal, dimana setiap hasil
                      review, evaluasi, dan audit bisa dijadikan pengembangan
                      perbaikan, maka bisnis perusahaan pun akan tetap aman dan
                      tumbuh dengan baik,” pungkas Agus. (MA)
                    </p>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art5"
              >
                <img src="../assets/artikel/Artikel_5.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Dukungan Keuangan untuk Pengembangan Bisnis Utilitas
                    Berbasis Energi Baru Terbarukan
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">24 Agustus 2022</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art5" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Dukungan Keuangan untuk Pengembangan Bisnis Utilitas
                      Berbasis Energi Baru Terbarukan
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_5.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >24 Agustus 2022</small
                      >
                    </p>
                    <!-- </div>
                                                <div class="col-md-6"> -->
                    <p class="head-modal">
                      Oleh: Nuri Kristiawan, Direktur Keuangan PT Pupuk
                      Indonesia Utilitas
                    </p>
                    <p class="text-justify">
                      PT Pupuk Indonesia Utilitas sebelum melakukan rebranding
                      pada tanggal 1 Desember 2021 dikenal sebagai PT Pupuk
                      Indonesia Energi, yang didirikan pada tanggal 18 Agustus
                      2014 yang merupakan anak perusahaan PT Pupuk Indonesia
                      (Persero), bergerak di bidang industri penghasil energi
                      dan utilitas. Sesuai road map perusahaan, saat ini PT PI
                      Utilitas tengah bersiap untuk pengembangan bisnis energi
                      dan utilitas dari Energi Baru Terbarukan (EBT), hal ini
                      juga sebagai salah satu bentuk dukungan dan komitmen
                      terhadap penurunan emisi karbon yang sedang di targetkan
                      oleh pemerintah.
                    </p>
                    <p class="text-justify">
                      Dikutip dari laman Kementerian Energi dan Sumber Daya
                      Mineral (ESDM), potensi energi baru terbarukan (EBT) di
                      Indonesia melimpah dan bervariasi, mencapai 3.686 Gigawatt
                      (GW). Hal ini diyakini bisa mengejar target net zero
                      emission (netralitas karbon) pada 2060. Potensi itu
                      berasal dari energi surya sebesar 3.295 GW, hidrogen 95
                      GW, bioenergi 57 GW, panas bumi 24 GW, energi bayu atau
                      angin 155 GW, dan laut sebesar 60 GW.
                    </p>
                    <p class="text-justify">
                      Dengan potensi EBT yang bervariasi, diharapkan Indonesia
                      tidak mengalami krisis energi seperti yang terjadi di
                      Eropa pada akhir 2021 lalu karena sumber daya yang kurang.
                      Mayoritas negara Eropa beralih ke EBT menggunakan
                      pembangkit angin. Di Indonesia, Pemerintah berencana
                      mempensiunkan PLTU batu bara, juga akan mulai memakai
                      tenaga nuklir untuk listrik. Dikutip dari Media
                      Indonesia.com (31/5/2022), Pemerintah mencanangkan tidak
                      ada lagi tambahan kapasitas PLTU pada periode 2026-2030,
                      kecuali kapasitas dari yang sudah berkontrak atau sedang
                      dibangun. Dengan begitu, zero emission yang ditargetkan
                      pada 2060 dapat tercapai.
                    </p>
                    <p class="text-justify">
                      Melihat target tersebut, tidak berlebihan jika EBT dapat
                      dikategorikan sebagai energi hari ini dan masa depan yang
                      akan menggantikan energi fosil. Dukungan pemerintah
                      terhadap keberlanjutan EBT juga semakin terlihat jelas
                      dari program-program yang dirumuskan, termasuk di ranah
                      finansial.
                    </p>
                    <!-- </div> -->

                    <p class="text-justify">
                      Guna melaksanakan dan mendukung program Pemerintah, PT PI
                      Utilitas telah membangun Pembangkit Listrik Tenaga Surya
                      (PLTS) di atap gedung control room pabrik milik
                      perusahaan, yaitu Gresik Gas Cogeneration Plant (GGCP) di
                      Kabupaten Gresik, Jawa Timur. Selain digunakan untuk
                      kepentingan sendiri, PLTS tersebut dijadikan riset awal
                      untuk menguji kehandalan dan kapasitas maksimal yang dapat
                      dihasikan PLTS di jam beban puncak antara pukul 10.00 –
                      14.00. Hasil riset ini akan dijadikan referensi untuk
                      mendukung pengembangan proyek-proyek PLTS maupun proyek
                      EBT lainnya, yang akan dijalankan di lingkungan Pupuk
                      Indonesia Grup maupun di wilayah lainnya.
                    </p>
                    <p class="text-justify">
                      Saat ini, seluruh lembaga keuangan, terutama perbankan,
                      sudah diamanatkan untuk melakukan pengembangan sistem
                      lembaga keuangan yang ramah lingkungan hidup. Hal itu
                      merupakan amanah Undang-Undang Nomor 32 Tahun 2009 tentang
                      Perlindungan dan Pengelolaan Lingkungan Hidup, dan
                      Peraturan Otoritas Jasa Keuangan (POJK) Nomor 51 tentang
                      Penerapan Keuangan Berkelanjutan. Salah satu dampaknya,
                      pendanaan perbankan untuk proyek-proyek berbasis energi
                      fosil atau yang tidak ramah lingkungan semakin terbatas.
                      Sebaliknya, pendanaan perbankan untuk pengembangan bisnis
                      EBT sangat terbuka. Hal ini menjadi salah satu kekuatan
                      bagi PT PI Utilitas untuk memperoleh pendanaan atas
                      rencana pengembangan bisnis EBT. Menyikapi hal tersebut,
                      PT PI Utilitas sedang melakukan pengembangan usaha
                      utilitas yang ramah lingkungan di tahun ini, yaitu dengan
                      membangun Pabrik Nitrogen (N2) & Oksigen (O2) di Cikampek
                      dengan kapasitas produksi sebesar 1200 Nm3/h untuk N2 dan
                      314 Nm3/h untuk O2.
                    </p>
                    <p class="text-justify">
                      Selain aspek finansial, tuntutan global untuk mulai
                      mengubah energi fosil menjadi EBT juga mengharuskan
                      perusahaan-perusahaan energi di Indonesia, termasuk PT PI
                      Utilitas, untuk dapat beradaptasi. Untuk itu, dibutuhkan
                      adaptasi SDM dan teknologi. Perubahan pola berpikir atau
                      mindset seluruh SDM yang dimiliki perseroan harus
                      dipersiapkan untuk siap berkompetisi, meningkatkan
                      kompetensi, serta melakukan inovasi-inovasi guna memenuhi
                      tuntutan perubahan global. Perubahan ini diharapkan dapat
                      berdampak nyata dan positif terhadap pencapaian target,
                      serta kemajuan perusahaan dalam pengembangan bisnis EBT di
                      kancah nasional maupun internasional.
                    </p>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art6"
              >
                <img src="../assets/artikel/Artikel_6.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Bisnis Utilitas Berbasis Energi Baru Terbarukan
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">12 Agustus 2022</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art6" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Bisnis Utilitas Berbasis Energi Baru Terbarukan
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_6.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >12 Agustus 2022</small
                      >
                    </p>
                    <!-- </div>
                                                <div class="col-md-6"> -->
                    <p class="head-modal">
                      Oleh: Anis Ernani, Direktur Operasi PT Pupuk Indonesia
                      Utilitas
                    </p>
                    <p class="text-justify">
                      Presiden Joko Widodo (Jokowi) pernah mengemukakan jika
                      pengurangan karbon, salah satunya dengan program
                      dekarbonisasi, merupakan faktor kunci untuk mengurangi
                      dampak perubahan iklim. Hal tersebut diutarakan Jokowi
                      pada perhelatan Conferences of the Parties ke-26 (COP26)
                      United Nations Framework Convention on Climate Change
                      (UNFCCC) di Glasgow, Skotlandia, akhir 2021.
                    </p>
                    <p class="text-justify">
                      Menurut Jokowi, dekarbonisasi merupakan solusi yang dapat
                      dilakukan semua orang, pemerintah, dan berbagai
                      perusahaan. Proses ini membutuhkan perubahan menyeluruh
                      dan langkah-langkah strategis. Mulai dari beragam sektor
                      dan berbagai industri. Selain itu, dekarbonisasi tentu
                      saja membutuhkan investasi dalam jumlah yang besar.
                    </p>
                    <p class="text-justify">
                      Meskipun prosesnya tidak mudah, Badan Usaha Milik Negara
                      (BUMN) di Indonesia termasuk Pupuk Indonesia Grup,
                      diinstruksikan untuk melakukan dekarbonisasi. Bagi PT
                      Pupuk Indonesia Utilitas, ini adalah salah satu peluang
                      bisnis yang menjanjikan.
                    </p>
                    <p class="text-justify">
                      Saat ini, penyediaan utilitas di pabrik-pabrik pupuk yang
                      merupakan anak-anak perusahaan PT Pupuk Indonesia masih
                      menggunakan energi fosil.Tentu saja, penggunaan energi
                      fosil harus dikurangi secara bertahap dengan menggunakan
                      bauran energi (energy mix), hingga kelak seluruhnya akan
                      menggunakan Energi Baru Terbarukan (EBT).
                    </p>
                    <!-- </div> -->

                    <p class="text-justify">
                      Potensi awal itu terlihat di Gresik Gas Cogeneration Plant
                      (GGCP), kawasan Industri Petrokimia Gresik, Jawa Timur,
                      yang sudah menggunakan panel surya. Selanjutnya, perseroan
                      akan bermitra dengan penyedia (provider) untuk pemasangan
                      panel-panel surya. Kemitraan harus segera direalisasikan
                      karena pemerintah juga akan segera menerapkan penggunaan
                      EBT.
                    </p>
                    <p class="text-justify">
                      Mekanisme perdagangan karbon di Indonesia akan diterapkan
                      seiring dengan pajak karbon. Setiap emisi karbon akan
                      dikenai pajak sebesar Rp30,-/kilogram apabila melewati
                      batas jumlah emisi yang diperbolehkan. Di sinilah peluang
                      bisnis bagi PT PI Utilitas terbuka lebar. Akan lebih
                      banyak proyek-proyek berbasis EBT yang dikerjaka. Mengapa
                      demikian? Karena kemungkinannya sangat kecil untuk
                      memperoleh persetujuan jika masih melakukan pembangunan
                      proyek-proyek seperti pembangkit listrik yang menggunakan
                      bahan bakar dari energi fosil seperti batubara.
                    </p>
                    <p class="text-justify">
                      Tidak ada pilihan selain membangun pola pikir (mindset)
                      maupun komitmen terhadap EBT. Artinya PT PI Utilitas
                      harus bisa membangun sebuah proyek percontohan (pilot
                      project) yang sukses dan mampu beroperasi dengan baik.
                      Kisah sukes itulah yang nantinya akan dijadikan referensi
                      bagi lainnya, agar terinspirasi dan kemudian menggunakan
                      jasa PT PI Utilitas.
                    </p>
                    <p class="text-justify">
                      Mari kita tetap berbisnis yang menghasilkan keuntungan,
                      sambil menjaga kelestarian lingkungan dan masa depan umat
                      manusia di muka bumi.
                    </p>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art7"
              >
                <img src="../assets/artikel/Artikel_7.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">Masa Depan Bisnis Utilitas</h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">1 Agustus 2022</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art7" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">Masa Depan Bisnis Utilitas</h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_7.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy">1 Agustus 2022</small>
                    </p>
                    <!-- </div>
                                                <div class="col-md-6"> -->
                    <p class="head-modal">
                      Oleh: Agus Subekti, Direktur Utama PT Pupuk Indonesia
                      Utilitas
                    </p>
                    <p class="text-justify">
                      Ketika seseorang menyalakan korek gas untuk menghidupkan
                      sebatang rokok, pada saat itulah terjadi pembakaran
                      liquefied petroleum gas (LPG) ketika bertemu dengan
                      oksigen, menghasilkan gas CO2 dan uap air (h2O).
                    </p>
                    <p class="text-justify">
                      Semua proses pembakaran seperti waktu menyulut rokok
                      maupun ketika memasak dengan menggunakan kompor gas akan
                      menghasilkan CO2. Salah satu contoh yang menghasilkan Gas
                      Rumah Kaca (GRK) adalah gas-gas yang ada di dalam atmosfer
                      yang menyebabkan efek rumah kaca yang termasuk dalam GRK
                      antara lain adalah gas karbon dioksida (CO2), gas nitrogen
                      dioksida (N2O), dan gas methan (CH4). Selanjutnya GRK akan
                      mendorong terjadinya pemanasan global (global warming)
                      yang mayoritas disebabkan oleh industri yang menggunakan
                      bahan bakar fosil dan kendaraan bermotor.
                    </p>
                    <p class="text-justify">
                      Bahan bakar fosil itu bisa berupa batubara, gas bumi
                      maupun produk-produk hasil pengolahan minyak bumi mulai
                      dari pertalite, pertamax hingga solar. Proses pembakaran
                      bahan bakar fosil selalu menghasilkan CO2 sehingga lapisan
                      udara (atmosfer) mengandung kadar CO2 yang banyak sekali
                      dan membahayakan kehidupan manusia dalam banyak hal.
                    </p>
                    <h5 class="text-justify" style="color: #f15a24">
                      <p>Dekarbonisasi</p>
                    </h5>

                    <!-- </div> -->

                    <p class="text-justify">
                      Sebagai upaya untuk meminimalisir marabahaya yang dihadapi
                      oleh umat manusia di seluruh muka bumi, maka negara-negara
                      di dunia bersepakat untuk melakukan proses pengurangan
                      karbon atau dekarbonisasi.
                    </p>
                    <p class="text-justify">
                      Dalam proses dekarbonisasi, yang perlu ditekankan adalah
                      industri harus tetap berjalan di satu sisi, namun di sisi
                      lain kadar CO2 yang dilepaskan ke udara tidak boleh
                      bertambah. Oleh sebab itu prasyarat utama yang harus
                      dipenuhi sekaligus menjadi kata kunci dalam proses
                      dekarbonisasi adalah Energi Baru dan Terbarukan (EBT). EBT
                      adalah Energi yang bersumber pada proses alam yang
                      bekelanjutan. Contoh EBT antara lain adalah energi yang
                      berasal dari tenaga surya, tenaga angin, tenaga arus air,
                      panas bumi dan proses biologi seperti kelapa sawit.
                      Pemanfaatan EBT dapat memberikan solusi energi di masa
                      depan dan memberikan banyak manfaat tidak hanya untuk
                      manfaat pertumbuhan ekonomi, namun juga manfaat bagi
                      lingkungan.
                    </p>
                    <p class="text-justify">
                      Jika energi fosil hilang dalam sekali pakai dan akan habis
                      jika terus menerus dikonsumsi, maka EBT dapat diperbaharui
                      setelah dikonsumsi. Contoh dari EBT salah satunya berasal
                      dari tanaman yaitu kelapa sawit. Tandan kosong kelapa
                      sawit (TKKS) adalah sumber energi. Selain itu juga ada
                      kayu bakar yang dahulu sering kali dipergunakan untuk
                      memasak.
                    </p>
                    <p class="text-justify">
                      Pada saat ini, segala daya upaya akan dan telah dikerahkan
                      untuk mendukung dekarbonisasi. Salah satu contohnya adalah
                      pemanfaatan sumber tenaga panas bumi (geothermal) yang
                      tidak mengeluarkan CO2 ke udara, sebagai sumber tenaga
                      pembangkit listrik.
                    </p>
                    <p class="text-justify">
                      Selain itu juga ada Pembangkit Listrik Tenaga Surya (PLTS)
                      atau solar cell yang menggunakan panas matahari untuk
                      membangkitkan tenaga listrik namun tidak mengeluarkan CO2.
                      Selanjutnya juga masih ada Pembangkit Listrik Tenaga Air
                      (PLTA). Turbin yang dipakai untuk membangkitkan listrik
                      diputar dengan menggunakan tenaga air sehingga tidak
                      mengeluarkan CO2. Demikian beberapa contoh penggunaan EBT
                      untuk kebutuhan pembangkit listrik.
                    </p>
                    <p class="text-justify">
                      Dari beberapa pilihan EBT yang telah dikemukakan di atas,
                      PI Utilitas sedang mengembangkan PLTS. PI Utilitas telah
                      membangun PLTS dengan kapasitas 1 megawattpic melalui anak
                      perusahaan PIU yaitu Kaltim Daya Mandiri. Pengembangan
                      telah dilakukan setahun yang lalu di Kawasan Industri
                      Pupuk Kalimantan Timur (PKT) yang terletak di Bontang,
                      Kalimantan Timur (Kaltim).
                    </p>
                    <p class="text-justify">
                      Inisiasi Pembangunan PLTS di Bontang adalah sebuah langkah
                      awal untuk mendukung program dekarbonisasi. Selanjutnya,
                      dengan dukungan para pemegang saham, kami akan melanjutkan
                      pengembangan berupa pembangunan PLTS di berbagai lokasi di
                      dalam PI Grup maupun di luar PI Grup. Demi masa depan yang
                      lebih baik, untuk kemajuan yang berkelanjutan. Karena bumi
                      tempat kita hidup harus tetap dipertahankan kelestariannya
                      demi masa depan generasi selanjutnya yang lebih baik.
                    </p>

                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art8"
              >
                <img src="../assets/artikel/Artikel_8.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    PT Pupuk Indonesia Utilitas Catatkan Kinerja Positif Selama
                    Tahun 2021
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">11 Juli 2022</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art8" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      PT Pupuk Indonesia Utilitas Catatkan Kinerja Positif
                      Selama Tahun 2021
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_8.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy">11 Juli 2022</small>
                    </p>
                    <!-- </div>
                                                <div class="col-md-6"> -->

                    <p class="text-justify">
                      PT Pupuk Indonesia Utilitas, anak perusahaan dari PT Pupuk
                      Indonesia (Persero) mendapatkan capaian kinerja keuangan
                      perusahaan yang positif sepanjang tahun 2021. Di tahun
                      yang bertepatan dengan rebranding perusahaan dari PT Pupuk
                      Indonesia Energi (PIE) menjadi PT Pupuk Indonesia Utilitas
                      (PIU) ini, perusahaan berhasil membukukan laba bersih
                      tahun berjalan sebesar Rp113,85 miliar pada seluruh segmen
                      usaha PIU yang berbasis pada produksi listrik, steam,
                      nitrogen, penjualan batubara, dan jasa integrasi listrik.
                      Angka ini melebihi 3% di atas target RKAP tahun 2021 yang
                      ditetapkan yaitu sebesar Rp110,5 miliar.
                    </p>
                    <p class="text-justify">
                      Pada tutup buku periode 2021, PIU juga mencatatkan omset
                      sebesar Rp757,09 miliar. Berdasarkan segmentasi produk,
                      listrik dan steam menjadi penyumbang capaian yang dominan
                      dari total omset tahun 2021. Listrik menjadi kontributor
                      terbesar terhadap omset sebesar Rp353,7 miliar (47%),
                      diikuti steam yang mencatatkan omset sebesar Rp264,2
                      miliar (35%), batu bara sebesar Rp70,6 miliar (9%),
                      nitrogen sebesar Rp34,9 miliar (5%), dan jasa integrasi
                      listrik sebesar Rp33,8 miliar (4%).
                    </p>
                    <p class="text-justify">
                      Direktur Utama PIU, Agus Subekti mengatakan, “Capaian
                      profitabilitas PIU tahun 2021 ini tidak terlepas dari
                      implementasi strategi operasional perusahaan yang tepat
                      dan efisien serta peningkatan kompetensi sumber daya
                      manusia yang optimal. Selain itu, penerapan protokol
                      kesehatan yang tepat dan konsisten di area pabrik dan
                      kantor pusat juga telah menopang tren positif kinerja
                      perusahaan.”
                    </p>
                    <h5
                      class="text-justify"
                      style="color: #f15a24; font-weight: bold;"
                    >
                      <p>Strategi Operasional yang Tepat dan Efisien</p>
                    </h5>

                    <!-- </div> -->

                    <p class="text-justify">
                      Seluruh pencapaian kinerja positif PIU tahun 2021
                      merupakan validasi dari implementasi strategi operasional
                      yang tepat dan eksekusi yang efisien. Hal ini tidak
                      terlepas dari penerapan standar operasional prosedur (SOP)
                      perusahaan yang ketat. Penerapan SOP di PIU telah berjalan
                      sesuai sertifikasi ISO 9001:2015 tentang Sistem Manajemen
                      Mutu yang telah didapat sejak tahun 2020. Melalui
                      sertifikasi ISO 9001:2015 ini, PIU senantiasa
                      memperhatikan standar kualitas mutu kegiatan operasional
                      dan mengoptimalkan mutu layanannya kepada para pemangku
                      kepentingan.
                    </p>
                    <p class="text-justify">
                      Prestasi cemerlang kinerja operasional PIU juga diraih
                      sepanjang tahun 2021 dengan didapatkannya 2 sertifikat ISO
                      sekaligus yaitu ISO 14001:2015 tentang Sistem Manajemen
                      Lingkungan dan ISO 37001:2016 tentang Sistem Manajemen
                      Anti Penyuapan (SMAP). Hal ini membuktikan bahwa PIU
                      berkomitmen untuk selalu menerapkan tanggung jawab
                      lingkungan pada proses produksi di area sekitar pabrik.
                      Sejalan dengan hal tersebut realisasi dana untuk program
                      Corporate Social Responsibility (CSR) telah terealisasi
                      sebesar 98% dari anggaran 2021. Selain itu, capaian
                      sertifikasi SMAP juga membuktikan bahwa seluruh insan PIU
                      telah berperan dalam menciptakan lingkungan kerja yang
                      bersih dari korupsi melalui kepatuhan terhadap kode etik
                      dan penerapan sistem pelaporan apabila terjadi gratifikasi
                      dan penyuapan melalui whistleblowing system.
                    </p>
                    <p class="text-justify">
                      Kinerja positif pada aspek operasional juga didukung
                      dengan penerapan prinsip-prinsip Good Corporate Governance
                      (GCG) yang efektif dan efisien di setiap unit kerja.
                      Berdasarkan hasil penilaian tahun 2021, PIU memperoleh
                      skor GCG sebesar 83,87 dengan kategori “baik”, melampaui
                      signifikan dari skor target yaitu sebesar 78.
                    </p>
                    <p class="text-justify">
                      “Meski pada 2021 pandemi COVID-19 masih terjadi, tetapi
                      PIU tetap bisa konsisten memelihara tata kelola perusahaan
                      dengan baik atau GCG dalam bentuk transparansi,
                      akuntabilitas, pertanggungjawaban, independensi, dan
                      kewajaran dalam setiap proses bisnisnya sehingga terus
                      mampu memelihara kepercayaan para pemangku kepentingan,”
                      ujar Agus.
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Peningkatan Kompetensi Sumber Daya Manusia (SDM) yang
                      Optimal
                    </p>
                    <p class="text-justify">
                      Di masa berjuang menghadapi disrupsi pandemi, kinerja
                      positif PIU terus didongkrak melalui peningkatan
                      kompetensi SDM yang optimal. Pengembangan kompetensi
                      karyawan dilakukan sepanjang tahun 2021 melalui program
                      pendidikan dan pelatihan baik secara internal meliputi
                      sharing session dan webinar inhouse maupun eksternal
                      meliputi public training dan sertifikasi kompetensi.
                      Selama tahun 2021, terdapat 11 karyawan PIU yang
                      mendapatkan sertifikat insinyur professional dari
                      Universitas Gadjah Mada (UGM) dan Persatuan Insinyur
                      Indonesia (PII). Selain itu, setidaknya 37 karyawan PIU
                      telah lulus program sertifikasi dari berbagai profesi pada
                      tahun 2021.
                    </p>
                    <p class="text-justify">
                      Tidak hanya itu, optimalisasi kompetensi SDM telah membawa
                      PIU meraih predikat good performance pada hasil asesment
                      Kriteria Penilaian Kinerja Unggul (KPKU) Badan Usaha Milik
                      Negara (BUMN) dengan skor 477,25, jauh melampau skor
                      target yang ditentukan oleh pemegang saham yaitu sebesar
                      432. Raihan skor KPKU tahun 2021 juga meningkat sebesar 95
                      dari tahun sebelumnya sekaligus membawa PIU naik band dari
                      predikat early improvement menjadi good performance.
                      Catatan positif ini menguatkan PIU yang telah berhasil
                      meningkatkan daya saing perusahaan melalui penerapan KPKU
                      dengan menjalankan model bisnis yang inovatif,
                      kepemimpinan yang adaptif, dan pengembangan kompetensi
                      talenta-talenta SDM terbaik.
                    </p>
                    <p class="text-justify">
                      Berbagai capaian kinerja terbaik PIU sepanjang tahun 2021
                      telah mendapatkan pengakuan dari berbagai pihak. Hal ini
                      tentu bukan hanya klaim sepihak. Terbukti sepanjang tahun
                      2021, PIU telah menyabet segudang penghargaan baik dari
                      tingkat nasional maupun internasional yaitu :
                    </p>
                    <p class="text-justify">
                      1. Indonesia Conference and Competition Occupational
                      Safety and Health, mendapatkan penghargaan “Two Stars”
                      pada gugus Safevior.
                    </p>
                    <p class="text-justify">
                      2. APQO IC (Asia-Pacific Quality Organization
                      International Conference) - Australia 2021, mendapatkan
                      penghargaan “Three Stars” pada 2 gugus yaitu gugus QCC
                      Energize dan gugus SS Tarik Sis.
                    </p>
                    <p class="text-justify">
                      3. Temu Karya Mutu Produktivitas Nasional (TKMPN) XXV,
                      mendapatkan penghargaan “Gold” untuk gugus QCC Energize
                      dan “Platinum” untuk gugus QCC Cogen.
                    </p>
                    <p class="text-justify">
                      4. ICQCC (International Convention on Quality Control
                      Circle) - Hyderabad, India 2021, terdapat 2 gugus yang
                      mendapatkan penghargaan “Par Excellence” yaitu gugus QCC
                      Cogen dan QCC Warning.
                    </p>
                    <p class="text-justify">
                      5. PIQI (Pupuk Indonesia Quality Innovation) 2021,
                      mendapatkan penghargaan “Good” pada 2 gugus yaitu gugus
                      QCC Cogen dan QCC Energize.
                    </p>
                    <p class="text-justify">
                      “Pencapaian positif perusahaan sepanjang tahun 2021
                      membuktikan bahwa PIU dapat menjaga keandalan kinerja
                      perusahaan secara menyeluruh. Prestasi ini merupakan hasil
                      dari sinergi yang solid antar pemangku kepentingan yang
                      selanjutnya akan terus ditingkatkan guna membangun
                      perusahaan yang lebih agile serta tetap resilient
                      merespons berbagai perubahan dan tantangan bisnis”,
                      pungkas Agus. (MA)
                    </p>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art9"
              >
                <img src="../assets/artikel/Artikel_9.png" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    e-Announcement LHKPN Pupuk Indonesia Group
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">29 Januari 2022</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art9" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      e-Announcement LHKPN Pupuk Indonesia Group
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_9.png"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >29 Januari 2022</small
                      >
                    </p>
                    <p>
                      Dalam rangka meningkatkan trasnparansi pelaporan LHKPN dan
                      merujuk pada surat Komisi Pemberantasan Korupsi Nomor :
                      B/3950/LHK.00/10-12/05/2019 tanggal 8 Mei 2019, bahwa
                      tautan e-Annoucement diperuntukkan ditambahkan pada laman
                      resmi website instansi.
                    </p>
                    <a
                      href="https://elhkpn.kpk.go.id/portal/user/pengumuman_lhkpn/VERWVFpGZHhlVU5TUml0VVJGbDBZMlJOTmt4NVYzbHJkR3hRVnpkR2FURjJWM2NyZDJWWE1WQm5Oa3hIVjI1eGNERkNhRWRDY1ZkcFlsb3pPVzR6T1E9PQ=="
                      >e-Announcement LHKPN Pupuk Indonesia Group</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art10"
              >
                <img src="../assets/artikel/Artikel_10.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Dua Sertifikat ISO Diraih Sekaligus Oleh PT Pupuk Indonesia
                    Utilitas
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">8 Januari 2022</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art10" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Dua Sertifikat ISO Diraih Sekaligus Oleh PT Pupuk
                      Indonesia Utilitas
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_10.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy">8 Januari 2022</small>
                    </p>
                    <p class="text-justify">
                      Jum’at, 7 Januari 2022 PI Utilitas meraih 2 sertifikat ISO
                      sekaligus yaitu ISO 14001:2015 tentang Sistem Manajemen
                      Lingkungan dan ISO 37001:2016 tentang Sistem Manajemen
                      Anti Penyuapan (SMAP). Raihan ISO 37001:2016 tentang
                      Sistem Manajemen Lingkungan ini membuktikan bahwa PI
                      Utilitas berkomitmen untuk selalu menerapkan tanggung
                      jawab lingkungan pada proses produksi di area sekitar
                      pabrik. Tanggung jawab sosial lingkungan (TJSL) atau
                      istilah lainnya Corporate Social Responsibility (CSR)
                      merupakan bagian penting dari roda bisnis perusahaan. PI
                      Utilitas meyakini bahwa CSR memiliki peran strategis dalam
                      keberlanjutan perusahaan. Perusahaan yang hanya
                      berorientasi pada bisnis saja akan menghadapi tantangan
                      yang sulit. Oleh karena itu, PI Utilitas telah konsisten
                      menjalankan berbagai program CSR multisektor meliputi
                      sektor pendidikan, kesehatan, ekonomi, keagamaan, sarana
                      umum, serta bantuan bencana alam. Seluruh program CSR PI
                      Utilitas didasarkan pada korelasi nyata antara perusahaan
                      dan komunitas serta komitmen perusahaan terus mendukung
                      tercapaianya pembangunan berkelanjutan atau Sustainable
                      Development Goals (SDGs).
                    </p>
                    <p class="text-justify">
                      Selain itu, capaian sertifikasi ISO 37001:2016 tentang
                      Sistem Manajemen Anti Penyuapan juga membuktikan bahwa
                      seluruh insan PIU telah berperan dalam menciptakan
                      lingkungan kerja yang bersih dari korupsi melalui
                      kepatuhan terhadap kode etik dan penerapan sistem
                      pelaporan apabila terjadi gratifikasi dan penyuapan
                      melalui whistleblowing system. Whistleblowing system
                      adalah mekanisme pelaporan yang dapat diajukan oleh
                      internal perusahaan atau eksternal perusahaan untuk
                      melaporkan adanya perbuatan yang melanggar hukum, atau
                      peraturan lain yang berlaku, atau perbuatan menentang
                      etika yang dilakukan oleh karyawan di perusahaan dengan
                      tetap menjaga rahasia dari si pelapor. Setiap pihak baik
                      insan Perusahaan maupun pihak eksternal memiliki
                      kesempatan yang sama dalam melaporkan dugaan tindak
                      pelanggaran di Perusahaan. WBS merupakan bagian dari
                      sistem pengendalian internal dalam mencegah penyimpangan
                      dan kecurangan serta memperkuat penerapan praktik Tata
                      Kelola Perusahaan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art11"
              >
                <img src="../assets/artikel/Artikel_11.png" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Kebijakan Mutu, Keselamatan dan Kesehatan Kerja, Lindung
                    Lingkungan dan Anti Penyuapan
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">2 April 2021</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art11" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Kebijakan Mutu, Keselamatan dan Kesehatan Kerja, Lindung
                      Lingkungan dan Anti Penyuapan
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_11.png"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy">2 April 2021</small>
                    </p>
                    <p class="head-modal">
                      Kebijakan Mutu, Keselamatan dan Kesehatan Kerja, Lindung
                      Lingkungan dan Anti Penyuapan
                    </p>
                    <p class="text-justify">
                      PT Pupuk Indonesia Energi sebagai perusahaan energi dan
                      utilitas senantiasa berusaha menjaga kehandalan dan
                      integritas operasinya melalui penerapan Sistem Manajemen
                      Terintegrasi - Mutu, Keselamatan dan Kesehatan Kerja,
                      Lindung Lingkungan dan Anti Penyuapan dengan menerapkan
                      AKHLAK-Amanah, Kompeten, Harmonis, Loyal, Adaptif dan
                      Kolaboratif pada semua aktivitasnya.
                    </p>
                    <p class="text-justify">
                      1. Taat terhadap peraturan perundangan dan persyaratan
                      lainnya yang berlaku;
                    </p>
                    <p class="text-justify">
                      2. Selalu berupaya melakukan perbaikan secara
                      berkelanjutan melalui penerapan sistem manajemen
                      terintegrasi dengan melibatkan partisipasi seluruh
                      stakeholder;
                    </p>
                    <p class="text-justify">
                      3. Melakukan pengelolaan lingkungan secara profesional dan
                      berkelanjutan dalam rangka mencapai tingkat penaatan
                      Beyond Compliance dalam aspek efisiensi energi dan
                      konservasi air, pengelolaan limbah 83 dan non-83, serta
                      pencegahan pencemaran lingkungan pada kegiatan operasional
                      perusahaan;
                    </p>
                    <p class="text-justify">
                      4. Melakukan perlindungan hayati baik flora maupun fauna
                      sehingga tercapai kelestarian lingkungan di tengah
                      kegiatan operasional perusahaan;
                    </p>
                    <p class="text-justify">
                      5. Mencegah penyakit akibat kerja melalui pengelolaan
                      kesehatan pekerja dan lingkungan kerja perusahaan sesuai
                      peraturan yang berlaku;
                    </p>
                    <p class="text-justify">
                      6. Menjalankan prinsip-prinsip anti penyuapan melalui tata
                      kelola perusahaan yang baik dan bersih dengan:
                    </p>
                    <p class="text-justify">
                      a. Melarang praktek-praktek penyuapan dan sejenisnya di
                      lingkungan Perusahaan;
                    </p>
                    <p class="text-justify">
                      b. Mendukung tercapainya tujuan anti penyuapan Perusahaan;
                    </p>
                    <p class="text-justify">
                      c. Memastikan komitmen untuk memenuhi persyaratan Sistem
                      Manajemen Anti Penyuapan;
                    </p>
                    <p class="text-justify">
                      d. Mendorong peningkatan kesadaran anti penyuapan kepada
                      jajaran stakeholder terkait;
                    </p>
                    <p class="text-justify">
                      e. Menjalankan prinsip perbaikan berkelanjutan dalam
                      Sistem Manajemen Anti Penyuapan;
                    </p>
                    <p class="text-justify">
                      f. Memberikan tanggungjawab, kewenangan dan independensi
                      kepada Fungsi Kepatuhan Anti PenyLapan (FKAP);
                    </p>
                    <p class="text-justify">
                      g. Memberikan sanksi tegas kepada pelanggar ketentuan
                      dalam kebijakan Anti Penyuapan.
                    </p>
                    <br />
                    <p class="text-justify">
                      Kebijakan ini dibuat dengan kesadaran yang tinggi dan akan
                      ditinjau secara terus menerus untuk memastikan
                      keselarasannya dengan tujuan perusahaan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art11"
              >
                <img src="../assets/artikel/Artikel_12.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Tingkatkan Kompetensi SDM, PI Utilitas Tandatangani MoU
                    dengan UGM
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">9 Februari 2021</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art12" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Tingkatkan Kompetensi SDM, PI Utilitas Tandatangani MoU
                      dengan UGM
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_12.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >9 Februari 2021</small
                      >
                    </p>
                    <p class="text-justify">
                      Direktur Utama PI Utilitas, Agus Subekti menandatangani
                      Nota Kesepahaman bersama (MoU) dengan Ir. Muhammad Waziz
                      Wildan, M.Sc., Ph.D. selaku Dekan Fakultas Teknik
                      Universitas Gadjah Mada (UGM), Selasa, 27 Mei 2021 di
                      Gedung Fakultas Teknik UGM. Penandatanganan MoU dengan
                      salah satu universitas terkemuka tersebut mengenai program
                      peningkatan kualitas sumber daya manusia PT Pupuk
                      Indonesia Utilitas melalui pendidikan profesi insinyur
                      (PS-PPI) Fakultas Teknik UGM. Dengan ditandatanganinya
                      nota kesepahaman ini, diharapkan dapat meningkatkan
                      penguasaan dan pengembangan ilmu pengetahuan melalui
                      pendidikan, keprofesian berkelanjutan dan riset, serta
                      peningkatan mutu insinyur profesional. Terdapat 11
                      karyawan PI Utilitas yang mendapatkan kesempatan menempuh
                      pendidikat profesi dan nantinya berhak mendapatkan
                      sertifikat insinyur professional dari Universitas Gadjah
                      Mada (UGM) dan Persatuan Insinyur Indonesia (PII). PI
                      Utilitas meyakini bahwa sumber daya manusia merupakan
                      kunci yang menentukan maju atau mundurnya perusahaan.
                      harus dilatih dan dikembangkan kemampuannya.
                    </p>
                    <p class="text-justify">
                      Maka dari itu, sumber daya manusia adalah individu yang
                      bekerja sebagai penggerak perusahaan dan berfungsi sebagai
                      aset yang harus dilatih dan dikembangkan kemampuannya.
                      Apalagi pada era disrupsi pandemi dan berbagai perubahan
                      serta tantangan bisnis, kompetensi SDM harus senantiasa
                      ditingkatkan guna membangun perusahaan yang lebih agile
                      serta tetap resilient. Kerjasama ini merupakan langkah
                      strategis PI Utilitas guna menciptakan akselerasi
                      kompetensi SDM perusahaan yang diharapkan dapat
                      meningkatkan kinerja positif perusahaan sehingga mampu
                      mempercepat kemajuan bisnis dari PT Pupuk Indonesia
                      Utilitas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art12"
              >
                <img src="../assets/artikel/Artikel_13.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Kunjungi Yogyakarta, Dirut PI-Energi Dalami Potensi Energi
                    Baru Terbarukan
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">29 Februari 2020</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art13" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Kunjungi Yogyakarta, Dirut PI-Energi Dalami Potensi Energi
                      Baru Terbarukan
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_13.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >29 Februari 2020</small
                      >
                    </p>
                    <p class="text-justify">
                      Dalam rangka pengembangan Energi baru dan terbarukan,
                      Pupuk Indonesia Energi (PI-Energi) terus melakukan studi
                      banding untuk perencanaan implementasi instalasi
                      pembangkit listrik energi baru dan terbarukan. Direktur
                      Utama PI-Energi Tentaminarto telah mengunjungi Pantai
                      Baru, Bantul, Yogyakarta, dan Baron Technopark, Gunung
                      Kidul, Yogyakarta, pada Senin, 24 Februari 2020.
                    </p>
                    <p class="text-justify">
                      Pada kesempatan itu, Tenta didampingi Rama Usvika (General
                      Manager Investasi), Hisar Desmon Yosua (Manager Pabrik IPP
                      Gresik), Zakky Syafaristanto (Electrical Engineer) dan
                      Candrika Ajeng (Staf Investasi dan Pengembangan).
                    </p>
                    <p class="text-justify">
                      “PI-Energi harus menjadi perusahaan yang leading dalam
                      bidang energi konvensional, non konvensional bahkan energi
                      baru dan terbarukan. Kami terus berupaya memaksimalkan
                      pengelolaan yang baik dan bijak pada sumber energi baru
                      dan terbarukan,” ujar Tenta.
                    </p>
                    <p class="text-justify">
                      Kunjungan tersebut merupakan bentuk komitmen dari
                      PI-Energi untuk meningkatkan kualitas teknologi
                      perusahaan. Dengan tercapainya kualitas teknologi yang
                      baik, PI-Energi percaya dapat membawa perubahan yang
                      signifikan untuk masa depan perusahaan.
                    </p>
                    <p class="text-justify">
                      Pantai Baru, Bantul yang dikunjungi tim, terkenal dengan
                      pantainya yang asri dan teduh berkat deretan pohon cemara.
                      Pantai ini populer sebagai destinasi wisata lingkungan dan
                      wisata edukasi. Di kawasan ini juga terdapat belasan
                      menara kincir angin setinggi 10-18 meter, dengan total 34
                      unit kincir angin. Banyak pelajar datang untuk mempelajari
                      cara kerja kincir angin ini, mulai dari siswa taman
                      kanak-kanak hingga mahasiwa.
                    </p>
                    <p class="text-justify">
                      Adapun Baron Technopark merupakan pusat penelitian dan
                      pengembangan teknologi energi terbarukan, sekaligus sarana
                      diseminasi IPTEK Energi Terbarukan. Pembangkit listrik
                      yang dikembangkan di Baron Technopark ini merupakan Sistem
                      PLTH (Pembangkit Listrik Tenaga Hibrida) yang dapat
                      menghasilkan listrik dari energi sinar matahari, angin,
                      dan mesin diesel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art13"
              >
                <img src="../assets/artikel/Artikel_14.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Lestarikan Ekowisata, PT Pupuk Indonesia Energi Salurkan
                    Dana CSR
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">17 Februari 2020</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art14" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Lestarikan Ekowisata, PT Pupuk Indonesia Energi Salurkan
                      Dana CSR
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_14.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >17 Februari 2020</small
                      >
                    </p>
                    <p class="text-justify">
                      Sebagai wujud dukungan pelestarian ekowisata, PT Pupuk
                      Indonesia Energi (PI Energi) menyalurkan bantuan
                      kepedulian dalam rangka pelaksanaan Corporate Social
                      Responsibility (CSR) di akhir tahun 2019.
                    </p>
                    <p class="text-justify">
                      Dana bantuan sebesar Rp368.000.000 diberikan kepada
                      kawasan Gresik, Jawa Timur. Kegiatan CSR ini merupakan
                      upaya rehabilitasi ekosistem alam dan penghijauan jalan
                      desa. Tak hanya itu, dana CSR juga akan dimanfaatkan untuk
                      membangun fasilitas pendukung Ekowisata.
                    </p>
                    <p class="text-justify">
                      PI Energi secara rutin terus menerus memantau perkembangan
                      pengerjaan kegiatan CSR yang sudah dimulai sejak Desember
                      2019 itu, agar kelak terealisasi dengan baik.
                    </p>
                    <p class="text-justify">
                      Benny Swastika Nasution selaku Sekretaris Perusahaan
                      mengungkapkan tujuan kegiatan CSR ini adalah bentuk
                      dukungan PI Energi akan pemeliharaan lingkungan, sesuai
                      dengan tata nilai perusahaan kami yaitu PIE-GO. Salah satu
                      tata nilainya adalah peduli terhadap lingkungan.
                    </p>
                    <p class="text-justify">
                      Dengan landasan tata nilai perusahaan tersebut, kami
                      berupaya terus berkontribusi mendukung pelestarian
                      lingkungan. PI Energi, selaku anak perusahaan dari PT
                      Pupuk Indonesia (Persero), berusaha untuk menjunjung
                      tinggi tata nilai PI Energi, PIE-GO.
                    </p>
                    <p class="text-justify">
                      Terdapat salah satu pilar PIE-GO yaitu Environmentally
                      friendly, Health, and Safety. Dalam pilar tersebut, PI
                      Energi berkomitmen untuk terus menjunjung tinggi
                      kelestarian dana pemeliharaan lingkungan alam. Hal ini
                      menunjukkan komitmen PI Energi untuk terus mendukung
                      pelestarian lingkungan sehingga dapat memberi lebih banyak
                      dampak dan manfaat positif bagi masyarakat luas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art15"
              >
                <img src="../assets/siaranPers/SP-16.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">Jelajah</h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">29 November 2019</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art15" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">Jelajah</h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/siaranPers/SP-16.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >29 November 2019</small
                      >
                    </p>
                    <p class="text-justify">
                      Pada hari kerja, mulai Senin hingga Jumat, para anggota
                      komunitas bekerja sesuai dengan Tugas Pokok dan Fungsi
                      (Tupoksi). Mulai dari jabatan Direksi hingga staf di
                      kantor PI Energi.
                    </p>
                    <p class="text-justify">
                      Namun di akhir pekan, Tupoksi yang berlaku pada hari kerja
                      itu mencair. Mereka semua sepakat untuk meninggalkan
                      sejenak jabatan-jabatan di kantor dan bergabung dalam PIE
                      Rider. Sebuah komunitas pengendara sepeda motor yang
                      memiliki hobby serupa, mengendarai sepeda motor jarak jauh
                      yang kini lebih dikenal dengan Touring.
                    </p>
                    <p class="text-justify">
                      PIE Rider didirikan oleh direksi dan karyawan PI-Energi.
                      Tujuan didirikan sebagai wadah untuk menyalurkan kesamaan
                      hobi anggotanya yaitu touring motor. Anggotanya juga
                      merupakan bagian dari keluarga besar PI-Energi. Mulai dari
                      jajaran direksi, manajemen hingga karyawan. Syarat untuk
                      bergabung, selain menjadi bagian dari keluarga besar
                      PI-Energi hanya ada dua. Pertama, memiliki sepeda motor.
                      Kedua, hobi touring.
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Putaran Roda Pertama
                    </p>
                    <p class="text-justify">
                      Semua berawal pada sebuah akhir pekan yang cerah. Tepatnya
                      pada Minggu, 7 Oktober 2018. Setelah sehari sebelumnya
                      melakukan Saturday Morning Ride (Satmori) perdana ke
                      kawasan Gunung Pancar di Sentul, Bogor, Jawa Barat, PI
                      Rider akhirnya resmi berdiri.
                    </p>
                    <p class="text-justify">
                      Motor kian melaju, roda tak berhenti pada putaran pertama.
                      Setelah Gunung Pancar, selanjutnya PI-Rider terus memacu
                      roda motornya ke Rangkasbitung di Banten, kawasan wisata
                      puncak di Bogor hingga kembali melakukan Satmori di
                      seputaran Jakarta.
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Manfaat Bagi Kesehatan
                    </p>
                    <p class="text-justify">
                      Mengendarai motor secara rutin telah terbukti secara
                      ilmiah bermanfaat bagi kesehatan fisik dan mental. Riset
                      yang dilakukan Semel Institute for Neuroscience and Human
                      Behavior, University California, Los Angeles (UCLA).
                    </p>
                    <p class="text-justify">
                      Dalam riset tersebut, aktivitas otak dan kadar hormone
                      partisipan, seperti dikutip dari Tirto.id, dicatat oleh
                      para peneliti, sebelum, selama dan setelah berkendara.
                      Hasilnya, mengendarai motor dapat meningkatkan fokus serta
                      perhatian sekaligus menurunkan hormon penanda stres.
                    </p>
                    <p class="text-justify">
                      Penelitian yang didanai pabrikan motor legendaris asal
                      Amerika Serikat, Harley Davidson, tersebut dipimpin oleh
                      Don Vaughn, seorang ahli syaraf. Don mengemukakan otak
                      adalah organ yang luar biasa kompleks. Menurutnya kadar
                      stres di kalangan orang dewasa terus meningkat. Sepeda
                      motor menurut Don adalah teknologi yang dapat memberikan
                      aktivitas yang baik kepada otak.
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Kesetaraan
                    </p>
                    <p class="text-justify">
                      Selain kabar baik yang diberikan oleh hasil penelitian di
                      atas, bagi PI-Rider, touring motor juga dapat membangun
                      semangat kesetaraaan. Jika di kantor pada hari kerja ada
                      perbedaan jabatan sesuai dengan Tupoksi masing-masing,
                      maka di PI-Rider, semua anggota komunitas setara
                      kedudukannya. Tak peduli motor jenis apapun yang
                      dikendarainya. Entah itu sepeda motor automatic, sport
                      atau klasik.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art16"
              >
                <img src="../assets/siaranPers/SP-16.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">Tiga Masalah, Tiga Solusi</h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">29 November 2019</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art16" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">Tiga Masalah, Tiga Solusi</h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/siaranPers/SP-16.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >29 November 2019</small
                      >
                    </p>
                    <p class="head-modal text-justify">
                      Oleh: Manager Teknologi PI-Energi/Process and Corrosion
                      Engineer, Manik Priandani
                    </p>
                    <p class="text-justify">
                      Pupuk Indonesia Energi (PI-Energi) adalah salah satu anak
                      perusahaan PT Pupuk Indonesia (Persero). Bergerak sebagai
                      produsen utilitas berupa listrik dan uap (steam).
                      Pembangkit (plant) yang dimiliki PI-energi adalah Gresik
                      Gas Cogeneration Plant (GGCP) yang terletak di Kawasan
                      Industri Petrokimia Gresik, Jawa Timur. Selain itu,
                      PI-Energi juga memiliki mayoritas saham di Kaltim Daya
                      Mandiri (KDM) yang terletak di Kawasan Industri Pupuk
                      Kalimantan Timur di Bontang.
                    </p>
                    <p class="text-justify">
                      Saat ini, produk Listrik dan Steam PI-Energi dipergunakan
                      sebagai energi penggerak, penerang, maupun bahan baku
                      proses produksi untuk pabrik pupuk di lingkungan Pupuk
                      Indonesia (Persero). Salah satu peralatan terpenting dalam
                      unit proses di pembangkit PI-Energi adalah Boiler.
                    </p>
                    <p class="text-justify">
                      Boiler dipakai untuk memanaskan air dan mempersiapkan
                      sekaligus menghasilkan steam. Ada berbagai variasi tipe
                      boiler tergantung pada kegunaannya. Boiler juga
                      diklasifikasikan menurut struktur, metode sirkulasi
                      airnya, tipe dari bahan bakar (fuel), dan jenis dari
                      material yang digunakan.
                    </p>
                    <p class="text-justify">
                      Sistem boiler dapat dibagi menjadi tiga bagian menurut
                      lokasinya yaitu Preboiler, Boiler dan Post Boiler.
                      Preboiler meliputi pompa feedwater, pipa-pipa, serta
                      peralatan auxiliary yang dilewati oleh feedwater. Sejak
                      dipompakan hingga mencapai Boiler (sistem make up water
                      sebagai stabilizer sistem tidak termasuk di dalamnya,
                      Stage Heater dan Economizer termasuk bagian dari
                      Preboiler). Sistem Boiler adalah Boiler itu sendiri,
                      sedangkan Post Boiler meliputi Superheater, Kondensor dan
                      sistem kembalian.
                    </p>
                    <p class="text-justify">
                      Masalah yang sering dialami oleh Boiler adalah korosi.
                      Berkaitan dengan material Boiler, media yang diolah
                      boiler, lingkungan yang mengandung air sekaligus kondisi
                      tekanan dan temperature operasi boiler yang tinggi. Hingga
                      saat ini, material boiler masih memakai bahan dasar logam
                      yaitu besi. Dalam lingkungan yang berair, kondisi
                      temperatur dan tekanan yang tinggi serta kondisi yang
                      lembab, logam cenderung akan mengalami korosi. Korosi
                      dapat menyebabkan penipisan hingga terjadinya lubang pada
                      permukaan logam. Dapat berakibat fatal bila tidak segera
                      diatasi.
                    </p>
                    <p class="text-justify">
                      Analogi yang dapat diketengahkan adalah sebagai berikut,
                      ketika kita memasak air dalam ketel atau panci, lama
                      kelamaan kerak-kerak akan timbul. Baik di permukaan tutup
                      maupun dalam panci atau ketel. Demikian pula dengan boiler
                      yang beroperasi di pabrik steam. Kerak-kerak yang menempel
                      akan mempercepat laju korosi dari boiler. Kebocoran akibat
                      korosi, terutama di bawah kerak yang tidak terlihat
                      menjadi sangat beresiko karena boiler memiliki tekanan.
                    </p>
                    <p class="text-justify">
                      Pada umumnya, boiler tersedia dalam beberapa tekanan
                      operasi. Pertama adalah boiler bertekanan rendah (kurang
                      dari 20 kilogram/cm2). Kedua, bertekanan sedang (20-75
                      kg/cm2. Ketiga, bertekanan tinggi (di atas 75
                      kilogram/cm2). Artikel singkat ini akan menjelaskan tiga
                      permasalahan yang berpotensi terjadi pada Boiler yang
                      memiliki tekanan berbeda dalam kaitannya dengan masalah
                      kerak, korosi dan carry over.
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Masalah Endapan
                    </p>
                    <p class="text-justify">
                      Permasalahan pertama adalah endapan. Sering juga disebut
                      deposit atau kerak. Pada umumnya sangat berkaitan dengan
                      produk ikutan yang terdapat dalam logam sewaktu lumpur
                      terdispersi di dalam boiler water. Dapat dengan mudah
                      menyebar secara merata di permukaan logam karena mudah
                      berpindah atau kemungkinan dapat menjadi binding agent
                      bagi kerak. Efek yang ditimbulkan oleh akumulasi lumpur
                      dari berbagai variasi tube paduan mengakibatkan serangan
                      korosi pada carbon steel (Boiler konvensional seperti di
                      GGCP) maupun Monel (Boiler nuclear powerplants).
                    </p>
                    <p class="text-justify">
                      Pencegahan yang dilakukan adalah meniadakan kerak dengan
                      melakukan pretreatment. Antara lain menggunakan
                      ion-exchanger (Mixed Bed Resin) untuk meniadakan ion padat
                      terlarut. Material ion exchange (Resin) yang dipakai saat
                      ini pada umumnya menggunakan material sintetik organik
                      exchangers.
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Masalah Erosi
                    </p>
                    <p class="text-justify">
                      Berbagai serangan korosi dapat terjadi di Boiler. Antara
                      lain korosi sumuran, kavitasi dan erosi. Korosi sumuran
                      diakibatkan oleh penyebab yang konvensional yaitu
                      terlarutnya oksigen, pH yang rendah, adanya endapan, area
                      yang stagnan, stress pada logam dan cacat pada komposisi
                      atau permukaan logam.
                    </p>
                    <p class="text-justify">
                      Oksigen terlarut sering menyebabkan terjadinya serangan
                      pitting bila berpasangan dengan kondisi tertentu misalnya
                      adanya deposit pada permukaan logam atau adanya cacat
                      logam. Oksigen akan mengoksidasi film ferri hidroksida
                      menjadi magnetit (Fe3O4) atau menjadi ferri oksida hidrat.
                      Oksidasi terjadi pada jarak tertentu dari logam, yang
                      menyebabkan lebih banyak besi terlarut pada permukaan di
                      bawah produk korosi yang porous. Nilai keasaman pH menjadi
                      penyebab utama bagi korosi umumnya.
                    </p>
                    <p class="text-justify">
                      Komposisi air yang melewati pipa umpan mungkin berupa air
                      destilasi ataupun air demineralisasi yang diubah menjadi
                      air lunak atau tap water, baik dalam kondisi asam maupun
                      basa. Temperaturnya bervariasi dari temperatur ambient
                      (kamar) hingga temperatur mendekati temperatur boiler.
                      Kontaminan, termasuk produk korosi akan terlarut dalam gas
                      ataupun oli. Hal ini akan lebih riskan bila air tersebut
                      dipakai kembali.
                    </p>
                    <p class="text-justify">
                      Solusi yang dapat ditawarkan adalah melewatkan proses
                      kondensat ke unit Mixed Bed untuk menurunkan kontaminan.
                    </p>
                    <p class="text-justify" style="color: #f15a24">Carryover</p>
                    <p class="text-justify">
                      Dapat didefinisikan sebagai adanya air dalam steam yang
                      meninggalkan Boiler. Mengandung padatan yang dapat
                      menyebabkan endapan dan problem korosi dalam Post Boiler,
                      dan terjadinya kecepatan build-up endapan silika pada
                      blades turbin.
                    </p>
                    <p class="text-justify">
                      Carryover diakibatkan oleh kasus-kasus mechanical ataupun
                      kimia. Umumnya diklasifikasikan sebagai foaming, priming,
                      atau general entrainment dalam steam. Beberapa faktor
                      mechanical yang menyebabkan carryover pada boiler water
                      adalah Desain Boiler, Perubahan beban Boiler yang
                      fluktuatif dan level air yang tinggi.
                    </p>
                    <p class="text-justify">
                      Untuk menghindari terjadinya carry over harus diupayakan
                      menghilangkan faktor-faktor penyebab seperti yang telah
                      disebut di atas dengan menerapkan Pretreatment yang baik
                      dan benar.
                    </p>
                    <p class="text-justify">
                      Demikianlah tiga permasalahan yang dikemukakan beserta
                      tiga solusi yang juga ditawarkan. Namun ada satu hal yang
                      perlu digarisbawahi dengan cetak tebal yaitu pengoperasian
                      pabrik harus dilakukan sesuai prosedur, efisien, sekaligus
                      harus selalu melakukan preventif maintenance. Standar
                      Keselamatan dan Kesehatan Kerja (K3) dan lingkungan hidup
                      juga harus diterapkan untuk meningkatkan kinerja pabrik
                      yang berdampak langsung terhadap kinerja perusahaan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art17"
              >
                <img src="../assets/siaranPers/SP-16.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Tumbuh Kembang Energi Listrik Di Indonesia
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">29 November 2019</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art17" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Tumbuh Kembang Energi Listrik Di Indonesia
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/siaranPers/SP-16.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >29 November 2019</small
                      >
                    </p>
                    <p class="head-modal text-justify">
                      Oleh: Andik C. Budianto
                    </p>
                    <p class="text-justify">
                      Pada awal abad ke-19, di Hindia Belanda, terutama di Pulau
                      Jawa, mulai berdiri satu per satu pabrik gula dan teh.
                      Berdirinya pabrik tentu harus disertai pembangunan
                      pembangkit listrik. Mulai saat itulah listrik dikenal
                      sebagai sumber energi.
                    </p>
                    <p class="text-justify">
                      Hari terus berganti hingga akhirnya Presiden Pertama
                      Republik Indonesia (RI), Ir. Sukarno membentuk Jawatan
                      Listrik dan Gas di bawah Departemen Pekerjaan Umum pada 27
                      Oktober 1945. Tak lama setelah RI memproklamirkan diri
                      sebagai negara merdeka pada 17 Agustus 1945.
                    </p>
                    <p class="text-justify">
                      Waktu terus berjalan, usia republik juga ikut bertambah.
                      Tepat pada 1 Januari 1961, Jawatan Listrik dan Gas
                      dipisah. Perusahaan pengelola listrik diberi nama
                      Perusahaan Listrik Negara (PLN). Perusahaan pengelola gas
                      menjadi Perusahaan Gas Negara (PGN).
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Listrik dan Perekonomian Indonesia
                    </p>
                    <p class="text-justify">
                      Indonesia adalah sebuah negara kepulauan. Berdasarkan data
                      terkini, jumlahnya pada 16 Oktober 2018 mencapai 17.504
                      pulau. Sementara jumlah penduduk Indonesia, mengutip data
                      Badan Pusat Statistik (BPS) mencapai 269 juta jiwa pada
                      April 2019.
                    </p>
                    <p class="text-justify">
                      Jumlah pulau dan penduduk tentu merupakan potensi yang
                      sangat besar bagi kebutuhan energi listrik. Belum lagi
                      jika ditambah dengan pertumbuhan ekonomi sebesar lima
                      persen sejak 2013 hingga 2017.
                    </p>
                    <p class="text-justify">
                      Kehadiran negara bagi rakyat di sebuah wilayah kepulauan
                      seperti Indonesia dapat disederhakan dalam lima kriteria.
                      Pertama, pembangunan infrastruktur untuk memperlancar
                      transportasi dan mobilitas barang maupun jasa. Kedua,
                      pembangunan sekolah untuk meningkatkan kecerdasan generasi
                      penerus bangsa. Ketiga, pelayanan kesehatan untuk seluruh
                      penduduk. Keempat, sekaligus yang terpenting adalah
                      ketersediaan listrik yang dapat diakses oleh seluruh
                      rakyat dengan harga terjangkau. Baik untuk masyarakat
                      maupun perusahaan yang berinvestasi di daerah terkait.
                    </p>
                    <p class="text-justify">
                      Kembali ke 2013, ketika itu, Indonesia tengah memasuki
                      resesi ekonomi. Defisit neraca perdagangan mencapai 2,8
                      persen dari Produk Domestik Bruto (PDB). Merupakan defisit
                      yang terbesar bagi Indonesia semenjak krisis moneter pada
                      1997-1998.
                    </p>
                    <p class="text-justify">
                      Sebagai pembanding, PDB sejak 2013 – 2017 rata rata tumbuh
                      lima persen. Apabila dibandingkan dengan PDB yang tumbuh
                      enam persen per tahun, dihitung sejak 2009, mengalami
                      penurunan sebesar satu persen. Namun sejak dimulainya
                      pembangunan infrastruktur sejak 2014, PDB mulai naik
                      menjadi 5,02 persen pada 2014 dan kembali mengalami
                      kenaikan menjadi 5,17 persen pada 2018.
                    </p>
                    <p class="text-justify">
                      Pertanyaannya kemudian apakah ada korelasi antara
                      pembangunan infrastruktur, terutama penyediaan energi
                      listrik dengan pertumbuhan ekonomi di Indonesia?
                    </p>
                    <p class="text-justify">
                      Sebagian besar ekonom berpendapat pemacu pertumbuhan
                      ekonomi suatu negara adalah investasi dan konsumsi yang
                      tinggi. Namun Prof. Dr. Robert Ayres, dalam bukunya “The
                      Economic Growth Engine: How Energy and Works Drive
                      Material Prosperity” mengemukakan sesungguhnya pemacu
                      perekonomian adalah energi. Khususnya listrik.
                    </p>
                    <p class="text-justify">
                      Cara pandang di atas berdampak luas terhadap perencanaan
                      pembangunan dan pertumbuhan ekonomi. Menurut data empiris
                      dari Negara-negara berkembang di dunia, setiap 1 kwh
                      konsumsi listrik dalam suatu negara akan memberikan
                      kontribusi sekitar $4 – $5 terhadap PDB (Produk Domestik
                      Bruto) masing masing negara.
                    </p>
                    <p class="text-justify">
                      Lalu bagaimana dengan Indonesia? Menurut penelitian yang
                      dilakukan oleh beberapa ahli dan Badan Pengkajian dan
                      Penerapan Teknologi (BPPT), dalam 12 tahun terakhir, rata
                      – rata 1 kwh konsumsi listrik di Indonesia memberikan
                      kontribusi lebih kurang $3.9 terhadap PDB.
                    </p>
                    <p class="text-justify">
                      Temuan penelitian menunjukkan untuk negara berkembang,
                      termasuk Indonesia, ada korelasi antara antara konsumsi
                      listrik dengan kontribusi PDB dalam negara negara
                      berkembang. Korelasi diakibatkan kompleksitas perekonomian
                      negara berkembang yang sederhana yaitu ekspoitasi sumber
                      daya alam. Akibatnya membuat listrik sebagai salah satu
                      faktor penentu PDB suatu negara.
                    </p>
                    <p class="text-justify">
                      Kesimpulan di atas mengonfirmasi Analisa Robert Ayres
                      bahwa konsumsi listrik mendorong pertumbuhan ekonomi,
                      bukan sebaliknya. Temuan riset berdasarkan analisa Robert
                      Ayres menunjukkan jika listrik adalah pemacu pertumbuhan.
                    </p>
                    <p class="text-justify">
                      Maka pendekatan listrik berbasis permintaan kurang valid.
                      Sehingga hampir 65 persen kapasitas listrik terpasang yang
                      berada di Pulau Jawa justru menyebabkan pembangunan
                      nasional menjadi tidak merata.
                    </p>
                    <p class="text-justify">
                      Menurut studi yang diterbitkan oleh PwC internasional yang
                      rilis pada bulan November 2018, Indonesia akan menjadi
                      negara kelima dengan perekomian terbesar pada tahun 2030
                      (berdasarkan permintaan listrik) dengan PDB per kapita
                      adalah $ 18.400,00. Apabila pendekatan konsumsi listrik
                      sebagaimana disampaikan di atas kita pakai sebagai tolok
                      ukur PDB Indonesia pada 2030 dengan jumlah penduduk 295
                      juta jiwa, maka perhitungannya PDB dibagi dengan $4.
                      Hasilnya, konsumsi listrik sebesar 4.600 kWh per kapita.
                    </p>
                    <p class="text-justify">
                      Pertanyaannya kemudian apakah cukup energi listrik di
                      Indonesia pada 2030 bisa mensuplai listrik kepada
                      masyarakat Indonesia? Atau justru target PDB pada 2030
                      yang akan direvisi?
                    </p>
                    <p class="text-justify">
                      Hanya waktu yang akan memberikan jawaban terbaik.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art18"
              >
                <img src="../assets/siaranPers/SP-16.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Prospek Energi Surya Dan Mini Hidro Di Indonesia
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">29 November 2019</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art18" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Prospek Energi Surya Dan Mini Hidro Di Indonesia
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/siaranPers/SP-16.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >29 November 2019</small
                      >
                    </p>
                    <p class="text-justify head-modal">
                      Oleh: General manager Investasi & Pengembangan Pupuk
                      Indonesia, Rama Usvika
                    </p>
                    <p class="text-justify">
                      Dari sekian banyak opsi Energi Baru Terbarukan (EBT) , ada
                      beberapa potensi bisnis yang menarik untuk dieksplorasi.
                      Faktor kematangan teknologi (technological maturity) yang
                      sudah cukup tinggi, biaya investasi peralatan yang semakin
                      menurun di tahun-tahun mendatang dan market demand yang
                      tercipta dari kondisi ekonomi-sosial-politik Indonesia
                      menjadi pertimbangan utama. Opsi tersebut antara lain
                      energi surya dan mini hidro.
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Energi Surya
                    </p>
                    <p class="text-justify">
                      Pemanfaatan energi surya untuk menghasilkan listrik dapat
                      dilakukan dengan metode langsung, menggunakan teknologi
                      photovoltaic (PV). Maupun metode tidak langsung,
                      menggunakan teknologi Concentrated Solar Power (CSP).
                    </p>
                    <p class="text-justify">
                      Teknologi PV mengubah radiasi matahari yang terpapar di
                      solar panel menjadi energi listrik. Teknologi CSP
                      menggunakan lensa untuk mengkonsentrasikan radiasi
                      matahari kemudian mengubahnya menjadi panas untuk
                      menghasilkan uap untuk memutar turbin uap yang
                      menghasilkan listrik.
                    </p>
                    <p class="text-justify">
                      Rata-rata intensitas harian radiasi sinar matahari di
                      Indonesia sekitar 4.8 kWh/m2. Berpotensi menghasilkan
                      sekitar 207.9 GWp (Gigawatt-peak) listrik. Intensitas
                      radiasi sebesar itu berpotensi besar untuk memanfaatkan
                      energi surya menjadi listrik.
                    </p>
                    <p class="text-justify">
                      Beberapa daerah terutama di bagian timur Indonesia bahkan
                      memiliki intensitas radiasi yang lebih tinggi dari
                      rata-rata nasional. Dapat mencapai 5-6 kWh/m2. Berdasarkan
                      data Rencana Strategis (Renstra) Energi dan Sumber Daya
                      Mineral (ESDM) 2015-2019, total kapasitas terpasang
                      Pembangkit Listrik Tenaga Surya (PLTS) di seluruh
                      Indonesia baru mencapai 86 MWp (MW peak) pada akhir 2017.
                      Hanya 0.02 persen dari total potensinya, yaitu sekitar
                      207.9 GWp (data Rencana Umum Energi Nasional /RUEN
                      Peraturan Presiden/Perpres Nomor:22 Tahun 2017 ).
                    </p>
                    <p class="text-justify">
                      Tantangan pemanfaatan energi surya adalah luas lahan yang
                      diperlukan cukup besar. Kurang lebih satu hektar utk satu
                      MWp tergantung kepada jenis solar panel.
                    </p>
                    <p class="text-justify">
                      Tantangan pemanfaatan energi surya menjadi listrik antara
                      lain:
                    </p>
                    <p class="text-justify">
                      1. Efisiensi konversi listrik solar panel yang rendah.
                    </p>
                    <p class="text-justify">
                      2. Kondisi alam; Pada malam hari atau pada kondisi
                      shading, suplai listrik dari solar panel akan terhenti.
                      Sehingga untuk suplai listrik kontinu diperlukan investasi
                      baterai sebagai media penyimpanan energi. Harga baterai
                      masih cukup mahal saat ini jika diikutkan ke dalam
                      investasi PLTS.
                    </p>
                    <p class="text-justify">
                      Salah satu opsi untuk menyiasati luasnya lahan yang
                      diperlukan untuk PLTS adalah dengan memasang solar panel
                      di tempat-tempat yang juga digunakan untuk keperluan
                      lainnya. Seperti memasang solar panel di atap rumah dan
                      bangunan dan di reservoir air yang terbuka (danau, tepi
                      laut). Agar dapat menghemat biaya investasi untuk
                      pengadaan lahan.
                    </p>
                    <p class="text-justify">
                      Pada September 2017, Pemerintah Indonesia meluncurkan
                      Gerakan Nasional Sejuta Listrik Surya Atap. Gerakan ini
                      menargetkan tambahan kapasitas terpasang 1 GWp dari PLTS
                      atap (rooftop solar PV) di tanah air. Gerakan ini juga
                      didukung dengan diterbitkannya Peraturan Menteri (Permen)
                      ESDM Nomor: 49 Tahun 2018 tentang penggunaan PLTS atap
                      oleh konsumen PLN. Sehingga rumah-rumah dimungkinkan untuk
                      memasang PLTS mandiri di atap bangunan rumah dan
                      menyambungkannya ke grid PLN setempat dengan sistem net
                      metering untuk expor-impor. Sehingga konsumen bisa
                      menghemat pembayaran listrik mereka ke PLN.
                    </p>
                    <p class="text-justify">
                      Opsi lain adalah pemanfaatan water reservoir yang terbuka
                      seperti danau untuk pemasangan PLTS terapung. PLTS
                      kemudian dijangkar ke dasar danau setelah dilengkapi
                      peralatan agar dapat turun-naik secara otomatis mengikuti
                      ketinggian permukaan air danau.
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Listrik Mini Hidro
                    </p>
                    <p class="text-justify">
                      Pembangkit Listrik Mini Hidro (PLTMH) menggunakan tenaga
                      air yang mengalir di sungai besar, dari suatu ketinggian
                      tertentu ke ketinggian yang lebih rendah untuk
                      menggerakkan turbin air dan generator. PLTMH adalah
                      pembangkit listrik tenaga air yang berkapasitas 10 MW.
                      Biasanya dapat diterapkan di daerah aliran sungai di
                      Indonesia. Terutama di pegunungan.
                    </p>
                    <p class="text-justify">
                      Data dari Renstra ESDM 2015-2019, total kapasitas
                      terpasang PLTMH di seluruh Indonesia baru mencapai 173 MWp
                      pada akhir 2017. Berarti hanya 0.9% dari total potensinya
                      yang sekitar 19.3 GWp (RUEN Perpres 22/2017).
                    </p>
                    <p class="text-justify">
                      Satu hal yang menarik dari investasi PLTMH adalah
                      pembatasan investasi asing. Sesuai PP no. 44/20,
                      kepemilikan perusahaan asing dibatasi maksimum 49 persen
                      dari total saham untuk PLTMH 1-10 MW. Selain itu saham
                      sepenuhnya harus dimiliki oleh perusahaan indonesia untuk
                      PLTMH 1 MW. Regulasi tersebut menjadi peluang bagi
                      investasi PLMTH oleh perusahaan Indonesia.
                    </p>
                    <p class="text-justify">
                      Investasi dan pembangunan fasilitas PLTMH memerlukan
                      kajian terhadap potensi keberlangsungan (sustainability)
                      lingkungan hidup di hulu (mata air) dan sepanjang daerah
                      airan sungai (DAS). Kajian dibutuhkan untuk menentukan
                      apakah debit air cukup kontinu dan stabil sepanjang tahun
                      untuk mendukung operasi.
                    </p>
                    <p class="text-justify">
                      Salah satu potensi besar yang biasanya tersedia di alam
                      adalah jika sungai besar yang mengalir dari hulu di
                      pegunungan ke muara cukup panjang. Jadi sangat
                      dimungkinkan untuk memasang beberapa PLTMH di sepanjang
                      DAS untuk mendapatkan total output listrik yang cukup
                      baik.
                    </p>
                    <p class="text-justify">
                      Selain potensi, ada beberapa kendala dalam investasi.
                      Mulai dari kontinuitas debit air pada musim kemarau,
                      ketersediaan jaringan transmisi listrik di sekitar lokasi,
                      akurasi data hidrologi sungai, infrastruktur dasar yang
                      terbatas di sekitar lokasi, serta status lahan yang
                      terkadang menjadi bagian dari hutan lindung.
                    </p>
                    <p class="text-justify">
                      Setelah PLTMH beroperasi komersial juga masih ada
                      tantangan yang perlu dihadapi. Terutama menjaga ekosistem
                      di sekitar DAS. Sehingga aliran air bisa tetap terjaga dan
                      kontinu, serta mengatur ritme operasi pada saat musim
                      kemarau. Pada musim kemarau, debit air biasanya akan turun
                      drastis dibanding ketika musim hujan. Dampaknya Power
                      Output PLTMH berkurang secara signifikan. Hal seperti ini
                      perlu diantispasi sejak awal perencanaan PLTMH.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art19"
              >
                <img src="../assets/siaranPers/SP-16.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">Efisiensi Yang Telah Teruji</h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">29 November 2019</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art19" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">Efisiensi Yang Telah Teruji</h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/siaranPers/SP-16.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >29 November 2019</small
                      >
                    </p>
                    <p class="text-justify head-modal">
                      Oleh: Corporate Secretary PI-Energi, Benny Swastika
                      Nasution.
                    </p>
                    <p class="text-justify">
                      Sebelum memulai artikel singkat ini, penulis merasa perlu
                      untuk terlebih dahulu mengemukakan definisi mengenai
                      efisiensi. Menurut Kamus Besar Bahasa Indonesia (KBBI),
                      efisiensi yang berasal dari kata dasar efisien adalah
                      ketepatan cara (usaha, kerja) dalam menjalankan sesuatu
                      (dengan tidak membuang waktu, tenaga, biaya).
                    </p>
                    <p class="text-justify">
                      Sebagai sebuah perusahaan yang telah berdiri selama lima
                      tahun sejak Agustus 2014, Pupuk Indonesia Energi
                      (PI-Energi) memang lahir sekaligus dibesarkan dengan
                      semangat untuk melakukan efisiensi. Semua berawal sekitar
                      tahun 2010 ketika produksi gas bumi nasional mengalami
                      penurunan di satu sisi. Sementara di sisi lain, trend
                      harga gas terus mengalami peningkatan.
                    </p>
                    <p class="text-justify">
                      Akhirnya, Instruksi Presiden Nomor 2 Tahun 2010 Tentang
                      Revitalisasi Industri Pupuk dirilis. Empat tahun kemudian,
                      setelah dilakukan perencanaan secara komprehensif, pada 18
                      Agustus 2014, PI-Energi didirikan. Perusahaan berdiri
                      untuk menjalankan amanat Instruksi Presiden agar dilakukan
                      revitalisasi industri pupuk guna tetap menjaga
                      keberlangsungan usaha. Tak hanya itu, berdirinya korporasi
                      juga menandai dimulainya sebuah langkah awal untuk
                      meningkatkan daya saing Badan Usaha Milik Negara (BUMN)
                      pupuk di Grup PT Pupuk Indonesia (Persero).
                    </p>
                    <p class="text-justify">
                      Sekali lagi, efisiensi menjadi kata kunci bagi kami.
                      Karena langkah-langkah untuk meningkatkan daya saing juga
                      harus mengupayakan efisiensi biaya produksi oleh BUMN
                      pupuk. Selain itu juga harus digarisbawahi bahwa efisiensi
                      harus dilakukan dengan menggunakan teknologi yang ramah
                      lingkungan untuk melakukan penghematan bahan baku dan
                      energi.
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Pemegang Saham
                    </p>
                    <p class="text-justify">
                      Tak ubahnya seperti perusahaan rintisan, PI-Energi berdiri
                      berkat hasil kolaborasi. Pupuk Indonesia (Persero) menjadi
                      mayoritas pemilik saham sebesar 60 persen, Petrokimia
                      Gresik (10 %), Pupuk Kalimantan Timur (10 %), Pupuk
                      Sriwidjaja Palembang (7 %), Pupuk Iskandar Muda (5 %),
                      Pupuk Kujang Cikampek (5%) dan Rekind (3 %).
                    </p>
                    <p class="text-justify">
                      PI-Energi memiliki visi menjadi perusahaan energi dan
                      utilitas terintegrasi kelas dunia untuk menunjang bisnis
                      utama Pupuk Indonesia (Persero) beserta anak
                      perusahaannya. Sementara misinya adalah melakukan usaha
                      dalam bidang penyediaan energi dan utilitas, memberikan
                      nilai tambah bagi stakeholders, mengutamakan keselamatan
                      dan kesehatan kerja serta menjaga pelestarian lingkungan
                      hidup dalam kesehatan operasional dan yang terakhir namun
                      tak kalah penting adalah memberikan kontribusi terhadap
                      ketahanan energi nasional.
                    </p>
                    <p class="text-justify" style="color: #f15a24">
                      Dua Aksi PI-Energi
                    </p>
                    <p class="text-justify">
                      Beranjak dari visi dan misi, PI-Energi selama lima tahun
                      terakhir merencanakan berbagai aksi korporasi. Namun hanya
                      dua aksi yang akan dijelaskan dalam tulisan singkat ini.
                      Pertama adalah pembangunan Gresik Gas Cogeneration Plant
                      (GGCP) di Kawasan Industri Petrokimia Gresik, Jawa Timur.
                      Kedua adalah akuisisi yang dilakukan terhadap Kaltim Daya
                      Mandiri (KDM) yang terletak di Kawasan Industri Pupuk
                      Kalimantan Timur (PKT).
                    </p>
                    <p class="text-justify">
                      Karena perusahaan didirikan untuk mengubah variabel energi
                      dari yang semula menjadi cost centre menjadi profit
                      center, tanpa perlu menunggu lama, aksi pertama yang
                      dilakukan adalah menginisiasi pembangunan GGCP pada akhir
                      2015. Pembangunan yang dimulai setelah memperoleh
                      pembiayaan hanya dalam waktu satu tahun empat bulan
                      setelah PI-Energi berdiri itu akhirnya berhasil beroperasi
                      dengan baik pada April 2018.
                    </p>
                    <p class="text-justify">
                      Aksi korporasi yang kedua yaitu akuisisi KDM dilakukan
                      pada 16 Desember 2016. Setelah akuisisi dilakukan,
                      PI-Energi resmi menjadi pemilik KDM yang merupakan
                      perusahaan pembangkit listrik pemasok kebutuhan pabrik
                      PKT. Kapasitas produksi listrik KDM adalah sebesar 34
                      MegaWatt dan uap air sebesar 156 ton per jam serta
                      nitrogen sebesar 500 Nm3/jam.
                    </p>
                    <p class="text-justify">
                      PI-Energi menjadi pemilik saham mayoritas KDM sebesar 51
                      persen setelah mengambil alih saham milik Kaltim
                      Industrial Estate (KIE) dengan total nilai transaksi
                      sebesar Rp126,15 miliar. Sisa saham sebesar 29,75 persen
                      dimiliki oleh KIE, 14,25 persen oleh Dana Pensiun PKT dan
                      sisanya sebesar 5 persen oleh Yayasan Pupuk Kaltim (YPK
                      PKT).
                    </p>
                    <p class="text-justify">
                      Kedua aksi korporasi tersebut telah membuahkan hasil dalam
                      perjalanan lima tahun pertama PI-Energi. Pada ulang tahun
                      kelima, aset perusahaan mengalami peningkatan yang
                      signifikan. Tanpa efisiensi yang Telah teruji, maka
                      tidaklah mungkin peningkatan aset terjadi secara
                      signifikan hanya dalam waktu lima tahun.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->

            <div class="col-md-4 col-6 mb-3">
              <button
                class="card card-fixed"
                data-bs-toggle="modal"
                data-bs-target="#art20"
              >
                <img src="../assets/siaranPers/SP-16.jpg" class="img-fixed" />
                <div class="card-body text-start">
                  <h5 class="card-title">
                    Pupuk Indonesia Energi, Hadir Untuk Efisiensi
                  </h5>

                  <p class="card-text text-start">
                    <small class="text-body-secondaryy">29 November 2019</small>
                  </p>
                </div>
              </button>
            </div>

            <!-- Modal -->

            <div class="modal fade" id="art20" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container modal-body p-3">
                    <h2 class="modal-title">
                      Pupuk Indonesia Energi, Hadir Untuk Efisiensi
                    </h2>
                    <!-- <div class="row">
                                                <div class="col-md-6 mb-3"> -->
                    <img
                      src="../assets/artikel/Artikel_7.jpg"
                      class="img-fluid p-3"
                    />
                    <p class="card-text text-start">
                      <small class="text-body-secondaryy"
                        >29 November 2019</small
                      >
                    </p>
                    <p class="text-justify head-modal">
                      Oleh: Direktur Utama Pupuk Indonesia Energi (PI-Energi),
                      Tentaminarto Tri Februartono
                    </p>
                    <p class="text-justify">
                      Sejak berdiri pada 18 Agustus 2019 lalu, Pupuk Indonesia
                      Energi (PI-Energi), telah menorehkan capaian-capaian
                      signifikan. Selain itu, juga banyak pelajaran-pelajaran
                      berharga yang telah diperoleh.
                    </p>
                    <p class="text-justify">
                      Pada awalnya, PI-Energi didirikan untuk meningkatkan daya
                      saing industri pupuk. Daya saing dapat ditingkatkan hanya
                      dengan mengedepankan efisiensi dan reliabilitas energi
                      serta utilitas di lingkungan pabrik pupuk PT Pupuk
                      Indonesia (Persero). Di samping itu juga untuk mengubah
                      utilitas dari cost center menjadi profit center untuk
                      peningkatan nilai (Creating Value) bisnis di lingkungan PT
                      Pupuk Indonesia (Persero).
                    </p>
                    <p class="text-justify">
                      Seiring dengan perubahan dari cost center menjadi profit
                      center, PI Energi dituntut untuk mendapatkan laba dengan
                      melakukan efisiensi produk dan meningkatkan reliabilitas.
                      Saat ini pabrik-pabrik di PI-Energi grup baik di Gresik,
                      Jawa Timur maupun di Bontang, Kalimantan Timur cukup
                      efisien karena konsumsi gasnya di bawah rata-rata rasio
                      konsumsi gas untuk pembangkit (Power Plant) secara
                      nasional.
                    </p>
                    <p class="text-justify">
                      PI-Energi memiliki empat misi. Pertama, melakukan usaha
                      dalam bidang penyediaan energi dan utilitas. Kedua
                      memberikan nilai tambah bagi stakeholders. Ketiga,
                      mengutamakan keselamatan dan kesehatan kerja serta menjaga
                      pelestarian lingkungan hidup dalam setiap kegiatan
                      operasional. Terakhir atau keempat adalah memberikan
                      kontribusi terhadap ketahanan energi nasional.
                    </p>
                    <p class="text-justify">
                      Sejak pertama kali PI-Energi berdiri, langkah awal yang
                      dilakukan adalah menyiapkan infrastruktur organisasi.
                      Mulai dari sistem, peralatan maupun sumber daya manusia
                      (sdm) agar Perusahaan dapat beroperasi dengan baik.
                      Selanjutnya pada tahun 2015 dimulai proyek Gresik Gas
                      Cogeneration Plant (GGCP). Selain itu, perseroan juga
                      ditugaskan untuk mengintegrasikan perusahan sejenis yang
                      telah ada yaitu PT Kaltim Daya Mandiri (KDM) yang
                      diakuisisi pada akhir 2016.
                    </p>
                    <p class="text-justify">
                      Peletakan batu pertama yang menandai pembangunan GGCP
                      dilakukan langsung oleh Direktur Utama PT Pupuk Indonesia
                      (Persero), Aas Asikin Idat pada Januari 2016. Pembangunan
                      dilakukan untuk mensuplai kebutuhan listrik dan uap
                      (steam) ke Pabrik Amurea II, milik PT Petrokimia Gresik.
                      Masa konstruksi dilaksanakan selama 22 bulan dan pada 2
                      April 2018 GGCP dinyatakan beroperasi secara komersil.
                    </p>
                    <p class="text-justify">
                      Pembangunan GGCP yang selesai tepat waktu segera
                      ditindaklanjuti dengan pre-commissioning, commissioning
                      dan startup dari Pabrik Amurea II sesuai jadwal yang telah
                      disepakati. Hingga saat ini, GGCP masih terus mensuplai
                      kebutuhan listrik dan steam untuk mendukung reliabilitas
                      Pabrik Amurea II khususnya dan pabrik-pabrik milik PT
                      Petrokimia Gresik yang lain.
                    </p>
                    <p class="text-justify">
                      Keberhasilan menyelesaikan pembangunan pembangkit listrik
                      perdana yang dapat beroperasi dengan baik meningkatkan
                      rasa kepercayaan diri perseroan untuk membangun
                      pembangkit-pembangkit sejenis di pabrik-pabrik pupuk yang
                      berada dalam naungan PT Pupuk Indonesia (Persero) maupun
                      di kawasan lainnya.
                    </p>
                    <p class="text-justify">
                      Semua capaian yang telah dikemukakan di atas tidak
                      terlepas dari dukungan semua pihak. Mulai dari seluruh
                      stakeholders, pemegang saham dan terakhir yang tidak kalah
                      penting adalah PT Petrokimia Gresik sebagai konsumen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- end of modal -->
          </div>
        </div>
      </div>

      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsContents",
  data() {
    return {
      tabs: [
        { id: "tab1", name: "PERS", href: "#pers", active: true },
        { id: "tab2", name: "ARTIKEL", href: "#artikel", active: false },
      ],
    };
  },
  methods: {
    switchTab(clickedTabId) {
      this.tabs = this.tabs
        .map((tab) => ({
          ...tab,
          active: tab.id === clickedTabId,
        }))
        .sort((a, b) => b.active - a.active);
    },
  },
};
</script>

<style scoped>
.modal-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  border-radius: 0;
  padding: 0;
}

.active-tab {
  font-size: 2em; /* Adjust as needed */
  font-weight: bold;
}

.inactive-tab {
  font-size: 1em; /* Adjust as needed */
}

.img-fixed {
  width: 100%; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
  object-fit: cover;
  /* border-radius: 10px; */
}

.card-fixed {
  width: 100%; /* Adjust as needed */
  height: 350px; /* Adjust as needed */
  box-shadow: 0 4px 8px rgba(0, 183, 255, 0.25);
  transition: transform 0.3s ease;
  /* border-radius: 10px; */
}

/* .card {
  border-radius: 10px;
} */

.card-fixed:hover {
  box-shadow: 0 8px 16px rgba(0, 195, 255, 0.4); /* Adjust as needed */
  transform: scale(1.05);
  /* border-radius: 10px; */
}

.text-body-secondaryy {
  color: grey;
  font-style: italic;
  font-weight: 300;
}

.card-title {
  font-weight: 700;
  color: #084e8b;
}

.active-tab {
  font-weight: 450;
  /* font-style: italic; */
  font-family: Arial, Helvetica, sans-serif;
}

.inactive-tab {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
}

.modal-title {
  font-weight: 700;
  color: #084e8b;
  font-style: italic;
  text-align: center;
  /* text-shadow: 2px 1px #00b7ff; */
}

.head-modal {
  font-weight: 600;
  color: #f15a24;
  font-size: x-large;
}
p {
  text-align: justify;
}

@media (max-width: 576px) {
  h5 {
    font-size: 0.7rem; /* Adjust this value to change the font size on phone view */
  }
}
@media (max-width: 576px) {
  .img-fixed {
    width: 100%; /* Adjust this value to change the image width on phone view */
    height: 90px; /* Adjust this value to change the image height on phone view */
    object-fit: cover;
  }
}
@media (max-width: 576px) {
  .text-body-secondaryy {
    font-size: 0.6rem; /* Adjust this value to change the font size on phone view */
  }
}
@media (max-width: 576px) {
  .card-fixed {
    width: 100%; /* Adjust as needed */
    height: 230px; /* Adjust as needed */
    box-shadow: 0 4px 8px rgba(0, 183, 255, 0.25);
    transition: transform 0.3s ease;
    border-radius: 0;
  }
}
@media (max-width: 576px) {
  .modal-fullscreen-sm-down {
    margin-left: -11px; /* Adjust this value to move the modal to the left */
  }
}
</style>
