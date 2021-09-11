<template>
  <div class="row pb-2 header">
    <div class="col-12 d-flex justify-content-between px-0 left-controls">
      
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

      <div class="d-flex align-self-start right-controls">
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
</template>

<script>
import BaseHeaderSlider from "@/components/common/BaseHeaderSlider.vue";

export default {
  components: {
    "base-header-slider": BaseHeaderSlider
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
.row.header{
  border-bottom: 1px solid #EBE5DE;
}

.right-controls {
  font-size: 1.3rem;
}

.filter {
  margin-right: .2rem;
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