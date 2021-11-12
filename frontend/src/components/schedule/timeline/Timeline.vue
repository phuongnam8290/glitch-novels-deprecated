<template>
  <div class="wrapper">
    <timeline-control-md v-if="screenSize === 'md'" class="d-block"></timeline-control-md>
<!--    <timeline-control-sm v-else class="d-block"></timeline-control-sm>-->
  </div>  
</template>

<script>
import TimelineControlMd from "@/components/schedule/timeline-controls/TimelineControlMd";
// import TimelineControlSm from "@/components/schedule/timeline-controls/TimelineControlSm";

export default {
  components: {
    "timeline-control-md": TimelineControlMd,
    // "timeline-control-sm": TimelineControlSm
  },
  data() {
    return {
      resizeObserver: null,
      screenSize: null
    }
  },
  methods: {
    getScreenSize() {
      let windowWidth = window.innerWidth;
      windowWidth >= 768 ? this.screenSize = "md" : this.screenSize = "sm";
    }
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(this.getScreenSize);
    this.resizeObserver.observe(this.$el);
  },
  unmounted() {
    this.resizeObserver.unobserve(this.$el);
  }
}
</script>
