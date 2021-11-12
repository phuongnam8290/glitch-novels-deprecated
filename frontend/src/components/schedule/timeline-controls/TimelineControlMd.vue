<template>
  <div class="wrapper">
    <week-switcher class="d-flex justify-content-center"></week-switcher>
    <div class="d-flex justify-content-around timeline">
      <div class="d-flex flex-column align-items-center text-center date"
           :class="{selected: date.getTime() === selectedWeek.selectedDate.getTime()}"
           :style="{width: `${100 / selectedWeek.week.length}vw`}"
           v-for="date in selectedWeek.week" :key="date">
        <div class="cursor-pointer date-inner"
             @click="selectDate(date)">
          <div class="d-inline-block weekday"
               :class="addWeekdayClass(date)">
            {{ getWeekday(date.getDay()) }}
          </div>
          <div class="day-month"> {{ date.getDate() }}-{{ date.getMonth() +1 }} </div>
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
  data() {
    return {
      weekday: {
        0: "SUN",
        1: "MON",
        2: "TUE",
        3: "WED",
        4: "THU",
        5: "FRI",
        6: "SAT"
      }
    }
  },
  computed: {
    weeks() {
      let weeks = {
        last: [],
        current: [],
        next: []
      }

      for(let data of this.scheduleData) {
        let date = new Date(data.date);

        if (date >= this.weeksData.last.firstDate &&
            date <= this.weeksData.last.lastDate) {
          weeks.last.push(date);
        }
        else if (date >= this.weeksData.current.firstDate &&
            date <= this.weeksData.current.lastDate) {
          weeks.current.push(date);
        }
        else if (date >= this.weeksData.next.firstDate &&
            date <= this.weeksData.next.lastDate) {
          weeks.next.push(date);
        }
      }

      return weeks;
    },
    selectedWeek() {
      let selectedWeek = {
        selectedDate: null,
        week: []
      };

      for (let chronology in this.weeksData) {
        if (this.weeksData[chronology].isWeekSelected) {
          selectedWeek.week = this.weeks[chronology];
          selectedWeek.selectedDate = this.weeksData[chronology].selectedDate;
          break;
        }
      }

      return selectedWeek;
    }
  },
  methods: {
    getWeekday(day) {
      return this.weekday[day];
    },
    isFirstWeekday(date) {
      return date.getTime() === this.selectedWeek.week[0].getTime();
    },

    isLastWeekday(date) {
      let week = this.selectedWeek.week;
      return date.getTime() === week[week.length - 1].getTime();
    },

    addWeekdayClass(date) {
      if (this.isFirstWeekday(date)) {
        return {"first-weekday": true};
      } else if (this.isLastWeekday(date)) {
        return {"last-weekday": true};
      }
    },
    selectDate(date) {
      for(let chronology in this.weeksData) {
        if (this.weeksData[chronology].isWeekSelected) {
          this.weeksData[chronology].selectedDate = date;
          break;
        }
      }
    }
  },
  mounted() {
  },
  setup() {
    const scheduleData = inject("scheduleData");
    const weeksData = inject("weeksData");

    return { scheduleData, weeksData };
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