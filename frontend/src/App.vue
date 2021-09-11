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

header.container-fluid {
  padding: 0 0;
}

section.container-fluid {
  padding: 3rem 4rem 0 4rem;
  background: transparent;
}

.section-title {
  overflow: hidden;
}

.section-title p {
  position: relative;
}

.section-title p:before {
  position: absolute;
  content: "";
  right: 100%;
  top: 50%;
  width: 50vw;
  border-bottom: 1px solid #EBE5DE;
  margin-right: 1.2rem;
}

.section-title p:after {
  position: absolute;
  content: "";
  left: 100%;
  top: 50%;
  width: 50vw;
  border-bottom: 1px solid #EBE5DE;
  margin-left: 1.2rem;
}

.color-primary {
  color: #EBE5DE
}

p {
  word-spacing: 2px;
  padding-right: 2px;
}

a:hover {
  transition: all 0.3s ease-in-out;
  color: #70AED2;
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

.fadein {
  animation: fadeIn;
  animation-duration: .5s;
}

.fadeout {
  animation: fadeOut;
  animation-duration: .5s;
}

.fadeindown {
  animation: fadeInDown;
  animation-duration: .5s;
}

.fadeoutup {
  animation: fadeOutUp;
  animation-duration: .5s;
}
</style>
