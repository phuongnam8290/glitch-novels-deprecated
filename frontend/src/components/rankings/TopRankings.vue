<template>
  <div class="d-flex justify-content-center align-items-center">
    
    <div class="rankings second-ranking">
      <div class="position-relative wrapper">
        <div class="position-relative overflow-hidden">
          <div class="front">
            <img src="@/assets/images/novel-list/01.png">
            <div class="overlay"></div>
          </div>
          <div class="d-none d-lg-flex justify-content-center align-items-center back">
            <div class="content">

              <p class="title-text cursor-default title">
                Solo Leveling
              </p>              
              <div class="d-flex justify-content-center">
                <p class="read-btn">Read now</p>
              </div>

            </div>
          </div>
        </div>

        <div class="medal">
          <img src="@/assets/images/rankings/second.png">
        </div>
      </div>
    </div>

    <div class="rankings first-ranking">
      <div class="position-relative wrapper">
        <div class="position-relative overflow-hidden">
          <div class="front">
            <img src="@/assets/images/novel-list/01.png">
            <div class="overlay"></div>
          </div>
          <div class="d-none d-lg-flex  justify-content-center align-items-center back">
            <div class="content">
              
              <p class="title-text cursor-default title">
                Solo Leveling        
              </p>            
              <div class="d-flex justify-content-center">
                <p class="read-btn">Read now</p>
              </div>

            </div>
          </div>
        </div>

        <div class="medal">
          <img src="@/assets/images/rankings/first.png">
        </div>
      </div>
    </div>

    <div class="rankings third-ranking">
      <div class="position-relative wrapper">
        <div class="position-relative overflow-hidden">
          <div class="front">
            <img src="@/assets/images/novel-list/01.png">
            <div class="overlay"></div>
          </div>
          <div class="d-none d-lg-flex justify-content-center align-items-center back">
            <div class="content">

              <p class="title-text cursor-default title">
                Solo Leveling
              </p>
              <div class="d-flex justify-content-center">
                <p class="read-btn">Read now</p>
              </div>

            </div>
          </div>
        </div>

        <div class="medal">
          <img src="@/assets/images/rankings/third.png">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rankings {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

/* .rankings:last-child {
  margin-right: 0;
} */

.second-ranking img,
.third-ranking img {
  width: 15vw;
}

.first-ranking img {
  width: 18vw;
}

.front {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient( 215deg ,rgba(0, 0, 0, 0.5 ), 5%, rgba(255, 255, 255, 0));
}

.back {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: top .6s, opacity .4s;
}

.wrapper:hover .back {
  top: 0;
  opacity: 1;
}

.back .content {
  padding: 1rem;
}

.back .title {
  line-height: 1.5;
  text-align: center;

  /* Add elipsis to overflowed text */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  margin: 1rem;
}

.first-ranking .back .title {
  -webkit-line-clamp: 5;
}

.second-ranking .back .title,
.third-ranking .back .title {
  -webkit-line-clamp: 4;
}
/* .back .content table {
  margin-left: auto;
  margin-right: auto;
}

.back .content td {
  font-size: 1.2rem;
  padding-bottom: 1rem;
}

.back .content td:first-child {
  padding-right: 1rem;
  font-weight: bold;

}*/

.back .content .read-btn {
  display: inline-block;
  padding: .5rem 1rem;
  border: 1px solid var(--primary-color);
  transition: border .3s, color .3s;
  cursor: pointer;
}

.back .content .read-btn:hover {
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
}

.medal {
  position: absolute;
  top: -1rem;
  right: -1rem;
}

.first-ranking .medal img {
  width: 6vw;
}

.second-ranking .medal img,
.third-ranking .medal img {
  width: 5vw;
}
</style>