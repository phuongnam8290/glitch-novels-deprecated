<template>
  <section>
    <banner></banner>
  </section>
  
  <section class="container-fluid header">
    <controls @change-style="changeNovelsStyle"></controls>
  </section>

  <section class="container-fluid pt-2 body">
    <novels-list :style="novelsStyle" >
    </novels-list>  
  </section>
</template>

<script>
import Controls from "@/components/browser/Controls.vue";
import Banner from "@/components/browser/Banner.vue";
import NovelsList from "@/components/browser/NovelsList.vue";

export default {
  components: {
    "banner": Banner,
    "controls": Controls,
    "novels-list": NovelsList
  }, 
  methods: {
    changeNovelsStyle(style) {
      this.novelsStyle = style;
    }
  },
  data() {
    return {
      novelsStyle: "default"
    }
  }
}
</script>