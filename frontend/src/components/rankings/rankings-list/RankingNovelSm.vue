<template>
  <div class="d-flex">
    <div class="d-flex flex-column justify-content-between left-col">
      <p class="text-center cursor-default ranking">
        <span class="d-none d-sm-inline">#</span>
        <span> {{ ranking }} </span>
      </p>
      <p class="text-center cursor-default ranking-info">
        <span class="d-block">
          <i class="far fa-poll mb-1"></i>
        </span>
        <span class="d-block">
          {{ novel.valuationInfo.votes }}
        </span>
      </p>
    </div>

    <div class="d-flex flex-column overflow-hidden justify-content-between right-col"
         :style="getCoverStyle(novel.novelInfo.cover)">
      <div class="d-flex justify-content-between align-items-center text-nowrap">
        <div class="overflow-hidden novel-info">
          <div class="title-text marquee title" ref="title">
            <a href="#">
              <span>
                {{ novel.novelInfo.title }}
              </span>
            </a>
          </div>
          <div class="fader-text marquee author" ref="author">
            <a href="#">
              <span>
                {{ novel.novelInfo.author }}
              </span>
            </a>
          </div>
        </div>
        <div class="d-inline-block ml-4 ratings">
          <p class="cursor-default">
            <span class="mr-1">
              <i class="fas fa-star"></i>
            </span>
            <span>
              {{ novel.valuationInfo.ratings }}
            </span>
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-between text-center publication-info">
        <p class="mr-sm-1 cursor-default">
          <span class="d-block">
            <i class="fas fa-books mb-1"></i>
          </span>
          <span class="d-block">
          {{ novel.publicationInfo.chapters }}
          </span>
        </p>
        <p class="mr-sm-1 cursor-default">
          <span class="d-block">
            <i class="far fa-heart-rate mb-1"></i>
          </span>
          <span class="d-block">
            {{ novel.publicationInfo.status }}
          </span>
        </p>
        <p class="cursor-default">
          <span class="d-block">
            <i class="far fa-calendar-alt mb-1"></i>
          </span>
          <span class="d-none d-sm-block">
            {{ novel.publicationInfo.updatesFrequency }} Months
          </span>
          <span class="d-block d-sm-none">
            {{ novel.publicationInfo.updatesFrequency }} m
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Marquee from "@/assets/js/mixins/Marquee.js";

export default {
  props: {
    ranking: {
      type: Number,
      required: true
    },
    novelData: {
      type: Object,
      //TODO: Change from false to true after implement backend
      required: false,
    }
  },
  mixins: [Marquee],
  computed: {
    novel() {
      return this.novelData || this.$store.state.defaultNovelData
    }
  },
  data() {
    return {
      resizeObserver: null
    }
  },
  methods: {
    getCoverStyle(cover) {
      return {
        "background-image": 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + require(`@/assets/images/novel-list/${cover}`) + ')',
        "background-size" : "cover"
      };
    },
    startMarqueeEffect() {
      this.marquee(this.$refs.title, 2);
      this.marquee(this.$refs.author, 2);
    },
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(() => {
      this.startMarqueeEffect();
    });
    this.resizeObserver.observe(this.$el.querySelector(".novel-info"));
  },
  unmounted() {
    this.resizeObserver.unobserve(this.$el.querySelector(".novel-info"));
  }
}
</script>

<style scoped>
@font-face {
  font-family: "numbers-prospekt";
  src: url(~@/assets/font/numbers-prospekt/numbers-prospekt.woff2);
}

.left-col {
  background-color: var(--darker-secondary-color);
  color: var(--primary-color);
  min-width: 100px;
}

@media (max-width : 576px) {
  .left-col {
    min-width: 80px;
  }
}

.right-col {
  flex-basis: 100%;
}

.left-col,
.right-col {
  padding: 1rem;
}

.ranking {
  font-family: "numbers-prospekt", sans-serif;
  font-size: 2.5rem;
  position: relative;
}

.ranking-info,
.publication-info,
.ratings {
  font-size: 1.3rem;
}

.ratings span:first-child {
  font-size: 1.1rem;
  vertical-align: top;
}

.ratings span:nth-child(2) {
  font-weight: bold;
}

.ranking-info,
.publication-info {
  margin-top: 1.5rem;
}

.ranking-info {
  font-weight: bold;
}

.novel-info > :nth-child(2) {
  margin-top: .25rem;
}
</style>