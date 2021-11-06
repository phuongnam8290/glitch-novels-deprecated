<template>
  <div class="d-flex justify-content-center align-items-center">
    
    <div class="rankings second-ranking">
      <div class="position-relative wrapper">
        <div class="position-relative overflow-hidden">
          <div class="front">
            <img src="@/assets/images/novel-list/01.png">
            <div class="overlay"></div>
          </div>
          <div class="d-none d-lg-flex justify-content-center align-items-center back">
            <div class="content">
              <p class="title-text cursor-default title">
                {{ novel.novelInfo.title }}
              </p>              
              <div class="d-flex justify-content-center">
                <p class="read-btn">Read now</p>
              </div>
            </div>
          </div>
        </div>
        <div class="medal">
          <img src="@/assets/images/rankings/second.png">
        </div>
      </div>
    </div>

    <div class="rankings first-ranking"
         @mouseenter="startMarqueeEffect"
         @mouseleave="stopMarqueeEffect">
      <div class="position-relative wrapper">
        <div class="position-relative overflow-hidden">
          <div class="front">
            <img src="@/assets/images/novel-list/01.png">
            <div class="overlay"></div>
          </div>
          <div class="d-none d-lg-flex justify-content-center align-items-center back">
            <div class="overflow-hidden content">
              <div class="title-text marquee" ref="title">
                <a href="#">
                  <span>
                    {{ novel.novelInfo.title }}
                  </span>
                </a>
              </div>
              <div class="fader-text marquee" ref="author">
                <a href="#">
                  <span>
                    {{ novel.novelInfo.author }}
                  </span>
                </a>
              </div>
              <div class="d-flex justify-content-center">
                <p class="read-btn">Read now</p>
              </div>
            </div>
          </div>
        </div>
        <div class="medal">
          <img src="@/assets/images/rankings/first.png">
        </div>
      </div>
    </div>

    <div class="rankings third-ranking">
      <div class="position-relative wrapper">
        <div class="position-relative overflow-hidden">
          <div class="front">
            <img src="@/assets/images/novel-list/01.png">
            <div class="overlay"></div>
          </div>
          <div class="d-none d-lg-flex justify-content-center align-items-center back">
            <div class="content">
              <p class="title-text cursor-default title">
                {{ novel.novelInfo.title }}
              </p>
              <div class="d-flex justify-content-center">
                <p class="read-btn">Read now</p>
              </div>
            </div>
          </div>
        </div>
        <div class="medal">
          <img src="@/assets/images/rankings/third.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Marquee from "@/assets/js/mixins/Marquee.js";

export default {
  mixins: [Marquee],
  data() {
    return {
      novel: this.$store.state.defaultNovelData,
      firstRanking: null,
      secondRanking: null,
      thirdRanking: null,
    }
  },
  methods: {
    addAnimateClass() {
      this.firstRanking.classList.add("animating", "ranking-enter-top");
      this.secondRanking.classList.add("animating", "ranking-enter-left");
      this.thirdRanking.classList.add("animating", "ranking-enter-right");
    },
    removeAnimateClass() {
      this.firstRanking.classList.remove("animating", "ranking-enter-top");
      this.secondRanking.classList.remove("animating", "ranking-enter-left");
      this.thirdRanking.classList.remove("animating", "ranking-enter-right");
    },
    animate() {
      this.addAnimateClass();
      this.$el.addEventListener("animationend", this.removeAnimateClass);
    },
    startMarqueeEffect() {
      this.marquee(this.$refs.title, 2);
      this.marquee(this.$refs.author, 2);
    },
    stopMarqueeEffect() {
      this.resetState(this.$refs.title);
      this.resetState(this.$refs.author)
    }
  },
  mounted() {
    this.firstRanking = this.$el.querySelector(".first-ranking");
    this.secondRanking = this.$el.querySelector(".second-ranking");
    this.thirdRanking = this.$el.querySelector(".third-ranking");

    this.animate();
  }
}
</script>

<style scoped>
.rankings {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.second-ranking img,
.third-ranking img {
  width: 18vw;
}

.first-ranking img {
  width: 20vw;
}

.front {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient( 240deg, rgba(0, 0, 0, .8) 15%, transparent 30%);
}

.back {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  display: none;
  transition: top .6s, opacity .4s;
}

.rankings:hover:not(.animating) .back {
  top: 0;
  opacity: 1;
  display: block;
}

.back .content {
  padding: 1rem;
}

.content div:nth-child(2) {
  margin-top: .25rem;
  margin-bottom: 1rem;
}

.back .title {
  line-height: 1.5;
  text-align: center;
  overflow: hidden;

  margin: 1rem;
}

.back .content .read-btn {
  display: inline-block;
  padding: .5rem 1rem;
  border: 1px solid var(--primary-color);
  transition: border .3s, color .3s;
  cursor: pointer;
}

.back .content .read-btn:hover {
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
}

.medal {
  position: absolute;
}

.first-ranking .medal {
  top: -1vw;
  right: -1vw;
}

.second-ranking .medal,
.third-ranking .medal {
  top: -.5vw;
  right: -.5vw;
}

.first-ranking .medal img {
  width: 7vw;
}

.second-ranking .medal img,
.third-ranking .medal img {
  width: 5vw;
}

.ranking-enter-top {
  animation-name: enterTop;
  animation-duration: 2s;
}

.ranking-enter-left {
  animation-name: enterLeft;
  animation-duration: 2s;
}

.ranking-enter-right {
  animation-name: enterRight;
  animation-duration: 2s;
}

@keyframes enterTop {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes enterLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes enterRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>