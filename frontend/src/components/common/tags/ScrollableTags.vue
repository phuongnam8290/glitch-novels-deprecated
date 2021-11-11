<template>
  <div class="position-relative">
    <div class="d-flex h-100 hide cursor-pointer left-arrow"
         @click="scroll('left')">
      <span class="align-self-center">
        <i class="fas fa-chevron-double-left"></i>
      </span>
    </div>

    <div class="d-flex tags"
         v-dragscroll.x>
      <base-tag class="tag"
                v-for="(tag, index) in tags" :key="tag"
                :class="{'start': index === 0, 'end': index === tags.length - 1}">
        {{ tag }}
      </base-tag>
    </div>

    <div class="d-flex h-100 hide cursor-pointer right-arrow"
         @click="scroll('right')">
      <span class="align-self-center">
        <i class="fas fa-chevron-double-right"></i>
      </span>
    </div>
  </div>
</template>

<script>
import BaseTag from '@/components/common/tags/BaseTag.vue';

export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  components: {
    "base-tag": BaseTag
  },
  data() {
    return {
      intersectionObserver: null
    }
  },
  methods: {
    observeScroll(entries) {
      let leftArrow = this.$el.querySelector(".left-arrow");
      let rightArrow = this.$el.querySelector(".right-arrow");
      let tags = this.$el.querySelector(".tags");

      for (let entry of entries) {
        let target = entry.target;

        if ((target.classList.contains("start")) && (entry.isIntersecting)) {
          leftArrow.classList.add("hide");
          tags.classList.remove("left-transparent");
        }
        if ((target.classList.contains("start")) && !(entry.isIntersecting)) {
          leftArrow.classList.remove("hide");
          tags.classList.add("left-transparent");
        }
        if ((target.classList.contains("end")) && (entry.isIntersecting)) {
          rightArrow.classList.add("hide");
          tags.classList.remove("right-transparent");
        }
        if ((target.classList.contains("end")) && !(entry.isIntersecting)) {
          rightArrow.classList.remove("hide");
          tags.classList.add("right-transparent");
        }
      }
    },
    scroll(direction) {
      let tags = this.$el.querySelector(".tags");
      let scrollWidth = tags.offsetWidth / 2;
      let currentPosition = tags.scrollLeft;

      if (direction === "left"){
        tags.scrollTo({
          top: 0,
          left: currentPosition - scrollWidth,
          behavior: "smooth"
        })
      } else if (direction === "right") {
        tags.scrollTo({
          top: 0,
          left: currentPosition + scrollWidth,
          behavior: "smooth"
        })
      }
    }
  },
  mounted() {
    let options = {
      root: this.$el.querySelector(".tags"),
      threshold: 0.95
    }
    this.intersectionObserver = new IntersectionObserver(this.observeScroll, options);
    this.intersectionObserver.observe(this.$el.querySelector(".tags > .start"));
    this.intersectionObserver.observe(this.$el.querySelector(".tags > .end"));
  },
  unmounted() {
    this.intersectionObserver.unobserve(this.$el.querySelector(".tags > .start"));
    this.intersectionObserver.unobserve(this.$el.querySelector(".tags > .end"));
  }
}
</script>

<style scoped>
.tags::-webkit-scrollbar {
  display: none;
}

.tags {
  overflow-x: scroll;
}

.tag {
  margin-right: 1rem;
}

.tag:last-child {
  margin-right: 2px;
}

/* For tags left & right scroll indicators */
.left-transparent {
  mask-image: linear-gradient(to left, black 80%, transparent 90%);
}

.right-transparent {
  mask-image: linear-gradient(to right, black 80%, transparent 90%);
}

.left-transparent.right-transparent {
  mask-image: linear-gradient(0.25turn, transparent 10%, black 20%, black 80%, transparent 90%);
}

.left-arrow,
.right-arrow {
  position: absolute;
  top: 0;
  z-index: 100;
  transition: color var(--hover-duration) ease-in;
}

.left-arrow:hover,
.right-arrow:hover {
  color: var(--secondary-color);
}

.left-arrow {
  left: 0;
}

.right-arrow {
  right: 0;
}
</style>