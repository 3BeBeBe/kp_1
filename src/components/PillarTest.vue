<template>
    <div class="container mt-5 mb-5">
        <h2 class="text-center" style="color: #084e8b; font-weight: 700; font-style: italic;">Pilar Perusahaan</h2>
        <hr><br>

        <img
            src="../assets/Figpieblank.png"
            class="img-fluid zoomable-image d-block mx-auto"
            alt=""
        />

        <div class="row justify-content-center mt-5">
            <div ref="column2" id="column2" class="col-md-3 mb-5 ms-4 me-4">
                <div class="d-flex align-items-center justify-content-center position-relative">
                    <button class="btn businessenab-btn" type="button" @mouseover="showContent" @mouseleave="hideContent">
                        <h3 style="color: #21387c;"><i><b>Business Enablers</b></i></h3>
                    </button>  
                    <div class="hidden-content" v-show="isContentVisible" style="transform: translate(-700px, -600px); width: 300px; height: 300px;">
                        <p>This is the content revealed on hover 1</p>
                    </div>           
                </div>
            </div>

            <div ref="column2" id="column2" class="col-md-3 mb-5 ms-4 me-4">
                <div class="d-flex align-items-center justify-content-center position-relative">
                    <button class="btn businessline-btn" type="button" @mouseover="showContent" @mouseleave="hideContent">
                        <h3 style="color: #21387c;"><i><b>Business Line</b></i></h3>
                    </button>  
                    <div class="hidden-content" v-show="isContentVisible" style="transform: translate(20px, -600px); width: 300px; height: 300px;">
                        <p>This is the content revealed on hover 2</p>
                    </div>           
                </div>
            </div>   
        </div>

        <div class="row justify-content-center mt-5">
            <div ref="column2" id="column2" class="col-md-3 mb-5 ms-4 me-4">
                <div class="d-flex align-items-center justify-content-center position-relative">
                    <button class="btn corpval-btn" type="button" @mouseover="showContent" @mouseleave="hideContent">
                        <h3 style="color: #21387c;"><i><b>Corporate Value</b></i></h3>
                    </button>  
                    <div class="hidden-content" v-show="isContentVisible" style="transform: translate(-700px, -600px); width: 300px; height: 300px;">
                        <p>This is the content revealed on hover 1</p>
                    </div>           
                </div>
            </div>

            <div ref="column2" id="column2" class="col-md-3 mb-5 ms-4 me-4">
                <div class="d-flex align-items-center justify-content-center position-relative">
                    <button class="btn corpmis-btn" type="button" @mouseover="showContent" @mouseleave="hideContent">
                        <h3 style="color: #21387c;"><i><b>Corporate Mission</b></i></h3>
                    </button>  
                    <div class="hidden-content" v-show="isContentVisible" style="transform: translate(20px, -600px); width: 300px; height: 300px;">
                        <p>This is the content revealed on hover 2</p>
                    </div>           
                </div>
            </div>   
        </div>

        <!-- <div class="row justify-content-center mt-5">
            <div ref="column2" id="column2" class="col-md-3 mb-5 ms-4 me-4">
                <div class="d-flex align-items-center justify-content-center position-relative">
                    <button class="btn vis-btn" type="button" @mouseover="showContent" @mouseleave="hideContent">
                        <h3 style="color: #21387c;"><i><b>Vision</b></i></h3>
                    </button>  

                    <div class="hidden-content" v-show="isContentVisible" style="transform: translate(-700px, -600px); width: 300px; height: 300px;">
                        <p>This is the content revealed on hover 1</p>
                    </div>      

                    <div class="hidden-content" v-show="isContentVisible" style="transform: translate(100px, -600px); width: 300px; height: 300px;">
                        <p>This is the content revealed on hover 2</p>
                    </div>
                    
                </div>
            </div>
        </div> -->

        <div class="row justify-content-center mt-5">
    <div ref="column2" id="column2" class="col-md-3 mb-5 ms-4 me-4">
        <div class="d-flex align-items-center justify-content-center position-relative">
            <button class="btn vis-btn" type="button" @mouseover="showContent" @mouseleave="hideContent">
                <h3 style="color: #21387c;"><i><b>Vision</b></i></h3>
            </button>  

            <div class="hidden-content" v-show="isContentVisible" style="position: absolute; top: 0; left: 0;">
                <div style="transform: translate(-700px, -600px); width: 300px; height: 300px;">
                    <p>This is the content revealed on hover 1</p>
                </div>
                <div style="transform: translate(100px, -600px); width: 300px; height: 300px;">
                    <p>This is the content revealed on hover 2</p>
                </div>
            </div>      
        </div>
    </div>
</div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            isContentVisible: false
        };
    },
    methods: {
        showContent() {
            this.isContentVisible = true;
        },
        hideContent() {
            this.isContentVisible = false;
        }
    }
}
</script>

<style scoped>
.businessenab-btn {
    width: 50px; /* Adjust as needed */
    height: 50px; /* Adjust as needed */
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transform: translate(60px, -460px);
}

.businessline-btn {
    width: 50px; /* Adjust as needed */
    height: 50px; /* Adjust as needed */
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transform: translate(-140px, -460px);
}

.corpmis-btn {
    width: 50px; /* Adjust as needed */
    height: 50px; /* Adjust as needed */
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transform: translate(-90px, -435px);
}

.corpval-btn {
    width: 50px; /* Adjust as needed */
    height: 50px; /* Adjust as needed */
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transform: translate(5px, -435px);
}

.vis-btn {
    width: 50px; /* Adjust as needed */
    height: 50px; /* Adjust as needed */
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transform: translate(-25px, -445px);
}

.hidden-content {
    position: absolute;
    top: 0;
    left: calc(100% + 10px); /* Adjust the distance from the button */
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: none;
}

.hidden-content p {
    margin: 0;
}

.btn:hover + .hidden-content {
    display: block;
}
</style>
