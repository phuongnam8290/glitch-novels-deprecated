<template>
  <div class="overflow-hidden thumbnail">
    <div class="cover">
      <slot name="cover"></slot>
    </div>
    <div class="marquee title" ref="title">
      <p class="text-nowrap text-center title-text">
        <span>
          <slot name="title"></slot>
        </span>
      </p>
    </div>
    <div class="marquee subtitle" ref="subtitle">
      <p class="text-nowrap text-center fader-text">
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
.title {
  margin-top: .5rem;
}

.subtitle {
  margin-top: .25rem;
}
</style>