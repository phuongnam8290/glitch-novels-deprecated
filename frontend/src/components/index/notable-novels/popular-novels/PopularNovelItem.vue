<template>
  <base-card :cover="`novel-list/${novel.cover}`">
    <template v-slot:title>
      {{ novel.title }}
    </template>
    <template v-slot:subtitle>
      {{ novel.author }}
    </template>

    <template v-slot:content> 
      <p v-for="paragraph in novel.synopsis" :key="paragraph"
         style="cursor:grab;"
      >
        {{ paragraph }}
      </p>
    </template>

    <template v-slot:footer>
      <p class="d-flex justify-content-between info">
        <span>
          <i class="fas fa-star pr-1 ratings"></i>
          {{ novel.ratings }}
        </span>
        <span class="d-none d-sm-block pl-3">
          <i class="fas fa-books pr-1"></i>
          {{ novel.publication }}
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
  props: {
    novel: {
      type: Object,
      required: true,
      default: () => {
        return {
          cover: "n/a",
          title: "n/a",
          author: "n/a",
          synopsis: [],
          rating: "n/a",
          publication: "n/a"
        }
      }
    }
  }
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

