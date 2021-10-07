<template>
  <header class="container-fluid">
    <nav class="navbar navbar-expand-lg fixed-top">

      <!-- Brand -->
      <a href="/" class="navbar-brand ml-4">
        <!-- <img class="img-fluid" src="static/images/logo.png" /> -->
        <img class="img-fluid" src="@/assets/images/logo.png" />
      </a>

      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar-nav" @click="toggleAnimation">
        <div class="bg-light line1"></div>
        <div class="bg-light line2"></div>
        <div class="bg-light line3"></div>
      </button>

      <!-- Main navbar nav -->
      <div class="collapse navbar-collapse font-weight-bold" id="main-navbar-nav">
        <div class="navbar-nav ml-4 ml-lg-3">
          <router-link class="nav-item nav-link mr-lg-2 mb-1 mb-lg-0"
                       :class="{active: isActive('index')}"
                       to="index">
            Home
          </router-link>
          <router-link class="nav-item nav-link mr-lg-2 mb-1 mb-lg-0"
                       :class="{active: isActive('browse')}"
                       to="browse">
            Browse
          </router-link>
          <router-link class="nav-item nav-link mr-lg-2 mb-1 mb-lg-0"
                       :class="{active: isActive('rankings')}"
                       to="rankings">
            Rankings
          </router-link>
          <router-link class="nav-item nav-link mr-lg-2 mb-1 mb-lg-0"
                       :class="{active: isActive('schedule')}"
                       to="schedule">
            Schedule
          </router-link>
        </div>
        <form class="mr-5 mb-2 mb-lg-0 ml-4 ml-lg-auto">
          <input type="text" class="form-control search-input" placeholder="&#xF002; Search anything"/>
        </form>
      </div>
    </nav>
    <div :style="{height: `${navbarHeight}px`}"></div>
  </header>
</template>

<script>
import $ from 'jquery'

export default {
  data() {
    return{
      navbarHeight: 0
    };
  },
  methods: {
    toggleAnimation() {
      $('.navbar-toggler').toggleClass('change');
    },
    isActive(path) {
      return this.$route.path.includes(path);
    }
  },
  mounted() {
    setTimeout(()=> {
      this.navbarHeight = $('nav').outerHeight();
    }, 10);
  }
}
</script>


<style scoped>
.navbar {
  background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .7));
}

.navbar-brand {
  width: 5em;
}

.nav-link {
  font-size: 1.3rem;
  letter-spacing: 1px;
  transition: color .5s;
  color: var(--primary-color);
}

.nav-link:hover,
.nav-link.active {
  color: var(--secondary-color);
}

.line1,
.line2,
.line3 {
  width: 23px;
  height:3px;
  margin: 5px;
  transition: all .4s;
}

.change .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.change .line2 {
  opacity: 0;
}

.change .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

.search-input,
.search-input:focus {
  background-color: transparent;
  color: var(--primary-color);
}

.search-input {
  width: 30rem;
  border: 1px solid var(--primary-color);
}

@media (max-width: 1200px) {
  .search-input {
    width: 20rem;
  }
}

@media (max-width: 992px) {
  .search-input {
    width: 15rem;
  }
}

.search-input:focus {
  border: 1px solid var(--secondary-color);
  box-shadow: 0px 0px 2px var(--secondary-color);
}

input.search-input[type="text"]::placeholder {
  font-family: 'Proxima Nova', 'Font Awesome\ 5 Pro', sans-serif;
  font-weight: bold;
}
</style>