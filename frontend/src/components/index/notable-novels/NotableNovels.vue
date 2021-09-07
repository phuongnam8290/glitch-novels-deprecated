<template>
  <ul class="d-flex align-items-start tabs">
    <li :class="{active: activeTab == 'latest-novels-tab'}">
      <div class="tab" @click="setActiveTab('latest-novels-tab')">
        <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
          <i class="fas fa-clock"></i>
        </span>
        <span class="d-none d-md-inline">Latest Update</span>
      </div>
    </li>
    <li :class="{active: activeTab == 'popular-novels-tab'}">
      <div class="tab" @click="setActiveTab('popular-novels-tab')">
        <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
          <i class="fas fa-fire"></i>
        </span>
        <span class="d-none d-md-inline">Most Popular</span>
      </div>
    </li>
    <li :class="{active: activeTab == 'new-novels-tab'}">
      <div class="tab" @click="setActiveTab('new-novels-tab')">
        <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
          <i class="fas fa-sparkles"></i>
        </span>
        <span class="d-none d-md-inline">New Arrival</span>
      </div>
    </li>
  </ul>

  <component :is="activeTab"></component>
</template>

<script>
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
      activeTab: "latest-novels-tab"
    }
  },
  methods: {
    setActiveTab(activeTab) {
      this.activeTab = activeTab;
    }
  }
}
</script>

<style scoped>
.tabs {
  border-bottom: none !important;
}

.active .tab{
  border: 1px solid #EBE5DE !important;
  border-bottom: none !important;
  border-radius: 0;
  color: #EBE5DE !important;
}

.active .tab:before {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 100%;
  width: 100vw;
  border-bottom: 1px solid #EBE5DE;
}

.active .tab:after {
  content: '';
  position: absolute;
  bottom: 0px;
  right: 100%;
  width: 1500px;
  border-bottom: 1px solid #EBE5DE;
}

.tab {
  color: #EBE5DE;
  position: relative;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 1rem 1.5rem;
  border:none !important;
  background: transparent;
  cursor: pointer;
}

.tab:hover {
  transition: all 0.3s ease-in-out;
  color: #70AED2;;
}
</style>