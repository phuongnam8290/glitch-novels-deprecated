<template>
  <div class="wrapper">
    <table class="scroll">
      <thead>
        <tr>
          <th>Ranking</th>
          <th></th>
          <th>Title</th>
          <th>Votes</th>
          <th>Chapters</th>
          <th>Ratings</th>
        </tr>
      </thead>
      <tbody v-dragscroll>
      <tr v-for="i in 17" :key="i">
        <td class="ranking-number">#{{ i + 3 }} </td>
        <td class="cover">
          <img :src="require(`@/assets/images/novel-list/${novel.cover}`)">
        </td>
        <td class="info">
          <div class="overflow-hidden"
               @mouseenter="startMarquee" 
               @mouseleave="stopMarquee">
            <p class="d-inline-block text-nowrap title"> {{ novel.title }} </p>
          </div>
          <div class="overflow-hidden"
               @mouseenter="startMarquee" 
               @mouseleave="stopMarquee">
            <p class="d-inline-block text-nowrap author"> {{ novel.author }} </p>
          </div>
        </td>
        <td class="ranking-type"> 
          <p>
            <span>
              <i class="far fa-poll mr-1"></i>
            </span>
            {{ novel.votes }}
          </p>
        </td>
        <td class="chapters">
          <p>
            <span>
              <i class="fas fa-books"></i>
            </span>
            {{ novel.chapters }}
          </p>
        </td>
        <td class="ratings">
          <p>
            <span>
              <i class="fas fa-star mr-1"></i>
            </span>
            {{ novel.ratings }}
          </p>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from "jquery";
import ScrollText from "@/assets/js/mixins/ScrollText.js"

export default {
  mixins: [ScrollText],
  data() {
    return {
      novel: {
        cover: "01.png",
        title: "Solo Leveling dsd dfsdf sdfdsf dsfsdf sdfsd fdsfsdf sdfsdf sdfsd fsdf ",
        author: "추공 (Chugong)",
        synopsis: [
          "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
          "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
          "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
        ],
        genres: ["Action", "Adventure", "Urban", "Fantasy", "Weak to Strong", "Game Element"],
        ratings: 4.5,
        bookmarks: 15785,
        views: 35751,
        reviews: 235,
        comments: 14756,
        chapters: 1423,
        status: "ongoing",
        votes: 154
      }
    }
  },
  methods: {
    setTableHeaderWidth() {
      let scrollTable = $("table.scroll");
      let bodyCells = scrollTable.find("tbody tr:first").children();

      let colsWidth = bodyCells.map(function() {
        return $(this).outerWidth();
      }).get();

      scrollTable.find("thead tr").children().each(function(i , v) {
        $(v).width(colsWidth[i]);
      })
    }
  },
  mounted() {
    setTimeout(() => {
      this.setTableHeaderWidth();
    }, 300);

    $(window).resize(() => {
      this.setTableHeaderWidth();
    })
  }
}
</script>

<style scoped>
@font-face {
  font-family: "numbers-prospekt";
  src: url(~@/assets/font/numbers-prospekt/numbers-prospekt.woff2);
}

.ranking-number {
  font-family: "numbers-prospekt", sans-serif;
  font-size: 2.3rem;
}

table.scroll {
  width: 100%;
}

table.scroll thead,
table.scroll tbody,
table.scroll tr
{
  display: block;
}

table.scroll thead {
  border-bottom: 1px solid var(--primary-color) ;
  font-size: 1.1rem;
}

table.scroll tbody {
  height: 74vh;
  overflow: scroll;
  /* Fading viewport to bottom - May not work on some browsers */
  -webkit-mask-image: -webkit-gradient(linear, center top, center bottom, 
      color-stop(0.80,  rgba(0,0,0,1)),
      color-stop(1.00,  rgba(0,0,0,0)));
  mask-image: -webkit-gradient(linear, center top, center bottom, 
                                color-stop(0.70,  rgba(0,0,0,1)),
                                color-stop(1.00,  rgba(0,0,0,0)));
}

/* Hide scrollbar for table */
table.scroll ::-webkit-scrollbar {
  display: none;
}

table.scroll th,
table.scroll td {
  vertical-align: middle;
  text-align: center;
}

table.scroll th {
  padding-bottom: 1rem;
}

table.scroll td {
  padding-top: 1.5rem;
  cursor: grab;
}

table.scroll tbody tr:last-child {
  padding-bottom: 5rem;
}

table.scroll tbody p {
  cursor: grab;
}

table.scroll .cover {
  padding-left: .5rem;
  width: 12%;
}

table.scroll .ranking-number {
  width: 10%
}

table.scroll .ranking-type,
table.scroll .chapters,
table.scroll .ratings {
  width: 15%;
  font-size: 1.3rem;
  font-weight: bold;
}

table.scroll .info {
  /* max-width: 30vw; */
  width: 35%;
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
}

table.scroll .info p {
  cursor: pointer;
}

table.scroll .title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: .3rem;
}

table.scroll .author {
  font-weight: 300;
  font-style: italic;
}

table.scroll img {
  width: 100%;
}

</style>