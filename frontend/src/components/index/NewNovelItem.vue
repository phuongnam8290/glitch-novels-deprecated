<template>
  <base-card layoutStyle="col-12 fullwidth">
    <template v-slot:cover>
      <img :src="require(`@/assets/images/novel-list/${imgSrc}`)">
    </template>

    <template v-slot:title>
      {{ title }}
    </template>

    <template v-slot:subtitle>
      {{ author }}
    </template>

    <template v-slot:misc>
      <div class="d-none d-md-flex pl-2 genre">
        <base-tag v-for="genre in genres" :key="genre">
          {{ genre }}
        </base-tag>
      </div>
    </template>

    <template v-slot:content> 
      <p v-for="paragraph in synopsis"
         :key="paragraph"
         style="cursor:grab;"
      >
        {{ paragraph }}
      </p>
    </template>
  </base-card>
</template>

<script>
import BaseCard from '@/components/common/BaseCard.vue';
import BaseTag from '@/components/common/BaseTag.vue'

export default {
  components: {
    "base-card": BaseCard,
    "base-tag": BaseTag
  },
  props: ["imgSrc", "title", "author", "synopsis", "genres"]
}
</script>

<style scoped>
img {
  width: 125px;
  height: auto;
}

</style>

