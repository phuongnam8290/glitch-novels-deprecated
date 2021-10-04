<template>
  <footer class="container-fluid sticky-bottom">
    <div class="align-items-center d-none d-sm-flex">
      <div class="logo">
        <img src="@/assets/images/logo-small.png">
      </div>
      <div class="line mx-4"></div>
      <div class="copyright text-nowrap">
        Copyright © 2012-2021 Glitch Network.
      </div>     
    </div>
    <div class="d-block d-sm-none text-center">
       © 2012-2021 Glitch Network
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .8));
  padding: 0.7rem 3rem !important;
  margin-top: 3rem;
}

footer .logo img {
  width: 35px;
}

footer .line {
  width: 100%;
  border-top: 1px solid var(--primary-color);
}
</style>