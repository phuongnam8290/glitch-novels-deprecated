<template>
  <ul class="d-flex overflow-hidden">

    <li class="d-flex add-filter">
      <i class="fas fa-filter"></i>
      <p class="text-nowrap">Add filter</p>
    </li>
    
    <li class="d-none d-md-flex item">
      <i class="fad fa-venus-mars"
         style="--fa-primary-color: #E24396; --fa-secondary-color: #70AED2;">
      </i>
      <div class="overflow-hidden"
           @mouseenter="startMarquee" 
           @mouseleave="stopMarquee">
        <p class="d-inline-block text-nowrap">
          Lead: Female
        </p> 
      </div>
    </li>
    <li class="d-none d-md-flex item">
      <i class="fad fa-circle-notch"
         style="--fa-primary-color: #2baa22; --fa-secondary-color: #f2120e;">
      </i>
      <div class="overflow-hidden"
           @mouseenter="startMarquee" 
           @mouseleave="stopMarquee">
        <p class="d-inline-block text-nowrap">
          Status: Ongoing
        </p> 
      </div>
    </li>
    <li class="d-none d-md-flex item">
      <i class="fad fa-theater-masks"
         style="--fa-primary-color: #FDB400; --fa-secondary-color: #70AED2;">
      </i>
      <div class="overflow-hidden"
           @mouseenter="startMarquee" 
           @mouseleave="stopMarquee">
        <p class="d-inline-block text-nowrap">
          Genre: Crime, Drama &amp; 3 more
        </p> 
      </div>
    </li>
    <li class="d-none d-xl-flex item">
      <i class="fad fa-hat-witch"
         style="--fa-primary-color: #5f40bc; --fa-secondary-color: #cc8e00;">
      </i>
      <div class="overflow-hidden"
           @mouseenter="startMarquee" 
           @mouseleave="stopMarquee">
        <p class="d-inline-block text-nowrap">
          Theme: Weak to strong, Time travel &amp; 5 more
        </p> 
      </div>
    </li>
  </ul>
</template>

<script>
import ScrollText from "@/assets/js/mixins/ScrollText.js";

export default {
  mixins: [ScrollText]
}
</script>

<style scoped>
ul {
  font-size: 1.3rem;
}

li {
 border: 1px solid #EBE5DE; 
 padding: .8rem 1rem .8rem 1rem;
 margin-right: 1rem;
 transition: all .3s;
 cursor: pointer;
}

li p {
  cursor: pointer;
}

li.add-filter:hover {
  color:#70AED2;
  border: 1px solid #70AED2;
}

li i {
  padding-right: .7rem;
}

li.item {
  max-width: 20vw;
}

li:last-child {
  max-width: 25vw;
}

li.item i {
  padding-right: .6rem;
  --fa-secondary-opacity: 1;
}

</style>