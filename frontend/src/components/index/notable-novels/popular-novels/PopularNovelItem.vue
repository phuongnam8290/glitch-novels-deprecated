<template>
  <base-card>
    <template v-slot:cover>
      <img :src="require(`@/assets/images/novel-list/${cover}`)">
    </template>

    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:subtitle>
      {{ author }}
    </template>

    <template v-slot:content> 
      <p v-for="paragraph in synopsis" :key="paragraph"
         style="cursor:grab;"
      >
        {{ paragraph }}
      </p>
    </template>

    <template v-slot:footer>
      <p class="d-flex justify-content-between info">
        <span>
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
  props: ["cover", "title", "author", "synopsis", "stars", "publicationStatus"]
}
</script>

<style scoped>
img {
  width: 125px;
  height: auto;
}

.info {
  margin-top: 1rem;
}
</style>

