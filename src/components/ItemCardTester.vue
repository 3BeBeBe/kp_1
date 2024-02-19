<template>
  <div class="container mt-5">
    <div class="row justify-content-left">
      <div class="col-md-6 mb-3">
        <router-link to="/ggcp" style="text-decoration: none">
          <div class="card card-listrik">
            <div class="card-background"></div>
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
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6 mb-3">
        <router-link to="/pabrik" style="text-decoration: none">
          <div class="card card-steam">
            <div class="card-background"></div>
            <div class="card-body">
              <div class="d-flex align-items-center">
                <h1 class="big-number-steam">⠀316⠀</h1>
                <!--ton / h-->
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

    <div class="row justify-content-end">
      <div class="col-md-6 mb-3">
        <router-link to="/pabrik" style="text-decoration: none">
          <div class="card card-nitrogen">
            <div class="card-background"></div>
            <div class="card-body">
              <div class="d-flex align-items-center">
                <h1 class="big-number-nitrogen">⠀500⠀</h1>
                <p class="small-text">nm3/h</p>
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
  width: 100%;
  height: 100%;
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
  position: relative; /* Ensure proper z-index */
  z-index: 2; /* Ensure proper stacking order */
}

.title-listrik {
  color: #084e8b;
  text-align: left;
  /* z-index: 2; Remove z-index from here */
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
  font-size: 50px; /* Adjust as needed */
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #084e8b;
  position: relative; /* Ensure proper z-index */
  z-index: 2; /* Ensure proper stacking order */
}
.big-number-steam {
  font-size: 50px; /* Adjust as needed */
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #13934a;
  z-index: 2;
}
.big-number-nitrogen {
  font-size: 48px; /* Adjust as needed */
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #dd5925;
  z-index: 2;
}

.card-text-wrapper {
  flex-grow: 1;
  position: relative; /* Ensure proper z-index */
  z-index: 2; /* Ensure proper stacking order */
}

.card-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0)
    ),
    url("https://www.pi-utilitas.com/files/media/2020/09/KDM_1.jpg");
  background-size: cover;
  background-position: right;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;

  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.small-text-nitrogen {
  font-size: 0.75rem; /* Adjust the font size of the small text */
  margin-top: 5px; /* Adjust the spacing between the big number and the small text */
  z-index: 2;
}

.small-text {
  z-index: 2;
}
</style>
