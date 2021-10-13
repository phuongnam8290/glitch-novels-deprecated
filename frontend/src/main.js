import { createApp } from 'vue';
import { dragscrollNext } from "vue-dragscroll";

import router from './router.js'
import store from "./store/store.js"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { VTooltip } from 'v-tooltip'
import 'v-tooltip/dist/v-tooltip.css'

import "@/assets/font/font-awesome/css/all.css"
import "@/assets/css/reset.css"
import "@/assets/css/bootstrap-reset.css"
import "@/assets/css/global.css"
import "@/assets/css/marquee.css"

import "animate.css"

import App from './App.vue'

const app = createApp(App);

app.use(router);
app.use(store);

app.directive("dragscroll", dragscrollNext);
app.directive("tooltip", VTooltip);

app.mount('#app');