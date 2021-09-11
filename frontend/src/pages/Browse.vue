<template>
  <section>
    <banner></banner>
  </section>
  
  <section class="container-fluid">
    <controls @change-style="changeNovelsStyle"></controls>
  </section>

  <section class="container-fluid pt-2">
    <novels-list :style="novelsStyle" >
    </novels-list>  
  </section>
  <section class="container-fluid pt-4 pb-5">
    <pagination :pages="15"></pagination>
  </section>
</template>

<script>
import Controls from "@/components/browse/Controls.vue";
import Banner from "@/components/browse/Banner.vue";
import NovelsList from "@/components/browse/NovelsList.vue";
import Pagination from "@/components/common/BasePagination.vue";

export default {
  components: {
    "banner": Banner,
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