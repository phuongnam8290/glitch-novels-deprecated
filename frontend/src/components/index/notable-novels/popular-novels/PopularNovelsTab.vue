<template>
  <div class="row">
    <popular-novel class="col-12 col-lg-6 item"
                   v-for="i in 8" :key="i">
    </popular-novel>
  </div>
</template>

<script>
import PopularNovel from '@/components/index/notable-novels/popular-novels/PopularNovel.vue'

export default {
  components: {
    "popular-novel": PopularNovel
  }
}
</script>

<style scoped>
.item {
  margin-top: 2.5rem;
}
</style>