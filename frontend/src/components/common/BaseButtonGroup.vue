<template>
<div class="wrapper"
     :class="style">
  <div class="position-relative btn-group">
    <p class="pointable btn-item"
        v-for="btn in btns.totalBtns" :key="btn.ref"
        :id="btn.ref"
        :ref="btn.ref"
        @click="clickBtn">
      <span class="d-block" 
            v-if="btn.text">
        {{ btn.text }}
      </span>
      <i v-if="btn.class"
         :class="btn.class"></i>
    </p>
    <div class="bg"></div>
    <div class="btn-bg" ref="btn-bg"></div> 
  </div>  
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
    style: {
      type: String,
      required: false,
      default: "default",
      validator(value) {
        return ["default", "header-slider", "switch-btn"].includes(value);
      }
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

      if(this.style === "default") {
        btnBg.style.left = `${bgLeftPos}px`;
        btnBg.style.width = `${btn.offsetWidth}px`;
        btnBg.style.height = `${btn.offsetHeight}px`;
      }
      else if (this.style === "switch-btn") {
        btnBg.style.top = `3px`;
        btnBg.style.left = `${bgLeftPos == 0 ? bgLeftPos + 4 : bgLeftPos}px`;
        btnBg.style.width = `${btn.offsetWidth - 5}px`;
        btnBg.style.height = `${btn.offsetHeight - 7}px`;
      }
    },

    clickBtn(event) {
      let target = event.currentTarget;
      this.setBgStyle(target);

      // Add .active class to selected btn
      let btns = this.$el.getElementsByClassName("btn-item");      
      for(let btn of btns) {
        btn.classList.remove("active");
      }
      target.classList.add("active");

      this.$emit("clickBtnGroup", target.id);
    }
  },
  mounted() {
    let initBtn = this.$refs[`${this.btns.initBtn.ref}`];
    initBtn.classList.add("active");

    setTimeout(() => {
      this.setBgStyle(initBtn);
    }, 200)
  }
}
</script>

<style scoped>

.btn-item {
  z-index: 1;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: -2;
}

.btn-bg {
  position: absolute;
  background-color: var(--darker-secondary-color);
  transition: all .5s ease-out;
  z-index: -1;
}

.default .btn-item {
  color: var(--primary-color);
  border-top: 1px solid var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}

.default .btn-group .btn-item:first-of-type {
  border-left: 1px solid var(--primary-color);
}

.default .btn-group .btn-item:last-of-type {
  border-right: 1px solid var(--primary-color);
}

.default .btn-item > span {
  padding: .8rem 1rem;
}

.default .btn-item > i {
  font-weight: bold;
  font-size: 1.3rem;

  padding: .6rem;
  padding-top: .7rem;
}

/* Switch button style */
.switch-btn .btn-item {
  color: var(--secondary-color);
  transition: all .5s ease-out;
}

.switch-btn .btn-item.active {
  color: var(--primary-color);
}

.switch-btn .btn-item > span {
  padding: .8rem 2rem;
}

.switch-btn .bg {  
  background-color: var(--primary-color);
  opacity: 20%;
  border-radius: 35px;
}

.switch-btn .btn-bg {
  border-radius: 35px;
}
</style>