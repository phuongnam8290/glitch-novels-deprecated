<template>
  <section class="container-fluid">
    <base-section-header>
      New Arrival
    </base-section-header>

    <div class="timeline">
      <timeline></timeline>
    </div>
  </section>
</template>

<script>
import { provide, reactive } from "vue";
import { useStore } from "vuex";

import BaseSectionHeader from "@/components/common/BaseSectionHeader.vue";
import Timeline from "@/components/schedule/timeline/Timeline.vue";

export default {
  components: {
    "base-section-header": BaseSectionHeader,
    "timeline": Timeline
  },
  unmounted() {
    // Reset weeksData to initial state
    // TODO Decide between remove when call to backend or cached?
    for (let week of this.weeksData) {
      week.selected = false;

      for (let date of week.weekData) {
        date.selected = false;
      }
    }
  },
  setup() {
    const store = useStore();
    const weeksData = reactive(store.state.defaultWeeksData);

    // Set initial selected week & date
    weeksData[1].selected = true;
    weeksData[0].weekData[0].selected = true;
    weeksData[1].weekData[0].selected = true;
    weeksData[2].weekData[0].selected = true;

    provide("weeksData", weeksData);

    return { weeksData };
  }
}
</script>

<style scoped>
.timeline {
  margin-top: 2.5rem;
}
</style>