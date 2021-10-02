<template>
  <div class="wrapper">
    <div class="d-block d-md-none sm-screen">
      <div class="row no-gutters"
           v-for="i in 20" :key="i">
        <div class="col-2 py-3 px-0 left-col">
            <p class="text-center ranking">
              <span class="d-none d-sm-inline">#</span>{{ i }}
            </p>
            <p class="text-center ranking-info">
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
              <p class="mb-1 title-text"> {{ novel.title }} </p>
              <p class="fader-text"> {{ novel.author }} </p>
            </div>
            <div class="d-inline-block ml-sm-3 ratings">
              <p>
                <span>
                  <i class="fas fa-star"></i>
                </span>
                {{ novel.ratings }}
              </p>
            </div>
          </div>

          <div class="d-flex justify-content-between text-center publication-info">
            <p class="mr-sm-1">
              <span class="d-block">
                <i class="fas fa-books mb-1"></i>
              </span>
              <span class="d-block">
              {{ novel.chapters }}
              </span>
            </p>
            <p class="mr-sm-1">
              <span class="d-block">
                <i class="far fa-heart-rate mb-1"></i>
              </span>
              <span class="d-block">
                Ongoing
              </span>
            </p>
            <p>
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

    <div class="d-none d-md-block d-xl-none md-screen">
      <div class="row no-gutters align-items-center"
          v-for="i in 17" :key="i">
        <div class="col-md-1 text-center ranking">
          <p>#{{ i + 3 }} </p>
        </div>
        <div class="col-md-7 d-flex novel-info">
          <div class="cover">
            <img class="img-fluid"
                :src="require(`@/assets/images/novel-list/${novel.cover}`)">
          </div>
          <div class= "my-auto right-col">
            <div class="overflow-hidden text-nowrap text-center title" 
                @mouseenter="startMarquee" 
                @mouseleave="stopMarquee">
              <p class="d-inline-block"> {{ novel.title }} </p>
            </div>
            <div class="overflow-hidden text-nowrap text-center author"
                @mouseenter="startMarquee" 
                @mouseleave="stopMarquee">
              <p class="d-inline-block"> {{ novel.author }} </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-around text-center ranking-info">
          <p>
            <span class="d-block">
              <i class="far fa-poll mb-2"></i>
            </span>
            <span class="d-block">
              {{ novel.votes }}
            </span>
          </p>

          <p>
            <span class="d-block">
              <i class="fas fa-books mb-2"></i>
            </span>
            <span class="d-block">
            {{ novel.chapters }}
            </span>
          </p>

          <p>
            <span class="d-block">
              <i class="fas fa-star mb-2"></i>
            </span>
            <span class="d-block">
            {{ novel.ratings }}
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="d-none d-xl-block xl-screen">
      <div class="row no-gutters align-items-center"
          v-for="i in 17" :key="i">
        <div class="col-md-1 text-center ranking">
          <p>#{{ i + 3 }} </p>
        </div>
        <div class="col-md-11 d-flex novel-info">
          <div class="cover">
            <img :src="require(`@/assets/images/novel-list/${novel.cover}`)">
          </div>
          <div class= "d-flex flex-column overflow-hidden right-col">
            <div class="overflow-hidden text-nowrap title" 
                @mouseenter="startMarquee" 
                @mouseleave="stopMarquee">
              <p class="d-inline-block"> {{ novel.title }} </p>
            </div>
            <div class="overflow-hidden text-nowrap author"
                @mouseenter="startMarquee" 
                @mouseleave="stopMarquee">
              <p class="d-inline-block"> {{ novel.author }} </p>
            </div>
            <div class="d-flex justify-content-between stats">
              <p>
                <span>
                  <i class="far fa-poll mr-1"></i>
                </span>
                {{ novel.votes }}
              </p> 
              <p>
                <span> 
                  <i class="fas fa-books mr-1"></i>
                </span>
                {{ novel.chapters }} Chapters
              </p>
              <p>
                <span>
                  <i class="far fa-heart-rate"></i>
                </span>
                Ongoing
              </p>
              <p>
                <span>
                  <i class="far fa-calendar-alt"></i>
                </span>
                Every 14 Day(s)
              </p>
            </div>
            <div class="synopsis paragraph-text"
                 v-dragscroll>
              <p v-for="line in novel.synopsis" :key="line">
                {{ line }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollText from "@/assets/js/mixins/ScrollText.js"

export default {
  mixins: [ScrollText],
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
  margin: 1.5rem 0;
}

.sm-screen > div:first-child {
  margin-top: 0;
}

.sm-screen .left-col {
  background-color: var(--primary-color);
  color: #000;
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
  /* font-weight: bold; */
}

.sm-screen .ranking-info,
.sm-screen .publication-info {
  margin-top: 1.5rem;
}

.sm-screen .ranking-info {
  font-weight: bold;
}

.md-screen > div {
  margin: 1.5rem 0;
}

.md-screen > div:first-child {
  margin-top: 0;
}

.md-screen .ranking {
  font-family: "numbers-prospekt", sans-serif;
  font-size: 2.3rem;
}

.md-screen .cover {
  width: 25%;
  padding-left: 1rem;
}

.md-screen .right-col {
  width: 75%;
}

.md-screen .novel-info .title {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0 1rem;
  margin-bottom: .25rem;
}

.md-screen .novel-info .author {
  font-weight: 300;
  font-style: italic;
  font-size: .8rem;
  margin: 0 1rem;
}

.md-screen .ranking-info {
  font-size: 1.3rem;
  font-weight: bold;
}

.xl-screen > div {
  margin: 2rem 0;
}

.xl-screen > div:first-child {
  margin-top: 0;
}

.xl-screen .ranking {
  font-family: "numbers-prospekt", sans-serif;
  font-size: 2.7rem;
}

.xl-screen .cover {
  padding-left: 1rem;
  padding-right:.5rem;
}

.xl-screen img {
  height: 30vh;
  width: auto;
}

.xl-screen .right-col {
  padding-bottom: 0;
  height: 30vh;
}

.xl-screen .novel-info .title {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0 1rem;
  margin-bottom: .25rem;
  padding-bottom: 1rem;
}

.xl-screen .novel-info .author {
  font-weight: 300;
  font-size: .8rem;
  font-style: italic;
  margin-left: 1rem;
  padding-bottom: .8rem;
  margin-bottom: .5rem;
}

.xl-screen .novel-info .stats {
  margin-left: 1rem;
  margin-bottom: .5rem;
}

.xl-screen .novel-info .synopsis {
  height: 50vh;
  margin-left: 1rem;
  padding-bottom: .9rem;
  overflow: scroll;
  -webkit-mask-image: -webkit-gradient(linear, center top, center bottom, 
      color-stop(0.80,  rgba(0,0,0,1)),
      color-stop(1.00,  rgba(0,0,0,0)));
  mask-image: -webkit-gradient(linear, center top, center bottom, 
                                color-stop(0.70,  rgba(0,0,0,1)),
                                color-stop(1.00,  rgba(0,0,0,0)));
}
</style>