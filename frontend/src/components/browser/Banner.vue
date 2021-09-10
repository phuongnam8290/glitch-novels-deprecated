<template>
  <div class="banner">
  </div>
</template>

<style scoped>
.banner {
  height: 50vh;
  width: auto;
  background: url(~@/assets/images/banner/browse.png)
                    center/cover no-repeat;
}

@media (max-width: 992px) {
  .banner {
    height: 40vh;
  }
}

@media (max-width: 768px) {
  .banner {
    height: 30vh;
  }
}

@media (max-width: 576px) {
  .banner {
    height: 20vh;
  }
}
</style>