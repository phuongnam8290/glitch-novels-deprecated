<template>
<div class="position-relative wrapper">
  <div class="d-flex btn-group">
    <div class="btn-item"
        v-for="btn in btns.totalBtns" :key="btn.ref"
        :id="btn.ref"
        :ref="btn.ref"
        @click="clickBtn">
      <p v-if="btn.text">
        {{ btn.text }}
      </p>
      <i v-if="btn.class"
         :class="btn.class"></i>
    </div>
  </div>  
  <div class="btn-bg" ref="btn-bg"></div> 
</div>
</template>

<script>
export default {
  emits: ["clickBtnGroup"],
  props: {
    btns: {
      type: Object,
      required: true,
      default () {
        return {
          totalBtns: [
            {ref: "btn-one", text: "btn-one"},
            {ref: "btn-two", text: "btn-two"}
          ],
          initBtn: {
            ref: "btn-one"
          }
        }
      }      
    },
    initBtn: {
      type: Number,
      required: false,
      default: 1
    }
  },
  methods: {
    getPreviousSiblings(elem) {
      let sibs = [];

      while(elem.previousElementSibling != null) {
        elem = elem.previousElementSibling;
        sibs.push(elem);
      }

      return sibs;
    },

    setBgStyle(btn) {
      let btnBg = this.$refs["btn-bg"];
      let bgLeftPos = 0;

      for(let elem of this.getPreviousSiblings(btn)) {
        bgLeftPos += elem.offsetWidth;
      }

      btnBg.style.left = `${bgLeftPos}px`;
      btnBg.style.width = `${btn.offsetWidth}px`;
      btnBg.style.height = `${btn.offsetHeight}px`;
    },

    clickBtn(event) {
      let target = event.currentTarget;
      this.setBgStyle(target);

      this.$emit("clickBtnGroup", target.id)
    }
  },
  mounted() {
    let initBtn = this.$refs[`${this.btns.initBtn.ref}`];

    setTimeout(() => {
      this.setBgStyle(initBtn);
    }, 300)
  }
}
</script>

<style scoped>
  .btn-item:first-child {
    border-left: 1px solid var(--primary-color);
  }

  .btn-item:last-child {
    border-right: 1px solid var(--primary-color);
  }
  
  .btn-item {
    color: var(--primary-color);

    border-top: 1px solid var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
  }

  .btn-item > p {
    padding: .8rem 1rem;
  }

  .btn-item > i {
    font-weight: bold;
    font-size: 1.3rem;
    padding: .6rem;
    padding-top: .7rem;
  }

  .btn-bg {
    position: absolute;
    top: 0;
    background-color: var(--darker-secondary-color);
    z-index: -1;
    transition: all .5s ease-out;
  }
</style>