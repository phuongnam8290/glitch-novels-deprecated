<template>
  <div class="d-flex flex-column drop-down-list"
       ref="dropdown">
    <div class="d-flex justify-content-start align-items-center display">
      <div class="sort-btn"
           @click="toggleSortMode">
        <i class="fas fa-sort-amount-down-alt"
           v-if="sortMode == 'default'"></i>
        <i class="fas fa-sort-amount-up-alt"
           v-else></i>
      </div>
      <div class="d-flex justify-content-between text"
           @click="toggleDropdownMenu">
          <span> {{ displayText }} </span>
          <i class="fas fa-chevron-down"
             :class="{animate: isAnimateArrow}">
          </i>
      </div>
    </div>

    <div class="position-relative wrapper">
      <transition enter-active-class="fadein"
                  leave-active-class="fadeout">
        <div class="d-flex flex-column position-absolute drop-down-menu"
            v-if="isShowDropdown">
          <div class="drop-down-item" value="update"
               @click="changeCriteria">
            Update
          </div>
          <div class="drop-down-item" value="title"
               @click="changeCriteria">
            Title
          </div>
          <div class="drop-down-item" value="follows"
               @click="changeCriteria">
            Follows
          </div>
          <div class="drop-down-item" value="rating"
               @click="changeCriteria">
            Rating
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import _ from "lodash"

export default {
  data() {
    return {
      isShowDropdown: false,
      isAnimateArrow: false,
      criteria: "update",
      sortMode: "default",
      prefixs: {
        update: {
          default: "latest",
          reverse: "oldest"
        },
        title: {
          default: "ascending sdsadsad",
          reverse: "descending"
        },
        follows: {
          default: "most",
          reverse: "most"
        },
        rating: {
          default: "top",
          reverse: "top"
        }
      }
    }
  },
  computed: {
    prefix() {
      return this.prefixs[this.criteria][this.sortMode];
    },
    displayText() {
      return _.capitalize(`${this.prefix} ${this.criteria}`);
    }
  },
  watch: {
    criteria(value) {
      // TODO: Sort list
      console.log(value);
    },
    sortMode(value) {
      // TODO: Sort list
      console.log(value);
    }
  },
  methods: {
    toggleDropdownMenu() {
      this.isShowDropdown = !this.isShowDropdown;
      this.isAnimateArrow = !this.isAnimateArrow;
    }, 
    toggleSortMode() {
      this.sortMode == "default" ? this.sortMode = "reverse" : this.sortMode = "default";
    },
    changeCriteria(event) {
      this.criteria = event.currentTarget.getAttribute("value");
      this.toggleDropdownMenu();
    },
    closeFromOutside(event) {
      if (! this.$refs.dropdown.contains(event.target)) {
        this.isShowDropdown = false;
        this.isAnimateArrow = false;
      }
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
.display {
  border: 1px solid var(--primary-color);
  transition: all .3s;
}

.display:hover {
  color:var(--secondary-color);
  border: 1px solid var(--secondary-color);
}

.sort-btn {
  padding: .8rem .8rem .6rem 1rem;
  cursor: pointer;
}

.text{
  padding: .7rem 1rem .7rem 0;
  max-width: 17rem;
  min-width: 10rem;
  cursor: pointer;
}

.text i {
  margin-left: 1rem;
  transition: transform .5s;
}

.animate {
 transform: rotate(180deg); 
}

.wrapper {
  width: 100%;
  z-index: 10;
}

.drop-down-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid var(--primary-color);
  border-top: none;
  background-color: rgba(0, 0, 0, 0.9);
}

.drop-down-item {
  padding: .7rem 1rem .7rem .5rem;
  padding-left: 2.8rem;
  font-weight: 200;
  cursor: pointer;
}

.drop-down-item:hover {
  background-color: rgba(235, 229, 222, 0.1);
}

.sort-btn:hover {
  color: var(--secondary-color);
}

</style>
