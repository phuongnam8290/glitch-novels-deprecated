<template>
  <div class="card" 
       :class="layoutStyle">
    <slot name="cover"></slot>
    <div class="card-body py-0 pr-0">
      <div>       
        <slot name="header"></slot>      
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    layoutStyle: {
      type: String,
      required: false,
      default: "col-md-12 col-lg-6"
    }
  }
}
</script>


<style scoped>
.card {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  border: none;
  padding: 2rem 0 2rem 1rem;
}

.card:nth-child(odd):not(.fullwidth) {
  padding-right: 1rem;
}

.card:nth-child(even):not(.fullwidth) {
  padding-left: 2rem;
}

@media (max-width: 992px) {
  .card:nth-child(odd):not(.fullwidth) {
    padding-right: 0;
  }

  .card:nth-child(even):not(.fullwidth) {
    padding-left: 1rem;
  }
}
</style>