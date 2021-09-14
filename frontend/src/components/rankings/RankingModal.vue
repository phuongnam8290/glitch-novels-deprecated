<template>
  <div>
    <div class="rankings-modal"
         ref="modal">
      <div class="modal-guts">

        <div class="d-flex justify-content-center overflow-hidden mb-4 header">
          <p class="position-relative d-inline-block text-center title-text">Rankings</p>
        </div>

        <div class="content">
          <div class="ranking">
            <p class="ranking-title">Type</p>
            <ul>
              <li v-for="type in rankings.types" :key="type.title"
                  :class="{active: type.selected}">
                {{ type.title }}
              </li>
            </ul>
          </div>
            
          <div class="ranking">
            <p class="ranking-title">Time</p>
            <ul>
              <li v-for="time in rankings.times" :key="time.title"
                  :class="{active: time.selected}">
                {{ time.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="overlay"></div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const rankings = inject("rankings");

    return {
      rankings
    }
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

  .rankings-modal {
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

  .header p:before {
    position: absolute;
    content: "";
    right: 100%;
    top: 50%;
    width: 50vw;
    border-bottom: 1px solid #EBE5DE;
    margin-right: 1.2rem;
  }

  .header p:after {
    position: absolute;
    content: "";
    left: 100%;
    top: 50%;
    width: 50vw;
    border-bottom: 1px solid #EBE5DE;
    margin-left: 1.2rem;
  }

  .content {
    overflow: auto;
  }

  .content,
  .content ul {
    display: flex;
    flex-wrap: wrap;
  }

  .content li {
    border: 1px solid #EBE5DE; 
    padding: .3rem 1rem;
    margin-right: 1rem;
    margin-bottom: .8rem;
    transition: all .3s;
    cursor: pointer;
  }

  .content li.active {
    border: 1px solid #3c89b6;
    background-color: #3c89b6;
    color: #EBE5DE;
  }

  .content li.active:hover {
    border: 1px solid #3c89b6;
    background-color: #3c89b6;
    color: #EBE5DE;
  }

  .content li:hover {
    color:#70AED2;
    border: 1px solid #70AED2;
  }

  .ranking {
    margin-bottom: 1rem;
  }

  .ranking:first-child {
    margin-right: 3rem;
  }

  .ranking-title {
    font-weight: bold;
    margin-bottom: 1rem
  }

  .ranking-title i {
    padding-right: .3rem;
    --fa-secondary-opacity: .7;
  }
</style>