<template>
  <!-- Navigation header -->
  <ul class="nav nav-tabs" id="notable-novels-tab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active"
         id="latest-update-tab"
         data-toggle="tab"
         href="#latest-update"
         role="tab"
         aria-controls="latest-update"
      >
        <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
          <i class="fas fa-clock"></i>
        </span>
        <span class="d-none d-md-inline">Latest Update</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link"
         id="most-popular-tab"
         data-toggle="tab"
         href="#most-popular"
         role="tab"
         aria-controls="most-popular"
      >
      <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
        <i class="fas fa-fire"></i>
      </span>
      <span class="d-none d-md-inline">Most Popular</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link"
         id="new-arrival-tab"
         data-toggle="tab"
         href="#new-arrival"
         role="tab"
         aria-controls="new-arrival"
      >
      <span class="d-inline d-sm-inline d-md-none d-lg-inline pr-lg-2">
        <i class="fas fa-sparkles"></i>
      </span>
      <span class="d-none d-md-inline">New Arrival</span>
      </a>
    </li>
  </ul>
  <!-- End of navigation header -->

  <!-- Novels list -->
  <div class="tab-content" id="notable-novels-content">
  
    <!-- Latest update novels -->
    <div class="tab-pane fade show active"
         id="latest-update"
         role="tabpanel"
         aria-labelledby="latest-update-tab"
    >
      <div class="row">
        <latest-novel v-for="i in 8"
                      :key="i"
                      :imgSrc="imgSrc"
                      :title="title"
                      :author="author"
                      :synopsis="synopsis"
                      :newestChapter="newestChapter"
                      :updateTime="updateTime"
        >
        </latest-novel>
      </div>
    </div>

    <!-- Most popular novels -->
    <div class="tab-pane fade"
         id="most-popular"
         role="tabpanel"
         aria-labelledby="most-popular-tab"
    >
      <div class="row">
        <popular-novel v-for="i in 8"
                       :key="i"
                       :imgSrc="imgSrc"
                       :title="title"
                       :author="author"
                       :synopsis="synopsis"
                       :stars="stars"
                       :publicationStatus="publicationStatus"
        >
        </popular-novel>
      </div>
    </div>

    <!-- New arrival novels -->
    <div class="tab-pane fade"
         id="new-arrival"
         role="tabpanel"
         aria-labelledby="new-arrival-tab"
    >
      <div class="row">
        <new-novel v-for="i in 4"
                :key="i"
                :imgSrc="imgSrc"
                :title="title"
                :author="author"
                :longSynopsis="longSynopsis"
                :genres="genres"
        >
        </new-novel>
      </div>
    </div>
  </div>
</template>

<script>
import LatestNovel from "@/components/index/LatestNovel.vue"
import PopularNovel from "@/components/index/PopularNovel.vue"
import NewNovel from "@/components/index/NewNovel.vue"

export default {
  components: { 
    "latest-novel": LatestNovel,
    "popular-novel": PopularNovel,
    "new-novel": NewNovel
  },
  data() {
    return {
      imgSrc: "01.png",
      title: "Solo Leveling",
      author: "추공 (Chugong)",
      synopsis: "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
      longSynopsis: [
        "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Seong Jin-Woo was the weakest of all the Hunters, barely able to make a living.",
        "However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.",
        "Follow Sang Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!"
      ],
      genres: ["Action", "Adventure", "Urban"],
      newestChapter: "Ch. 50",
      updateTime: "30 minutes ago",
      stars: 4.78,
      publicationStatus: "428 Chapters (Ongoing)"
    }
  }
}
</script>

<style scoped>
.nav-tabs {
  border-bottom: none !important;
}

.nav-link {
  color: #EBE5DE;
  position: relative;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 1rem 1.5rem;
  border:none !important;
}

.nav-link:hover {
  transition: all 0.3s ease-in-out;
  color: #70AED2;;
}

.nav-link.active {
  background-color: transparent !important;
  border: 1px solid #EBE5DE !important;
  border-bottom: none !important;
  border-radius: 0;
  color: #EBE5DE !important;
}

.nav-link.active:before {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 100%;
  width: 100vw;
  border-bottom: 1px solid #EBE5DE;
}

.nav-link.active:after {
  content: '';
  position: absolute;
  bottom: 0px;
  right: 100%;
  width: 1500px;
  border-bottom: 1px solid #EBE5DE;
}
</style>