<template>
  <div class="row">
    <popular-novel-item v-for="i in 8" :key="i"
                        :novel="novels[0]"
    >
    </popular-novel-item>
  </div>
</template>

<script>
import PopularNovelItem from '@/components/index/notable-novels/popular-novels/PopularNovelItem.vue'

export default {
  components: {
    "popular-novel-item": PopularNovelItem
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
          rating: 4.78,
          publication: "428 Chapters (Ongoing)"
        }
      ]
    }
  }
}
</script>
