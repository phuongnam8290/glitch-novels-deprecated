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
    <template v-slot:misc>
      <div class="d-none d-md-flex genre">
        <base-tag v-for="genre in novel.novelInfo.genres" :key="genre">
          {{ genre }}
        </base-tag>
      </div>
    </template>
    <template v-slot:card-content>
      <p v-for="paragraph in novel.novelInfo.synopsis" :key="paragraph">
        {{ paragraph }}
      </p>
    </template>
  </base-card-default>
</template>

<script>
import BaseCardDefaut from '@/components/common/cards/BaseCardDefault.vue';
import BaseTag from '@/components/common/BaseTag.vue';

export default {
  components: {
    "base-card-default": BaseCardDefaut,
    "base-tag": BaseTag
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