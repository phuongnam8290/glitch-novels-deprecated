<template>
  <!-- Banner section -->
  <section>
    <the-banner></the-banner>
  </section>

  <section class="container-fluid">
    <div class="row">
      <!-- Notable novels section -->
      <div class="col-12 col-lg-9 notable-novels">
        <notable-novels></notable-novels>
      </div>
    </div>
  </section>
</template>

<script>
import TheBanner from "@/components/index/TheBanner.vue"
import NotableNovels from "@/components/index/NotableNovels.vue"

export default {
  components: {
    "the-banner": TheBanner,
    "notable-novels": NotableNovels
  }
}
</script>

<style scoped>
.notable-novels {
  padding-left: 0;
  overflow: hidden;
}
</style>

