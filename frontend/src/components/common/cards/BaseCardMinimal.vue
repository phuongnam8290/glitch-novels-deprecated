<template>
  <base-card-default :height="100" :ratings="ratings" :tags="tags">
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
  }
}
</script>