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
        genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element", "Accelerated Growth", "Gate to Another World", "Hiding True Abilities"],
      },
      publicationInfo: {
        chapters: 1423,
        status: "Ongoing",
        latestChapter: 1423,
        lastUpdate: "3 hours ago",
        updatesFrequency: 11
      },
      valuationInfo: {
        ratings: 4.5,
        bookmarks: 15785,
        views: 35751,
        reviews: 235,
        comments: 14756,
        votes: 154
      }
    },
    defaultCuratorsData:[
      {
        id: 1,
        avatar: "01.png",
        username: "Cheesecakeophobia 123 4",
        followers: 2750,
        reviews: [{
          id: "1r1",
          novel: {
            novelInfo: {
              cover: "01.png",
              title: "Solo Leveling qaswds sdsadsa asdasd asdsad asdasd asdasd asdsad asdasd asdasd asdasdas asdadawdas" ,
              author: "추공 (Chugong) 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456",
              synopsis: [
                "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
                "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
                "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
              ],
              genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
            },
            publicationInfo: {
              chapters: 1423,
              status: "Ongoing",
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
          },
          content: [
            "Wow! You are truly revered here. So all the \"faults\" that some of you find in this work are not really so since it is these \"faults\" that appeals to the public (almost all the public).",
            "About the overkill of the main character well that's exactly what people like, it is not quite well managed because as said Overclocker we no longer find adversity but once again it 'what most like and me what I think is that the overpower of the hero is precisely managed well in the fact that despite this power, the story still manages to please.",
            "And the biggest point is that these faults are the characteristics of this kind of work and Solo Leveling is the best in its category. You can't compare Solo Leveling and Demon Slayer either, they're two completely different worlds."
          ],
          rating: 4.5,
          status: 450
        },
        {
          id: "1r2",
          novel: {
            novelInfo: {
              cover: "01.png",
              title: "Solo Leveling 123456 123456 123456 123456 123456 123456 123456 123456" ,
              author: "추공 (Chugong) 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456",
              synopsis: [
                "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
                "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
                "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
              ],
              genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
            },
            publicationInfo: {
              chapters: 1423,
              status: "Ongoing",
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
          },
          content: [
            "Wow! You are truly revered here. So all the \"faults\" that some of you find in this work are not really so since it is these \"faults\" that appeals to the public (almost all the public).",
            "About the overkill of the main character well that's exactly what people like, it is not quite well managed because as said Overclocker we no longer find adversity but once again it 'what most like and me what I think is that the overpower of the hero is precisely managed well in the fact that despite this power, the story still manages to please.",
            "And the biggest point is that these faults are the characteristics of this kind of work and Solo Leveling is the best in its category. You can't compare Solo Leveling and Demon Slayer either, they're two completely different worlds."
          ],
          rating: 4.5,
          status: 450
        },
        {
          id: "1r3",
          novel: {
            novelInfo: {
              cover: "01.png",
              title: "Solo Leveling 123456 123456 123456 123456 123456 123456 123456 123456" ,
              author: "추공 (Chugong) 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456",
              synopsis: [
                "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
                "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
                "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
              ],
              genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
            },
            publicationInfo: {
              chapters: 1423,
              status: "Ongoing",
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
          },
          content: [
            "Wow! You are truly revered here. So all the \"faults\" that some of you find in this work are not really so since it is these \"faults\" that appeals to the public (almost all the public).",
            "About the overkill of the main character well that's exactly what people like, it is not quite well managed because as said Overclocker we no longer find adversity but once again it 'what most like and me what I think is that the overpower of the hero is precisely managed well in the fact that despite this power, the story still manages to please.",
            "And the biggest point is that these faults are the characteristics of this kind of work and Solo Leveling is the best in its category. You can't compare Solo Leveling and Demon Slayer either, they're two completely different worlds."
          ],
          rating: 4.5,
          status: 450
        },
        {
          id: "1r4",
          novel: {
            novelInfo: {
              cover: "01.png",
              title: "Solo Leveling 123456 123456 123456 123456 123456 123456 123456 123456" ,
              author: "추공 (Chugong) 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456",
              synopsis: [
                "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
                "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
                "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
              ],
              genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
            },
            publicationInfo: {
              chapters: 1423,
              status: "Ongoing",
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
          },
          content: [
            "Wow! You are truly revered here. So all the \"faults\" that some of you find in this work are not really so since it is these \"faults\" that appeals to the public (almost all the public).",
            "About the overkill of the main character well that's exactly what people like, it is not quite well managed because as said Overclocker we no longer find adversity but once again it 'what most like and me what I think is that the overpower of the hero is precisely managed well in the fact that despite this power, the story still manages to please.",
            "And the biggest point is that these faults are the characteristics of this kind of work and Solo Leveling is the best in its category. You can't compare Solo Leveling and Demon Slayer either, they're two completely different worlds."
          ],
          rating: 4.5,
          status: 450
        }]
      },
      {
        id: 2,
        avatar: "02.png",
        username: "Bubbly Snowflake",
        followers: 1450,
        reviews: [{
          id: "2r1",
          novel: {
            novelInfo: {
              cover: "02.png",
              title: "The Second Coming of Gluttony" ,
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
              status: "Ongoing",
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
          },
          content: [
            "Definitely one of the absolute best novels on this site. It specializes in character growth, epic action and minor romance (harem).",
            "Seol Jihu, the protagonist, starts out as trash. A weak-willed, short-tempered gambler who destroyed his life and future with his own hands. Emotions and a desire to improve are transplanted into him from his dying future self, but in no way do they serve as a miracle-cure that instantly turns him into a badass. The amount of hard work Seol Jihu puts in as he struggles for redemption and growth is portrayed extremely strongly and realistically. There are very very few easy shortcuts in the world of this novel, and even with some of them grasped in his hands, this protagonist will still have to desperately struggle. Reading about his slow, yet steady growth as a man and eventually a leader has been an absolute joy."
          ],
          rating: 4.7,
          status: 1020
        },
        {
          id: "2r2",
          novel: {
            novelInfo: {
              cover: "02.png",
              title: "The Second Coming of Gluttony  qaswds sdsadsa asdasd asdsad asdasd asdasd asdsad asdasd asdasd asdasdas asdadawdas" ,
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
              status: "Ongoing",
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
          },
          content: [
            "Definitely one of the absolute best novels on this site. It specializes in character growth, epic action and minor romance (harem).",
            "Seol Jihu, the protagonist, starts out as trash. A weak-willed, short-tempered gambler who destroyed his life and future with his own hands. Emotions and a desire to improve are transplanted into him from his dying future self, but in no way do they serve as a miracle-cure that instantly turns him into a badass. The amount of hard work Seol Jihu puts in as he struggles for redemption and growth is portrayed extremely strongly and realistically. There are very very few easy shortcuts in the world of this novel, and even with some of them grasped in his hands, this protagonist will still have to desperately struggle. Reading about his slow, yet steady growth as a man and eventually a leader has been an absolute joy."
          ],
          rating: 4.7,
          status: 1020
        },
        {
          id: "2r3",
          novel: {
            novelInfo: {
              cover: "02.png",
              title: "The Second Coming of Gluttony" ,
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
              status: "Ongoing",
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
          },
          content: [
            "Definitely one of the absolute best novels on this site. It specializes in character growth, epic action and minor romance (harem).",
            "Seol Jihu, the protagonist, starts out as trash. A weak-willed, short-tempered gambler who destroyed his life and future with his own hands. Emotions and a desire to improve are transplanted into him from his dying future self, but in no way do they serve as a miracle-cure that instantly turns him into a badass. The amount of hard work Seol Jihu puts in as he struggles for redemption and growth is portrayed extremely strongly and realistically. There are very very few easy shortcuts in the world of this novel, and even with some of them grasped in his hands, this protagonist will still have to desperately struggle. Reading about his slow, yet steady growth as a man and eventually a leader has been an absolute joy."
          ],
          rating: 4.7,
          status: 1020
        },
        {
          id: "2r4",
          novel: {
            novelInfo: {
              cover: "02.png",
              title: "The Second Coming of Gluttony" ,
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
              status: "Ongoing",
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
          },
          content: [
            "Definitely one of the absolute best novels on this site. It specializes in character growth, epic action and minor romance (harem).",
            "Seol Jihu, the protagonist, starts out as trash. A weak-willed, short-tempered gambler who destroyed his life and future with his own hands. Emotions and a desire to improve are transplanted into him from his dying future self, but in no way do they serve as a miracle-cure that instantly turns him into a badass. The amount of hard work Seol Jihu puts in as he struggles for redemption and growth is portrayed extremely strongly and realistically. There are very very few easy shortcuts in the world of this novel, and even with some of them grasped in his hands, this protagonist will still have to desperately struggle. Reading about his slow, yet steady growth as a man and eventually a leader has been an absolute joy."
          ],
          rating: 4.7,
          status: 1020
        }]
      },
      {
        id: 3,
        avatar: "03.png",
        username: "SilentRagings",
        followers: 71050,
        reviews: [{
          id: "3r1",
          novel: {
            novelInfo: {
              cover: "03.png",
              title: "Second Life Ranker" ,
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
              status: "Ongoing",
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
          },
          content: [
            "Eyyyy it’s finally here, I’ve been reading since chapter 1 on woopnovel where it was originally translated and this story is amazing. If you watch anime and you’re familiar with Tower of God you’ll like this story because it’s world-building is very similar. You take a test to progress through each floor, although not abstract as tower of god, some floors are use Kai style wars some are mini tournament arcs and some are major story progressions. The mc lost his brother and basically tries to get super strong to avenge him. Very good novel, and I’m very happy we can get quality, consistent translations from Wuxiaworld in the future! :) 9/10 would recommend"
          ],
          rating: 3.9,
          status: 75
        },
        {
          id: "3r2",
          novel: {
            novelInfo: {
              cover: "03.png",
              title: "Second Life Ranker" ,
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
              status: "Ongoing",
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
          },
          content: [
            "Eyyyy it’s finally here, I’ve been reading since chapter 1 on woopnovel where it was originally translated and this story is amazing. If you watch anime and you’re familiar with Tower of God you’ll like this story because it’s world-building is very similar. You take a test to progress through each floor, although not abstract as tower of god, some floors are use Kai style wars some are mini tournament arcs and some are major story progressions. The mc lost his brother and basically tries to get super strong to avenge him. Very good novel, and I’m very happy we can get quality, consistent translations from Wuxiaworld in the future! :) 9/10 would recommend"
          ],
          rating: 3.9,
          status: 75
        },
        {
          id: "3r3",
          novel: {
            novelInfo: {
              cover: "03.png",
              title: "Second Life Ranker" ,
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
              status: "Ongoing",
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
          },
          content: [
            "Eyyyy it’s finally here, I’ve been reading since chapter 1 on woopnovel where it was originally translated and this story is amazing. If you watch anime and you’re familiar with Tower of God you’ll like this story because it’s world-building is very similar. You take a test to progress through each floor, although not abstract as tower of god, some floors are use Kai style wars some are mini tournament arcs and some are major story progressions. The mc lost his brother and basically tries to get super strong to avenge him. Very good novel, and I’m very happy we can get quality, consistent translations from Wuxiaworld in the future! :) 9/10 would recommend"
          ],
          rating: 3.9,
          status: 75
        },
        {
          id: "3r4",
          novel: {
            novelInfo: {
              cover: "03.png",
              title: "Second Life Ranker" ,
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
              status: "Ongoing",
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
          },
          content: [
            "Eyyyy it’s finally here, I’ve been reading since chapter 1 on woopnovel where it was originally translated and this story is amazing. If you watch anime and you’re familiar with Tower of God you’ll like this story because it’s world-building is very similar. You take a test to progress through each floor, although not abstract as tower of god, some floors are use Kai style wars some are mini tournament arcs and some are major story progressions. The mc lost his brother and basically tries to get super strong to avenge him. Very good novel, and I’m very happy we can get quality, consistent translations from Wuxiaworld in the future! :) 9/10 would recommend"
          ],
          rating: 3.9,
          status: 75
        }]
      },
      {
        id: 4,
        avatar: "04.png",
        username: "lovely.doll.sprakly",
        followers: 387591,
        reviews: [{
          id: "4r1",
          novel: {
            novelInfo: {
              cover: "04.png",
              title: "The Regressed Demon Lord is Kind" ,
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
              status: "Ongoing",
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
          },
          content: [
            "I got hooked in with just 3 chaps. I love MC due to the following",
            "1) Cool headed",
            "2) Eloquent",
            "3) Pro procrastinator",
            "4) Doesn't seem hypocritical as of yet.",
            "There is not much to write about world-building and plot as only 3 chaps are out yet you can get the same idea from the synopsis.",
            "Also, beware being demon king in his previous life his views on being kind = not being the wuxia kill the whole sect MC I think.",
            "I might update the review later if I change my mind about the novel. But overall I think you should give it a chance."
          ],
          rating: 3.5,
          status: 50
        },{
          id: "4r2",
          novel: {
            novelInfo: {
              cover: "04.png",
              title: "The Regressed Demon Lord is Kind" ,
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
              status: "Ongoing",
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
          },
          content: [
            "I got hooked in with just 3 chaps. I love MC due to the following",
            "1) Cool headed",
            "2) Eloquent",
            "3) Pro procrastinator",
            "4) Doesn't seem hypocritical as of yet.",
            "There is not much to write about world-building and plot as only 3 chaps are out yet you can get the same idea from the synopsis.",
            "Also, beware being demon king in his previous life his views on being kind = not being the wuxia kill the whole sect MC I think.",
            "I might update the review later if I change my mind about the novel. But overall I think you should give it a chance."
          ],
          rating: 3.5,
          status: 50
        },
        {
          id: "4r3",
          novel: {
            novelInfo: {
              cover: "04.png",
              title: "The Regressed Demon Lord is Kind  qaswds sdsadsa asdasd asdsad asdasd asdasd asdsad asdasd asdasd asdasdas asdadawdas" ,
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
              status: "Ongoing",
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
          },
          content: [
            "I got hooked in with just 3 chaps. I love MC due to the following",
            "1) Cool headed",
            "2) Eloquent",
            "3) Pro procrastinator",
            "4) Doesn't seem hypocritical as of yet.",
            "There is not much to write about world-building and plot as only 3 chaps are out yet you can get the same idea from the synopsis.",
            "Also, beware being demon king in his previous life his views on being kind = not being the wuxia kill the whole sect MC I think.",
            "I might update the review later if I change my mind about the novel. But overall I think you should give it a chance."
          ],
          rating: 3.5,
          status: 50
        },
        {
          id: "4r4",
          novel: {
            novelInfo: {
              cover: "04.png",
              title: "The Regressed Demon Lord is Kind" ,
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
              status: "Ongoing",
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
          },
          content: [
            "I got hooked in with just 3 chaps. I love MC due to the following",
            "1) Cool headed",
            "2) Eloquent",
            "3) Pro procrastinator",
            "4) Doesn't seem hypocritical as of yet.",
            "There is not much to write about world-building and plot as only 3 chaps are out yet you can get the same idea from the synopsis.",
            "Also, beware being demon king in his previous life his views on being kind = not being the wuxia kill the whole sect MC I think.",
            "I might update the review later if I change my mind about the novel. But overall I think you should give it a chance."
          ],
          rating: 3.5,
          status: 50
        }]
      },
      {
        id: 5,
        avatar: "05.png",
        username: "angelic.princess.kristy",
        followers: 91368,
        reviews: [{
          id: "5r1",
          novel: {
            novelInfo: {
              cover: "05.png",
              title: "Overgeared" ,
              author: "추공 (Chugong) 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456",
              synopsis: [
                "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
                "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
                "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
              ],
              genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
            },
            publicationInfo: {
              chapters: 1423,
              status: "Ongoing",
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
          },
          content: [
            "The First time i read overgeared was when the series is still in the 300th chapters, And since then I have re-read it 3 more times. Beautiful character development, great side characters, ab amazing virtual world and a lot of comedy. Grid starts extremely pathetic and skeptical, and I loved it. Then he will start transforming bit by bit, and it really makes you cheer for him.",
            "The worst thing about overgeared is when the author goes crazy with praising grid and korea, but since this isn't my first Asian novel I'm used to it. But it's still cringy tbh.",
            "Final note, the villains are awesome."
          ],
          rating: 2.5,
          status: 450
        },
        {
          id: "5r2",
          novel: {
            novelInfo: {
              cover: "05.png",
              title: "Overgeared" ,
              author: "추공 (Chugong) 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456",
              synopsis: [
                "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
                "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
                "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
              ],
              genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
            },
            publicationInfo: {
              chapters: 1423,
              status: "Ongoing",
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
          },
          content: [
            "The First time i read overgeared was when the series is still in the 300th chapters, And since then I have re-read it 3 more times. Beautiful character development, great side characters, ab amazing virtual world and a lot of comedy. Grid starts extremely pathetic and skeptical, and I loved it. Then he will start transforming bit by bit, and it really makes you cheer for him.",
            "The worst thing about overgeared is when the author goes crazy with praising grid and korea, but since this isn't my first Asian novel I'm used to it. But it's still cringy tbh.",
            "Final note, the villains are awesome."
          ],
          rating: 2.5,
          status: 450
        },
        {
          id: "5r3",
          novel: {
            novelInfo: {
              cover: "05.png",
              title: "Overgeared" ,
              author: "추공 (Chugong) 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456",
              synopsis: [
                "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
                "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
                "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
              ],
              genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
            },
            publicationInfo: {
              chapters: 1423,
              status: "Ongoing",
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
          },
          content: [
            "The First time i read overgeared was when the series is still in the 300th chapters, And since then I have re-read it 3 more times. Beautiful character development, great side characters, ab amazing virtual world and a lot of comedy. Grid starts extremely pathetic and skeptical, and I loved it. Then he will start transforming bit by bit, and it really makes you cheer for him.",
            "The worst thing about overgeared is when the author goes crazy with praising grid and korea, but since this isn't my first Asian novel I'm used to it. But it's still cringy tbh.",
            "Final note, the villains are awesome."
          ],
          rating: 2.5,
          status: 450
        },
        {
          id: "5r4",
          novel: {
            novelInfo: {
              cover: "05.png",
              title: "Overgeared" ,
              author: "추공 (Chugong) 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456",
              synopsis: [
                "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
                "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
                "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
              ],
              genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
            },
            publicationInfo: {
              chapters: 1423,
              status: "Ongoing",
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
          },
          content: [
            "The First time i read overgeared was when the series is still in the 300th chapters, And since then I have re-read it 3 more times. Beautiful character development, great side characters, ab amazing virtual world and a lot of comedy. Grid starts extremely pathetic and skeptical, and I loved it. Then he will start transforming bit by bit, and it really makes you cheer for him.",
            "The worst thing about overgeared is when the author goes crazy with praising grid and korea, but since this isn't my first Asian novel I'm used to it. But it's still cringy tbh.",
            "Final note, the villains are awesome."
          ],
          rating: 2.5,
          status: 450
        }]
      }
    ]
  }
})

export default store;