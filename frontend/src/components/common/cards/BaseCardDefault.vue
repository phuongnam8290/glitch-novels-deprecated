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

      <div class="position-relative tags-wrapper">
        <div class="d-flex h-100 hide cursor-pointer left-arrow"
             @click="scroll('left')">
          <span class="align-self-center">
            <i class="fas fa-chevron-double-left"></i>
          </span>
        </div>
        <div class="d-flex tags"
             v-if="!!tags"
             v-dragscroll.x>
          <base-tag class="tag"
                    v-for="(tag, index) in tags" :key="tag"
                    :class="{'start': index === 0, 'end': index === tags.length - 1}">
            {{ tag }}
          </base-tag>
        </div>
        <div class="d-flex h-100 hide cursor-pointer right-arrow"
             @click="scroll('right')">
          <span class="align-self-center">
            <i class="fas fa-chevron-double-right"></i>
          </span>
        </div>
      </div>

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

import BaseTag from '@/components/common/BaseTag.vue';
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
    "base-tag": BaseTag
  },
  mixins: [Utils, Marquee],
  data() {
    return {
      resizeObserver: null,
      intersectionObserver: null
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
      let tags = this.$el.querySelector(".tags-wrapper");

      // Only render tags & ratings stars when column width > 300 px
      if (width >= 300) {
        if(ratingsLg) ratingsSm.classList.add("hide");
        if(ratingsSm) ratingsLg.classList.remove("hide");
        if(tags) tags.classList.remove("hide");
      } 
      else if (width < 300 && width >= 150) {
        if(ratingsLg) ratingsSm.classList.remove("hide");
        if(ratingsSm) ratingsLg.classList.add("hide");
        if(tags) tags.classList.add("hide");
      } else {
        if(ratingsSm) ratingsSm.classList.add("hide");
      }
    },
    observeScroll(entries) {
      let leftArrow = this.$el.querySelector(".left-arrow");
      let rightArrow = this.$el.querySelector(".right-arrow");
      let tags = this.$el.querySelector(".tags");

      for (let entry of entries) {
        let target = entry.target;

        if ((target.classList.contains("start")) && (entry.isIntersecting)) {
          leftArrow.classList.add("hide");
          tags.classList.remove("left-transparent");
        }
        if ((target.classList.contains("start")) && !(entry.isIntersecting)) {
          leftArrow.classList.remove("hide");
          tags.classList.add("left-transparent");
        }
        if ((target.classList.contains("end")) && (entry.isIntersecting)) {
          rightArrow.classList.add("hide");
          tags.classList.remove("right-transparent");
        }
        if ((target.classList.contains("end")) && !(entry.isIntersecting)) {
          rightArrow.classList.remove("hide");
          tags.classList.add("right-transparent");
        }
      }
    },
    scroll(direction) {
      let tags = this.$el.querySelector(".tags");
      let scrollWidth = tags.offsetWidth / 2;
      let currentPosition = tags.scrollLeft;

      if (direction === "left"){
        // tags.scrollLeft -= scrollWidth;
        tags.scrollTo({
          top: 0,
          left: currentPosition - scrollWidth,
          behavior: "smooth"
        })
      } else if (direction === "right") {
        // tags.scrollLeft += scrollWidth;
        tags.scrollTo({
          top: 0,
          left: currentPosition + scrollWidth,
          behavior: "smooth"
        })
      }
    }
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(() => {
      this.renderElements();
      this.startMarqueeEffect();
    });
    this.resizeObserver.observe(this.$el.querySelector(".right-col"));

    this.renderElements();
    this.startMarqueeEffect();

    let options = {
      root: this.$el.querySelector(".tags"),
      threshold: 0.95
    }
    this.intersectionObserver = new IntersectionObserver(this.observeScroll, options);
    this.intersectionObserver.observe(this.$el.querySelector(".tags > .start"));
    this.intersectionObserver.observe(this.$el.querySelector(".tags > .end"));
  },
  unmounted() {
    this.resizeObserver.unobserve(this.$el.querySelector(".right-col"));
    this.intersectionObserver.unobserve(this.$el.querySelector(".tags > .start"));
    this.intersectionObserver.unobserve(this.$el.querySelector(".tags > .end"));
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

.tags-wrapper,
.misc-info,
.content {
  margin-top: .75rem;
}

.tags::-webkit-scrollbar,
.misc-info::-webkit-scrollbar {
  display: none;
}

.tags {
  overflow-x: scroll;
}

.tag {
  margin-right: 1rem;
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

/* For tags left & right scroll indicators */
.left-transparent {
  mask-image: linear-gradient(to left, black 80%, transparent 90%);
}

.right-transparent {
  mask-image: linear-gradient(to right, black 80%, transparent 90%);
}

.left-transparent.right-transparent {
  mask-image: linear-gradient(0.25turn, transparent 10%, black 20%, black 80%, transparent 90%);
}

.left-arrow,
.right-arrow {
  position: absolute;
  top: 0;
  z-index: 100;
  transition: color var(--hover-duration) ease-in;
}

.left-arrow:hover,
.right-arrow:hover {
  color: var(--secondary-color);
}

.left-arrow {
  left: 0;
}

.right-arrow {
  right: 0;
}
</style>