<template>
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://www.pi-energi.com/files/media/2020/09/image-banner-factory.jpg" class="d-block w-100 responsiv-image">
            <div class="row">
                <div class="col-md-6">
                    <div class="d-none d-md-block overlay-text">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            </div>
            </div>
            <div class="carousel-item img-fluid">
            <img src="https://www.pi-energi.com/files/media/2020/09/KDM_1.jpg" class="d-block w-100 responsiv-image">
            <div class="d-none d-md-block overlay-text">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src="https://www.pi-energi.com/files/media/2020/09/image-banner-proc.jpg" class="d-block w-100 responsiv-image">
            <div class="d-none d-md-block overlay-text">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<script>
    export default {
        name: 'CarousalInfo'
    }
</script>
<style>
    .responsive-image {
      width: 100%; /* Set the width to 100% to make the image responsive */
      height: 50%; /* Maintain the aspect ratio */
    }

    .overlay-text {
      position: absolute;
      top: 50%;
      left: 40%; /* Adjust this value to move the text to the left */
      transform: translate(-50%, -50%);
      color: white;
      font-size: 24px;
      font-weight: bold;
    }
</style>