<template>
  <section>
    <browser-banner></browser-banner>
  </section>
  
  <section class="container-fluid header">

    <div class="row pb-2 header">
      <div class="col-12 d-flex justify-content-between px-0">
        
        <base-header-slider :style="'button'"
                            :slots="slots"
                            :start-position="2"
                            @activate-tab="changeNovelsSize">
          <template v-slot:[getSlotName(0)]>
            <span>
              <i class="fas fa-list"></i>
            </span>
          </template>

          <template v-slot:[getSlotName(1)]>
            <span>
              <i class="fas fa-th-list"></i>
            </span>
          </template>

          <template v-slot:[getSlotName(2)]>
            <span>
              <i class="fas fa-th"></i>
            </span>
          </template>
        </base-header-slider>

        <div class="d-flex align-self-start title-text">
          <p class="filter">
            <i class="fas fa-filter"></i>
            Filter
          </p>
          <p class="sort">
            <i class="fas fa-sort-amount-up-alt"></i>
            Sort
          </p>
        </div>
      </div>
    </div>

  </section>
  <section class="container-fluid pt-2 body">
    <div class="row">
      <base-card :size="novelsSize"
                 v-for="n in 18" :key="n"
                 :cover="`novel-list/${novels[0].cover}`"
                 :novel="novels[0]">
        <template v-slot:title>
          {{ novels[0].title }}
        </template>
        <template v-slot:subtitle>
          {{ novels[0].author }}
        </template>
        <template v-slot:misc>
            <base-tag v-for="genre in getLoopedElements(novels[0].genres, 3)" :key="genre">
              {{ genre }}
            </base-tag>
        </template>
        <template v-slot:content> 
          <p v-for="paragraph in novels[0].synopsis" :key="paragraph"
            style="cursor:grab;"
          >
            {{ paragraph }}
          </p>
        </template>

        <template v-slot:footer>
          <p class="d-flex justify-content-between info">
            <span>
              <i class="fas fa-star pr-1"></i>
              {{ novels[0].rating }}
            </span>
            <span class="d-none d-sm-block pl-3">
              <i class="fas fa-books pr-1"></i>
              {{ novels[0].publication }}
            </span>
          </p>
        </template>
      </base-card>
    </div>
  </section>
</template>

<script>
import Utils from "@/assets/js/mixins/Utils.js"

import BrowserBanner from "@/components/browser/BrowserBanner.vue";
import BaseHeaderSlider from "@/components/common/BaseHeaderSlider.vue";
import BaseCard from "@/components/common/BaseCard.vue";
import BaseTag from "@/components/common/BaseTag.vue";

export default {
  components: {
    "browser-banner": BrowserBanner,
    "base-header-slider": BaseHeaderSlider,
    "base-card": BaseCard,
    "base-tag": BaseTag
  }, 
  mixins: [Utils],
  data() {
    return {
      slots: [
        {
          id: 1,
          name: "minimal"
        },
        {
          id: 2,
          name: "default"
        },
        {
          id: 3,
          name: "thumbnail"
        }
      ],
      novelsSize: "default",
      novels: [
        {
          cover: "01.png",
          title: "Solo Leveling",
          author: "추공 (Chugong)",
          synopsis: [
            "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
            "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
            "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
          ],
          rating: 3.78,
          publication: "428 Chapters (Ongoing)",
          genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
          bookmarks: "15,785",
          views: "35,751",
          reviews: "235",
          comments: "14,756"
        }
      ]
    }
  },
  methods: {
    getSlotName(index) {
      return this.slots[index].name;
    },
    changeNovelsSize(size) {
      this.novelsSize = size;
    }
  }
}
</script>

<style scoped>
.header .row{
  border-bottom: 1px solid #EBE5DE;
}

.filter {
  margin-right: 1rem;
}

.filter,
.sort {
  padding: 0.6rem;
  border: 1px solid transparent;
  transition: all 0.3s;
  cursor: pointer;
}

.filter:hover,
.sort:hover {
  color: #70AED2;
  border: 1px solid #70AED2;
}

.body .row {
  margin-left: -2rem;
}
</style>