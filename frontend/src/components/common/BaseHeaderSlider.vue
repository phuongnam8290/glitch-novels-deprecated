<template>
  <ul class="slider tab-bar bar-style-1 title-text"
      :class="style"
      v-once>
    <li v-for="slot in slots" :key="slot.id"
        @click="activateTab(slot.name)">
      <slot :name="slot.name"></slot>
    </li>
  </ul>
</template>

<script>
import $ from "jquery";
import "@/assets/js/plugins/RegisterTabBar.js";

export default {
  props: {
    style: {
      type: String,
      required: false,
      default: "header"
    },
    slots: {
      type: Array,
      required: true
    },
    startPosition: {
      type: Number,
      required: false,
      default: 1
    }
  },
  emits: ["activate-tab"],
  methods: {
    activateTab(tabName) {
      this.$emit("activate-tab", tabName);
    }
  },
  mounted() {
    setTimeout(() => {
      $(".slider").RegisterTabBar("slider1").find(`li:nth-child(${this.startPosition})`).click();
    }, 300);
  }
}
</script>

<style scoped>
ul.tab-bar.button {
  margin-bottom: 1rem;
}

ul.tab-bar,
ul.tab-bar>li { 
  position: relative; 
}

ul.tab-bar.header,
ul.tab-bar.header>li { 
  border-bottom: 1px solid var(--primary-color);
}

ul.tab-bar.bar-style-1:before { 
  background-color: var(--secondary-color); 
}

ul.tab-bar.bar-style-1.header:before { 
  margin-bottom: -2px;
}

ul.tab-bar:before {
  display: inline-block;
  content: '';
  position: absolute;
  bottom: 0; 
  left: 0;
  z-index: 1;
}

ul.tab-bar.header:before {
  height: 3px;
}

ul.tab-bar.button:before {
  height: 100%;
}

ul.tab-bar>li { 
  list-style-type: none; 
}

ul.tab-bar.header>li { 
  border-width: 0; 
}

ul.tab-bar.bar-style-1>li.active { 
  transition: color 0.5s;
}

ul.tab-bar.bar-style-1.header>li.active { 
  color: var(--secondary-color); 
}

li {
  list-style-type: none;
  display: inline-block;
  border-width: 0;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  transition: color 0.5s;
}

li:hover {
  color: var(--secondary-color);
}

ul.button li.active:hover {
  color: var(--primary-color);
}

ul.header li {
  padding-bottom: 1.5rem;
  margin-right: 2rem;
}

ul.button li {
  padding: 0.6rem;
  border: 1px solid var(--primary-color);
  z-index: 2;
}
</style>