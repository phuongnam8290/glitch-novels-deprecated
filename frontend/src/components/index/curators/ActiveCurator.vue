<template>
  <div class="d-flex overflow-hidden active-curator">
    <div class="avatar">
      <img :src="require(`@/assets/images/avatars/${curator.avatar}`)">
    </div>
    <div class="d-flex flex-column justify-content-between overflow-hidden ml-3 info">
      <div class="title-text marquee username" ref="username">
        <p class="overflow-hidden cursor-pointer">
          <span class="d-inline-block"> {{ curator.username }} </span> 
        </p>
      </div>
      <div class="d-flex text-nowrap follow">
        <a class="cursor-pointer follow-link">
          Follow
        </a>
        <div class="d-none d-sm-block followers"> {{ curator.followers }} Followers</div>
      </div>
    </div>
  </div>
</template>

<script>
import Marquee from "@/assets/js/mixins/Marquee.js";

export default {
  props: {
    curator: {
      type: Object,
      required: true
    }
  },
  mixins: [Marquee],
  methods: {
    startMarqueeEffect() {
      this.marquee(this.$refs.username, 2);
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
.avatar img {
  width: 70px;
  height: 70px;
}

.username{
  white-space: nowrap;
}

.follow-link,
.followers {
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 0.5rem 1rem;

  margin-bottom: 3px;
}

.follow-link{
  transition-property: color, border;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
}

.follow-link:hover {
  text-decoration: none;
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
}

.followers {
  margin-left: 0.5rem;
  overflow: hidden;
  opacity: 0;
  transition: all .25s ease-in;
}

.follow:hover .followers {
  opacity: 1;
}

</style>