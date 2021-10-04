<template>
  <base-card :cover="`novel-list/${novel.cover}`"
             layoutStyle="col-12">

    <template v-slot:title>
      {{ novel.title }}
    </template>

    <template v-slot:subtitle>
      {{ novel.author }}
    </template>

    <template v-slot:misc>
      <div class="d-none d-md-flex pl-2 genre">
        <base-tag v-for="genre in getLoopedElements(novel.genres, 3)" :key="genre">
          {{ genre }}
        </base-tag>
      </div>
    </template>

    <template v-slot:content> 
      <p v-for="paragraph in novel.synopsis"
         :key="paragraph">
        {{ paragraph }}
      </p>
    </template>
  </base-card>
</template>

<script>
import Utils from "@/assets/js/mixins/Utils.js";

import BaseCard from '@/components/common/BaseCard.vue';
import BaseTag from '@/components/common/BaseTag.vue';

export default {
  components: {
    "base-card": BaseCard,
    "base-tag": BaseTag
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
          genres: []
        }
      }
    }
  },
  mixins: [Utils]
}
</script>

<style scoped>
img {
  width: 125px;
  height: auto;
}

</style>

