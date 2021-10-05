<template>
  <div class="wrapper">
    <base-accordion id="acc-rankings" active>
      <template v-slot:title> {{ rankings.rankings.name }} </template>
      <template v-slot:content>
        <ul class="d-flex">
          <li :class="{active: ranking.selected}"
              v-for="(ranking, index) in rankings.rankings.content" :key="ranking.name"
              v-tooltip="{content: ranking.tooltip ? `<i class='fal fa-info-circle'></i> ${ranking.tooltip}` : null, html: true}"
              @click="toggleFilter('rankings', index)">
            <p class="pointable">
              {{ ranking.name }}
            </p>
          </li>
        </ul>
      </template>
    </base-accordion>
    <base-accordion id="acc-periods" active>
      <template v-slot:title> {{ rankings.periods.name }} </template>
      <template v-slot:content>
        <ul class="d-flex">
          <li :class="{active: period.selected}"
              v-for="(period, index) in rankings.periods.content" :key="period.name"
              v-tooltip="{content: period.tooltip ? `<i class='fal fa-info-circle'></i> ${period.tooltip}` : null, html: true}"
              @click="toggleFilter('periods', index)">
            <p class="pointable">
              {{ period.name }}
            </p>
          </li>
        </ul>
      </template>
    </base-accordion>
  </div>
</template>

<script>
import { inject } from "vue";
import BaseAccordion from "@/components/common/BaseAccordion.vue";

export default {
  components: {
    "base-accordion": BaseAccordion
  },
  methods: {
    toggleFilter(type, index) {
      for (let filter of this.rankings[type].content) {
        filter.selected = false;
      }
      this.rankings[type].content[index].selected = true;

      console.log(this.rankings[type].content[index]);
    }
  },
  setup() {
    const rankings = inject("rankings");

    return {
      rankings
    }
  }
}
</script>

<style scoped>
ul {
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-top: -1rem;
}

li {
  border: 1px solid var(--primary-color); 
  padding: .5rem 1rem .4rem 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
  transition: all .3s;
  cursor: pointer;
}

li:hover {
  color:var(--secondary-color);
  border: 1px solid var(--secondary-color);
}

li.active {
  border: 1px solid var(--darker-secondary-color);
  background-color: var(--darker-secondary-color);
  color: var(--primary-color);
}
</style>