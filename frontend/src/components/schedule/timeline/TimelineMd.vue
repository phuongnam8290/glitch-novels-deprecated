<template>
  <div class="flex-column justify-content-around timeline-md">
    <div class="d-flex align-items-center justify-content-center"
         v-for="day in timeline" :key="day.weekday">

      <div class="text-center day">
        <div class="d-inline-block weekday"
             :class="addWeekdayClass(day.weekday)"> {{ day.weekday }}
        </div>
        <div class="date"> {{ day.date }} </div>
      </div>
      <novel-default class="d-none d-sm-flex d-lg-none new-novel"></novel-default>
      <novel-thumbnail class="d-block d-sm-none text-center new-novel"
                       :style="{ maxWidth: '180px' }"></novel-thumbnail>
    </div>
  </div>
</template>

<script>
import NovelDefault from "@/components/common/cards/NovelDefault";
import NovelThumbnail from "@/components/common/cards/NovelThumbnail";

export default {
  components: {
    "novel-default": NovelDefault,
    "novel-thumbnail": NovelThumbnail
  },
  data() {
    return {
      timeline: this.$store.state.defaultTimeline,
      novel: this.$store.state.defaultNovelData
    }
  },
  methods: {
    isFirstWeekday(weekday) {
      return weekday === this.timeline[0].weekday;
    },

    isLastWeekday(weekday) {
      return weekday === this.timeline[this.timeline.length - 1].weekday;
    },

    addWeekdayClass(weekday) {
      if (this.isFirstWeekday(weekday)) {
        return {"first-weekday": true};
      } else if (this.isLastWeekday(weekday)) {
        return {"last-weekday": true};
      }
    }
  }
}
</script>

<style scoped>
.timeline-md > div {
  overflow: hidden;
  padding-bottom: 2rem;
}

.timeline-md .weekday {
  position: relative;
  border: 1px solid rgba(var(--primary-color-rgb), .6);

  border-radius: 5px;
  padding: .2rem .5rem;
  width: 3.5rem;
}

.timeline-md .weekday:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  height: 50vw;
  border-left: 1px solid rgba(var(--primary-color-rgb), .6);
  margin-top: 2rem;
}

.timeline-md .weekday:before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  height: 50vw;
  border-left: 1px solid rgba(var(--primary-color-rgb), .6);
  margin-bottom: .5rem;
}

.timeline-md .first-weekday:before {
  border-left: none !important;
}

.timeline-md .last-weekday:after {
  border-left: none !important;
}

.timeline-md .date {
  margin: .5rem;
}

.timeline-md .new-novel {
  margin-left: 2.5rem;
}
</style>