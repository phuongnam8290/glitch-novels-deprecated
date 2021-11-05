<template>
  <div class="overflow-hidden card">
    <div class="left-col" :style="{height: `${height}px`}">
      <div class="cover">
        <slot name="cover"></slot>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-between right-col" :style="{height: `${height}px`}">
      <div class="d-flex justify-content-between align-items-center">
        <div class="overflow-hidden main">
          <div class="title-text marquee title" ref="title">
            <a href="#">
              <span>
                <slot name="title"></slot>
              </span>
            </a>
          </div>
          <div class="fader-text marquee subtitle" ref="subtitle"
               v-if="!!$slots.subtitle">
            <a href="#">
              <span>
                <slot name="subtitle"></slot>
              </span>
            </a>
          </div>
        </div>

        <div class="ml-4 ratings ratings-lg"
             v-if="!!ratings">
          <span v-for="fullStar in getRatingStars(ratings).fullStars" :key="fullStar">
            <i class="fas fa-star"></i>
          </span>
          <span v-if="getRatingStars(ratings).haveHalfStar">
            <i class="fas fa-star-half-alt"></i>
          </span>
          <span v-for="emptyStar in getRatingStars(ratings).emptyStars" :key="emptyStar">
            <i class="far fa-star"></i>
          </span>
        </div>
        <div class="ml-4 hide ratings ratings-sm"
             v-if="!!ratings">
          <span>
            <i class="fas fa-star"></i>
          </span>
          <span class="ml-1 title-text">
            {{ ratings }}
          </span>
        </div>
      </div>

      <scrollable-tags class="scrollable-tags"
                       v-if="!!tags"
                       :tags="tags">
      </scrollable-tags>

      <div class="misc-info"
           v-if="!!$slots['misc-info']">
        <slot name="misc-info"></slot>
      </div>
      <div class="content viewport paragraph-text"
           v-if="!!$slots['card-content']"
           v-dragscroll.y>
        <slot name="card-content"></slot>
      </div>
      <div class="text-nowrap card-footer"
           v-if="!!$slots['card-footer']">
        <slot name="card-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from "@/assets/js/mixins/Utils.js";
import Marquee from "@/assets/js/mixins/Marquee.js";

import ScrollableTags from "@/components/common/tags/ScrollableTags";

export default {
  props: {
    height: {
      type: Number,
      required: false,
      default: 180
    },
    ratings: {
      type: Number,
      required: false
    },
    tags: {
      type: Array,
      required: false
    }
  },
  components: {
    "scrollable-tags": ScrollableTags
  },
  mixins: [Utils, Marquee],
  data() {
    return {
      resizeObserver: null,
    }
  },
  methods: {
    startMarqueeEffect() {
      this.marquee(this.$refs.title, 2);
      this.marquee(this.$refs.subtitle, 2);
    },
    renderElements() {
      let width = this.$el.querySelector(".right-col").offsetWidth;
      let ratingsLg = this.$el.querySelector(".ratings-lg");
      let ratingsSm = this.$el.querySelector(".ratings-sm");
      let scrollableTags = this.$el.querySelector(".scrollable-tags");

      // Only render tags & ratings stars when column width > 300 px
      if (width >= 300) {
        if(ratingsLg) ratingsSm.classList.add("hide");
        if(ratingsSm) ratingsLg.classList.remove("hide");
        if(scrollableTags) scrollableTags.classList.remove("hide");
      } 
      else if (width < 300 && width >= 150) {
        if(ratingsLg) ratingsSm.classList.remove("hide");
        if(ratingsSm) ratingsLg.classList.add("hide");
        if(scrollableTags) scrollableTags.classList.add("hide");
      } else {
        if(ratingsSm) ratingsSm.classList.add("hide");
      }
    },
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(() => {
      this.renderElements();
      this.startMarqueeEffect();
    });
    this.resizeObserver.observe(this.$el.querySelector(".right-col"));
  },
  unmounted() {
    this.resizeObserver.unobserve(this.$el.querySelector(".right-col"));
  }
}
</script>

<style scoped>
.left-col {
  height: 180px;
}

.cover {
  height: 100%;
}

.right-col {
  height: 180px;
  margin-left: 1.5rem;
  overflow: hidden;
}

.subtitle {
  margin-top:.25rem;
}

#ratings-sm > span:last-child {
  font-size: 1.1rem;
}

.scrollable-tags,
.misc-info,
.content {
  margin-top: .75rem;
}

.misc-info::-webkit-scrollbar {
  display: none;
}

.content {
  flex: 1;
}

.content::-webkit-scrollbar {
  width: 5px;
  background: transparent;
}

.content::-webkit-scrollbar-track-piece  {
  background-image: url("~@/assets/images/scrollbar-track.png");
  background-repeat: repeat-y;
  background-size: contain;
}

.content::-webkit-scrollbar-thumb {
  border-radius: 3px;
  border: 1px solid var(--primary-color);
  background-color: black;
}
</style>