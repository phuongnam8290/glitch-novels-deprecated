<template>
  <div class="d-flex">
    <div class="align-self-center ranking">
      <p class="cursor-default">#{{ ranking }} </p>
    </div>
    <div class="overflow-hidden novel-info">
      <base-card-default :ratings="novel.valuationInfo.ratings"
                         :tags="novel.novelInfo.genres"
                         :height="height">
        <template v-slot:cover>
          <img :src="require(`@/assets/images/novels-list/${novel.novelInfo.cover}`)">
        </template>
        <template v-slot:title>
          {{ novel.novelInfo.title }}
        </template>
        <template v-slot:subtitle>
          {{ novel.novelInfo.author }}
        </template>
        <template v-slot:misc-info>
          <div class="d-flex justify-content-between text-center stats">
            <p>
              <span>
                <i class="far fa-poll"></i>
              </span>
              <span class="text-nowrap cursor-default">
                {{ novel.valuationInfo.votes }} Votes
              </span>
            </p>
            <p>
              <span>
                <i class="fas fa-books"></i>
              </span>
              <span class="text-nowrap cursor-default">
                {{ novel.publicationInfo.chapters }} Chapters
              </span>
            </p>
            <p>
              <span>
                <i class="far fa-heart-rate"></i>
              </span>
              <span class="text-nowrap cursor-default">
                {{ novel.publicationInfo.status }}
              </span>
            </p>
            <p>
              <span>
                <i class="far fa-calendar-alt"></i>
              </span>
              <span class="text-nowrap cursor-default">
                Every {{ novel.publicationInfo.updatesFrequency }} Months
              </span>
            </p>
          </div>
        </template>
        <template v-slot:card-content
                  v-if="isShowSynopsis">
          <p v-for="paragraph in novel.novelInfo.synopsis" :key="paragraph">
            {{ paragraph }}
          </p>
        </template>
      </base-card-default>
    </div>
  </div>
</template>

<script>
import BaseCardDefault from "@/components/common/cards/BaseCardDefault.vue";

export default {
  props: {
    ranking: {
      type: Number,
      required: true
    },
    novelData: {
      type: Object,
      //TODO: Change from false to true after implement backend
      required: false,
    }
  },
  components: {
    "base-card-default": BaseCardDefault
  },
  data() {
    return {
      resizeObserver: null,
      height: 220,
      isShowSynopsis: true,
    }
  },
  computed: {
    novel() {
      return this.novelData || this.$store.state.defaultNovelData
    }
  },
  methods: {
    renderElements() {
      let width = document.body.offsetWidth;

      if(width >= 992) {
        this.isShowSynopsis = true;
        this.height = 220;
      } else {
        this.isShowSynopsis = false;
        this.height = 130;
      }
    }
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(() => {
      this.renderElements();
    });
    this.resizeObserver.observe(document.body);

    this.renderElements();
  },
  unmounted() {
    this.resizeObserver.unobserve(document.body);
  }
}
</script>

<style scoped>
@font-face {
  font-family: "numbers-prospekt";
  src: url(~@/assets/font/numbers-prospekt/numbers-prospekt.woff2);
}

.ranking {
  font-family: "numbers-prospekt", sans-serif;
  font-size: 3rem;
}

.ranking > p {
  width: 100px;
}

img {
  height: 100%;
}

.stats {
  margin-right: -2rem;
}

.stats > p {
  margin-right: 2rem;
  margin-left: -.5rem;
  margin-top: -.25rem;
  padding-bottom: 1px;
}

.stats > p > span {
  display: inline-block;
  margin-left: .5rem;
  margin-top: .25rem;
}
</style>