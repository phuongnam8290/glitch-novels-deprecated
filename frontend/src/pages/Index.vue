<template>
  <!-- Banner section -->
  <section>
    <index-banner></index-banner>
  </section>

  <section class="container-fluid">
    <div class="row">
      <!-- Notable novels -->
      <div class="col-12 col-lg-9 overflow-hidden">
        <notable-novels></notable-novels>
      </div>
      <!-- Random novel -->
      <div class="d-none d-lg-block col-3 random-novel">
        <random-novel></random-novel>
      </div>
    </div>
  </section>

  <section class="container-fluid">
    <base-section-header>
      Suggested Curators
    </base-section-header>
    <div class="row">
      <div class="col-12 d-flex justify-content-between curators-list">
        <curators-list>
        </curators-list>
      </div>
    </div>

    <transition enter-active-class="fadein"
                leave-active-class="fadeout"
                mode="out-in">
      <div class="row"
           :key="curators[0].id">
        <reviews-list></reviews-list>
      </div>
    </transition>
  </section>
</template>

<script>
import { reactive, provide } from "vue";
import { useStore } from "vuex";

import IndexBanner from "@/components/index/IndexBanner.vue";
import NotableNovels from "@/components/index/notable-novels/NotableNovels.vue";
import RandomNovel from "@/components/index/random-novel/RandomNovel.vue";
import BaseSectionHeader from "@/components/common/BaseSectionHeader.vue";
import CuratorsList from "@/components/index/curators/CuratorsList.vue";
import ReviewsList from "@/components/index/curators/ReviewsList.vue";

export default {
  components: {
    "index-banner": IndexBanner,
    "notable-novels": NotableNovels,
    "random-novel": RandomNovel,
    "base-section-header": BaseSectionHeader,
    "curators-list": CuratorsList,
    "reviews-list": ReviewsList
  },
  setup() {
    const store = useStore();

    // TODO: Repace with api call to backend
    // Deep copy from store
    const curators = reactive(JSON.parse(JSON.stringify(store.state.defaultCuratorsData)));
    provide("curators", curators);

    return {
      curators
    };
  }
}
</script>

<style scoped>
.random-novel {
  padding-left: 3rem;
}

.curators-list {
  margin-top: 2.5rem;
}
</style>

