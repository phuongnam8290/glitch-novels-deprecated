<template>
  <section class="container-fluid">
    <base-section-header>
      New Arrival
    </base-section-header>

    <base-button-group  :btns="btnGroupData"></base-button-group>
  </section>
</template>

<script>
import BaseSectionHeader from "@/components/common/BaseSectionHeader.vue";
import BaseButtonGroup from "@/components/common/BaseButtonGroup.vue";

export default {
  components: {
    "base-section-header": BaseSectionHeader,
    "base-button-group": BaseButtonGroup
  },
  data() {
    return {
      btnGroupData: {
        totalBtns: [
          {ref: "btn-one", text: "Last week"},
          {ref: "btn-two", text: "This week"}
        ],
        initBtn: {
          ref: "btn-two"
        }
      }
    }
  }
}
</script>