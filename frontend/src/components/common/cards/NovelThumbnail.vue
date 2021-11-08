<template>
  <base-card-thumbnail>
    <template v-slot:cover>
      <img class="img-fluid" 
            :src="require(`@/assets/images/novels-list/${novel.novelInfo.cover}`)">
    </template>
    <template v-slot:title>
      {{ novel.novelInfo.title }}
    </template>
    <template v-slot:subtitle>
      {{ novel.novelInfo.author }}
    </template>
  </base-card-thumbnail>
</template>

<script>
import BaseCardThumbnail from '@/components/common/cards/BaseCardThumbnail.vue';

export default {
  components: {
    "base-card-thumbnail": BaseCardThumbnail
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