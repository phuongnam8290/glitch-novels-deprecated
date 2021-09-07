<template>
  <base-card>
    <template v-slot:cover>
      <img :src="require(`@/assets/images/novel-list/${cover}`)">
    </template>

    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:subtitle>
      {{ author }}
    </template>

    <template v-slot:content> 
      <p v-for="paragraph in synopsis" :key="paragraph"
         style="cursor:grab;"
      >
      {{ paragraph }}
      </p>
    </template>

    <template v-slot:footer>
      <a class="d-flex justify-content-between align-items-end new-chapter">
        <span>
          <i class="fas fa-scroll pr-1"></i>
          Ch. 50
        </span>
        <span class="d-none d-sm-block fader-text update-time">
          30 minutes ago
        </span>
      </a>
    </template>
  </base-card>
</template>

<script>
import BaseCard from '@/components/common/BaseCard.vue';

export default {
  components: {
    "base-card": BaseCard
  },
  props: ["cover", "title", "author", "synopsis", "newestChapter", "updateTime"]
}
</script>

<style scoped>
img {
  width: 125px;
  height: auto;
}

a {
  cursor: pointer;
}

.synopsis {
  height: 6rem;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.new-chapter {
  color: #EBE5DE;
  margin-top: 1rem;
}

.new-chapter:hover {
  text-decoration: none;
  color: #70AED2;
}

.update-time {
  font-style: italic;
}
</style>