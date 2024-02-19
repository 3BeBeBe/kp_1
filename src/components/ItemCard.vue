<template>
    <div class="container">
      <div class="row mt-3 mb-3 d-flex justify-content-center align-items-center">
        <div class="col-md-4 mb-3">
            <div class="card card-listrik">
              <div class="card-background"></div>
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="card-text-wrapper">
                    <h1 class="big-number-listrik text-start">76 mw/h</h1>
                    <h5 class="title-listrik card-title">Listrik</h5>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="col-md-4 mb-3">
            <div class="card card-steam">
              <div class="card-background"></div>
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="card-text-wrapper">
                    <h1 class="big-number-steam text-start">316 Ton/h</h1>
                    <h5 class="title-steam card-title">Steam</h5>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="col-md-4 mb-3">
            <div class="card card-nitrogen">
                <div class="card-body">
                    <div class="card-text-wrapper">
                        <h1 class="big-number-nitrogen text-start">500 nm3/h</h1>
                        <h5 class="title-nitrogen card-title">Nitrogen</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Your existing styles */
  .card{
    border-radius: 0;
  }
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
    name: "ItemCard",
  };
  </script>
  
  <style scoped>
  .container {
        height: 40vh; /* Adjust this value to your desired height */
        object-fit: cover;
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
  
  .small-text-nitrogen {
    font-size: 0.75rem; /* Adjust the font size of the small text */
    margin-top: 5px; /* Adjust the spacing between the big number and the small text */
    z-index: 2;
  }
  
  .small-text {
    z-index: 2;
  }
  </style>
  