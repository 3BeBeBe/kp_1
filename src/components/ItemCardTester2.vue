<template>
  <div class="container m-5">
    <div class="row justify-content-left">
      <div class="col-md-3">
        <router-link to="/pabrik" style="text-decoration: none">
          <div class="card card-listrik">
            <div class="card-background-listrik"></div>
            <div class="card-body">
              <div class="d-flex align-items-center">
                <h1 class="big-number-listrik">⠀2⠀</h1>
                <div class="card-text-wrapper">
                  <h5 class="title-listrik card-title">Pembangkit Listrik</h5>
                  <p class="card-text">Router-link to pabrik implemented</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="mt-3 d-flex justify-content-center">
        <div class="col-md-3">
        <router-link to="/pabrik" style="text-decoration: none">
          <div class="card card-steam">
            <!-- <img src="https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg" class="card-img-top img-fluid"> -->
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div>
                 <h1 class="big-number-steam">⠀270⠀</h1>
                 <p class="small-text" style="color: #13934a;">⠀⠀⠀⠀ton/hour</p>   
                </div>
                <!-- Big "2" here -->
                <div class="card-text-wrapper">
                  <h5 class="title-steam card-title">Steam</h5>
                  <p class="card-text">Router-link to pabrik implemented</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      </div>

      <div class="mt-3 d-flex justify-content-end">
        <div class="col-md-3">
        <router-link to="/pabrik" style="text-decoration: none">
          <div class="card card-nitrogen">
            <!-- <img src="https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg" class="card-img-top img-fluid"> -->
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div>
                 <h1 class="big-number-nitrogen">⠀1000⠀</h1>
                 <p class="small-text" style="color: #dd5925;">⠀⠀⠀⠀⠀⠀Nm3</p>   
                </div>
                <div class="card-text-wrapper">
                  <h5 class="title-nitrogen card-title">Nitrogen</h5>
                  <p class="card-text">Router-link to pabrik implemented</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Your existing styles */

.big-number {
  font-size: 72px; /* Adjust as needed */
  text-align: center;
  margin-right: 1rem; /* Add space between big number and text */
}

.card-text-wrapper {
  flex-grow: 1; /* Allow the text wrapper to grow and take up remaining space */
}

/* Your existing styles */
</style>

<script>
export default {
  name: "ItemCardTester",
};
</script>

<style scoped>
.card {
  width: 850px;
  height: 125px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.card-listrik {
  box-shadow: 0 4px 8px rgba(8, 78, 139, 0.25);
  transition: transform 0.3s ease;
}

.card-listrik:hover {
  box-shadow: 0 8px 16px rgba(8, 78, 139, 0.5);
  transform: scale(1.1);
}
.card-steam {
  box-shadow: 0 4px 8px rgba(19, 147, 74, 0.25);
  transition: transform 0.3s ease;
}

.card-steam:hover {
  box-shadow: 0 8px 16px rgba(19, 147, 74, 0.5);
  transform: scale(1.1);
}
.card-nitrogen {
  box-shadow: 0 4px 8px rgba(221, 89, 37, 0.25);
  transition: transform 0.3s ease;
}

.card-nitrogen:hover {
  box-shadow: 0 8px 16px rgba(221, 89, 37, 0.5); /* Adjust as needed */
  transform: scale(1.1);
}
.card-title {
  text-align: center;
  font-style: italic;
  font-size: 32px;
  font-weight: 600;
}

.title-listrik {
  color: #084e8b;
  text-align: left;
}

.title-steam {
  color: #13934a;
  text-align: left;
}

.title-nitrogen {
  color: #dd5925;
  text-align: left;
}

.big-number-listrik {
  font-size: 72px; /* Adjust as needed */
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #084e8b;
}
.big-number-steam {
  font-size: 48px; /* Adjust as needed */
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #13934a;
}
.big-number-nitrogen {
  font-size: 48px; /* Adjust as needed */
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #dd5925;
}

.card-text-wrapper {
  flex-grow: 1;
}
/* .card-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg');
  background-size: cover;
  background-position: right;
  background-color: rgba(255, 255, 255, 0); 
  transition: background-color 0.3s ease; 
  z-index: -1;
} */

.card-background-listrik {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0)), url('https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg');
  background-size: cover;
  background-position: right;
  background-color: rgba(255, 255, 255, 0);
  /* transition: background-color 1s ease; */
  z-index: 0;

  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

/* .card:hover .card-background {
  background-color: rgba(255, 255, 255, 0.8); 
} */
</style>
