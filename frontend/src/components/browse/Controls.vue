<template>
  <div class="row filter-control">
    <div class="col-12">
      <filter-control></filter-control>
    </div>
  </div>

  <div class="row">
    <div class="col-12 d-flex justify-content-between align-items-end misc-controls">
      <sort-drop-down-list class="drop-down-list"></sort-drop-down-list>

      <base-button-group  class="btn-group"
                          :btns="btnGroupData"
                          @clickBtnGroup="emitChangeStyle">
      </base-button-group>
    </div>
  </div>
</template>

<script>
import FilterControl from "@/components/browse/FilterControl.vue";
import BaseButtonGroup from "@/components/common/BaseButtonGroup.vue";
import SortDropdownList from "@/components/browse/SortDropdownList.vue";

export default {
  components: {
    "base-button-group": BaseButtonGroup,
    "sort-drop-down-list": SortDropdownList,
    "filter-control": FilterControl
  },
  emits: ["change-style"],
  data() {
    return {
      btnGroupData: {
        totalBtns: [
          {ref: "minimal", class: "fas fa-list"},
          {ref: "default", class: "fas fa-th-list"},
          {ref: "thumbnail", class: "fas fa-th"}
        ],
        initBtn: {
          ref: "default"
        }
      }
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

.misc-controls .btn-group {
  margin-top: 1.5rem;
}

</style>