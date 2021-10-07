<template>
  <div class="row section-header">
  <div class="col-12 d-flex justify-content-center">
    <p class="section-text pb-1">
      <slot></slot>
    </p>
  </div>
</div>
</template>

<style scoped>
.section-header {
  overflow: hidden;
  margin-left: 0;
  margin-right: 0;
}

.section-header p {
  position: relative;
}

.section-header p:before {
  position: absolute;
  content: "";
  right: 100%;
  top: 50%;
  width: 50vw;
  border-bottom: 1px solid var(--primary-color);
  margin-right: 1.2rem;
}

.section-header p:after {
  position: absolute;
  content: "";
  left: 100%;
  top: 50%;
  width: 50vw;
  border-bottom: 1px solid var(--primary-color);
  margin-left: 1.2rem;
}
</style>