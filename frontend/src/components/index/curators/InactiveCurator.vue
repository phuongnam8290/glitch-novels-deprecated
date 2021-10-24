<template>
  <div class="d-flex">
    <div class="avatar">
      <img :src="require(`@/assets/images/avatars/${curator.avatar}`)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    curator: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.avatar img {
  width: 70px;
  height: 70px;
}
</style>