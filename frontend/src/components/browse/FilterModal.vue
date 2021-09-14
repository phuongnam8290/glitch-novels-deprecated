<template>
  <div>
    <div class="filter-modal"
         ref="modal">
      <div class="modal-guts">

        <div class="d-flex justify-content-center overflow-hidden mb-4 header">
          <p class="position-relative d-inline-block text-center title-text">Filter</p>
        </div>

        <div class="content">
          <div class="criteria">
            <p class="criteria-title">
              <span>
                <i class="fad fa-venus-mars">
                </i>
              </span>
              Protagonist {{ criteria.protagonist.selectAll ? '(All)' : "" }}
              <span class="selected-all">
              </span>
            </p>
            <ul>
              <li v-for="(criterion, index) in criteria.protagonist.content" :key="criterion.title"
                  :class="{active: criterion.selected}"
                  @click="toggleCriterion('protagonist', index)">
                {{ criterion.title }}
              </li>
            </ul>
          </div>
            
          <div class="criteria">
            <p class="criteria-title">
              <span>
                <i class="fad fa-circle-notch">
                </i>
              </span>
              Publication Status {{ criteria.status.selectAll ? '(All)' : "" }}
            </p>
            <ul>
              <li v-for="(criterion, index) in criteria.status.content" :key="criterion.title"
                  :class="{active: criterion.selected}"
                   @click="toggleCriterion('status', index)">
                {{ criterion.title }}
              </li>
            </ul>
          </div>

          <div class="criteria">
            <p class="criteria-title">
              <span>
                <i class="fad fa-theater-masks">
                </i>
              </span>
              Genre {{ criteria.genre.selectAll ? '(All)' : "" }}
            </p>
            <ul>
              <li v-for="(criterion, index) in criteria.genre.content" :key="criterion.title"
                  :class="{active: criterion.selected}"
                   @click="toggleCriterion('genre', index)">
                {{ criterion.title }}
              </li>
            </ul>
          </div>

          <div class="criteria">
              <p class="criteria-title">
                <span>
                  <i class="fad fa-hat-wizard"></i>
                </span>
                Theme {{ criteria.theme.selectAll ? '(All)' : "" }}
              </p>
              <ul>
                <li v-for="(criterion, index) in criteria.theme.content" :key="criterion.title"
                    :class="{active: criterion.selected}"
                     @click="toggleCriterion('theme', index)">
                  {{ criterion.title }}
                </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <div class="overlay"></div>
  </div>
</template>

<script>
import { inject } from "vue"

export default {
  emits: ["close-modal"],
  methods: {
    toggleCriterion(criteriaGroup, index) {
      this.criteria[criteriaGroup].content[index].selected = !this.criteria[criteriaGroup].content[index].selected; 
      
      if(this.isSelectAllCriteria(criteriaGroup)) {
        this.criteria[criteriaGroup].selectAll = true;
      } else {
        this.criteria[criteriaGroup].selectAll = false;
      }
    },
    isSelectAllCriteria(criteriaGroup) {
      let totalCriteria = this.criteria[criteriaGroup].content.length;
      
      let totalSelectedCriteria = this.criteria[criteriaGroup].content.filter(criterion => {
        return criterion.selected == true;
      }).length;

      if(totalSelectedCriteria == totalCriteria || totalSelectedCriteria == 0) {
        return true;
      }

      return false;
    },
    closeFromOutside(event) {
      if (! this.$refs.modal.contains(event.target)) {
        this.$emit("close-modal", this.criteria);
      }
    }
  },
  setup() {
    const criteria = inject('criteria');

    return {
      criteria
    }
  },
  mounted() {
    window.addEventListener("click", this.closeFromOutside);
  },
  unmounted() {
    window.removeEventListener("click", this.closeFromOutside);
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}

.filter-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #EBE5DE;
  z-index: 1050;
}

.modal-guts {
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  padding: 2rem;
  overflow: auto;
}

.header p:before {
  position: absolute;
  content: "";
  right: 100%;
  top: 50%;
  width: 50vw;
  border-bottom: 1px solid #EBE5DE;
  margin-right: 1.2rem;
}

.header p:after {
  position: absolute;
  content: "";
  left: 100%;
  top: 50%;
  width: 50vw;
  border-bottom: 1px solid #EBE5DE;
  margin-left: 1.2rem;
}

.content {
  overflow: auto;
}

.content,
.content ul {
  display: flex;
  flex-wrap: wrap;
}

.content li {
  border: 1px solid #EBE5DE; 
  padding: .3rem 1rem;
  margin-right: 1rem;
  margin-bottom: .8rem;
  transition: all .3s;
  cursor: pointer;
}

.content li.active {
  border: 1px solid #3c89b6;
  background-color: #3c89b6;
  color: #EBE5DE;
}

.content li.active:hover {
  border: 1px solid #3c89b6;
  background-color: #3c89b6;
  color: #EBE5DE;
}

.content li:hover {
  color:#70AED2;
  border: 1px solid #70AED2;
}

.criteria {
  margin-bottom: 1rem;
}

.criteria:first-child {
  margin-right: 3rem;
}

.criteria-title {
  font-weight: bold;
  margin-bottom: 1rem
}

.criteria-title i {
  padding-right: .3rem;
  --fa-secondary-opacity: .7;
}
</style>