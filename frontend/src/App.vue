<template>
  <navigation-bar></navigation-bar>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import NavigationBar from './components/common/TheNavigationBar.vue'
import TheFooter from './components/common/TheFooter.vue'

export default {
  name: 'App',
  components: {
    'navigation-bar': NavigationBar,
    'the-footer': TheFooter
  }
}
</script>