<template>
  <div class="overflow-hidden card">
    <div class="left-col">
      <div class="cover">
        <slot name="cover"></slot>
      </div>
    </div>
    <div class="d-flex flex-column right-col">
      <div class="d-flex card-header">
        <div class="overflow-hidden">
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
        <div class="misc">
          <slot name="misc"></slot>
        </div>
      </div>
      <div class="card-content viewport paragraph-text"
           v-dragscroll>
        <slot name="card-content"></slot>
      </div>
      <div class="card-footer"
           v-if="!!$slots['card-footer']">
        <slot name="card-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Marquee from "@/assets/js/mixins/Marquee.js";

export default {
  mixins: [Marquee],
  methods: {
    hasFooterSlot() {
      return !!this.$slots["card-footer"]
    }
  },
  mounted() {
    setTimeout(() => {
      this.marquee(this.$refs.title);
      this.marquee(this.$refs.subtitle);
    }, 500);
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

.card .subtitle {
  margin-top:.25rem;
}

.card-content {
  margin-top: .75rem;
}

.card ::-webkit-scrollbar {
  width: 5px;
  background: transparent;
}

.card ::-webkit-scrollbar-track-piece  {
  background-image: url("~@/assets/images/scrollbar-track.png");
  background-repeat: repeat-y;
  background-size: contain;
}

.card ::-webkit-scrollbar-thumb {
  border-radius: 3px;
  border: 1px solid var(--primary-color);
  background-color: black;
}
</style>