<template>
  <review class="col-12 col-md-6 item"
          v-for="n in 4" :key="n"
          :review="reviews[0]">
  </review>
</template>

<script>
import { computed, inject, reactive } from "vue";
import Review from "@/components/index/curators/Review.vue"

export default {
  components: {
    "review": Review
  },
  setup() {
    const curators = reactive(inject("curators"));
    const reviews = computed(() => curators[0].reviews)
    return {
      reviews
    }
  }
}
</script>

<style scoped>
.item {
  margin-top: 2.5rem;
}
</style>