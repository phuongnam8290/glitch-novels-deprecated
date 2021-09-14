<template>
  <div class="wrapper">
    <div class="custom-modal"
         ref="modal">
      <div class="modal-guts">

        <div class="d-flex justify-content-center overflow-hidden mb-4 custom-modal-header">
          <p class="position-relative d-inline-block text-center title-text">
            <slot name="header">Header</slot>
          </p>
        </div>

        <div class="custom-modal-body">
          <slot name="body">Body</slot>
        </div>
      </div>
    </div>

    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  emits: ["close-modal"],
  methods: {
    click(event) {
      if(this.isClickFromOutside(event)) {
        this.close();
      }
    },
    isClickFromOutside(event) {
      if(! this.$refs.modal.contains(event.target)) {
        return true;
      }

      return false;
    },
    close() {
      this.$emit("close-modal");
    }
  },
  mounted() {
    window.addEventListener("click", this.click);
  },
  unmounted() {
    window.removeEventListener("click", this.click);
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}

.custom-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #EBE5DE;
  z-index: 1050;
}

.modal-guts {
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  padding: 2rem;
  overflow: auto;
}

.custom-modal-header p:before {
  position: absolute;
  content: "";
  right: 100%;
  top: 50%;
  width: 50vw;
  border-bottom: 1px solid #EBE5DE;
  margin-right: 1.2rem;
}

.custom-modal-header p:after {
  position: absolute;
  content: "";
  left: 100%;
  top: 50%;
  width: 50vw;
  border-bottom: 1px solid #EBE5DE;
  margin-left: 1.2rem;
}

.custom-modal-body {
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>