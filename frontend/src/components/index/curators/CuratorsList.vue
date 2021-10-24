<template>
  <!-- Active cutator infomation -->
  <transition enter-active-class="fadein"
              leave-active-class="fadeout"
              mode="out-in">
    <active-curator :curator="activeCurator" :key="activeCurator"></active-curator>
  </transition>
  <!-- End of active cutator infomation -->

  
  <!-- Curators list section -->
  
  <div class="d-none d-md-flex position-relative inactive-curators-list">
    <transition-group name="fade" @before-leave="beforeLeave">
      <inactive-curator class="inactive-curator"
                        v-for="(curator, index) in inactiveCurators" :key="curator.id"  
                        :curator="curator"
                        @click="activateCurator($event, index)">
      </inactive-curator>
    </transition-group>
  </div>

  <div class="d-block d-md-none ml-3 ml-md-0">
    <transition enter-active-class="fadein"
                leave-active-class="fadeout"
                mode="out-in">
      <inactive-curator class="inactive-curator"
                  :key="inactiveCurators[inactiveCuratorIndex].id"  
                  :curator="inactiveCurators[inactiveCuratorIndex]"
                  @click="activateCurator($event, inactiveCuratorIndex)">
      </inactive-curator>
    </transition>
  </div>
</template>

<script>
import { inject } from "vue";

import ActiveCurator from "@/components/index/curators/ActiveCurator.vue"
import InactiveCurator from "@/components/index/curators/InactiveCurator.vue";

export default {
  components: {
    "active-curator": ActiveCurator,
    "inactive-curator": InactiveCurator
  },
  data() {
    return {
      inactiveCuratorIndex: 0
    }
  },
  computed: {
    activeCurator() {
      return this.curators[0];
    },
    inactiveCurators() {
      return this.curators.slice(1);
    }
  },
  methods: {
    activateCurator(event, inactiveCuratorIndex) {
      let activatedCurator = this.inactiveCurators[inactiveCuratorIndex];

      this.curators[inactiveCuratorIndex + 1] = this.curators[0];
      this.curators[0] = activatedCurator;
    },
    beforeLeave(el) {
      let leftPosition = 0;
      let previousSibling = el.previousElementSibling;

      while(previousSibling != null) {
        leftPosition += previousSibling.offsetWidth;
        previousSibling = previousSibling.previousElementSibling;
      }

      el.style.setProperty("--left-position", `${leftPosition}px`);
    },
  },
  mounted() {
    setInterval(() => {
      if(this.inactiveCuratorIndex == 3) {
        this.inactiveCuratorIndex = 0;
      } else {
        this.inactiveCuratorIndex++;
      }
    }, 3000);
  },
  setup() {
    // const curators = reactive(inject("curators"));

    const curators = inject("curators");
    for (let curator of curators) {
      curator.shouldSlideLeft = true;
    }
    return {
      curators
    }
  }
}
</script>

<style scoped>
/* Deactived curator list */
.inactive-curators-list .inactive-curator {
  padding-left: 15px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-in;
}

.fade-leave-active {
  position: absolute;
  left: var(--left-position);
  top: 0;
}

</style>