<template>
  <base-card v-for="n in 4" :key="n"
             :cover="`reviews/${reviews[0].novel.cover}`">

    <template v-slot:title>
      {{ reviews[0].novel.title }}
    </template>

    <template v-slot:misc>
      <div class="d-none d-md-flex pl-2">
        <span v-for="fullStar in getRatingStars(reviews[0].rating).fullStars" :key="fullStar">
          <i class="fas fa-star"></i>
        </span>
        <span v-if="getRatingStars(reviews[0].rating).haveHalfStar">
          <i class="fas fa-star-half-alt"></i>
        </span>
        <span v-for="emptyStar in getRatingStars(reviews[0].rating).emptyStars" :key="emptyStar">
          <i class="far fa-star"></i>
        </span>
      </div>
    </template>
    <template v-slot:content>
      <p v-for="paragraph in reviews[0].content" :key="paragraph"
        style="cursor:grab;"
      >
        {{ paragraph }}
      </p>
    </template>
    <template v-slot:footer>
      <p class="d-flex justify-content-end">
        <span>
          <i class="fas fa-book-reader pr-2"></i>
        </span>
        c.472
      </p>
    </template>
  </base-card>
</template>

<script>
import Utils from "@/assets/js/mixins/Utils.js"
import BaseCard from "@/components/common/BaseCard.vue"

export default {
  components: {
    "base-card": BaseCard
  },
  mixins: [Utils],
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  width: 125px;
  height: auto;
}
</style>