<template>
  <div class="d-flex card" :class="layoutStyle">
    <div class="cover">
      <slot name="cover"></slot>
    </div>
    
    <div class="d-flex flex-column overflow-hidden card-body py-0 pr-0">
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
          <slot name="misc"></slot>
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
</template>

<script>
import $ from 'jquery'

export default {
  props: {
    layoutStyle: {
      type: String,
      required: false,
      default: "col-md-12 col-lg-6"
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

.card:nth-child(odd):not(.fullwidth) {
  padding-right: 1rem;
}

.card:nth-child(even):not(.fullwidth) {
  padding-left: 2rem;
}

@media (max-width: 992px) {
  .card:nth-child(odd):not(.fullwidth) {
    padding-right: 0;
  }

  .card:nth-child(even):not(.fullwidth) {
    padding-left: 1rem;
  }
}

.cover {
  width: 125px;
  height: 180px;
}

.card-body {
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

.t1 {
  max-width: 250px;
}

</style>