<template>
  <!-- Use slots if you want to render default template 
  Use novel props if you want to render minimal & thumbnail template (only use for render novel card) -->
  <transition enter-active-class="fadein"
              leave-active-class="fadeout"
              mode="out-in">
  <!-- Default size -->
  <div class="d-flex card pt-4 pb-3" :class="[layoutStyle, size]"
       v-if="size == 'default'" key="default">
    <div class="cover">
       <img :src="require(`@/assets/images/${cover}`)">
    </div>

    <div class="d-flex flex-column overflow-hidden card-body py-0 pr-0"
         v-if="size == 'default'">
      <div class="d-flex justify-content-between align-items-start">
        <div class="overflow-hidden">
          <div class="overflow-hidden" 
               @mouseenter="startMarquee" 
               @mouseleave="stopMarquee">
            <p class="d-inline-block text-nowrap title-text" style="cursor: pointer;">
              <slot name="title"></slot>
            </p>
          </div>

          <div class="overflow-hidden" 
               v-if="hasSubtitleSlot"
               @mouseenter="startMarquee" 
               @mouseleave="stopMarquee">
            <p class="d-inline-block text-nowrap mt-1 fader-text" style="cursor: pointer;">
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

      <div class="mt-2 paragraph-text viewport"
           v-dragscroll>
        <div class="pb-5">
          <slot name="content"></slot>
        </div>
      </div>

      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  <!-- End default size -->
  
  <!-- Minimal size -->
  <div class="d-flex card pt-4 pb-3" :class="[layoutStyle, size]"
       v-else-if="size == 'minimal'" key="minimal">
    <div class="cover">
       <img :src="require(`@/assets/images/${cover}`)">
    </div>

    <div class="d-flex flex-column overflow-hidden card-body py-0 pr-0">
      <div class="d-flex justify-content-between overflow-hidden">
        <div class="overflow-hidden"
              @mouseenter="startMarquee" 
              @mouseleave="stopMarquee">
          <p class="d-inline-block text-nowrap title-text">
            {{ novel.title }}
          </p>
        </div>

        <div class="d-flex ml-3">
          <span v-for="fullStar in getRatingStars(novel.rating).fullStars" :key="fullStar">
            <i class="fas fa-star"></i>
          </span>
          <span v-if="getRatingStars(novel.rating).haveHalfStar">
            <i class="fas fa-star-half-alt"></i>
          </span>
          <span v-for="emptyStar in getRatingStars(novel.rating).emptyStars" :key="emptyStar">
            <i class="far fa-star"></i>
          </span>
        </div>
      </div>

      <div class="mt-3 text-nowrap">
          <base-tag v-for="genre in getLoopedElements(novel.genres, 5)" :key="genre">
            {{ genre }}
          </base-tag>
      </div>
      
      <div class="d-flex justify-content-between mt-3">
        <span class="d-sm-block">
          <i class="fas fa-books mr-1"></i>
          {{ novel.publication }}
        </span>
        <span class="d-none d-sm-block ml-3"> 
          <i class="fas fa-bookmark pr-1"></i>
          {{ novel.bookmarks }}
        </span>
        <span class="d-none d-md-block ml-3">
          <i class="fas fa-eye pr-1"></i>
          {{ novel.views }}
        </span>
        <span class="d-none d-md-block ml-3">
          <i class="fas fa-clipboard-check"></i>
          {{ novel.reviews }}
        </span>
        <span class="d-none d-md-block ml-3">
          <i class="fas fa-comments"></i>
          {{ novel.comments }}
        </span>
      </div>
    </div>
  </div>
  <!-- End of minimal size -->

  <!-- Thumbnail size -->
  <div class="col-6 col-sm-4 col-md-3 col-lg-2 d-flex card pt-4 pb-3" :class="size"
       v-else-if="size == 'thumbnail'" key="thumbnail">
    <div class="position-relative cover">
        <img class="img-fluid"
             :src="require(`@/assets/images/${cover}`)">
        <div class="position-absolute overlay">
          <div class="position-absolute text-center overflow-hidden title"
               @mouseenter="startMarquee" 
               @mouseleave="stopMarquee">
            <p class="d-inline-block text-nowrap"
               style="cursor: pointer"> {{ novel.title }} </p>
          </div>
        </div>       
    </div>
  </div>
  <!-- End thumbnail size -->
  </transition>
</template>

<script>
import $ from 'jquery';
import Utils from "@/assets/js/mixins/Utils.js";

import BaseTag from "@/components/common/BaseTag.vue";

export default {
  components: {
    "base-tag": BaseTag
  },
  mixins: [Utils],
  props: {
    layoutStyle: {
      type: String,
      required: false,
      default: "col-md-12 col-lg-6"
    },
    size: {
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
          rating: NaN,
          publication: "n/a",
          genres: [],
          bookmarks: "n/a",
          views: "n/a",
          reviews: "n/a",
          comments: "n/a"
        }
      }
    }
  },
  computed: {
    hasSubtitleSlot() {
      return !!this.$slots.subtitle;
    }
  },
  methods: {
    startMarquee(event) {
      let container = $(event.currentTarget);
      let child = container.children();

      let containerWidth = container.width();
      let childWidth = child.width();

      if(childWidth > containerWidth) {
        let scrollDistance = childWidth - containerWidth;

        container.stop();
        container.animate(
          {scrollLeft: scrollDistance},
          2000, 
          'linear'
        );
      }
    },
    stopMarquee(event) {
      let container = $(event.currentTarget);

      container.stop();
      container.animate(
        {scrollLeft: 0},
        400,
        'swing'
      );
    }
  }
}
</script>


<style scoped>
.card {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  border: none;
  padding: 2rem 0 2rem 1rem;
}

.default.card:nth-child(odd):not(.fullwidth),
.minimal.card:nth-child(odd):not(.fullwidth) {
  padding-right: 1rem;
}

.default.card:nth-child(even):not(.fullwidth),
.minimal.card:nth-child(even):not(.fullwidth) {
  padding-left: 2rem;
}

@media (max-width: 992px) {
  .default.card:nth-child(odd):not(.fullwidth),
  .minimal.card:nth-child(odd):not(.fullwidth) {
    padding-right: 0;
  }

  .default.card:nth-child(even):not(.fullwidth),
  .minimal.card:nth-child(even):not(.fullwidth) {
    padding-left: 1rem;
  }
}

.default img {
  width: 125px;
  height: 180px;
}

.minimal img {
  width: auto;
  height: 80px;
}

.default .card-body {
  height: 180px;
}

.viewport {
  overflow: hidden;
  white-space: normal;
  cursor: grab;
  /* Fading viewport to bottom - May not work on some browsers */
  -webkit-mask-image: -webkit-gradient(linear, center top, center bottom, 
      color-stop(0.70,  rgba(0,0,0,1)),
      color-stop(1.00,  rgba(0,0,0,0)));
  mask-image: -webkit-gradient(linear, center top, center bottom, 
                                color-stop(0.70,  rgba(0,0,0,1)),
                                color-stop(1.00,  rgba(0,0,0,0)));
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