<template>
  <div class="row">
    <base-card :style="style"
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
</template>

<script>
import Utils from "@/assets/js/mixins/Utils.js"

import BaseCard from "@/components/common/BaseCard.vue";
import BaseTag from "@/components/common/BaseTag.vue";

export default {
  components: {
    "base-card": BaseCard,
    "base-tag": BaseTag
  },
  mixins: [Utils],
  props: {
    style: {
      type: String,
      required: false,
      default: "default"
    }
  },
  data() {
    return {
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
  }
}
</script>

<style scoped>
.body .row {
  margin-left: -2rem;
}
</style>