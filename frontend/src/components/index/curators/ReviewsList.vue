<template v-if="reviews.length > 0">
  <base-card v-for="n in 4" :key="n">
    <template v-slot:cover>
      <img :src="require(`@/assets/images/reviews/${reviews[0].novel.cover}`)">
    </template>

    <template v-slot:title>
      {{ reviews[0].novel.title }}
    </template>

    <template v-slot:misc>
      <div class="d-none d-md-flex pl-2">
        <span v-for="fullStars in fullStars(0)" :key="fullStars">
          <i class="fas fa-star"></i>
        </span>
        <span v-for="halfStar in halfStar(0)" :key="halfStar" >
          <i class="fas fa-star-half-alt"></i>
        </span>
        <span v-for="emptyStars in emptyStars(0)" :key="emptyStars">
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
import BaseCard from "@/components/common/BaseCard.vue"

export default {
  components: {
    "base-card": BaseCard
  },
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  methods: {
    fullStars(index) {
      return Math.floor(this.reviews[index].rating);
    },
    emptyStars(index) {
      return Math.floor(5 - this.reviews[index].rating);
    },
    halfStar(index) {
      return 5 - (this.fullStars(index) + this.emptyStars(index));
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