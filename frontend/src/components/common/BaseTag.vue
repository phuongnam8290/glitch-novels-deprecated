<template>
  <div class="d-inline-block position-relative tag">
    <div class="position-absolute triangle"></div>
    <a class="text-nowrap content">
      <slot></slot>
    </a>
  </div>
</template>

<style scoped>
.tag {
  background-image: linear-gradient(to bottom right, var(--hover-color) 49.5%, transparent 50%);
  background-size: 200% 200%;
  background-position: bottom right;
  transition: background-position .5s;

  padding: .3rem .8rem;
  margin-left: 0.7rem;
  margin-top: 0.3rem;

  cursor: pointer;
}

.tag:first-child {
  margin-left: 0;
}

.tag:hover {
  background-position: top left;
  color: var(--primary-color);
}

.tag .triangle {
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 10px solid var(--hover-color);
  border-right: 10px solid transparent;
}

.tag .content {
  color: var(--primary-color);
  font-size: 0.9rem;
  text-decoration: none;
}
</style>