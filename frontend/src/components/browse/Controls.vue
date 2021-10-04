<template>
  <div class="row filter-control">
    <div class="col-12">
      <filter-control></filter-control>
    </div>
  </div>

  <div class="row">
    <div class="col-12 d-flex justify-content-between align-items-end misc-controls">
      <sort-drop-down-list class="drop-down-list"></sort-drop-down-list>

      <header-slider class="slider"
                     :style="'button'"
                     :slots="slots"
                     :start-position="2"
                     @activate-tab="emitChangeStyle">
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
      </header-slider>
    </div>
  </div>
</template>

<script>
import FilterControl from "@/components/browse/FilterControl.vue";
import HeaderSlider from "@/components/common/BaseHeaderSlider.vue";
import SortDropdownList from "@/components/browse/SortDropdownList.vue";

export default {
  components: {
    "header-slider": HeaderSlider,
    "sort-drop-down-list": SortDropdownList,
    "filter-control": FilterControl
  },
  emits: ["change-style"],
  data() {
    return {
      slots: [
        {
          id: 1,
          name: "minimal"
        },
        {
          id: 2,
          name: "default"
        },
        {
          id: 3,
          name: "thumbnail"
        }
      ],
    }
  },
  methods: {
    getSlotName(index) {
      return this.slots[index].name;
    },
    emitChangeStyle(name) {
      this.$emit("change-style", name);
    }
  }
}
</script>

<style scoped>

.misc-controls {
  flex-wrap: wrap;
}

.misc-controls .drop-down-list {
  margin-top: 1.5rem;
}

.misc-controls .slider {
  margin-top: 1.5rem;
}

</style>