<template>
  <div class="row">
    <latest-novel-item v-for="i in 8"
                  :key="i"
                  :cover="cover"
                  :title="title"
                  :author="author"
                  :synopsis="synopsis"
                  :newestChapter="newestChapter"
                  :updateTime="updateTime"
    >
    </latest-novel-item>
  </div>
</template>

<script>
import LatestNovelItem from '@/components/index/notable-novels/latest-novels/LatestNovelItem.vue'

export default {
  components: {
    "latest-novel-item": LatestNovelItem
  }, 
  data() {
    return {
      cover: "01.png",
      title: "Solo Leveling",
      author: "추공 (Chugong)",
      synopsis: [
        "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
        "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
        "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
      ],
      newestChapter: "Ch. 50",
      updateTime: "30 minutes ago",
    }
  }
}
</script>
