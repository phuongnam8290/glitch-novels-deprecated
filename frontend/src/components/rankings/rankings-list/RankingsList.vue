<template>
  <div class="wrapper">
    <div class="d-block d-md-none rankings-list-sm">
      <div class="ranking-item"
           v-for="i in 20" :key="i">
        <ranking-novel-sm :ranking="i">
        </ranking-novel-sm>
      </div>
    </div>

    <div class="d-none d-md-block rankings-list-md">
      <div class="ranking-item"
          v-for="i in 17" :key="i">
        <ranking-novel-md :ranking="i + 3">
        </ranking-novel-md>
      </div>
    </div>
  </div>
</template>

<script>
import RankingNovelMd from "@/components/rankings/rankings-list/RankingNovelMd";
import RankingNovelSm from "@/components/rankings/rankings-list/RankingNovelSm";

export default {
  props: {
    novelData: {
      type: Object,
      //TODO: Change from false to true after implement backend
      required: false,
    }
  },
  components: {
    "ranking-novel-md": RankingNovelMd,
    "ranking-novel-sm": RankingNovelSm
  }
}
</script>

<style scoped>
@font-face {
  font-family: "numbers-prospekt";
  src: url(~@/assets/font/numbers-prospekt/numbers-prospekt.woff2);
}

.rankings-list-sm,
.rankings-list-md {
  margin-top:-2.5rem;
}

.ranking-item {
  margin-top: 2.5rem;
}

.ranking-item .ranking {
  font-family: "numbers-prospekt", sans-serif;
  font-size: 2.7rem;
}
</style>