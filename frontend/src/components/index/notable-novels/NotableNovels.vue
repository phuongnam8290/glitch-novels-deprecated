<template>
  <div class="row">
    <div class="col-12 pr-0">
      <ul class="slider tab-bar bar-style-1 title-text">
        <li @click="setActiveTab('latest-novels-tab')">
          <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
            <i class="fas fa-clock"></i>
          </span>
          <span class="d-none d-md-inline">Latest Update</span>
        </li>
        <li @click="setActiveTab('popular-novels-tab')">
          <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
            <i class="fas fa-fire"></i>
          </span>
          <span class="d-none d-md-inline">Most Popular</span>
        </li>
        <li @click="setActiveTab('new-novels-tab')">
          <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
            <i class="fas fa-sparkles"></i>
          </span>
          <span class="d-none d-md-inline">New Arrival</span>
        </li>
      </ul>
    </div>
  </div>

  <transition enter-active-class="fadein"
              leave-active-class="fadeout"
              mode="out-in">
    <component :is="activeTab"></component>
  </transition>


</template>

<script>
import $ from "jquery"
import "@/assets/js/plugins/RegisterTabBar.js"
import LatestNovelsTab from "@/components/index/notable-novels/latest-novels/LatestNovelsTab.vue"
import PopularNovelsTab from "@/components/index/notable-novels/popular-novels/PopularNovelsTab.vue"
import NewNovelsTab from "@/components/index//notable-novels/new-novels/NewNovelsTab.vue"

export default {
  components: { 
    "latest-novels-tab": LatestNovelsTab,
    "popular-novels-tab": PopularNovelsTab,
    "new-novels-tab": NewNovelsTab
  },
  data() {
    return {
      activeTab: "latest-novels-tab",
      test: true
    }
  },
  methods: {
    setActiveTab(activeTab) {
      this.activeTab = activeTab;
    }
  },
  mounted() {
    $(".slider").RegisterTabBar("slider1").find("li:first-child").click();
  }
}
</script>

<style scoped>
ul.tab-bar,
ul.tab-bar>li { 
  position: relative; 
  border-bottom: 1px solid #EBE5DE;
}

ul.tab-bar.bar-style-1:before { 
  background-color: #70AED2; 
  margin-bottom: -2px;
}

ul.tab-bar:before {
  display: inline-block;
  content: '';
  position: absolute;
  bottom: 0; 
  left: 0;
  height: 3px;
  z-index: 1;
}

ul.tab-bar>li { 
  list-style-type: none; 
  border-width: 0; 
}

ul.tab-bar.bar-style-1>li.active { 
  color: #70AED2; 
  transition: color 0.5s;
}

li {
  list-style-type: none;
  display: inline-block;
  border-width: 0;
  padding-bottom: 1.5rem;
  margin-right: 2rem;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  transition: color 0.5s;
}

li:hover {
  color: #70AED2;
}
</style>