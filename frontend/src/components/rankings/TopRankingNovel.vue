<template>
  <div class="rankings"
       @mouseenter="startMarqueeEffect"
       @mouseleave="stopMarqueeEffect">
    <div class="position-relative">
      <div class="position-relative overflow-hidden">
        <div class="front">
          <img :src="require(`@/assets/images/novel-list/${novel.novelInfo.cover}`)"
               :style="getImgSize()">
          <div class="overlay"></div>
        </div>
        <div class="d-none d-lg-flex justify-content-center align-items-center back">
          <div class="overflow-hidden content">
            <div class="title-text marquee" ref="title">
              <a href="#">
                  <span>
                    {{ novel.novelInfo.title }}
                  </span>
              </a>
            </div>
            <div class="fader-text marquee" ref="author">
              <a href="#">
                  <span>
                    {{ novel.novelInfo.author }}
                  </span>
              </a>
            </div>
            <div class="d-flex justify-content-center">
              <p class="read-btn">Read now</p>
            </div>
          </div>
        </div>
      </div>
      <div class="medal"
           :style="getMedalPosition()">
        <img :src="require(`@/assets/images/rankings/${ranking}.png`)"
             :style="getMedalSize()">
      </div>
    </div>
  </div>
</template>

<script>
import Marquee from "@/assets/js/mixins/Marquee.js";

export default {
  props: {
    ranking: {
      type: String,
      required: false,
      default: "first",
      validator(value) {
        return ["first", "second", "third"].includes(value);
      }
    },
    novelData: {
      type: Object,
      required: false
    }
  },
  mixins: [Marquee],
  computed: {
    novel() {
      return this.novelData || this.$store.state.defaultNovelData;
    }
  },
  methods: {
    getMedalSize() {
      if (this.ranking === "first") {
        return { width: "7vw" };
      } else {
        return { width: "5vw" };
      }
    },
    getMedalPosition() {
      if (this.ranking === "first") {
        return {
          top: "-1vw",
          right: "-1vw"
        }
      } else {
        return {
          top: "-.5vw",
          right: "-.5vw"
        }
      }
    },
    getImgSize() {
      if(this.ranking === "first") {
        return { width: "20vw" };
      } else {
        return { width: "18vw" };
      }
    },
    startMarqueeEffect() {
      this.marquee(this.$refs.title, 2);
      this.marquee(this.$refs.author, 2);
    },
    stopMarqueeEffect() {
      this.resetState(this.$refs.title);
      this.resetState(this.$refs.author);
    }
  }
}
</script>

<style scoped>
.rankings {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.front {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient( 240deg, rgba(0, 0, 0, .8) 15%, transparent 30%);
}

.back {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  display: none;
  transition: top .6s, opacity .4s;
}

/* Only show back content when element finish animate */
.rankings:not(.animating):hover .back {
  top: 0;
  opacity: 1;
  display: block;
}

.back .content {
  padding: 1rem;
}

.content div:nth-child(2) {
  margin-top: .25rem;
  margin-bottom: 1rem;
}

.back .content .read-btn {
  display: inline-block;
  padding: .5rem 1rem;
  border: 1px solid var(--primary-color);
  transition: border .3s, color .3s;
  cursor: pointer;
}

.back .content .read-btn:hover {
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
}

.medal {
  position: absolute;
}
</style>