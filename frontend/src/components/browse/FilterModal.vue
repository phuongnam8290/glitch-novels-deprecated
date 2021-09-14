<template>
  <selectable-modal></selectable-modal>
</template>

<script>
import { provide, inject } from "vue"

import SelectableModal from "@/components/common/modal/SelectableModal.vue";

export default {
  components: {
    "selectable-modal": SelectableModal
  },
  setup() {
    const criteria = inject("criteria");
    provide("selectableItems", criteria);
  }
}
</script>
