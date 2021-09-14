<template>
  <div>
    <ul class="d-flex overflow-hidden">

      <li class="d-flex add-filter"
          @click.stop="showModal">
        <i class="fas fa-filter"></i>
        <p class="text-nowrap">Add filter</p>
      </li>
      
      <li class="d-none d-md-flex item">
        <i class="fad fa-venus-mars">
        </i>
        <div class="overflow-hidden"
            @mouseenter="startMarquee" 
            @mouseleave="stopMarquee">
          <p class="d-inline-block text-nowrap">
            Protagonist: {{ generateCriteriaMessage('protagonist') }}
          </p> 
        </div>
      </li>
      <li class="d-none d-md-flex item status">
        <i class="fad fa-circle-notch">
        </i>
        <div class="overflow-hidden"
            @mouseenter="startMarquee" 
            @mouseleave="stopMarquee">
          <p class="d-inline-block text-nowrap">
            Status: {{ generateCriteriaMessage('status') }}
          </p> 
        </div>
      </li>
      <li class="d-none d-md-flex item">
        <i class="fad fa-theater-masks">
        </i>
        <div class="overflow-hidden"
            @mouseenter="startMarquee" 
            @mouseleave="stopMarquee">
          <p class="d-inline-block text-nowrap">
            Genre: {{ generateCriteriaMessage('genre') }}
          </p> 
        </div>
      </li>
      <li class="d-none d-md-flex item">
        <i class="fad fa-hat-wizard">
        </i>
        <div class="overflow-hidden"
            @mouseenter="startMarquee" 
            @mouseleave="stopMarquee">
          <p class="d-inline-block text-nowrap">
            Theme: {{ generateCriteriaMessage('theme') }}
          </p> 
        </div>
      </li>
    </ul>
    
    <teleport to="#app">
      <filter-modal v-if="isShowModal"
                    @close-modal="closeModal"
      >

      </filter-modal>
    </teleport>
  </div>
</template>

<script>
import ScrollText from "@/assets/js/mixins/ScrollText.js";

import { provide, reactive } from "vue";
import FilterModal from "@/components/browse/FilterModal";

export default {
  components: {
    "filter-modal": FilterModal
  },
  mixins: [ScrollText],
  data() {
    return {
      isShowModal: false
    }
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    generateCriteriaMessage(criteriaGroup) {
      if(this.criteria[criteriaGroup].selectAll) {
        return "All"
      }

      let selectedCriteria = this.criteria[criteriaGroup].content.filter((criterion) => {
        return criterion.selected;
      })

      let message = "";

      if(selectedCriteria.length <= 3) {
        for (let criterion of selectedCriteria) {
          message += `${criterion.name}, `;
        }
        message = message.slice(0, -2);
      } 
      else {
        for (let i = 0; i < 3; i++) {
          message += `${selectedCriteria[i].name}, `;
        }

        message = message.slice(0, -2);
        message += ` and ${selectedCriteria.length - 3} more`;
      }

      return message;
    }
  },
  setup() {
    const criteria = reactive({
      protagonist: {
        name: "Protagonists",
        icon: "fa-venus-mars",
        content: [
          {name: "Male", selected: false},
          {name: "Female", selected: false}
        ],
        selectAll: true
      },
      status: {
        name: "Status",
        icon: "fa-circle-notch",
        content: [
          {name: "Ongoing", selected: false},
          {name: "Completed", selected: false},
          {name: "Hiatus", selected: false},
          {name: "Cancelled", selected: false}
        ],
        selectAll: true
      },
      genre: {
        name: "Genres",
        icon: "fa-theater-masks",
        content: [
          {name: "Action", selected: false},
          {name: "Adventure", selected: false},
          {name: "Boy's Love", selected: false},
          {name: "Comedy", selected: false},
          {name: "Crime", selected: false},
          {name: "Drama", selected: false},
          {name: "Fantasy", selected: false},
          {name: "Girl's Love", selected: false},
          {name: "Historical", selected: false},
          {name: "Horror", selected: false},
          {name: "Mecha", selected: false},
          {name: "Medical", selected: false},
          {name: "Mystery", selected: false},
          {name: "Philosophical", selected: false},
          {name: "Romance", selected: false},
          {name: "Sci-fi", selected: false},
          {name: "Slice of Life", selected: false},
          {name: "Sports", selected: false},
          {name: "Thriller", selected: false},
          {name: "Tragedy", selected: false},
          {name: "Wuxia", selected: false}
        ],
        selectAll: true
      },
      theme: {
        name: "Themes",
        icon: "fa-hat-wizard",
        content: [
          {name: "Alien", selected: false},
          {name: "Animal", selected: false},
          {name: "Cooking", selected: false},
          {name: "Deliquent", selected: false},
          {name: "Demon", selected: false},
          {name: "Gender Blender", selected: false},
          {name: "Harem", selected: false},
          {name: "Mafia", selected: false},
          {name: "Magic", selected: false},
          {name: "Martial Arts", selected: false},
          {name: "Military", selected: false},
          {name: "Monster Girls", selected: false},
          {name: "Monster", selected: false},
          {name: "Music", selected: false},
          {name: "Ninja", selected: false},
          {name: "Office", selected: false},
          {name: "Police", selected: false},
          {name: "Post-Apocalyptic", selected: false},
          {name: "Reincarnation",selected: false},
          {name: "School Life", selected: false},
          {name: "Supernatural", selected: false},
          {name: "Survival", selected: false},
          {name: "Time Travel", selected: false},
          {name: "Vampires", selected: false},
          {name: "Video Games", selected: false},
          {name: "Villainess", selected: false},
          {name: "Virtual Reality", selected: false},
          {name: "Zombies", selected: false}
        ],
        selectAll: true
      }
    });

    provide('criteria', criteria);

    return { criteria };
  }
}
</script>

<style scoped>
ul {
  flex-wrap: wrap;
  margin-bottom: -.5rem;
}

li {
 border: 1px solid #EBE5DE; 
 padding: .8rem 1rem .8rem 1rem;
 margin-right: 1rem;
 margin-bottom: .5rem;
 transition: all .3s;
 cursor: pointer;
}

li p {
  cursor: pointer;
}

li.add-filter:hover {
  color:#70AED2;
  border: 1px solid #70AED2;
}

li i {
  padding-right: .7rem;
}

li.item {
  max-width: 25vw;
}

li.item i {
  padding-right: .6rem;
  --fa-secondary-opacity: .7;
}

</style>