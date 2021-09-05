<template>
  <base-card>
    <template v-slot:cover>
      <img :src="require(`@/assets/images/novel-list/${imgSrc}`)">
    </template>

    <template v-slot:header>
      <p class="title-text"> {{ title }} </p>
      <p class="mt-1 fader-text"> {{ author }} </p>
    </template>

    <template v-slot:content> 
      <p class="mt-2 paragraph-text synopsis">
        {{ synopsis }} 
      </p>
    </template>

    <template v-slot:footer>
      <p class="d-flex justify-content-between info">
        <span class="star">
          <i class="fas fa-star pr-1"></i>
          {{ stars }}
        </span>
        <span class="d-none d-sm-block pl-3">
          <i class="fas fa-books pr-1"></i>
          {{ publicationStatus }}
        </span>
      </p>
    </template>
  </base-card>
</template>

<script>
import BaseCard from '@/components/common/BaseCard.vue';

export default {
  components: {
    "base-card": BaseCard
  },
  props: ["imgSrc", "title", "author", "synopsis", "stars", "publicationStatus"]
}
</script>

<style scoped>
img {
  width: 125px;
  height: auto;
}

.synopsis {
  height: 6rem;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.info {
  margin-top: 1rem;
}
</style>

