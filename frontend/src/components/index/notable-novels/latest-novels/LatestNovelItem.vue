<template>
  <base-card :cover="`novel-list/${novel.cover}`">
    <template v-slot:title>
      {{ novel.title }}
    </template>
    <template v-slot:subtitle>
      {{ novel.author }}
    </template>

    <template v-slot:content> 
      <p v-for="paragraph in novel.synopsis" :key="paragraph"
         style="cursor:grab;"
      >
      {{ paragraph }}
      </p>
    </template>

    <template v-slot:footer>
      <a class="d-flex justify-content-between align-items-end new-chapter">
        <span>
          <i class="fas fa-scroll pr-1"></i>
          {{ novel.newestChapter }}
        </span>
        <span class="d-none d-sm-block fader-text update-time">
          {{ novel.updateTime }}
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
  props: {
    novel: {
      type: Object,
      required: true,
            default: () => {
        return {
          cover: "n/a",
          title: "n/a",
          author: "n/a",
          synopsis: [],
          newestChapter: "n/a",
          updateTime: "n/a"
        }
      }
    }
  }
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
  color: var(--primary-color);
  margin-top: 1rem;
}

.new-chapter:hover {
  text-decoration: none;
  color: var(--secondary-color);
}

.update-time {
  font-style: italic;
}
</style>