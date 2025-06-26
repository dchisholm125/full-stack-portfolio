<script setup lang="ts">
// No custom logic needed for static content
</script>

<template>
  <header class="navbar">
    <div class="navbar-menu">
      <div class="container" id="logo-splash">
        <img src="/greenspace/images/tree-icon.png" height="20" />
        <p>GreenSpace</p>
      </div>
      <div class="nav-tab">Home</div>
      <div class="nav-tab">Explore</div>
      <div class="nav-tab">News</div>
    </div>
  </header>
  <div class="container prof-header">
    <section class="container profile-row" id="user-prof">
      <div class="user-profile-displayed">
        <div class="profile-pic">
          <img src="/greenspace/images/farnsworth.png" height="200" />
        </div>
        <div class="flex-row profile-creds">
          <div>
            <h2 id="display-name">Dr. Hubert Farnsworth</h2>
          </div>
          <div>
            <h3 id="display-title">Professor of Science</h3>
          </div>
          <div>
            <h4 id="user-other-creds">Owner/Operator of Planet Express Delivery Company</h4>
          </div>
          <div>
            <h4 id="user-specialties">Propulsion. Quantum Physics. Basic addition/subtraction.</h4>
          </div>
        </div>
      </div>
    </section>
    <section class="flex-row profile-row user-website-info">
      <div>Website:</div>
      <div>Other Info:</div>
    </section>
  </div>
  <div class="container posting-row">
    <section class="user-posts" id="posts">
      <p id="posts-title">Current research:</p>
      <div class="post-card" v-for="i in 3" :key="i">
        <p class="post-date">9/27/2023</p>
        <p class="post-content"> Today we had a breakthrough in the realm of substantive duality. Mathematically, e = mc^2 applies...</p>
        <button class="post-edit">
          <!-- SVG for edit -->
        </button>
        <button class="post-delete">
          <!-- SVG for delete -->
        </button>
      </div>
    </section>
    <section class="user-awards" id="awards">
      <p id="award-title">Field Awards:</p>
      <div class="container award-card" v-for="i in 4" :key="i">
        <!-- SVG for award -->
        <p>Philosopher's Stone 2022 - Winner (Harry Potter award)</p>
      </div>
    </section>
  </div>
  <section class="user-recommends">
    <h2><p id="recommends-title">Other Top Minds (recommended by) </p></h2>
    <div class="container other-profiles">
      <div class="flex-row prof-card" v-for="i in 8" :key="i">
        <div class="recommend-card">
          <img class="recommend-img" src="/greenspace/images/dr-strange.png" />
          <p class="recommend-name">Dr. Strange</p>
          <p class="recommend-specialty">Professor of Multi-verse Manipulation</p>
        </div>
      </div>
    </div>
  </section>
  <section class="branch-hierarchy">
    <h2>Scientific Branches:</h2>
    <div class="flex-row hierarchy">
      <div class="container hier-row1">
        <div class="hier-card">
          <p>Multi-verse Theory</p>
          <img src="/greenspace/images/bracket.png" />
        </div>
      </div>
      <div class="container hier-row2">
        <div class="hier-card"><p>Real Matter</p><img src="/greenspace/images/bracket.png" /></div>
        <div class="hier-card"><p>Anti-matter</p><img src="/greenspace/images/bracket.png" /></div>
      </div>
      <div class="container hier-row3">
        <div class="hier-card"><p>Exotic Matter</p><img src="/greenspace/images/bracket.png" /></div>
        <div class="hier-card"><p>Ordinary Matter</p><img src="/greenspace/images/bracket.png" /></div>
        <div class="hier-card"><p>Dark Matter</p><img src="/greenspace/images/bracket.png" /></div>
      </div>
      <div class="container hier-row4">
        <div class="hier-card"><p>Black Holes</p><img src="/greenspace/images/bracket.png" /></div>
        <div class="hier-card"><p>Tornadoes</p><img src="/greenspace/images/bracket.png" /></div>
        <div class="hier-card"><p>Quasars</p><img src="/greenspace/images/bracket.png" /></div>
        <div class="hier-card"><p>Portals</p><img src="/greenspace/images/bracket.png" /></div>
      </div>
      <div class="container hier-row5">
        <div class="hier-card"><p>Gamma Radiation</p></div>
        <div class="hier-card"><p>Event Horizons</p></div>
        <div class="hier-card"><p>Supernovas</p></div>
        <div class="hier-card"><p>Space-Time</p></div>
        <div class="hier-card"><p>Big Bang Theory</p></div>
      </div>
    </div>
  </section>
  <footer>Footer</footer>
  <!-- ...rest of GreenSpace content goes here... -->
</template>

<style scoped>
html {
  background: rgba(219, 219, 219, 0.753);
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 5px;
}
.navbar-menu {
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 5px;
  gap: 25px;
}
.profile-row {
  border-radius: 5px;
  background-image: linear-gradient(175deg, #004225d8 0%, #79AC78 90%);
  color: #F5F5DC;
  box-shadow: 5px 5px 5px grey;
}
.flex-row {
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
}
.user-profile-displayed {
  display: flex;
  flex-grow: 4;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  gap: 5px;
}
.profile-pic img {
  border-radius: 50%;
}
</style>
