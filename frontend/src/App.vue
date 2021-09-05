<template>
  <navigation-bar></navigation-bar>
  <router-view></router-view>
  <custom-footer></custom-footer>
</template>

<script>
import NavigationBar from './components/common/TheNavigationBar.vue'
import Footer from './components/common/TheFooter.vue'


export default {
  name: 'App',
  components: {
    'navigation-bar': NavigationBar,
    'custom-footer': Footer
  }
}
</script>

<style>
@font-face {
  font-family: "Proxima Nova";
  src: url(~@/assets/font/proxima-nova/proxima_nova_alt_regular-webfont.woff2);
}

@font-face {
  font-family: "Proxima Nova";
  src: url(~@/assets/font/proxima-nova/proxima_nova_alt_bold-webfont.woff2);
  font-weight: bold;
}

@font-face {
  font-family: "Proxima Nova";
  src: url(~@/assets/font/proxima-nova/proxima_nova_alt_light-webfont.woff2);
  font-weight: 300;
}

@font-face {
  font-family: "Proxima Nova";
  src: url(~@/assets/font/proxima-nova/proxima_nova_alt_regular_italic-webfont.woff2);
  font-style: italic;
}

@font-face {
  font-family: "Proxima Nova";
  src: url(~@/assets/font/proxima-nova/proxima_nova_alt_bold_italic-webfont.woff2);
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: "Proxima Nova";
  src: url(~@/assets/font/proxima-nova/proxima_nova_alt_light_italic-webfont.woff2);
  font-weight: 300;
  font-style: italic;
}

/* Fix inconsistence height for form-control with appended button in Bootstrap 4.1.3 and later */
.form-control.search-input {
  height: auto !important;
}

body {
  font-family: 'Proxima Nova', sans-serif !important;

  background:
  linear-gradient(
    rgba(12.5, 13.3, 13.3, 0.95), 
    rgba(12.5, 13.3, 13.3, 0.95)
  ), 
  url(~@/assets/images/background.png) 
  fixed center/cover no-repeat;
  height: 100%;
  color: #EBE5DE;
}

.container-fluid {
  padding: 0 0;
}

section.container-fluid {
  padding: 3rem 4rem 0 4rem;
  background: transparent;
}

.color-primary {
  color: #EBE5DE
}

p {
  word-spacing: 2px;
  padding-right: 2px;
}

.title-text {
  font-weight: bold;
  font-size: 1.3rem; 
}

.paragraph-text {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
}

.fader-text {
  font-weight: 300;
  font-size: 0.8rem;
}

.paragraph-text p {
  margin-top: 1rem;
}

.paragraph-text p:first-child {
  margin-top: 0;
}
</style>
