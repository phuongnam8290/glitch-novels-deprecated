<template>
  <!-- <div class="d-flex">
    <div class="d-flex align-items-center pl-0">
      <p class="text-center ranking-number">
        #{{rankingNumber}}
      </p>
    </div>
    
    <div class="d-flex align-items-center ranking-item ">
      <div class="cover">
        <img :src="require(`@/assets/images/novel-list/${novel.cover}`)">
      </div>

      <div class="d-flex info">
        <div>
        <p class="title"> {{ novel.title }} </p>
        <p class="author"> {{ novel.author}} </p>
      </div>
      <div class="d-flex">
        
        <div class="d-flex flex-column align-items-center ranking-type">
          <p>{{ novel.votes }}</p>
          <p>
            <i class="far fa-poll"></i>
            Votes
          </p>
        </div>
        <div class="d-flex flex-column align-items-center ratings">
          <p>{{ novel.ratings }}</p>
          <p>
            <i class="fas fa-star"></i>
            Ratings
          </p>
        </div>
        <div class="d-flex flex-column align-items-center chapters">
          <p>{{ novel.chapters }}</p>
          <p>
            <i class="fas fa-books"></i>
            Chapters
          </p>
        </div>
        <div class="d-flex flex-column align-items-center status">
          <p>{{ novel.status }}</p>
          <p>
            <i class="far fa-heart-rate"></i>
            Status
          </p>
        </div>

      </div>
      </div>
      
    </div>
  </div> -->
  <div></div>
</template>

<script>
import Utils from "@/assets/js/mixins/Utils.js";

export default {
  mixins: [Utils],
  props: {
    novel: {
      type: Object,
      required: true
    },
    rankingNumber: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "numbers-prospekt";
  src: url(~@/assets/font/numbers-prospekt/numbers-prospekt.woff2);
}
</style>