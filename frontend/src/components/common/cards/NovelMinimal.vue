<template>
  <base-card-minimal :ratings="novel.valuationInfo.ratings"
                     :tags="novel.novelInfo.genres">
    <template v-slot:cover>
      <img :src="require(`@/assets/images/novels-list/${novel.novelInfo.cover}`)">
    </template>
    <template v-slot:title>
      {{ novel.novelInfo.title }}
    </template>
    <template v-slot:misc-info>
      <div class="d-flex flex-wrap justify-content-between text-center misc-info">
        <p>
          <span> 
            <i class="fas fa-books mr-2 mb-1"></i>
          </span>
          <span class="text-nowrap cursor-default">
            {{ novel.publicationInfo.chapters }} Chapters
          </span>
        </p>
        <p>
          <span>
            <i class="far fa-heart-rate mr-2 mb-1"></i>
          </span>
          <span class="cursor-default">
            {{ novel.publicationInfo.status }}
          </span>
        </p>
        <p>
          <span>
            <i class="far fa-calendar-alt mr-2 mb-1"></i>
          </span>
          <span class="text-nowrap cursor-default">
            Every {{novel.publicationInfo.updatesFrequency}} Month(s)
          </span>
        </p>
        <p class="d-none d-md-block">
          <span>
            <i class="fas fa-bookmark mr-2 mb-1"></i>
          </span>
          <span class="cursor-default">{{ novel.valuationInfo.bookmarks}} </span>
        </p>
      </div>
    </template>
  </base-card-minimal>
</template>

<script>
import BaseCardMinimal from '@/components/common/cards/BaseCardMinimal.vue';

export default {
  components: {
    "base-card-minimal": BaseCardMinimal
  },
  props: {
    novelData: {
      type: Object,
      //TODO: Change from false to true after implement backend
      required: false,
    }
  },
  data() {
    return {
      resizeObserver: null
    }
  },
  computed: {
    novel() {
      return this.novelData || this.$store.state.defaultNovelData
    }
  },
  methods: {
    renderElements() {
      let width = this.$el.querySelector(".right-col").offsetWidth;
      let bookmarks = this.$el.querySelector(".misc-info > p:last-child");

      // Only render bookmarks when column width > 300 px
      if (width >= 300) {
        if(bookmarks) bookmarks.classList.remove("hide");
      } else {
        if(bookmarks) bookmarks.classList.add("hide");
      }

      let icons = this.$el.querySelectorAll(".misc-info p > span:first-child");

      if (width >= 155) {
        for(let icon of icons) {
          icon.classList.remove("hide");
        }
      } else {
        for(let icon of icons) {
          icon.classList.add("hide");
        }
      }
    }
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(this.renderElements);
    this.resizeObserver.observe(this.$el.querySelector(".right-col"));

    this.renderElements();
  },
  unmounted() {
    this.resizeObserver.unobserve(this.$el.querySelector(".right-col"));
  }
}
</script>

<style scoped>
img {
  height: 100%;
}

.misc-info {
  margin-right: -2rem;
}

.misc-info > p {
  margin-right: 2rem;
}
</style>