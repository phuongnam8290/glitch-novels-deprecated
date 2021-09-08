import { createApp } from 'vue'
import { dragscrollNext} from "vue-dragscroll"
import router from './router.js'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "@/assets/font/font-awesome/css/all.css"
import "@/assets/css/reset.css"

import "animate.css"

import App from './App.vue'

const app = createApp(App);

app.use(router);
app.directive('dragscroll', dragscrollNext);

app.mount('#app');