<template>
  <div class="d-none d-lg-flex justify-content-center align-items-center">
    
    <div class="rankings second-ranking">
      <div class="position-relative wrapper">
        <div class="position-relative overflow-hidden">
          <div class="front">
            <img src="@/assets/images/novel-list/01.png">
            <div class="overlay"></div>
          </div>
          <div class="d-flex justify-content-center align-items-center back">
            <div class="content">
              <table>
                <tr>
                  <td>Title</td>
                  <td>Solo Leveling</td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td>ChuGong</td>
                </tr>
                <tr>
                  <td>Views</td>
                  <td>50,000</td>
                </tr>
                <tr>
                  <td>Chapters</td>
                  <td>520</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>Ongoing</td>
                </tr>
                <tr>
                </tr>
              </table>
              
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
          <div class="d-flex justify-content-center align-items-center back">
            <div class="content">
              <table>
                <tr>
                  <td>Title</td>
                  <td>Solo Leveling</td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td>ChuGong</td>
                </tr>
                <tr>
                  <td>Views</td>
                  <td>50,000</td>
                </tr>
                <tr>
                  <td>Chapters</td>
                  <td>520</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>Ongoing</td>
                </tr>
                <tr>
                </tr>
              </table>
              
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
          <div class="d-flex justify-content-center align-items-center back">
            <div class="content">
              <table>
                <tr>
                  <td>Title</td>
                  <td>Solo Leveling</td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td>ChuGong</td>
                </tr>
                <tr>
                  <td>Views</td>
                  <td>50,000</td>
                </tr>
                <tr>
                  <td>Chapters</td>
                  <td>520</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>Ongoing</td>
                </tr>
                <tr>
                </tr>
              </table>
              
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
  margin-right: 3rem;
}

.rankings:last-child {
  margin-right: 0;
}

.second-ranking img,
.third-ranking img {
  width: 20vw;
}

.first-ranking img {
  width: 22vw;
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
  padding: .5rem;
}

.back .content table {
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
  
}

.back .content .read-btn {
  display: inline-block;
  padding: .5rem 1rem;
  border: 1px solid #EBE5DE;
  transition: border .3s, color .3s;
  cursor: pointer;
}

.back .content .read-btn:hover {
  border: 1px solid #70AED2;
  color: #70AED2;
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