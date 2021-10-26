<template>
  <section class="container-fluid controls">
    <controls @change-style="changeNovelsStyle"></controls>
  </section>

  <section class="container-fluid novels">
    <novels-list :style="novelsStyle" >
    </novels-list>  
  </section>
  <section class="container-fluid">
    <pagination :pages="15"></pagination>
  </section>
</template>

<script>
import Controls from "@/components/browse/Controls.vue";
import NovelsList from "@/components/browse/NovelsList.vue";
import Pagination from "@/components/common/ThePagination.vue";

export default {
  components: {
    "controls": Controls,
    "novels-list": NovelsList,
    "pagination": Pagination
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

<style scoped>
.novels {
  margin-top: -3rem;
}
</style>