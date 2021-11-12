<template>
  <div class="wrapper">
    <div class="d-flex timeline" v-dragscroll>
      <div class="d-flex flex-column align-items-center text-center cursor-pointer date"
           :class="{selected: date.getTime() === selectedDate.getTime()}"
           :style="{minWidth: `${dateWidth}px`}"
           v-for="date in dates" :key="date"
           @click="selectDate(date)">
        <div class="weekday">
          {{ getWeekdayAbb(date.getDay()) }}
        </div>
        <div class="day"> {{ date.getDate() }} </div>
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
        0: "U",
        1: "M",
        2: "T",
        3: "W",
        4: "T",
        5: "F",
        6: "S"
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

      for (let data of this.scheduleData) {
        dates.push(new Date(data.date));
      }

      return dates;
    },
    selectedDate() {
      let selectedDate = null;

      for(let chronology in this.weeksData) {
        if (this.weeksData[chronology].isWeekSelected) {
          selectedDate = this.weeksData[chronology].selectedDate;
        }
      }

      return selectedDate;
    }
  },
  methods: {
    selectDate(date) {
      for (let week in this.weeksData) {
        this.weeksData[week].isWeekSelected = false;

        let firstDate = this.weeksData[week].firstDate;
        let lastDate = this.weeksData[week].lastDate;

        if (date >= firstDate && date <= lastDate) {
          this.weeksData[week].isWeekSelected = true;
          this.weeksData[week].selectedDate = date;
        }
      }
    },
    getWeekdayAbb(weekday) {
      return this.weekdayAbbreviation[weekday];
    },
    getMonthFull(month) {
      return this.monthFull[month];
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
    const scheduleData = inject("scheduleData");
    const weeksData = inject("weeksData");

    return { scheduleData, weeksData };
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