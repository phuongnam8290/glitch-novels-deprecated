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
  font-size: .8rem;
  background-image: linear-gradient(to bottom right, var(--darker-secondary-color) 49.5%, transparent 50%);
  background-size: 200% 200%;
  background-position: bottom right;
  border: 1px solid var(--darker-secondary-color);
  padding: .5rem 1.5rem;
  cursor: pointer;
  transition: all .5s;
}

.tag:hover {
  background-position: top left;
  color: var(--primary-color);
}

.tag .triangle {
  top: -1px;
  left: -1px;
  width: 0;
  height: 0;
  border-top: 10px solid var(--darker-secondary-color);
  border-right: 10px solid transparent;
}

.tag .content {
  color: var(--primary-color);
  text-decoration: none;
}
</style>