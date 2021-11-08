<template>
  <div class="wrapper">
    <timeline-lg class="d-none d-lg-flex"></timeline-lg>
    <timeline-md class="d-flex d-lg-none"></timeline-md>
  </div>  
</template>

<script>
import TimelineLg from "@/components/schedule/timeline/TimelineLg";
import TimelineMd from "@/components/schedule/timeline/TimelineMd";

export default {
  components: {
    "timeline-lg": TimelineLg,
    "timeline-md": TimelineMd,
  }
}
</script>
