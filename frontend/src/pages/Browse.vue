<template>
  <section>
    <browser-banner></browser-banner>
  </section>
  
  <section class="container-fluid">

  <div class="row pb-2 header">
    <div class="col-12 d-flex justify-content-between px-0">
      
      <base-header-slider :style="'button'"
                          :slots="slots"
                          @activate-tab="null">
        <template v-slot:[getSlotName(0)]>
          <span>
            <i class="fas fa-list"></i>
          </span>
        </template>

        <template v-slot:[getSlotName(1)]>
          <span>
            <i class="fas fa-th-list"></i>
          </span>
        </template>

        <template v-slot:[getSlotName(2)]>
          <span>
            <i class="fas fa-th"></i>
          </span>
        </template>
      </base-header-slider>

      <div class="d-flex align-self-start title-text">
        <p class="filter">
          <i class="fas fa-filter"></i>
          Filter
        </p>
        <p class="sort">
          <i class="fas fa-sort-amount-up-alt"></i>
          Sort
        </p>
      </div>
    </div>
  </div>

  </section>
</template>

<script>
import BrowserBanner from "@/components/browser/BrowserBanner.vue";
import BaseHeaderSlider from "@/components/common/BaseHeaderSlider.vue";

export default {
  components: {
    "browser-banner": BrowserBanner,
    "base-header-slider": BaseHeaderSlider,
  }, 
  data() {
    return {
      slots: [
        {
          id: 1,
          name: "minimal"
        },
        {
          id: 2,
          name: "compact"
        },
        {
          id: 3,
          name: "thumbnail"
        }
      ]
    }
  },
  methods: {
    getSlotName(index) {
      return this.slots[index].name;
    }
  }
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid #EBE5DE;
}

.filter {
  margin-right: 1rem;
}

.filter,
.sort {
  padding: 0.6rem;
  border: 1px solid transparent;
  transition: all 0.3s;
  cursor: pointer;
}

.filter:hover,
.sort:hover {
  color: #70AED2;
  border: 1px solid #70AED2;
}
</style>