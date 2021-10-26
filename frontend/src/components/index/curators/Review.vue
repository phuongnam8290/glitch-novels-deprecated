<template>
  <base-card-default :ratings="review.rating">
    <template v-slot:cover>
      <img :src="require(`@/assets/images/novels-list/${review.novel.novelInfo.cover}`)">
    </template>
    <template v-slot:title>
      {{ review.novel.novelInfo.title }}
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
  height: 100%;
}
</style>