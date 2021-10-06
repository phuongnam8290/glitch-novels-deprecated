<template>
  <section class="container-fluid d-none d-md-block">
    <top-rankings></top-rankings>
  </section>
  <section class="container-fluid d-block d-lg-none">
    <rankings-filter-md></rankings-filter-md>
  </section>
  <section class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-9">
        <rankings-list class="rankings-list"></rankings-list>
      </div>
      <div class="d-none d-lg-block col-lg-3">
        <rankings-filter-lg class="rankings-filter-lg"></rankings-filter-lg>
      </div>
    </div>
  </section>
</template>

<script>
import {provide, reactive} from "vue";

import TopRankings from "@/components/rankings/TopRankings.vue";
import RankingsFilterMd from "@/components/rankings/rankings-filters/RankingsFilterMd.vue";
import RankingsFilterLg from "@/components/rankings/rankings-filters/RankingsFilterLg.vue";
import RankingsList from "@/components/rankings/rankings-list/RankingsList.vue";

export default {
  components: {
    "top-rankings": TopRankings,
    "rankings-filter-md": RankingsFilterMd,
    "rankings-filter-lg": RankingsFilterLg,
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

.rankings-filter-lg {
  margin-top: -2rem;
  position: sticky;
  top: 4rem;
}
</style>