<template>
  <section class="container-fluid py-0 controls">
    <controls @change-style="changeNovelsStyle"></controls>
  </section>

  <section class="container-fluid novels">
    <novels-list :style="novelsStyle" >
    </novels-list>  
  </section>
  <section class="container-fluid pt-4 pb-5">
    <pagination :pages="15"></pagination>
  </section>
</template>

<script>
import Controls from "@/components/browse/Controls.vue";
import NovelsList from "@/components/browse/NovelsList.vue";
import Pagination from "@/components/common/BasePagination.vue";

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
.controls {
  margin-top: 1.7rem;
  margin-bottom: .3rem;
}

.novels {
  padding-top: 0;
  margin-top: -1rem;
}
</style>