<template>
  <div class="wrapper">
    <week-switcher class="d-flex justify-content-center"></week-switcher>
    <div class="d-flex justify-content-around timeline">
      <div class="d-flex flex-column align-items-center text-center date"
           :class="{selected: !!date.selected}"
           :style="{width: `${100 / week.weekData.length}vw`}"
           v-for="(date, index) in week.weekData" :key="date.weekday">
        <div class="cursor-pointer date-inner"
             @click="selectDate(index)">
          <div class="d-inline-block weekday"
               :class="addWeekdayClass(date.weekday)">
            {{ date.weekday }}
          </div>
          <div class="day-month"> {{ date.day }}-{{ date.month }} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

import WeekSwitcher from "@/components/schedule/timeline-controls/WeekSwitcher";
export default {
  components: {
    "week-switcher": WeekSwitcher
  },
  computed: {
    week() {
      for (let week of this.weeksData) {
        if (week.selected === true) {
          return week;
        }
      }

      return null;
    }
  },
  methods: {
    isFirstWeekday(weekday) {
      return weekday === this.week.weekData[0].weekday;
    },

    isLastWeekday(weekday) {
      return weekday === this.week.weekData[this.week.weekData.length - 1].weekday;
    },

    addWeekdayClass(weekday) {
      if (this.isFirstWeekday(weekday)) {
        return {"first-weekday": true};
      } else if (this.isLastWeekday(weekday)) {
        return {"last-weekday": true};
      }
    },
    selectDate(index) {
      for (let date of this.week.weekData) {
        date.selected = false;
      }

      this.week.weekData[index].selected = true;
      console.log(this.weeksData);
    }
  },
  setup() {
    const weeksData = inject("weeksData");
    return { weeksData };
  }
}
</script>

<style scoped>
.timeline {
  margin-top: 2.5rem;
}

.timeline > div {
  overflow: hidden;
}

.weekday {
  position: relative;
  border: 1px solid rgba(var(--primary-color-rgb), .6);
  width: 56px;
  border-radius: 5px;
  padding: .2rem .5rem;
}

.weekday:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 100%;
  width: 50vw;
  border-bottom: 1px solid rgba(var(--primary-color-rgb), .6);
  margin-left: .3rem;
}

.weekday:before {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  width: 50vw;
  border-bottom: 1px solid rgba(var(--primary-color-rgb), .6);
  margin-right: .3rem;
}

.first-weekday:before {
  border-bottom: none !important;
}

.last-weekday:after {
  border-bottom: none !important;
}

.day-month {
  margin: .5rem;
}

.weekday,
.day-month{
  transition: all .25s ease-in-out;
}

.date.selected .weekday,
.date-inner:hover .weekday{
  color: var(--primary-color);
  background-color: var(--darker-secondary-color);
  border: 1px solid var(--darker-secondary-color);
}

.date.selected .day-month,
.date-inner:hover .day-month {
  color: var(--secondary-color);
}
</style>