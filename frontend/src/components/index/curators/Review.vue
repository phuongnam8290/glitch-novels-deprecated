<template>
  <base-card-default :miscOverflow="false">
    <template v-slot:cover>
      <img :src="require(`@/assets/images/novels-list/${review.novel.novelInfo.cover}`)">
    </template>
    <template v-slot:title>
      {{ review.novel.novelInfo.title }}
    </template>
    <template v-slot:misc>
      <div class="d-none d-md-flex pl-2 ratings">
        <span v-for="fullStar in getRatingStars(review.rating).fullStars" :key="fullStar">
          <i class="fas fa-star"></i>
        </span>
        <span v-if="getRatingStars(review.rating).haveHalfStar">
          <i class="fas fa-star-half-alt"></i>
        </span>
        <span v-for="emptyStar in getRatingStars(review.rating).emptyStars" :key="emptyStar">
          <i class="far fa-star"></i>
        </span>
      </div>
    </template>
    <template v-slot:card-content>
      <p v-for="paragraph in review.content" :key="paragraph">
        {{ paragraph }}
      </p>
    </template>
    <template v-slot:card-footer>
      <p class="d-flex justify-content-end">
        <span>
          <i class="fas fa-book-reader pr-2"></i>
        </span>
        <span>
          Chapter: {{ review.status }}
        </span>
      </p>
    </template>
  </base-card-default>
</template>

<script>
import Utils from "@/assets/js/mixins/Utils.js"
import BaseCardDefaut from '@/components/common/cards/BaseCardDefault.vue';

export default {
  components: {
    "base-card-default": BaseCardDefaut
  },
  mixins: [Utils],
  props: {
    review: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
img {
  width: 125px;
}
</style>