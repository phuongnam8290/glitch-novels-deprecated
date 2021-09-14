<template>
  <div class="d-flex justify-content-center">
    <ul class="d-flex overflow-hidden">      
      <li class="d-none d-md-flex item"
          @click.stop="showModal">
        <p class="d-inline-block text-nowrap">
          Ranking: {{ generateRankingMessage("rankings") }}
        </p> 
      </li>
      <li class="d-none d-md-flex item status"
          @click.stop="showModal">
        <p class="d-inline-block text-nowrap">
          Time: {{ generateRankingMessage("periods") }}
        </p> 
      </li>
    </ul>

    <teleport to="#app">
      <ranking-modal v-if="isShowModal"
                     @close-modal="closeModal"></ranking-modal>
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
    },
    closeModal() {
      this.isShowModal = false;
    },
    generateRankingMessage(type) {
      let selectedItems = this.rankings[type].content.filter(item => {
        return item.selected == true;
      });

      return selectedItems[0].name;
    }
  },
  setup() {
    const rankings = reactive({
      rankings: {
        name: "Rankings",
        icon: "fa-crown",
        content: [
          {name: "Trending", selected: false},
          {name: "Bookmark", selected: false},
          {name: "Popular", selected: true},
          {name: "Update", selected: false},
          {name: "Active", selected: false}
        ],
      },
      periods: {
        name: "Periods",
        icon: "fa-calendar-alt",
        content: [
          {name: "Montly", selected: true},
          {name: "Season", selected: false},
          {name: "Bi-annual", selected: false},
          {name: "Annual", selected: false},
          {name: "All-time", selected: false},
        ] 
      }
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