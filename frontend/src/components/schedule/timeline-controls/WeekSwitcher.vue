<template>
  <div class="wrapper">
    <div class="position-relative btn-group">
      <p class="cursor-pointer btn-item"
         :class="{selected: selectedWeek === chronology}"
         v-for="(data, chronology) in weeksData" :key="chronology"
         :ref="chronology"
         @click="changeWeek($event, chronology)">
        <span class="d-block"> {{ setBtnText(chronology) }} </span>
      </p>
      <div class="bg"></div>
      <div class="btn-bg" ref="btn-bg"></div>
    </div>
  </div>
</template>

<script>
import { capitalize } from "lodash";
import { inject } from "vue";

export default {
  data() {
    return {
      selectedWeek: null
    }
  },
  methods: {
    setBtnText(chronology) {
      if (chronology === "current") {
        chronology = "this"
      }

      return `${capitalize(chronology)} week`
    },
    getPreviousSiblings(elem) {
      let sibs = [];

      while(elem.previousElementSibling != null) {
        elem = elem.previousElementSibling;
        sibs.push(elem);
      }

      return sibs;
    },
    setSelectedBtnBg(btn) {
      let btnBg = this.$refs["btn-bg"];
      let bgLeftPos = 0;

      for(let elem of this.getPreviousSiblings(btn)) {
        bgLeftPos += elem.offsetWidth;
      }

      btnBg.style.top = `3px`;
      btnBg.style.left = `${bgLeftPos === 0 ? bgLeftPos + 4 : bgLeftPos}px`;
      btnBg.style.width = `${btn.offsetWidth - 5}px`;
      btnBg.style.height = `${btn.offsetHeight - 7}px`;
    },
    changeWeek(event, chronology) {
      let target = event.currentTarget;

      this.setSelectedBtnBg(target);
      this.selectedWeek = chronology;

      for (let week in this.weeksData) {
        this.weeksData[week].isWeekSelected = week === chronology;
      }
    }
  },
  mounted() {
    for (let chronology in this.weeksData) {
      if (this.weeksData[chronology].isWeekSelected === true) {
        this.selectedWeek = chronology;
        this.setSelectedBtnBg(this.$refs[chronology])
      }
    }
  },
  setup() {
    const weeksData = inject("weeksData")
    return { weeksData };
  }
}
</script>

<style scoped>
.btn-item {
  color: var(--secondary-color);
  transition: all .5s ease-out;
}

.btn-item.selected {
  color: var(--primary-color);
}

.btn-item > span {
  padding: .8rem 2rem;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  opacity: 20%;
  border-radius: 35px;
  z-index: -2;
}

.btn-bg {
  position: absolute;
  background-color: var(--darker-secondary-color);
  z-index: -1;
  transition: all .5s ease-out;
  border-radius: 35px;
}
</style>