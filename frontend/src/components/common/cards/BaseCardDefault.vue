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

        <div class="d-none d-lg-flex ml-4 ratings"
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
        <div class="d-flex d-lg-none ml-4 ratings"
              v-if="!!ratings">
          <span>
            <i class="fas fa-star"></i>
          </span>
          <span class="ml-1 title-text">
            {{ ratings }}
          </span>
        </div>
      </div>

      <div class="d-flex tags"
            v-if="!!tags"
            v-dragscroll.x>
        <base-tag v-for="tag in tags" :key="tag">
          {{ tag }}
        </base-tag>
      </div>
      <div class="d-flex justify-content-between text-center mt-2 misc-info"
           v-if="!!$slots['misc-info']"
           v-dragscroll.x>
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
  methods: {
    startMarqueeEffect() {
      this.marquee(this.$refs.title, 2);
      this.marquee(this.$refs.subtitle, 2);
    }
  },
  mounted() {
    setTimeout(() => {
      this.startMarqueeEffect();
    }, 500);

    window.addEventListener("resize", this.startMarqueeEffect);
  },
  unmounted() {
    window.removeEventListener("resize", this.startMarqueeEffect);
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

.ratings {
  font-weight: 1.1rem;
}

.tags,
.misc-info,
.content {
  margin-top: .75rem;
}

.tags::-webkit-scrollbar,
.misc-info::-webkit-scrollbar {
  display: none;
}

.tags {
  overflow-x: scroll ;
}

.misc-info {
  overflow-x: scroll;
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