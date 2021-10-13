<template>
  <base-card-default>
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
    <template v-slot:card-footer>
      <a class="d-flex justify-content-between align-items-center"
         href="#">
        <span>
          <i class="fas fa-scroll pr-1"></i>
          {{ novel.publicationInfo.latestChapter }}
        </span>
        <span class="d-none d-sm-block fader-text update-time">
          {{ novel.publicationInfo.lastUpdate }}
        </span>
      </a>
    </template>
  </base-card-default>
</template>

<script>
import BaseCardDefaut from '@/components/common/cards/BaseCardDefault.vue';

export default {
  components: {
    "base-card-default": BaseCardDefaut
  },
  props: {
    novelData: {
      type: Object,
      //TODO: Change from false to true after implement backend
      required: false,
      // default: this.$store.state.defaultNovelData
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
  width: 125px;
}
</style>