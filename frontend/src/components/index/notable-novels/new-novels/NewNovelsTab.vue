<template>
  <div class="row">
    <new-novel class="col-12 item"
               v-for="i in 4" :key="i">
    </new-novel>
  </div>
</template>

<script>
import NewNovel from '@/components/index/notable-novels/new-novels/NewNovel.vue'

export default {
  components: {
    "new-novel": NewNovel
  }
}
</script>

<style scoped>
.item {
  margin-top: 2.5rem;
}
</style>
