<template>
  <div class="wrapper">
    <div class="d-block d-md-none sm-screen">
      <div class="row no-gutters"
           v-for="i in 20" :key="i">
        <div class="col-2 py-3 px-0 left-col">
            <p class="text-center cursor-default ranking">
              <span class="d-none d-sm-inline">#</span>{{ i }}
            </p>
            <p class="text-center cursor-default ranking-info">
              <span class="d-block">
                <i class="far fa-poll mb-1"></i>
              </span>
              <span class="d-block">
                {{ novel.votes }}
              </span>
            </p>
        </div>

        <div class="col-10 p-3"
             :style="getCoverStyle(novel.cover)">
          <div class="d-flex justify-content-between align-items-center text-nowrap">
            <div class="overflow-hidden novel-info">
              <p class="pointable title-text"> {{ novel.title }} </p>
              <p class="pointable fader-text"> {{ novel.author }} </p>
            </div>
            <div class="d-inline-block ml-sm-3 ratings">
              <p class="cursor-default">
                <span>
                  <i class="fas fa-star"></i>
                </span>
                {{ novel.ratings }}
              </p>
            </div>
          </div>

          <div class="d-flex justify-content-between text-center publication-info">
            <p class="mr-sm-1 cursor-default">
              <span class="d-block">
                <i class="fas fa-books mb-1"></i>
              </span>
              <span class="d-block">
              {{ novel.chapters }}
              </span>
            </p>
            <p class="mr-sm-1 cursor-default">
              <span class="d-block">
                <i class="far fa-heart-rate mb-1"></i>
              </span>
              <span class="d-block">
                Ongoing
              </span>
            </p>
            <p class="cursor-default">
              <span class="d-block">
                <i class="far fa-calendar-alt mb-1"></i>
              </span>
              <span class="d-none d-sm-block">
                14 Day(s)
              </span>
              <span class="d-block d-sm-none">
                14d
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="d-none d-md-block md-screen">
      <div class="row no-gutters align-items-center"
          v-for="i in 17" :key="i">
        <div class="col-md-1  ranking">
          <p class="cursor-default">#{{ i + 3 }} </p>
        </div>
        <div class="col-md-11 d-flex novel-info">
          <div class="cover">
            <img :src="require(`@/assets/images/novel-list/${novel.cover}`)">
          </div>
          <div class= "d-flex flex-column overflow-hidden w-100 right-col">
            <div class="d-flex justify-content-between align-items-center">
              <div class="overflow-hidden">
                <div class="overflow-hidden text-nowrap title-text" 
                    @mouseenter="startMarquee" 
                    @mouseleave="stopMarquee">
                  <p class="d-inline-block pointable"> {{ novel.title }}</p>
                </div>
                <div class="overflow-hidden text-nowrap mt-1 fader-text"
                    @mouseenter="startMarquee" 
                    @mouseleave="stopMarquee">
                  <p class="d-inline-block pointable"> {{ novel.author }}</p>
                </div>
              </div>

              <div class="d-flex ml-3 ratings">
                <span v-for="fullStar in getRatingStars(novel.ratings).fullStars" :key="fullStar">
                  <i class="fas fa-star"></i>
                </span>
                <span v-if="getRatingStars(novel.ratings).haveHalfStar">
                  <i class="fas fa-star-half-alt"></i>
                </span>
                <span v-for="emptyStar in getRatingStars(novel.ratings).emptyStars" :key="emptyStar">
                  <i class="far fa-star"></i>
                </span>
              </div>
            </div>

            <div class="text-nowrap mt-2 tags">
              <base-tag v-for="genre in getLoopedElements(novel.genres, 5)" :key="genre">
                {{ genre }}
              </base-tag>
            </div>

            <div class="d-flex justify-content-between text-center mt-2 stats">
              <p class="mr-4">
                <span class="d-md-block d-lg-inline">
                  <i class="far fa-poll mr-2 mb-1"></i>
                </span>
                <span class="d-md-block d-lg-inline text-nowrap cursor-default">
                  {{ novel.votes }} Votes
                </span>
              </p> 
              <p class="mr-4">
                <span class="d-md-block d-lg-inline"> 
                  <i class="fas fa-books mr-2 mb-1"></i>
                </span>
                <span class="d-md-block d-lg-inline text-nowrap cursor-default">
                  {{ novel.chapters }} Chapters
                </span>
              </p>
              <p class="mr-4">
                <span class="d-md-block d-lg-inline">
                  <i class="far fa-heart-rate mr-2 mb-1"></i>
                </span>
                <span class="d-md-block d-lg-inline text-nowrap cursor-default">Ongoing</span>
              </p>
              <p>
                <span class="d-md-block d-lg-inline">
                  <i class="far fa-calendar-alt mr-2 mb-1"></i>
                </span>
                <span class="d-md-block d-lg-inline text-nowrap cursor-default">Every 14 Day(s)</span>
              </p>
            </div>

            <div class="d-none d-lg-block paragraph-text viewport"
                 v-dragscroll>
              <div class="grabbable synopsis">
                <p v-for="line in novel.synopsis" :key="line"
                   class="grabbable">
                  {{ line }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from "@/assets/js/mixins/Utils.js";
import ScrollText from "@/assets/js/mixins/ScrollText.js";
import BaseTag from "@/components/common/tags/BaseTag.vue";

export default {
  components: {
    "base-tag": BaseTag
  },
  mixins: [Utils, ScrollText],
  data() {
    return {
      novel: {
        cover: "01.png",
        title: "Solo Leveling",
        author: "추공 (Chugong)",
        synopsis: [
          "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
          "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
          "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
        ],
        genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
        ratings: 4.5,
        bookmarks: 15785,
        views: 35751,
        reviews: 235,
        comments: 14756,
        chapters: 1423,
        status: "ongoing",
        votes: 154
      }
    }
  },
  methods: {
    getCoverStyle(cover) {
      return {
        "background-image": 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + require(`@/assets/images/novel-list/${cover}`) + ')',
        "background-size" : "cover"
      };
    }
  },
}
</script>

<style scoped>
@font-face {
  font-family: "numbers-prospekt";
  src: url(~@/assets/font/numbers-prospekt/numbers-prospekt.woff2);
}

.wrapper ::-webkit-scrollbar {
  display: none;
}

.sm-screen > div {
  margin-top: 2.5rem;
}

.sm-screen .left-col {
  background-color: var(--darker-secondary-color);
  color: var(--primary-color);
}

.sm-screen .ranking {
  font-family: "numbers-prospekt", sans-serif;
  font-size: 2.5rem;
  position: relative;
}

.sm-screen .ranking-info,
.sm-screen .publication-info,
.sm-screen .ratings {
  font-size: 1.3rem;
}

.sm-screen .ranking-info,
.sm-screen .publication-info {
  margin-top: 1.5rem;
}

.sm-screen .ranking-info {
  font-weight: bold;
}

.md-screen > div {
  margin-top: 2.5rem;
}

.md-screen .ranking {
  font-family: "numbers-prospekt", sans-serif;
  font-size: 2.7rem;
}

.md-screen .cover {
  padding-left: 1rem;
  padding-right:.5rem;
}

.md-screen img {
  height: 30vh;
  width: auto;
}

.md-screen .right-col {
  padding-bottom: 0;
  height: 30vh;
  margin-left: 1rem;
}

@media(max-width: 992px) {
  .md-screen img {
    height: 16vh;
  } 

  .md-screen .right-col {
    height: 16.5vh;
  }
}
</style>