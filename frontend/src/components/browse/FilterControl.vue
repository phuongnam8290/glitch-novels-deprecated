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
          message += `${criterion.title}, `;
        }
        message = message.slice(0, -2);
      } 
      else {
        for (let i = 0; i < 3; i++) {
          message += `${selectedCriteria[i].title}, `;
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
        content: [
          {title: "Male", selected: false},
          {title: "Female", selected: false}
        ],
        selectAll: true
      },
      status: {
        content: [
          {title: "Ongoing", selected: false},
          {title: "Completed", selected: false},
          {title: "Hiatus", selected: false},
          {title: "Cancelled", selected: false}
        ],
        selectAll: true
      },
      genre: {
        content: [
          {title: "Action", selected: false},
          {title: "Adventure", selected: false},
          {title: "Boy's Love", selected: false},
          {title: "Comedy", selected: false},
          {title: "Crime", selected: false},
          {title: "Drama", selected: false},
          {title: "Fantasy", selected: false},
          {title: "Girl's Love", selected: false},
          {title: "Historical", selected: false},
          {title: "Horror", selected: false},
          {title: "Mecha", selected: false},
          {title: "Medical", selected: false},
          {title: "Mystery", selected: false},
          {title: "Philosophical", selected: false},
          {title: "Romance", selected: false},
          {title: "Sci-fi", selected: false},
          {title: "Slice of Life", selected: false},
          {title: "Sports", selected: false},
          {title: "Thriller", selected: false},
          {title: "Tragedy", selected: false},
          {title: "Wuxia", selected: false}
        ],
        selectAll: true
      },
      theme: {
        content: [
          {title: "Alien", selected: false},
          {title: "Animal", selected: false},
          {title: "Cooking", selected: false},
          {title: "Deliquent", selected: false},
          {title: "Demon", selected: false},
          {title: "Gender Blender", selected: false},
          {title: "Harem", selected: false},
          {title: "Mafia", selected: false},
          {title: "Magic", selected: false},
          {title: "Martial Arts", selected: false},
          {title: "Military", selected: false},
          {title: "Monster Girls", selected: false},
          {title: "Monster", selected: false},
          {title: "Music", selected: false},
          {title: "Ninja", selected: false},
          {title: "Office", selected: false},
          {title: "Police", selected: false},
          {title: "Post-Apocalyptic", selected: false},
          {title: "Reincarnation",selected: false},
          {title: "School Life", selected: false},
          {title: "Supernatural", selected: false},
          {title: "Survival", selected: false},
          {title: "Time Travel", selected: false},
          {title: "Vampires", selected: false},
          {title: "Video Games", selected: false},
          {title: "Villainess", selected: false},
          {title: "Virtual Reality", selected: false},
          {title: "Zombies", selected: false}
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