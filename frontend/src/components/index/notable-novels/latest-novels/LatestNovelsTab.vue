<template>
  <div class="row">
    <latest-novel class="col-12 col-lg-6 item"
                       v-for="i in 8" :key="i">
    </latest-novel>
  </div>
</template>

<script>
import LatestNovel from '@/components/index/notable-novels/latest-novels/LatestNovel.vue'

export default {
  components: {
    "latest-novel": LatestNovel
  }
}
</script>

<style scoped>
.item {
  margin-top: 2.5rem;
}
</style>
