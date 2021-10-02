<template>
  <div class="accordion" :id="id">
    <div class="py-4 text-center title-text header" 
         @click="toggleAccordion">
      <p class="d-inline"> 
        <slot name="title"></slot>
      </p>
    </div>
    <div class="body" 
         v-once :style="{display: active ? 'block' : 'none'}">
      <div class="content paragraph-text">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery"

export default {
  props: {
    // Use this prop if parent want to set initial open status.
    "active": {
      type: Boolean,
      required: false,
      default: false
    },
    // Required for get individual accordion's body
    "id" : {
      type: String,
      required: true
    }
  },
  emits: ["toggle-accordion"],
  data() {
    return {
      open: this.active,
    }
  },
  watch: {
    open(open) {
      let accordionBody = $(`#${this.id} .body`);

      if(open) {
        accordionBody.slideDown(250);
      } else {
        accordionBody.slideUp(250);
      }
    }
  },
  methods: {
    toggleAccordion() {
        this.open = !this.open;
        // Listen to this event if you want to trigger custom handler on parent.
        this.$emit('toggle-accordion', this.id);
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.header p{
  cursor: pointer;
  position: relative;
}

.header p:before {
  position: absolute;
  content: "";
  right: 100%;
  top: 50%;
  width: 10vw;
  border-bottom: 1px solid var(--primary-color);
  margin-right: 1.2rem;
}

.header p:after {
  position: absolute;
  content: "";
  left: 100%;
  top: 50%;
  width: 10vw;
  border-bottom: 1px solid var(--primary-color);
  margin-left: 1.2rem;
}

.header p:hover,
.header p:hover:before,
.header p:hover:after {
  transition: all .3s ease-in-out;
  color: var(--secondary-color);
  border-color: var(--secondary-color);
}

.body {
  overflow: hidden;
}
</style>