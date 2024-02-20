<template>
    <div class="company-value-container p-3">
    <div class="container">
        <div class="row justify-content-center">
            <div ref="column1" id="column1" class="col-md-3 mb-5 ms-4 me-4 mt-5">
                <p class="d-flex gap-2 flex-column justify-content-between">
                    <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#amanah" aria-expanded="false" aria-controls="amanah">
                        <h3 style="color: #21387c;"><i><b>Amanah</b></i></h3>
                    </button>
                </p>
                <div class="collapse multi-collapse" id="amanah">
                    <div class="card card-body">
                        <p><b><i>Memegang teguh kepercayaan yang diberikan.</i></b></p>
                        <ul>
                            <li>Memenuhi janji dan komitmen.</li>
                            <li>Bertanggung jawab atas tugas, keputusan dan tindakan yanng dilakukan.</li>
                            <li>Berpegang teguh kepada nilai moral dan etika.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div ref="column2" id="column2" class="col-md-3 mb-5 ms-4 me-4 mt-5">
                <p class="d-flex gap-2 flex-column justify-content-between">
                    <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#kompetensi" aria-expanded="false" aria-controls="kompetensi">
                        <h3 style="color: #21387c;"><i><b>Kompetensi</b></i></h3>
                    </button>             
                </p>
                <div class="collapse multi-collapse" id="kompetensi">
                    <div class="card card-body">
                        <p><b><i>Terus belajar dan mengembangkan kapabilitas.</i></b></p>
                        <ul>
                            <li>Meningkatkan kompetensi dari untuk menjawab tantangan yang selalu berubah.</li>
                            <li>Membantu orang lain belajar.</li>
                            <li>Menyelesaikan tugas dengan kualitas terbaik.</li>
                        </ul>
                    </div>  
                </div>
            </div>
            <div ref="column3" id="column3" class="col-md-3 mb-5 ms-4 me-4 mt-5">
                <p class="d-flex gap-2 flex-column justify-content-between">
                    <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#harmonis" aria-expanded="false" aria-controls="harmonis">
                        <h3 style="color: #21387c;"><i><b>Harmonis</b></i></h3>
                    </button>             
                </p>
                <div class="collapse multi-collapse" id="harmonis">
                    <div class="card card-body">
                        <p><b><i>Saling peduli dan menghargai perbedaan.</i></b></p>
                        <ul>
                            <li>Menghargai setiap orang apapun latar belakangnya.</li>
                            <li>Suka menolong orang lain.</li>
                            <li>Membangun lingkungan kerja yang kondusif.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div ref="title" id="title" class="title centered mb-5">
                <button class="btn btn-outline-light btn-lg" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
                    <!-- <h2><b><i>A K H L A K</i></b></h2>
                    <p><i>Nilai - Nilai Perusahaan</i></p> -->
                    <img src="../assets/akhlak.png" style="max-width: 100%;"/>
                </button>
            </div>
        </div>
        <div class="row justify-content-center">
            <div ref="column4" id="column4" class="col-md-3 mb-5 ms-4 me-4">
                <p class="d-flex gap-2 flex-column justify-content-between">
                    <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#loyal" aria-expanded="false" aria-controls="loyal">
                        <h3><i><b>Loyal</b></i></h3>
                    </button>             
                </p>
                <div class="collapse multi-collapse" id="loyal">
                    <div class="card card-body">
                        <p><b><i>Berdedikasi dan mengutamakan kepentingan Bangsa dan Negara</i></b></p>
                        <ul>
                            <li>Menjaga nama baik sesama karyawan, pimpinan, BUMN dan Negara.</li>
                            <li>Rela berkorban untuk mencapai tujuan yang lebih besar.</li>
                            <li>Patuh kepada pimpinan sepanjang tidak bertentangan dengan hukum dan etika.</li>
                        </ul>
                    </div> 
                </div>
            </div>
            <div ref="column5" id="column5" class="col-md-3 mb-5 ms-4 me-4">
                <p class="d-flex gap-2 flex-column justify-content-between">
                    <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#adaptif" aria-expanded="false" aria-controls="adaptif">
                        <h3><i><b>Adaptif</b></i></h3>
                    </button>             
                </p>
                <div class="collapse multi-collapse" id="adaptif">
                    <div class="card card-body">
                        <p><i><b>Terus berinovasi dan antusias dalam menggerakan ataupun menghadapi perubahan.</b></i></p>
                        <ul>
                            <li>Cepat menyesuaikan diri untuk menjadi lebih baik.</li>
                            <li>Terus – menerus melakukan perbaikan mengikuti perkembangan teknologi.</li>
                            <li>Bertindak proaktif.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div ref="column6" id="column6" class="col-md-3 mb-5 ms-4 me-4">
                <p class="d-flex gap-2 flex-column justify-content-between">
                    <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#kolaboratif" aria-expanded="false" aria-controls="kolaboratif">
                        <h3><i><b>Kolaboratif</b></i></h3>
                    </button>             
                </p>
                <div class="collapse multi-collapse" id="kolaboratif">
                    <div class="card card-body">
                        <p><b><i>Membangun kerja sama yang sinergis.</i></b></p>
                        <ul>
                            <li>Memberikan kesempatan kepada berbagai pihak untuk berkontribusi.</li>
                            <li>Terbuka dalam bekerja sama untuk menghasilkan nilai tambah.</li>
                            <li>Menggerakan pemanfaatan berbagai sumberdaya untuk tujuan bersama.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </template>
    
    <script>
    // /* global LeaderLine */
    
        export default {
            name: 'CompanyValue'
        }
    </script>
    
    <style scoped>
        .outlined {
            border: 1px solid #000; /* Change color as needed */
        }
        
        .btn, .card{
            border-radius: 0px;
        }
        .title {
            width: 30%;
            min-height: 0px;
            /* background-color: #084e8b; */
            color: #ffffff;
            padding: 20px;
            margin: 0 auto;
        }   
    
        .centered{
            /* display: flex;  */
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .company-value-container {
            /* background: linear-gradient(to bottom, #084e8b, #ffffff);
             */
             background-color: #0aa4b4;
            /* background: rgba(8, 78, 139, 0.5) 10%;  */
            /* background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(8, 78, 139, 0.5) 10%, rgba(8, 78, 139, 1) 100%); */

        } 
        .card-body {
            height: 300px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h3::first-letter {
            font-size: 1.5em; /* Adjust as needed */
        }
    </style>