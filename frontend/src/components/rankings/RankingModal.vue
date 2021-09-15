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
      let selectedItems = itemsGroup.content.filter(item => {
        return item.selected == true;
      });

      for (let item of selectedItems) {
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