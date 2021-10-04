<template>
  <!-- Use slots if you want to render default template 
  Use novel props if you want to render minimal & thumbnail template (only use for render novel patch) -->
  <transition enter-active-class="fadein"
              leave-active-class="fadeout"
              mode="out-in">
  <!-- Default style -->
  <div class="d-flex patch" :class="[layoutStyle, style]"
       v-if="style == 'default'" key="default">
    <div>
       <img :src="require(`@/assets/images/${cover}`)">
    </div>

    <div class="d-flex flex-column overflow-hidden right-column">
      <div class="d-flex justify-content-between align-items-center patch-header">
        <div class="overflow-hidden">
          <div class="overflow-hidden" 
               @mouseenter="startMarquee" 
               @mouseleave="stopMarquee">
            <p class="d-inline-block text-nowrap pointable title-text">
              <slot name="title"></slot>
            </p>
          </div>

          <div class="overflow-hidden mt-1" 
               v-if="hasSubtitleSlot"
               @mouseenter="startMarquee" 
               @mouseleave="stopMarquee">
            <p class="d-inline-block text-nowrap pointable fader-text">
              <slot name="subtitle"></slot>
            </p>
          </div>
        </div>      

        <div>
          <div class="d-none d-md-flex align-items-center pl-2 genre">
           <slot name="misc"></slot>
          </div>
        </div>
      </div>

      <div class="paragraph-text viewport"
           v-dragscroll>
        <div>
          <slot name="content"></slot>
        </div>
      </div>

      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  <!-- End default style -->
  
  <!-- Minimal style -->
  <div class="d-flex patch" :class="[layoutStyle, style]"
       v-else-if="style == 'minimal'" key="minimal">
    <div>
       <img :src="require(`@/assets/images/${cover}`)">
    </div>

    <div class="d-flex flex-column justify-content-between overflow-hidden right-column">
      <div class="d-flex justify-content-between align-items-start overflow-hidden mb-1">
        <div class="overflow-hidden"
              @mouseenter="startMarquee" 
              @mouseleave="stopMarquee">
          <p class="d-inline-block text-nowrap title-text pointable">
            {{ novel.title }}
          </p>
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

      <div class="mt-2 text-nowrap">
          <base-tag v-for="genre in getLoopedElements(novel.genres, 5)" :key="genre">
            {{ genre }}
          </base-tag>
      </div>

      <div class="d-flex justify-content-between text-center mt-2">
        <p class="mr-4">
          <span> 
            <i class="fas fa-books mr-2 mb-1"></i>
          </span>
          <span class="text-nowrap cursor-default">
            {{ novel.chapters }} Chapters
          </span>
        </p>
        <p class="mr-4">
          <span>
            <i class="far fa-heart-rate mr-2 mb-1"></i>
          </span>
          <span class="cursor-default">Ongoing</span>
        </p>
        <p class="mr-4">
          <span>
            <i class="far fa-calendar-alt mr-2 mb-1"></i>
          </span>
          <span class="text-nowrap cursor-default">Every 14 Day(s)</span>
        </p>
        <p>
          <span>
            <i class="fas fa-bookmark mr-2 mb-1"></i>
          </span>
          <span class="cursor-default">{{ novel.bookmarks}} </span>
        </p>
      </div>
    </div>
  </div>
  <!-- End of minimal style -->

  <!-- Thumbnail style -->
  <div class="col-6 col-sm-4 col-md-3 col-lg-2 d-flex patch" :class="style"
       v-else-if="style == 'thumbnail'" key="thumbnail">
    <div class="position-relative left-column">
        <img class="img-fluid"
             :src="require(`@/assets/images/${cover}`)">
        <div class="position-absolute overlay">
          <div class="position-absolute text-center overflow-hidden title"
               @mouseenter="startMarquee" 
               @mouseleave="stopMarquee">
            <p class="d-inline-block text-nowrap pointable"> {{ novel.title }} </p>
          </div>
        </div>       
    </div>
  </div>
  <!-- End thumbnail style -->
  </transition>
</template>

<script>
import Utils from "@/assets/js/mixins/Utils.js";
import ScrollText from "@/assets/js/mixins/ScrollText.js";

import BaseTag from "@/components/common/BaseTag.vue";

export default {
  components: {
    "base-tag": BaseTag
  },
  mixins: [Utils, ScrollText],
  props: {
    layoutStyle: {
      type: String,
      required: false,
      default: "col-md-12 col-lg-6"
    },
    style: {
      type: String,
      required: false,
      default: "default"
    },

    // Special treatment for cover source attribute
    cover: {
      type: String,
      required: true
    },
    novel: {
      type: Object,
      required: false,
      default: () => {
        return {
          cover: "n/a",
          title: "n/a",
          author: "n/a",
          synopsis: [],
          genres: [],
          ratings: NaN,
          bookmarks: NaN,
          views: NaN,
          reviews: NaN,
          comments: NaN,
          chapters: NaN,
          status: "n/a",
          votes: NaN
        }
      }
    }
  },
  computed: {
    hasSubtitleSlot() {
      return !!this.$slots.subtitle;
    }
  }
}
</script>


<style scoped>
.patch {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  border: none;
  margin-top: 2.5rem;
}

.patch ::-webkit-scrollbar {
  display: none;
}

.default.patch:nth-child(odd) {
  padding-right: 1.25rem;
}

.default.patch:nth-child(even) {
  padding-left: 1.25rem;
}

@media (max-width: 992px) {
  .default.patch {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

.default.patch img {
  height: 25vh;
}

.default.patch .right-column {
  height: 25vh;
  padding-left: 1.5rem;
}

.default.patch .patch-header > div:first-child {
  min-width: 10vw;
}

.minimal.patch img {
  height: 100px;
}

.minimal.patch .right-column {
  padding-left: 1.5rem;
  width: 100%;
}

.minimal.patch:nth-child(odd) {
  padding-right: 1.25rem;
}

.minimal.patch:nth-child(even) {
  padding-left: 1.25rem;
}

@media (max-width: 992px) {
  .minimal.patch {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

.thumbnail .overlay {
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-image:  linear-gradient(
    rgba(12.5, 13.3, 13.3, 0) 70%, 
    rgba(12.5, 13.3, 13.3, 0.95) 100%
  );
}

.thumbnail .title {
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>