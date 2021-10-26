<template>
  <base-card-minimal :ratings="novel.valuationInfo.ratings"
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
    <template v-slot:misc-info>
      <p class="mr-4">
        <span> 
          <i class="fas fa-books mr-2 mb-1"></i>
        </span>
        <span class="text-nowrap cursor-default">
          {{ novel.publicationInfo.chapters }} Chapters
        </span>
      </p>
      <p class="mr-4">
        <span>
          <i class="far fa-heart-rate mr-2 mb-1"></i>
        </span>
        <span class="cursor-default">
          {{ novel.publicationInfo.status }}
        </span>
      </p>
      <p class="mr-4">
        <span>
          <i class="far fa-calendar-alt mr-2 mb-1"></i>
        </span>
        <span class="text-nowrap cursor-default">
          Every {{novel.publicationInfo.updatesFrequency}} Day(s)
        </span>
      </p>
      <p>
        <span>
          <i class="fas fa-bookmark mr-2 mb-1"></i>
        </span>
        <span class="cursor-default">{{ novel.valuationInfo.bookmarks}} </span>
      </p>
    </template>
  </base-card-minimal>
</template>

<script>
import BaseCardMinimal from '@/components/common/cards/BaseCardMinimal.vue';

export default {
  components: {
    "base-card-minimal": BaseCardMinimal
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