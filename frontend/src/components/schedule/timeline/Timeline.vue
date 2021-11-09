<template>
  <div class="wrapper">
<!--    <timeline-lg class="d-none d-lg-flex"></timeline-lg>-->
<!--    <timeline-md class="d-flex d-lg-none"></timeline-md>-->
    <timeline-control-lg class="d-none d-md-block"></timeline-control-lg>
    <timeline-control-sm class="d-block d-md-none"></timeline-control-sm>
  </div>  
</template>

<script>
// import TimelineLg from "@/components/schedule/timeline/TimelineLg";
// import TimelineMd from "@/components/schedule/timeline/TimelineMd";
import TimelineControlLg from "@/components/schedule/timeline-controls/TimelineControlMd";
import TimelineControlSm from "@/components/schedule/timeline-controls/TimelineControlSm";

export default {
  components: {
    "timeline-control-lg": TimelineControlLg,
    "timeline-control-sm": TimelineControlSm
    // "timeline-lg": TimelineLg,
    // "timeline-md": TimelineMd,
  }
}
</script>
