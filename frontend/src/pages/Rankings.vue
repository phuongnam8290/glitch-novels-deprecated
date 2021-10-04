<template>
  <section class="container-fluid d-none d-md-block">
    <top-rankings></top-rankings>
  </section>
  <section class="container-fluid d-block d-lg-none">
    <rankings-filter></rankings-filter>
  </section>
  <section class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-9">
        <rankings-list class="rankings-list"></rankings-list>
      </div>
      <div class="col-0 col-lg-3"></div>
    </div>
  </section>
</template>

<script>
import TopRankings from "@/components/rankings/TopRankings.vue";
import RankingsFIlter from "@/components/rankings/RankingsFilter.vue";
import RankingsList from "@/components/rankings/rankings-list/RankingsList.vue";

export default {
  components: {
    "top-rankings": TopRankings,
    "rankings-filter": RankingsFIlter,
    "rankings-list": RankingsList
  }
}
</script>

<style scoped>
.rankings-list {
  margin-top: -2.5rem;
}
</style>