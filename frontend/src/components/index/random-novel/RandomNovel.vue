<template>
  <!-- Random novels image -->
  <div class="cover">
    <img :src="require(`@/assets/images/${cover}`)" class="w-100 h-auto">
  </div>
  <!-- End of random novel image -->

  <!-- Random novel info -->
  <div>
    <base-accordion id="acc-synopsis" ref="acc-synopsis" active 
                    @toggle-accordion="toggleAccordion">
      <template v-slot:title>Synopsis</template>
      
      <template v-slot:content>
        <p v-for="paragraph in synopsis" :key="paragraph">
          {{ paragraph }}
        </p>
      </template>
    </base-accordion>

    <base-accordion id="acc-info" ref="acc-info" 
                    @toggle-accordion="toggleAccordion">
      <template v-slot:title>Info</template>

      <template v-slot:content>
        <div class="row">
          <div class="col-5 font-weight-bold">
            <p>Title:</p>
          </div>
          <div class="col-7">
            <p> {{title}} </p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-5 font-weight-bold">
            <p>Author:</p>
          </div>
          <div class="col-7">
            <p> {{author}} </p>
          </div>
        </div>

        <div class="row">
          <div class="col-5 font-weight-bold">
            <p>Last updated:</p>
          </div>
          <div class="col-7">
            <p> {{ status.lastUpdate }} </p>
          </div>
        </div>

        <div class="row">
          <div class="col-5 font-weight-bold">
            <p>View:</p>
          </div>
          <div class="col-7">
            <p> {{ status.views }} </p>
          </div>
        </div>

        <div class="row">
          <div class="col-5 font-weight-bold">
            <p>Rating:</p>
          </div>
          <div class="col-7">
            <p>
              <i class="fas fa-star"></i>
              {{ status.rating }}
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-5 font-weight-bold">
            <p>Bookmarked:</p>
          </div>
          <div class="col-7">
            <p> {{ status.bookmarked }} </p>
          </div>
        </div>

        <div class="row" id="test">
          <div class="col-5 font-weight-bold">
            <p>Publication:</p>
          </div>
          <div class="col-7">
            <p> {{ status.publicationStatus }} </p>
          </div>
        </div>
      </template>
    </base-accordion>
  </div>

</template>

<script>
import BaseAccordion from "@/components/common/BaseAccordion.vue";

export default {
  components: {
    "base-accordion": BaseAccordion
  },
  data() {
    return {
      cover: "random-novel.png",
      title: "Reincarnation Of The Strongest Sword God",
      author: "Lucky Old Cat",
      synopsis: [
        "Starting over once more, he has entered this “living game” again in order to control his own fate.",
        "This time, he will not be controlled by others.",
        "Previously the Level 200 Sword King, he will rise to a higher peak in this life.",
        "Methods to earn money! Dungeon conquering strategies! Legendary Quests! Equipment drop locations! Undiscovered battle techniques!",
        "Even the secrets Beta Testers were unknowledgeable of, he knows of them all.",
        "Massive wars, life advancement, entering Godhood, sword reaching to the peak; a legend of a man becoming a Sword God has begun."
      ],
      status: {
        lastUpdate: "Nov 14, 2020",
        publicationStatus: "2918 Chapter (Completed)",
        views: "15,591",
        bookmarked: "1,785",
        rating: "3.5",
      }
    }
  },
  methods: {
    // Close all accordions except clicked one.
    toggleAccordion(id) {
      let refs = [this.$refs["acc-synopsis"], this.$refs["acc-info"]];

      refs.forEach(ref => {
        if(ref.id != id) {
          ref.open = false;
        }
      });
    }
  }
}
</script>

<style scoped>
.row {
  margin-top: .8rem;
}

.row:first-child {
  margin-top: 0;
}
</style>