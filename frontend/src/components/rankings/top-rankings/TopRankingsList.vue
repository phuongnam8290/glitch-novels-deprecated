<template>
  <div class="d-flex justify-content-center align-items-center wrapper">
    <top-ranking-novel ranking="second" ref="second"
                       :class="{'ranking-enter-left': isAnimating, animating: isAnimating}">
    </top-ranking-novel>

    <top-ranking-novel ranking="first" ref="first"
                       :class="{'ranking-enter-top': isAnimating, animating: isAnimating}">
    </top-ranking-novel>

    <top-ranking-novel ranking="third" ref="third"
                       :class="{'ranking-enter-right': isAnimating, animating: isAnimating}">
    </top-ranking-novel>
  </div>
</template>

<script>
import TopRankingNovel from "@/components/rankings/top-rankings/TopRankingNovel.vue";

export default {
  components: {
    "top-ranking-novel": TopRankingNovel
  },
  data() {
    return {
      firstRanking: null,
      secondRanking: null,
      thirdRanking: null,
      lastScrollPosition: 0,
      isAnimating: null
    }
  },
  methods: {
    cleanupAnimateClass() {
      this.isAnimating = false;
      this.$el.removeEventListener("animationend", this.cleanupAnimateClass);
    },
    animate() {
      this.isAnimating = true;
      this.$el.addEventListener("animationend", this.cleanupAnimateClass)
    },
    scrollAnimate() {
      let currentScrollPosition = window.scrollY;

      // Scroll up
      if (currentScrollPosition < this.lastScrollPosition) {
        // from position lower than element position
        if (currentScrollPosition <= 550 && this.lastScrollPosition > 550) {
          this.animate();
        }
      }

      this.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted() {
    this.firstRanking = this.$refs.first.$el;
    this.secondRanking = this.$refs.second.$el;
    this.thirdRanking = this.$refs.third.$el;

    this.animate();
    document.addEventListener("scroll", this.scrollAnimate);
  },
  unmounted() {
    document.removeEventListener("scroll", this.scrollAnimate);
  }
}
</script>

<style scoped>
.ranking-enter-top,
.ranking-enter-left,
.ranking-enter-right {
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

.ranking-enter-top {
  animation-name: enterTop;
}

.ranking-enter-left {
  animation-name: enterLeft;
}

.ranking-enter-right {
  animation-name: enterRight;
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