<template>
  <div class="d-flex justify-content-center">
    <ul class="d-flex overflow-hidden">      
      <li class="d-none d-md-flex item"
          @click="showModal">
        <p class="d-inline-block text-nowrap">
          Type: Popular Ranking
        </p> 
      </li>
      <li class="d-none d-md-flex item status"
          @click="showModal">
        <p class="d-inline-block text-nowrap">
          Time: Monthly
        </p> 
      </li>
    </ul>

    <teleport to="#app">
      <ranking-modal v-if="isShowModal"></ranking-modal>
    </teleport>
  </div>
</template>

<script>
import {provide, reactive} from "vue";

import RankingModal from "@/components/rankings/RankingModal.vue";

export default {
  components: {
    "ranking-modal": RankingModal
  },
  data() {
    return {
      isShowModal: false
    }
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    }
  },
  setup() {
    const rankings = reactive({
      types: [
        {title: "Trending Ranking", selected: false},
        {title: "Bookmark Ranking", selected: false},
        {title: "Popular Ranking", selected: true},
        {title: "Update Ranking", selected: false},
        {title: "Active Ranking", selected: false}
      ],
      times: [
        {title: "Montly", selected: true},
        {title: "Season", selected: false},
        {title: "Bi annual", selected: false},
        {title: "Annual", selected: false},
        {title: "All-time", selected: false},
      ]
    });

    provide("rankings", rankings);

    return { rankings };
  }
}
</script>

<style scoped>
ul {
  flex-wrap: wrap;
  margin-bottom: -.5rem;
}

li {
  border: 1px solid #EBE5DE; 
  padding: .8rem 1rem .8rem 1rem;
  margin-right: 1rem;
  margin-bottom: .5rem;
  transition: all .3s;
  cursor: pointer;
}

li p {
  cursor: pointer;
}

li.add-filter:hover {
  color:#70AED2;
  border: 1px solid #70AED2;
}

li i {
  padding-right: .7rem;
}

li.item {
  max-width: 25vw;
}

li.item i {
  padding-right: .6rem;
  --fa-secondary-opacity: .7;
}
</style>