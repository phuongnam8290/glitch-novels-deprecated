import { createStore } from "vuex"

const store = createStore({
  state: {
    defaultNovelData: {
      novelInfo: {
        cover: "01.png",
        title: "Solo Leveling" ,
        author: "추공 (Chugong)",
        synopsis: [
          "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
          "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
          "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
        ],
        genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
      },
      publicationInfo: {
        chapters: 1423,
        status: "ongoing",
        latestChapter: 1423,
        lastUpdate: "3 hours ago"
      },
      valuationInfo: {
        ratings: 4.5,
        bookmarks: 15785,
        views: 35751,
        reviews: 235,
        comments: 14756,
        votes: 154
      }
    }
  }
})

export default store;