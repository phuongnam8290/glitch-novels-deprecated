<template>
  <base-card layoutStyle="col-12 fullwidth">
    <template v-slot:cover>
      <img :src="require(`@/assets/images/novel-list/${imgSrc}`)">
    </template>

    <template v-slot:header>
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <p class="title-text"> {{ title }} </p>
          <p class="mt-1 fader-text">{{ author }} </p>
        </div>
        <span class="d-none d-md-block genre">
          <a class="btn"
             v-for="genre in genres"
             :key="genre"
             href="#">
            {{ genre }}
          </a>
        </span>
      </div>
    </template>

    <template v-slot:content> 
      <div class="mt-2 paragraph-text synopsis long-synopsis">
        <p v-for="paragraph in longSynopsis"
           :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </template>
  </base-card>
</template>

<script>
import BaseCard from '@/components/common/BaseCard.vue';

export default {
  components: {
    "base-card": BaseCard
  },
  props: ["imgSrc", "title", "author", "longSynopsis", "genres"]
}
</script>

<style scoped>
img {
  width: 125px;
  height: auto;
}

.synopsis {
  height: 7rem;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.genre a {
  border: 1px solid #EBE5DE;
  border-radius: 0%;
  color: #EBE5DE;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}

.genre a:hover {
  border: 1px solid #70AED2;
  color: #70AED2;
}
</style>

