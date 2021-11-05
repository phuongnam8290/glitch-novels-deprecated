<template>
  <div class="wrapper">
    <div class="d-none d-lg-flex justify-content-around timeline-lg">
      <div class="text-center"
          :style="{width: `${100 / week.length}vw`}"
          v-for="day in week" :key="day.weekday">

        <div class="d-inline-block weekday"
              :class="addWeekdayClass(day.weekday)"> {{ day.weekday }} 
        </div>
        <div class="date"> {{ day.date }} </div>

        <div class="release-novel">
          <div>
            <img class="cover"
                :src="require(`@/assets/images/novel-list/${day.releaseNovel.cover}`)">
            <p class="title-text title">
              {{day.releaseNovel.title}}
            </p>
            <p class="fader-text author">
              {{day.releaseNovel.author}}
            </p>
          </div>
        </div>

      </div>
    </div>

    <div class="d-flex d-lg-none flex-column justify-content-around timeline-md">
      <div class="d-flex align-items-center"
          v-for="day in week" :key="day.weekday">

        <div class="text-center day">
          <div class="d-inline-block weekday"
                :class="addWeekdayClass(day.weekday)"> {{ day.weekday }} 
          </div>
          <div class="date"> {{ day.date }} </div>
        </div>

        <!-- <div class="d-flex release-novel">
          <div class="cover">
            <img
                :src="require(`@/assets/images/novel-list/${day.releaseNovel.cover}`)">
          </div>
          <div class="info">
            <p class="title-text title">
              {{day.releaseNovel.title}}
            </p>
            <p class="fader-text author">
              {{day.releaseNovel.author}}
            </p>
          </div>
        </div> -->

      </div>
    </div>

  </div>  
</template>

<script>

export default {
  data() {
    return {
      week: [
        {
          weekday: "MON", 
          date: "11-10",
          releaseNovel: {
            cover: "01.png",
            title: "Solo Leveling",
            author: "추공 (Chugong)",
            synopsis: [
              "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
              "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
              "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
            ],
          }
        },
        {
          weekday: "TUE",
          date: "12-10",
          releaseNovel: {
            cover: "01.png",
            title: "Solo Leveling",
            author: "추공 (Chugong)",
            synopsis: [
              "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
              "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
              "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
            ],
          }
        },
        {
          weekday: "WED",
          date: "13-10",
          releaseNovel: {
            cover: "01.png",
            title: "Solo Leveling",
            author: "추공 (Chugong)",
            synopsis: [
              "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
              "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
              "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
            ],
          }
        },
        {
          weekday: "THU",
          date: "14-10",
          releaseNovel: {
            cover: "01.png",
            title: "Solo Leveling",
            author: "추공 (Chugong)",
            synopsis: [
              "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
              "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
              "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
            ],
          }
        },
        {
          weekday: "FRI",
          date: "15-10",
          releaseNovel: {
            cover: "01.png",
            title: "Solo Leveling",
            author: "추공 (Chugong)",
            synopsis: [
              "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
              "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
              "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
            ],
          }
        },
        {
          weekday: "SAT",
          date: "16-10",
          releaseNovel: {
            cover: "01.png",
            title: "Solo Leveling",
            author: "추공 (Chugong)",
            synopsis: [
              "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
              "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
              "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
            ],
          }
        },
        {
          weekday: "SUN",
          date: "17-10",
          releaseNovel: {
            cover: "01.png",
            title: "Solo Leveling",
            author: "추공 (Chugong)",
            synopsis: [
              "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
              "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
              "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
            ],
          }
        }
      ]
    }
  },
  methods: {
    isFirstWeekday(weekday) {
      if (weekday == this.week[0].weekday) {
        return true;
      }

      return false;
    },

    isLastWeekday(weekday) {
      if (weekday == this.week[this.week.length - 1].weekday) {
        return true;
      }

      return false;
    },

    addWeekdayClass(weekday) {
      if (this.isFirstWeekday(weekday)) {
        return {"first-weekday": true};
      } else if (this.isLastWeekday(weekday)) {
        return {"last-weekday": true};
      }

      return {};
    }
  }
}
</script>

<style>
/* For large screen */
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

.timeline-lg .release-novel {
  margin-top: 1.5rem;
}

.timeline-lg .release-novel .cover {
  max-width: 11vw
}

.timeline-lg .release-novel .title {
  margin-top: .5rem;
}

.timeline-lg .release-novel .author {
  margin-top: .25rem;
}

/* For medium screen */
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

.timeline-md .release-novel {
  margin-left: 2.5rem;
}

.timeline-md .release-novel .cover img{
  max-height: 25vh
}

.timeline-md .release-novel .info {
  margin-left: 1.5rem;
}

.timeline-md .release-novel .author {
  margin-top: .25rem;
}
</style>
