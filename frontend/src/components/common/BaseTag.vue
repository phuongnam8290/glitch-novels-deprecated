<template>
  <a class="text-nowrap tag" style="cursor: pointer;">
    <slot></slot>
  </a>
</template>

<style scoped>
.tag {
  border: 1px solid #EBE5DE;
  border-radius: 0%;
  color: #EBE5DE;
  font-size: 0.9rem;
  padding: 0.2rem 0.8rem;
  margin-left: 0.8rem;
  margin-top: 0.3rem;
}

.tag:first-child {
  margin-left: 0;
}

.tag:hover {
  border: 1px solid #70AED2;
  color: #70AED2;
  text-decoration: none;
}
</style>