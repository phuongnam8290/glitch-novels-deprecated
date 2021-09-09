<template>
  <swiper 
    :space-between="0"
    slides-per-view="auto"
    :centered-slides="true"
    :loop="true"
    class="banner"
  >
    <swiper-slide v-for="(title, index) in titles" :key="title" 
      :style="getCoverStyle(index)"
      class="item"> 
      <p class="title"> {{ title }} </p>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper.min.css";

export default {
  components: {
    swiper: Swiper,
    "swiper-slide": SwiperSlide,
  },
  data() {
    return {
      titles: [
        "Skeleton Knight in Another World",
        "Solo Leveling",
        "Lord of the Mysteries",
        "Overgeared",
        "Return of the Mount Hua Sect",
        "Second Life Ranker",
        "The Second Coming of Gluttony",
        "SSS-Class Suicide Hunter",
        "The Saga of Tanya the Evil",
        "Omniscient Reader's Viewpoint",
      ]
    }
  },
  methods: {
    getCoverStyle(index) {
      return {
        "background-image": 'url(' + require(`@/assets/images/banner/${index + 1}.png`) + ')'
      };
    }
  },
};
</script>

<style>
.swiper-slide {
  filter: grayscale(60%) brightness(40%) blur(2px);
  transform: scale(1.02);
  transition: filter 1s;
  background-size: cover;
  height: 50vh;
  width: 70vw;
}

.swiper-slide.swiper-slide-active {
  filter: none;
}

.banner .title {
  font-weight: 500;
  position:absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 2.5rem;
  width: 80%;
  text-align: center;
  text-shadow: 0px 0px 5px #000000;
}

@media (max-width: 992px) {
  .banner .item {
    height: 40vh;
    width: 100vw;
  }
  
  .banner .title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .banner .item {
    height: 30vh;
  }

  .banner .title {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .banner .item {
    height: 20vh;
  }

  .banner .title {
    font-size: 1.2rem;
  }
}
</style>
