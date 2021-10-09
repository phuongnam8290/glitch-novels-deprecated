<template>
  <section class="container-fluid">
    <base-section-header>
      New Arrival
    </base-section-header>

    <div class="d-flex justify-content-center chronology-control">
      <base-button-group  :btns="btnGroupData" :style="'switch-btn'">
      </base-button-group>
    </div>
    
    <div class="timeline">
      <timeline></timeline>
    </div>
  </section>
</template>

<script>
import BaseSectionHeader from "@/components/common/BaseSectionHeader.vue";
import BaseButtonGroup from "@/components/common/BaseButtonGroup.vue";
import Timeline from "@/components/schedule/Timeline.vue";

export default {
  components: {
    "base-section-header": BaseSectionHeader,
    "base-button-group": BaseButtonGroup,
    "timeline": Timeline
  },
  data() {
    return {
      btnGroupData: {
        totalBtns: [
          {ref: "btn-one", text: "Last week"},
          {ref: "btn-two", text: "This week"}
        ],
        initBtn: {
          ref: "btn-two"
        }
      }
    }
  }
}
</script>

<style scoped>
.chronology-control,
.timeline {
  margin-top: 2.5rem;
}
</style>