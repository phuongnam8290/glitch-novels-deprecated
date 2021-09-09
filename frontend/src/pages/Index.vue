<template>
  <!-- Banner section -->
  <section>
    <index-banner></index-banner>
  </section>

  <section class="container-fluid">
    <div class="row">
      <!-- Notable novels -->
      <div class="col-12 col-lg-9 notable-novels">
        <notable-novels></notable-novels>
      </div>
      <!-- Random novel -->
      <div class="d-none d-lg-block col-3 random-novel">
        <random-novel></random-novel>
      </div>
    </div>
  </section>

  <section class="container-fluid py-3">
    <div class="row section-title">
      <div class="col-12 d-flex justify-content-center">
        <p class="title-text pb-1">
          Suggested Curators
        </p>
      </div>
    </div>

    <div class="row overflow-hidden mt-5 ">
      <div class="col-12 d-flex justify-content-between pl-0">
        <curator-list @change-active-reviews="changeActiveReviews"></curator-list>
      </div>
    </div>

    <transition enter-active-class="fadein"
                leave-active-class="fadeout"
                mode="out-in">
      <div class="row reviews"
           :key="activeReviews"
           v-if="activeReviews.length > 0">
        <reviews-list :reviews="activeReviews"></reviews-list>
      </div>
    </transition>
  </section>
</template>

<script>
import IndexBanner from "@/components/index/IndexBanner.vue"
import NotableNovels from "@/components/index/notable-novels/NotableNovels.vue"
import RandomNovel from "@/components/index/random-novel/RandomNovel.vue"
import CuratorList from "@/components/index/curators/CuratorList.vue"
import ReviewsList from "@/components/index/curators/ReviewsList.vue"

export default {
  components: {
    "index-banner": IndexBanner,
    "notable-novels": NotableNovels,
    "random-novel": RandomNovel,
    "curator-list": CuratorList,
    "reviews-list": ReviewsList
  },
  data() {
    return {
      activeReviews: []
    }
  },
  methods: {
    changeActiveReviews(activeReviews) {
      this.activeReviews = activeReviews;
    }
  }
}
</script>

<style scoped>
.notable-novels {
  padding-left: 0;
  overflow: hidden;
}

.random-novel {
  padding-left: 3rem;
  padding-right: 0;
}

.reviews {
  margin-left: -2rem;
}
</style>

