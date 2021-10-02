<template>
  <base-modal>
    <template v-slot:header>
      {{ title }}
    </template>

    <template v-slot:body>
      <div class="items-group"
           v-for="itemsGroup in selectableItems" :key="itemsGroup.name">
        <p class="group-name">
          <span>
            <i class="fad" :class="itemsGroup.icon"></i>
          </span>
          {{ itemsGroup.name }} {{itemsGroup.selectAll ? "(All)" : ""}}
        </p>

        <ul class="group-content">
          <li :class="{active: item.selected}"
              v-for="(item, index) in itemsGroup.content" :key="item.name"
              v-tooltip="{content: item.tooltip ? `<i class='fal fa-info-circle'></i> ${item.tooltip}` : null, html: true}"
              @click="toggleItem(itemsGroup, index)">
            <p>
              {{ item.name }}
            </p>            
          </li>
        </ul>
      </div>
    </template>
  </base-modal>
</template>

<script>
import { inject } from "vue";

import BaseModal from "@/components/common/modal/BaseModal.vue";

export default {
  components: {
    "base-modal": BaseModal
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "title"
    },
    isSelectAll: {
      type: Function,
      required: false,
      default : function(itemsGroup) {
        if(itemsGroup.selectAll === undefined) {
          return false;
        }

        let totalItems = itemsGroup.content.length;

        let totalSelectedItems = itemsGroup.content.filter(item => {
          return item.selected == true;
        }).length;

        if(totalSelectedItems == totalItems || totalSelectedItems == 0) {
          itemsGroup.selectAll = true;
          return true;
        }

        itemsGroup.selectAll = false;
        return false;
      }
    },
    toggleItem: {
      type: Function,
      required: false,
      default: function(itemsGroup, index) {
        itemsGroup.content[index].selected = !itemsGroup.content[index].selected; 
        this.isSelectAll(itemsGroup);
      }
    }
  },
  setup() {
    const selectableItems = inject("selectableItems");

    return {
      selectableItems
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  border: 1px solid var(--primary-color); 
  padding: .5rem 1rem .4rem 1rem;
  margin-right: 1rem;
  margin-bottom: .8rem;
  transition: all .3s;
  cursor: pointer;
}

li:hover {
  color:var(--secondary-color);
  border: 1px solid var(--secondary-color);
}

li.active {
  border: 1px solid var(--darker-secondary-color);
  background-color: var(--darker-secondary-color);
  color: var(--primary-color);
}

li p {
  cursor: pointer;
}

.items-group {
  margin-bottom: 1rem;
}

.items-group:first-child {
  margin-right: 3rem;
}

.group-name {
  font-weight: bold;
  margin-bottom: 1rem
}

.group-name i {
  padding-right: .3rem;
  --fa-secondary-opacity: .7;
}
</style>