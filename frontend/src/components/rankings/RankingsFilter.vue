<template>
  <div class="d-flex justify-content-center">
    <ul class="d-flex">      
      <li class="d-flex"
          @click.stop="showModal">
        <p class="text-nowrap">
          <span>
            <i class="fad fa-crown"></i>
          </span>
          <span>
            Ranking: {{ generateRankingMessage("rankings") }}            
          </span>
        </p> 
      </li>
      <li class="d-flex"
          @click.stop="showModal">
        <p class="text-nowrap">
          <span>
            <i class="fad fa-calendar-alt"></i>
          </span>
          <span>
            Time: {{ generateRankingMessage("periods") }}
          </span>
        </p> 
      </li>
    </ul>

    <teleport to="#app">
      <rankings-modal v-if="isShowModal"
                     @close-modal="closeModal"></rankings-modal>
    </teleport>
  </div>
</template>

<script>
import {provide, reactive} from "vue";

import RankingsModal from "@/components/rankings/RankingsModal.vue";

export default {
  components: {
    "rankings-modal": RankingsModal
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

    return { rankings };
  }
}
</script>

<style scoped>
ul {
  flex-wrap: wrap;
  margin-top: -.5rem;
}

li {
  border: 1px solid var(--primary-color); 
  padding: .8rem 1rem .8rem 1rem;
  margin-right: 1rem;
  margin-top: .5rem;
  transition: all .3s;
  cursor: pointer;
}

li.add-filter:hover {
  color:var(--secondary-color);
  border: 1px solid var(--secondary-color);
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