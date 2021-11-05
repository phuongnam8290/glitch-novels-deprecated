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
import BaseCardDefault from '@/components/common/cards/BaseCardDefault.vue';

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
    "base-card-default": BaseCardDefault
  },
  mounted() {
    // Override padding/margin from default card
    let scrollableTags = this.$el.querySelector(".scrollable-tags");
    let miscInfo = this.$el.querySelector(".misc-info");

    scrollableTags.style.marginTop = "0";
    miscInfo.style.marginTop = "0";
  }
}
</script>