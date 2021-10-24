<template>
  <div class="overflow-hidden card">
    <div class="left-col">
      <div class="cover">
        <slot name="cover"></slot>
      </div>
    </div>
    <div class="d-flex flex-column right-col">
      <div class="d-flex justify-content-between align-items-center card-header">
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
        <div class="ml-0 ml-md-5 misc" :class="{['misc-overflow']: miscOverflow}"
             v-if="!!$slots.misc"
             v-dragscroll>
          <slot name="misc"></slot>
        </div>
      </div>
      <div class="card-content viewport paragraph-text"
           v-dragscroll>
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
import Marquee from "@/assets/js/mixins/Marquee.js";

export default {
  props: {
    miscOverflow: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  mixins: [Marquee],
  methods: {
    hasFooterSlot() {
      return !!this.$slots["card-footer"]
    },
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

.right-col {
  height: 180px;
  margin-left: 1.5rem;
  overflow: hidden;
}

.card .main {
  flex-shrink: 1;
}

.card .subtitle {
  margin-top:.25rem;
}

.card .misc-overflow {
  flex-shrink: 3;
  overflow-y: hidden;
  overflow-x: scroll ;
}

.card-content {
  margin-top: .75rem;
}

.card-content::-webkit-scrollbar {
  width: 5px;
  background: transparent;
}

.card-content::-webkit-scrollbar-track-piece  {
  background-image: url("~@/assets/images/scrollbar-track.png");
  background-repeat: repeat-y;
  background-size: contain;
}

.card-content::-webkit-scrollbar-thumb {
  border-radius: 3px;
  border: 1px solid var(--primary-color);
  background-color: black;
}

.card .misc::-webkit-scrollbar {
  display: none;
}
</style>