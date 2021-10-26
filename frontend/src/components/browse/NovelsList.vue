<template>
  <transition enter-active-class="fadein"
              leave-active-class="fadeout"
              mode="out-in">
    <div class="row"
         v-if="style === 'default'">
      <div class="col-md-6 item"
          v-for="n in 18" :key="n">
        <novel-default></novel-default>
      </div>
    </div>

    <div class="row"
        v-else-if="style === 'minimal'">
      <div class="col-md-6 item"
          v-for="n in 18" :key="n">
        <novel-minimal></novel-minimal>
      </div>
    </div>

    <div class="row"
        v-else-if="style === 'thumbnail'">
      <div class="col-6 col-sm-4 col-md-3 col-lg-2 item"
            v-for="n in 18" :key="n">
          <novel-thumbnail></novel-thumbnail>
      </div>
    </div>
  </transition>
</template>

<script>
import NovelDefault from '@/components/browse/novel/NovelDefault';
import NovelMinimal from '@/components/browse/novel/NovelMinimal';
import NovelThumbnail from '@/components/browse/novel/NovelThumbnail';

export default {
  components: {
    "novel-default": NovelDefault,
    "novel-minimal": NovelMinimal,
    "novel-thumbnail": NovelThumbnail
  },
  props: {
    novelData: {
      type: Object,
      //TODO: Change from false to true after implement backend
      required: false,
    },
    style: {
      type: String,
      required: false,
      default: "default"
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

.item {
  margin-top: 2.5rem;
}
</style>