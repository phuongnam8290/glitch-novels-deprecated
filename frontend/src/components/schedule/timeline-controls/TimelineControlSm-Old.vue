<template>
  <div class="wrapper">
    <div class="d-flex timeline" v-dragscroll>
      <div class="d-flex flex-column align-items-center text-center cursor-pointer date"
           :class="{selected: setSelectedDateStyle(date)}"
           :style="{minWidth: `${dateWidth}px`}"
           v-for="date in dates" :key="date.day"
           @click="selectDate(date)">
        <div class="weekday">
          {{ getWeekdayAbb(date.weekday) }}
        </div>
        <div class="day"> {{ date.day }} </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";


export default {
  data() {
    return {
      weekdayAbbreviation: {
        MON: "M",
        TUE: "T",
        WED: "W",
        THU: "T",
        FRI: "F",
        SAT: "S",
        SUN: "U"
      },
      monthFull: {
        [1]: "January",
        [2]: "February",
        [3]: "March",
        [4]: "April",
        [5]: "May",
        [6]: "June",
        [7]: "July",
        [8]: "August",
        [9]: "September",
        [10]: "October",
        [11]: "November",
        [12]: "December"

      },
      resizeObserver: null,
      timelineWidth: 0
    }
  },
  computed: {
    dateWidth() {
      return this.timelineWidth === 0 ? 0 : this.timelineWidth / 7;
    },
    dates() {
      let dates = [];

      for (let week of this.weeksData) {
        for (let date of week.weekData) {
          date.weekChronology = week.weekChronology;
          dates.push(date);
        }
      }

      return dates;
    },
    selectedWeekChronology() {
      for (let week of this.weeksData) {
        if (week.selected === true) {
          return week.weekChronology;
        }
      }

      return null;
    },
    selectedDate() {
      for (let date of this.dates) {
        if (date.selected === true &&
            date.weekChronology === this.selectedWeekChronology) {
          return date;
        }
      }

      return null;
    }
  },
  methods: {
    selectDate(selectedDate) {
      for (let date of this.dates) {
        if (date.weekChronology === selectedDate.weekChronology) {
          date.selected = false;
        }
        if (date.day === selectedDate.day &&
            date.month === selectedDate.month) {
          date.selected = true;
        }
      }

      for (let week of this.weeksData) {
        week.selected = week.weekChronology === selectedDate.weekChronology;
      }
    },
    getWeekdayAbb(weekday) {
      return this.weekdayAbbreviation[weekday];
    },
    getMonthFull(month) {
      return this.monthFull[month];
    },
    setSelectedDateStyle(date) {
      return (this.selectedDate.day === date.day &&
              this.selectedDate.month === date.month &&
              this.selectedDate.weekChronology === date.weekChronology);
    }
  },
  mounted() {
    let timeline = this.$el.querySelector(".timeline");

    this.resizeObserver = new ResizeObserver(() => {
      this.timelineWidth = timeline.offsetWidth;
    });
    this.resizeObserver.observe(timeline);
  },
  unmounted() {
    let timeline = this.$el.querySelector(".timeline");
    this.resizeObserver.unobserve(timeline);
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
  overflow: hidden;
}

.timeline > div {
  overflow: hidden;
}

.day {
  font-weight: bold;
  font-size: 1.3rem;
  width: 80%;
  margin-top: 1rem;
  padding: .25rem;
}

.weekday,
.day{
  transition: all .25s ease-in-out;
}

.date.selected .weekday,
.date:hover .weekday{
  color: var(--secondary-color);
}

.date.selected .day,
.date:hover .day {
  color: var(--primary-color);
  background-color: var(--darker-secondary-color);
}
</style>