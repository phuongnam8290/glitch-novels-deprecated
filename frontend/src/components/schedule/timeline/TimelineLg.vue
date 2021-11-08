<template>
  <div class="justify-content-around timeline-lg">
    <div class="d-flex flex-column align-items-center text-center"
         :style="{width: `${100 / timeline.length}vw`}"
         v-for="day in timeline" :key="day.weekday">

      <div class="d-inline-block weekday"
           :class="addWeekdayClass(day.weekday)">
        {{ day.weekday }}
      </div>
      <div class="date"> {{ day.date }} </div>
      <novel-thumbnail class="new-novel"></novel-thumbnail>
    </div>
  </div>
</template>

<script>
import NovelThumbnail from "@/components/common/cards/NovelThumbnail";

export default {
  components: {
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
.timeline-lg > div {
  overflow: hidden;
}

.timeline-lg .weekday {
  position: relative;
  border: 1px solid rgba(var(--primary-color-rgb), .6);

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
  max-width: 11vw
}

</style>