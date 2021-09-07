<template>
  <!-- Banner section -->
  <section>
    <the-banner></the-banner>
  </section>

  <section class="container-fluid">
    <div class="row">
      <!-- Notable novels -->
      <div class="col-12 col-lg-9 notable-novels">
        <notable-novels></notable-novels>
      </div>
      <!-- Random novel -->
      <div class="d-none d-lg-block col-3 random-novel">
        <random-novel></random-novel>
      </div>
    </div>
  </section>
</template>

<script>
import TheBanner from "@/components/index/TheBanner.vue"
import NotableNovels from "@/components/index/notable-novels/NotableNovels.vue"
import RandomNovel from "@/components/index/random-novel/RandomNovel.vue"

export default {
  components: {
    "the-banner": TheBanner,
    "notable-novels": NotableNovels,
    "random-novel": RandomNovel
  }
}
</script>

<style scoped>
.notable-novels {
  padding-left: 0;
  overflow: hidden;
}

.random-novel {
  padding-left: 3rem;
  padding-right: 0;
}
</style>

