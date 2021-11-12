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

import { createWeekData } from "@/assets/js/fns/Date.js";

import BaseSectionHeader from "@/components/common/BaseSectionHeader.vue";
import Timeline from "@/components/schedule/timeline/Timeline.vue";

export default {
  components: {
    "base-section-header": BaseSectionHeader,
    "timeline": Timeline
  },
  setup() {
    const store = useStore();

    const scheduleData = reactive(store.state.defaultScheduleData);
    const currentDate = new Date(store.state.currentDate.date);

    // 7 days before current day
    let dateBefore = new Date(currentDate);
    dateBefore.setDate(dateBefore.getDate() - 7);

    // 7 days after current day
    let dateAfter = new Date(currentDate);
    dateAfter.setDate(dateAfter.getDate() + 7);

    let current = createWeekData(currentDate, true);
    let last = createWeekData(dateBefore, false);
    let next = createWeekData(dateAfter, false);

    let weeksData = reactive({ last, current, next })

    provide("scheduleData", scheduleData);
    provide("weeksData", weeksData);

    return { scheduleData, weeksData };
  }
}
</script>

<style scoped>
.timeline {
  margin-top: 2.5rem;
}
</style>