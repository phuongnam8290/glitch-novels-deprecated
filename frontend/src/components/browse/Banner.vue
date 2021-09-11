<template>
  <div class="banner"></div>
</template>

<style scoped>
.banner {
  height: 60vh;
  width: auto;
  position: relative;
  background: url(~@/assets/images/banner/browse.png)
                  fixed center top /cover no-repeat;
}

@media (max-width: 992px) {
  .banner {
    height: 50vh;
  }
}

@media (max-width: 768px) {
  .banner {
    height: 40vh;
  }
}

@media (max-width: 576px) {
  .banner {
    height: 35vh;
  }
}
</style>