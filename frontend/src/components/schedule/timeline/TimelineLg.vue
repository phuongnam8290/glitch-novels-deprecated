<template>
  <div class="justify-content-around timeline-lg">
    <div class="d-flex flex-column align-items-center text-center"
         :style="{width: `${100 / week.weekData.length}vw`}"
         v-for="date in week.weekData" :key="date.weekday">

      <div class="d-inline-block weekday"
           :class="addWeekdayClass(date.weekday)">
        {{ date.weekday }}
      </div>
      <div class="date"> {{ date.day }}-{{ date.month }} </div>
      <novel-thumbnail class="new-novel"></novel-thumbnail>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import NovelThumbnail from "@/components/common/cards/NovelThumbnail";

export default {
  components: {
    "novel-thumbnail": NovelThumbnail
  },
  data() {
    return {
      novel: this.$store.state.defaultNovelData
    }
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
    }
  },
  setup() {
    const weeksData = inject("weeksData");

    return { weeksData };
  }
}
</script>

<style scoped>
.timeline-lg > div {
  overflow: hidden;
}

.timeline-lg .weekday {
  position: relative;
  border: 1px solid rgba(var(--primary-color-rgb), .6);
  width: 56px;
  border-radius: 5px;
  padding: .2rem .5rem;
}

.timeline-lg .weekday:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 100%;
  width: 50vw;
  border-bottom: 1px solid rgba(var(--primary-color-rgb), .6);
  margin-left: .3rem;
}

.timeline-lg .weekday:before {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  width: 50vw;
  border-bottom: 1px solid rgba(var(--primary-color-rgb), .6);
  margin-right: .3rem;
}

.timeline-lg .first-weekday:before {
  border-bottom: none !important;
}

.timeline-lg .last-weekday:after {
  border-bottom: none !important;
}

.timeline-lg .date {
  margin: .5rem;
}

.timeline-lg .new-novel {
  margin-top: 1.5rem;
  width: 11vw
}
</style>