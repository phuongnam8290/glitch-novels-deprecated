<template>
  <div class="row align-items-center">
    <div class="col-12 d-flex justify-content-between px-0 right-controls">
      <sort-drop-down-list></sort-drop-down-list>

      <base-header-slider :style="'button'"
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
      </base-header-slider>
    </div>
  </div>
</template>

<script>
import BaseHeaderSlider from "@/components/common/BaseHeaderSlider.vue";
import SortDropdownList from "@/components/browse/SortDropdownList.vue"

export default {
  components: {
    "base-header-slider": BaseHeaderSlider,
    "sort-drop-down-list": SortDropdownList
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
</style>