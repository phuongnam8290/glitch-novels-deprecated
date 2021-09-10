<template>
  <div class="row">
    <div class="col-12 pr-0 pb-2">
      <base-header-slider :style="'header'"
                          :slots="slots"
                          @activate-tab="changeComponent">
        <template v-slot:[getSlotName(0)]>
          <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
            <i class="fas fa-clock"></i>
          </span>
          <span class="d-none d-md-inline">Latest Update</span>
        </template>

        <template  v-slot:[getSlotName(1)]>
          <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
            <i class="fas fa-fire"></i>
          </span>
          <span class="d-none d-md-inline">Most Popular</span>
        </template>

        <template v-slot:[getSlotName(2)]>
          <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
            <i class="fas fa-sparkles"></i>
          </span>
          <span class="d-none d-md-inline">New Arrival</span>
        </template>
      </base-header-slider>

    </div>
  </div>

  <transition enter-active-class="fadein"
              leave-active-class="fadeout"
              mode="out-in">
    <component :is="activeTab"></component>
  </transition>


</template>

<script>
import BaseHeaderSlider from "@/components/common/BaseHeaderSlider.vue";
import LatestNovelsTab from "@/components/index/notable-novels/latest-novels/LatestNovelsTab.vue";
import PopularNovelsTab from "@/components/index/notable-novels/popular-novels/PopularNovelsTab.vue";
import NewNovelsTab from "@/components/index//notable-novels/new-novels/NewNovelsTab.vue";

export default {
  components: { 
    "base-header-slider": BaseHeaderSlider,
    "latest-novels-tab": LatestNovelsTab,
    "popular-novels-tab": PopularNovelsTab,
    "new-novels-tab": NewNovelsTab
  },
  data() {
    return {
      activeTab: "latest-novels-tab",      
      slots: [
        {
          id: 1,
          name: "latest-novels-tab"
        },
        {
          id: 2,
          name: "popular-novels-tab"
        },
        {
          id: 3,
          name: "new-novels-tab"
        }
      ]
    }
  },
  methods: {
    getSlotName(index) {
      return this.slots[index].name;
    },
    changeComponent(name) {
      this.activeTab = name;
    }
  }
}
</script>

<style scoped>
</style>