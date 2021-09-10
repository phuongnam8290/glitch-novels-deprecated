<template>
  <div class="row">
    <new-novel-item v-for="i in 4" :key="i"
                    :novel="novels[0]"
    >
    </new-novel-item>
  </div>
</template>

<script>
import NewNovelItem from '@/components/index/notable-novels/new-novels/NewNovelItem.vue'

export default {
  components: {
    "new-novel-item": NewNovelItem
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
          genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"]
        }
      ]
    }
  }
}
</script>
