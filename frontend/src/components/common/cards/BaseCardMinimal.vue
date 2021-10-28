<template>
  <base-card-default :height="120" :ratings="ratings" :tags="tags">
    <template v-slot:cover>
      <slot name="cover"></slot>
    </template>
    <template v-slot:title>
      <slot name="title"></slot>
    </template>
    <template v-slot:misc-info>
      <slot name="misc-info"></slot>
    </template>
  </base-card-default>
</template>

<script>
import BaseCardDefaut from '@/components/common/cards/BaseCardDefault.vue';

export default {
   props: {
    ratings: {
      type: Number,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  },
  components: {
    "base-card-default": BaseCardDefaut
  },
  mounted() {
    // Override padding/margin from default card
    let tagsWrapper = this.$el.querySelector(".tags-wrapper");
    let miscInfo = this.$el.querySelector(".misc-info");

    tagsWrapper.style.marginTop = "0";
    miscInfo.style.marginTop = "0";
  }
}
</script>