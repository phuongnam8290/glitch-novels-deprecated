<template>
  <section class="container-fluid d-none d-md-block">
    <top-rankings-list></top-rankings-list>
  </section>
  <section class="container-fluid d-block d-xl-none">
    <rankings-filter-top></rankings-filter-top>
  </section>
  <section class="container-fluid">
    <div class="row">
      <div class="col-12 col-xl-9">
        <rankings-list class="rankings-list"></rankings-list>
      </div>
      <div class="d-none d-xl-block col-xl-3">
        <rankings-filter-side class="rankings-filter-side"></rankings-filter-side>
      </div>
    </div>
  </section>
</template>

<script>
import {provide, reactive} from "vue";

import TopRankingsList from "@/components/rankings/top-rankings/TopRankingsList.vue";
import RankingsFilterTop from "@/components/rankings/rankings-filters/RankingsFilterTop.vue";
import RankingsFilterSide from "@/components/rankings/rankings-filters/RankingsFilterSide.vue";
import RankingsList from "@/components/rankings/rankings-list/RankingsList.vue";

export default {
  components: {
    "top-rankings-list": TopRankingsList,
    "rankings-filter-top": RankingsFilterTop,
    "rankings-filter-side": RankingsFilterSide,
    "rankings-list": RankingsList
  },
  setup() {
    const rankings = reactive({
      rankings: {
        name: "Rankings",
        icon: "fa-crown",
        content: [
          {name: "Trending", selected: false, 
           tooltip: "The ranking is based on the total number of readers votes during a specific period."},
          {name: "Collect", selected: false, 
           tooltip: "The ranking is based on the number of readers who bookmark this book during a specific period."},
          {name: "Popular", selected: true,
           tooltip: "The ranking is based on the number of increased readers to a book during a specific period."},
          {name: "Update", selected: false,
           tooltip: "The ranking is based on the number of words published during a specific period."},
          {name: "Active", selected: false,
           tooltip: "The ranking is based on the number of new comments to a book during a specific period."}
        ],
      },
      periods: {
        name: "Periods",
        icon: "fa-calendar-alt",
        content: [
          {name: "Montly", selected: true},
          {name: "Season", selected: false, tooltip: "Last 3 months"},
          {name: "Bi-annual", selected: false, tooltip: "Last 6 months"},
          {name: "Annual", selected: false, tooltip: "Last year"},
          {name: "All-time", selected: false},
        ] 
      }
    });

    provide("rankings", rankings);
  }
}
</script>

<style scoped>
.rankings-list {
  margin-top: -2.5rem;
  padding-right: 2rem;
}

@media (max-width: 992px) {
  .rankings-list {
      padding-right: 0;
  }
}

.rankings-filter-side {
  margin-top: -2rem;
  position: sticky;
  top: 4rem;
}
</style>