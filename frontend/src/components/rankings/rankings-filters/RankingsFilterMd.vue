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
import {provide, inject} from "vue";

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
    const rankings = inject("rankings");

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