<template>
  <section class="container-fluid">
    <top-rankings></top-rankings>
  </section>
  <section class="container-fluid">
    <ranking-filter></ranking-filter>
  </section>
</template>

<script>
import TopRankings from "@/components/rankings/TopRankings.vue";
import RankingFIlter from "@/components/rankings/RankingFilter.vue";

export default {
  components: {
    "top-rankings": TopRankings,
    "ranking-filter": RankingFIlter
  }
}
</script>