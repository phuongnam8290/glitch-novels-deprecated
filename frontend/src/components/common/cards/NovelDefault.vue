<template>
  <base-card-default :ratings="novel.valuationInfo.ratings"
                      :tags="novel.novelInfo.genres">
    <template v-slot:cover>
      <img :src="require(`@/assets/images/novels-list/${novel.novelInfo.cover}`)">
    </template>
    <template v-slot:title>
      {{ novel.novelInfo.title }}
    </template>
    <template v-slot:subtitle>
      {{ novel.novelInfo.author }}
    </template>
    <template v-slot:card-content>
      <p v-for="paragraph in novel.novelInfo.synopsis" :key="paragraph">
        {{ paragraph }}
      </p>
    </template>
  </base-card-default>
</template>

<script>
import BaseCardDefault from '@/components/common/cards/BaseCardDefault.vue';

export default {
  components: {
    "base-card-default": BaseCardDefault
  },
  props: {
    novelData: {
      type: Object,
      //TODO: Change from false to true after implement backend
      required: false,
    }
  },
  computed: {
    novel() {
      return this.novelData || this.$store.state.defaultNovelData
    }
  }
}
</script>

<style scoped>
img {
  height: 100%;
}
</style>