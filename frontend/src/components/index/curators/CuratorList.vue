<template>
  <!-- Active cutator infomation -->
  <transition enter-active-class="fadein"
              leave-active-class="fadeout"
              mode="out-in">
    <div class="d-flex overflow-hidden curator active"
         :key="activeCurator">
      <div class="avatar">
        <img :src="require(`@/assets/images/avatars/${activeCurator.avatar}`)">
      </div>
      <div class="overflow-hidden ml-3 info">
        <div class="overflow-hidden title-text username">
          <p class="d-inline"> {{ activeCurator.username }} </p>
        </div>
        <div class="d-flex align-items-start mt-3 paragraph-text follow">
          <a @mouseenter="slideRight('start')"
            @mouseleave="slideRight('stop')">
            Follow
          </a>
          <div class="d-inline-block followers">
            <p class="d-inline-block"> {{ activeCurator.followers }} </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- End of active cutator infomation -->

  
  <!-- Curators list section -->
  <div class="d-flex justify-content-end curators-list">
    <div class="d-flex curator inactive"
        v-for="(curator, index) in inactiveCurators" :key="curator.id">
      <div class="mr-3 info">
        <div class="text-right username">
          <p class="title-text"> {{ curator.username }} </p>
        </div>
        <div class="mt-4 followers">
          <p class="paragraph-text"> {{ curator.followers }} </p>
        </div>
      </div>
      <div class="avatar"
          @click="activateCurator($event, index)"
          @mouseenter="slideLeft($event, 'start')"
          @mouseleave="slideLeft($event, 'stop')">
        <img :src="require(`@/assets/images/avatars/${curator.avatar}`)">
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  emits: ["change-active-reviews"],
  data() {
    return {
      curators: [
        {
          id: 1,
          avatar: "01.png",
          username: "Cheesecakeophobia",
          followers: "2,750 Followers",
          reviews: [
            {
              novel: {
                title: "Overgeared",
                cover: "01.png"
              },
              rating: 4.5,
              content: [
              "The First time i read overgeared was when the series is still in the 300th chapters, And since then I have re-read it 3 more times. Beautiful character development, great side characters, ab amazing virtual world and a lot of comedy. Grid starts extremely pathetic and skeptical, and I loved it. Then he will start transforming bit by bit, and it really makes you cheer for him.",
              "The worst thing about overgeared is when the author goes crazy with praising grid and korea, but since this isn't my first Asian novel I'm used to it. But it's still cringy tbh.",
              "Final note, the villains are awesome."
              ]
            }
          ]
        },
        {
          id: 2,
          avatar: "02.png",
          username: "Bubbly Snowflake",
          followers: "1,450 Followers",
          reviews: [
            {
              novel: {
                title: "The Second Coming of Gluttony",
                cover: "02.png"
              },
              rating: 4.7,
              content: [
              "Definitely one of the absolute best novels on this site. It specializes in character growth, epic action and minor romance (harem).",
              "Seol Jihu, the protagonist, starts out as trash. A weak-willed, short-tempered gambler who destroyed his life and future with his own hands. Emotions and a desire to improve are transplanted into him from his dying future self, but in no way do they serve as a miracle-cure that instantly turns him into a badass. The amount of hard work Seol Jihu puts in as he struggles for redemption and growth is portrayed extremely strongly and realistically. There are very very few easy shortcuts in the world of this novel, and even with some of them grasped in his hands, this protagonist will still have to desperately struggle. Reading about his slow, yet steady growth as a man and eventually a leader has been an absolute joy."
              ]
            }
          ]
        },
        {
          id: 3,
          avatar: "03.png",
          username: "SilentRagings",
          followers: "71,050 Followers",
          reviews: [
            {
              novel: {
                title: "Second Life Ranker",
                cover: "03.png"
              },
              rating: 3.9,
              content: [
              "Eyyyy it’s finally here, I’ve been reading since chapter 1 on woopnovel where it was originally translated and this story is amazing. If you watch anime and you’re familiar with Tower of God you’ll like this story because it’s world-building is very similar. You take a test to progress through each floor, although not abstract as tower of god, some floors are use Kai style wars some are mini tournament arcs and some are major story progressions. The mc lost his brother and basically tries to get super strong to avenge him. Very good novel, and I’m very happy we can get quality, consistent translations from Wuxiaworld in the future! :) 9/10 would recommend"
              ]
            }
          ]
          
        },
        {
          id: 4,
          avatar: "04.png",
          username: "lovely.doll.sprakly",
          followers: "387,591 Followers",
          reviews: [
            {
              novel: {
                title: "The Regressed Demon Lord is Kind",
                cover: "04.png"
              },
              rating: 3.5,
              content: [
                "I got hooked in with just 3 chaps. I love MC due to the following",
                "1) Cool headed",
                "2) Eloquent",
                "3) Pro procrastinator",
                "4) Doesn't seem hypocritical as of yet.",
                "There is not much to write about world-building and plot as only 3 chaps are out yet you can get the same idea from the synopsis.",
                "Also, beware being demon king in his previous life his views on being kind = not being the wuxia kill the whole sect MC I think.",
                "I might update the review later if I change my mind about the novel. But overall I think you should give it a chance."
              ]
            }
          ]
        },
        {
          id: 5,
          avatar: "05.png",
          username: "angelic.princess.kristy",
          followers: "91,368 Followers",
          reviews: [
            {
              novel: {
                title: "The Second Coming of Gluttony - asasqwdcxvcv dfdsfds vxcvxcvwe dcxvcxv dfdfd",
                cover: "02.png"
              },
              rating: 4.7,
              content: [
              "Definitely one of the absolute best novels on this site. It specializes in character growth, epic action and minor romance (harem).",
              "Seol Jihu, the protagonist, starts out as trash. A weak-willed, short-tempered gambler who destroyed his life and future with his own hands. Emotions and a desire to improve are transplanted into him from his dying future self, but in no way do they serve as a miracle-cure that instantly turns him into a badass. The amount of hard work Seol Jihu puts in as he struggles for redemption and growth is portrayed extremely strongly and realistically. There are very very few easy shortcuts in the world of this novel, and even with some of them grasped in his hands, this protagonist will still have to desperately struggle. Reading about his slow, yet steady growth as a man and eventually a leader has been an absolute joy."
              ]
            }
          ]
        }
      ],

      // Use for disable inactive curator slide after clicked
      shouldSlideLeft: true,

      // Use for reset username scrolling
      timeoutId: null,
      intervalId: null
    }
  },
  computed: {
    activeCurator() {
      return this.curators[0];
    },
    inactiveCurators() {
      return this.curators.slice(1);
    }
  },
  methods: {
    activateCurator(event, inactiveCuratorIndex) {      
      let container = $(event.currentTarget).parent();
      let info = container.find('.info');
      info.stop().animate({width: '-1.5rem'}, 500);

      //Map index from sliced array (inactiveCurators) to original array 
      let originalIndex = inactiveCuratorIndex + 1;
      
      // Swap array's elements
      let temp = this.curators[0];
      this.curators[0] = this.curators[originalIndex];

      container.fadeOut(500, () => {       
        this.curators[originalIndex] = temp;
      })

      this.shouldSlideLeft = false;
      
      this.emitChangeActiveReviews();
    },

    emitChangeActiveReviews() {
      this.$emit("change-active-reviews", this.activeCurator.reviews);
    },

    // Only animate on target screensize and up
    shouldAnimate(screenSize) {
      let screenWidth = $(window).width();

      if(screenSize == "medium") {
        return screenWidth > 768
      } else if (screenSize == "large") {
        return screenWidth > 992
      }
    },

    //Handle mouse hover over active curator
    slideRight(status) {
      if (!this.shouldAnimate("medium")) {
        return;
      }

      if(status === "start") {
        $('.curator.active .followers').stop().animate({width: '15rem'}, 300);
      } else if (status == "stop") {
        $('.curator.active .followers').stop().animate({width: '-1.5rem'}, 300);
      }
    },

    // Handle mouse hover over inactive curator
    slideLeft(event, status) {
      // Do not slide if this method is called after click event.
      if(!this.shouldSlideLeft) {
        this.shouldSlideLeft = true;
        return;
      }
      
      if(!this.shouldAnimate("large")) {
        return;
      }

      let content = $(event.currentTarget).parent().find(".info");
      let username = content.find(".username p");

      if(status == "start") {
        let contentWidth = content.find(".followers p").outerWidth();
        
        content.stop().animate({width: `${contentWidth}px`}, 300);   
        this.scrollText(username, "start");
      } 
      else if (status == "stop") {
        content.stop().animate({width: "-1.5rem"}, 300);
        this.scrollText(username, "stop")

        this.intervalId = clearInterval(this.intervalId);
        this.timeoutId = clearTimeout(this.clearTimeout);
      }
    },

    scrollText(text, status) {
      let containertWidth = text.parents(".info").find('.followers p').width();
      let textWidth = text.width();

      if(containertWidth < textWidth) {
        let container = text.parent();

        if(status == "start") {
          let scrollDistance = textWidth - containertWidth;
          let scrollDuration = scrollDistance * 30;

          container.stop().animate({scrollLeft: 0});
          this.timeoutId = setTimeout(() => {
            container.animate({scrollLeft: scrollDistance}, scrollDuration)
                     .animate({scrollLeft: 0}, scrollDuration);
          
            this.intervalId = setInterval(() => {
              container.animate({scrollLeft: scrollDistance}, scrollDuration)
                       .animate({scrollLeft: 0}, scrollDuration);
              }, scrollDuration * 2 + 1000);
          }, 1000);
        } 
        else if (status == "stop") {
          container.stop().animate({scrollLeft: 0});
        }
      }
    }
  },
  mounted() {
    this.emitChangeActiveReviews();
  }
}
</script>

<style scoped>
.avatar img {
  width: 70px;
  height: auto;
}

/* Active curator */
.curator.active {
  min-width: 15rem;
}

.curator.active .username{
  white-space: nowrap;
}

.curator .follow a,
.curator .followers p {
  color: #EBE5DE;
  border: 1px solid #EBE5DE;
  padding: 0.2rem 1rem;
}

.curator .follow a {
  transition-property: color, border;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
  cursor: pointer;
}

.curator .follow a:hover {
  text-decoration: none;
  color: #70AED2;
  border: 1px solid #70AED2;
}

.curator.active .followers {
  position: relative;
  margin-left: 0.5rem;
  overflow: hidden;
  height: 2.1rem;
  width: 0;
}

.curator.active .followers p{
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0;
  white-space: nowrap;
}

/* Deactived curator list */
.curator.inactive {
  padding-left: 0.5rem;
}

.curator.inactive .info {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.curator.inactive .username,
.curator.inactive .followers{
  position: absolute;
  white-space: nowrap;
}

.curator.inactive .username {
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.curator.inactive .followers {
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 0.27rem;
}

.curator.inactive .followers p,
.curator.inactive .username p{
  display: inline-block;
}
</style>