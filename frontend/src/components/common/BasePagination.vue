<template>
  <ul class="d-flex justify-content-center">
    <li class="page-item" :class="{active: current == first}">
      {{ first }}
    </li>

    <li class="prev"
        v-if="shouldShowPrev()">
      <div class="ellipsis"
           v-if="showPrevEllipsis"
           @click="showPrevEllipsis = false">
        <i class="far fa-ellipsis-h fa-lg"></i>
      </div>
      <input v-else
             v-focus
             @blur="showPrevEllipsis = true"
             @keypress="checkNumericKey"
             @paste.prevent>
    </li>

    <li class="page-item" :class="{active: item == current}"
      v-for="item in generatePageItems()" :key="item">
      {{ item }}
    </li>

    <li class="next"
        v-if="shouldShowNext()">
      <div class="ellipsis"
          v-if="showNextEllipsis"
           @click="showNextEllipsis = false">
        <i class="far fa-ellipsis-h fa-lg"></i>
      </div>
      <input v-else
             v-focus
             @blur="showNextEllipsis = true"
             @keypress="checkNumericKey"
             @paste.prevent>
    </li>

    <li class="page-item" :class="{active: current == last}">
      {{ last }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      required: true,
      default: 0
    },
    current: {
      type: Number,
      required: false,
      default: 1
    },

    // Number of page items in each side of current (exclude first, last, ellipsis)
    limit: {
      type: Number,
      required: false,
      default: 2
    }
  },
  data() {
    return {
      first: 1,
      last: this.pages,
      showPrevEllipsis: true,
      showNextEllipsis: true
    }
  },
  methods: {
    generatePageItems() {
      let items = [];
      
      for(let i = this.limit; i >= 1; i--) {
          this.pushPageItem(items, this.current - i);
      }

      this.pushPageItem(items, this.current);

      for(let i = 1; i <= this.limit; i++) {
          this.pushPageItem(items, this.current + i);
      }

      return items;
    },
    pushPageItem(items, item) {
      if(item <= 1 || item >= this.pages) {
        return;
      } else {
        items.push(item);
      }
    },
    shouldShowPrev() {
      return (this.current - this.limit) > this.first + 1;
    },
    shouldShowNext() {
      return (this.current + this.limit) < this.last - 1;
    },
    checkNumericKey(event) {
      let charCode = (event.which) ? event.which : event.keyCode
      
      // Handle enter key press
      if (charCode == 13) {
        // TODO: Change page on enter keypress
        console.log('Enter key press!');
        console.log(event.currentTarget.value)
        return;
      }

      if ((charCode < 48 || charCode > 57)) {
        event.preventDefault();
      }
    }
  },
  directives: {
    focus: {
      mounted: function(el) {
        el.focus();
      }
    }
  }
}
</script>

<style scoped>
.page-item,
.ellipsis {
  padding: .6rem;
  margin: 0 .2rem;
  min-width: 3rem;
  color: #EBE5DE;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: .3s;
}

.page-item,
input {
  border: 1px solid #EBE5DE;
}

.page-item:hover {
  color: #70AED2;
  border: 1px solid #70AED2;
}

input{
  width: 3rem;
  padding: .6rem;
  margin: 0 .2rem;
  height: 2.3rem;
  background-color: transparent;
  color: #EBE5DE;
  font-weight: bold;
}

input:focus-visible {
  outline: none;
}

.ellipsis:hover {
  color: #70AED2;
}

.active {
  background-color: #70AED2;
  border: 1px solid #70AED2;
}

.active:hover {
  color: #EBE5DE;
}

</style>