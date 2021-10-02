<template>
  <selectable-modal title="Rankings" 
                    :toggleItem="toggleItem">
  </selectable-modal>
</template>

<script>
import { inject, provide } from "vue";

import SelectableModal from "@/components/common/modal/SelectableModal.vue";

export default {
  components: {
    "selectable-modal": SelectableModal
  },
  methods: {
    toggleItem(itemsGroup, index) {
      for (let item of itemsGroup.content) {
        item.selected = false;
      }

      itemsGroup.content[index].selected = true;
    }
  },
  setup() {
    const rankings = inject("rankings");

    provide("selectableItems", rankings);
  }
}
</script>