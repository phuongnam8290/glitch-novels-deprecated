<template>
  <section class="container-fluid">
    <base-section-header>
      New Arrival
    </base-section-header>

    <div class="d-flex justify-content-center chronology-control">
      <base-button-group :btns="btnGroupData"
                         :style="'switch-btn'"
                         @clickBtnGroup="emitChangeWeek">
      </base-button-group>
    </div>
    
    <div class="timeline">
      <timeline></timeline>
    </div>
  </section>
</template>

<script>
import { provide, reactive } from "vue";

import BaseSectionHeader from "@/components/common/BaseSectionHeader.vue";
import BaseButtonGroup from "@/components/common/BaseButtonGroup.vue";
import Timeline from "@/components/schedule/timeline/Timeline.vue";

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
          {ref: "last", text: "Last week"},
          {ref: "current", text: "This week"}
        ],
        initBtn: {
          ref: "current"
        }
      }
    }
  },
  methods: {
    emitChangeWeek(selectedWeek) {
      // Unset selected week and day
      for (let week of this.weeksData) {
        week.selected = false;

        for (let day of week.weekData) {
          day.selected = false;
        }
      }

      // Set new selected week and day
      if (selectedWeek === "current") {
        this.weeksData[1].selected = true;
        this.weeksData[1].weekData[0].selected = true;
      } else if (selectedWeek === "last") {
        this.weeksData[0].selected = true;
        this.weeksData[0].weekData[0].selected = true;
      }
    }
  },
  setup() {
    const weeksData = reactive( [
      {
        weekData: [{
          weekday: "MON",
          day: 25,
          month: 10
        },
        {
          weekday: "TUE",
          day: 26,
          month: 10
        },
        {
          weekday: "WED",
          day: 27,
          month: 10
        },
        {
          weekday: "THU",
          day: 28,
          month: 10
        },
        {
          weekday: "FRI",
          day: 29,
          month: 10
        },
        {
          weekday: "SAT",
          day: 30,
          month: 10
        },
        {
          weekday: "SUN",
          day: 31,
          month: 10
        }]
      },
      {
        weekData: [{
          weekday: "MON",
          day: 1,
          month: 11
        },
        {
          weekday: "TUE",
          day: 2,
          month: 11
        },
        {
          weekday: "WED",
          day: 3,
          month: 11
        },
        {
          weekday: "THU",
          day: 4,
          month: 11
        },
        {
          weekday: "FRI",
          day: 5,
          month: 11
        },
        {
          weekday: "SAT",
          day: 6,
          month: 11
        },
        {
          weekday: "SUN",
          day: 7,
          month: 11
        }],
      }
    ]);

    weeksData[1].selected = true;
    provide("weeksData", weeksData);

    return { weeksData };
  }
}
</script>

<style scoped>
.chronology-control,
.timeline {
  margin-top: 2.5rem;
}
</style>