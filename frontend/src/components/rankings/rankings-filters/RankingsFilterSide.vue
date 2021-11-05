<template>
  <div class="wrapper">
    <base-accordion v-for="itemsGroup in rankings" :key="itemsGroup.name"
                    :id="`acc-${itemsGroup.name}`" active>
      <template v-slot:title> {{ itemsGroup.name }} </template>
      <template v-slot:content>
        <ul class="d-flex">
          <li :class="{active: item.selected}"
              v-for="(item, index) in itemsGroup.content" :key="item.name"
              v-tooltip="{content: item.tooltip ? `<i class='fal fa-info-circle'></i> ${item.tooltip}` : null, html: true}"
              @click="toggleFilter(itemsGroup.content, index)">
            <p class="cursor-pointer">
              {{ item.name }}
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
    toggleFilter(itemsGroup, index) {
      for (let filter of itemsGroup) {
        filter.selected = false;
      }
      itemsGroup[index].selected = true;
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
  padding-top:1px;
  padding-bottom: 1px;
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