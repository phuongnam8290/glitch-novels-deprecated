<template>
  <div class="overflow-hidden thumbnail">
    <div class="cover">
      <slot name="cover"></slot>
    </div>
    <div class="marquee title" ref="title">
      <p class="text-nowrap title-text">
        <span>
          <slot name="title"></slot>
        </span>
      </p>
    </div>
    <div class="marquee subtitle" ref="subtitle">
      <p class="text-nowrap fader-text">
        <span>
          <slot name="subtitle"></slot>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import Marquee from "@/assets/js/mixins/Marquee.js";

export default {
  mixins: [Marquee],
  data() {
    return {
      resizeObserver: null
    }
  },
  methods: {
    startMarqueeEffect() {
      this.marquee(this.$refs.title, 2);
      this.marquee(this.$refs.subtitle, 2);
    }
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(() => {
      this.startMarqueeEffect();
    })

    this.resizeObserver.observe(this.$el);
  },
  unmounted() {
    this.resizeObserver.unobserve(this.$el);
  }
}
</script>

<style scoped>
.title {
  margin-top: .5rem;
}

.subtitle {
  margin-top: .25rem;
}
</style>