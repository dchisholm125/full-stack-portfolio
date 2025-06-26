<script setup lang="ts">
// No custom logic needed for static content
</script>

<template>
  <div class="gradient-background">
    <nav class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
          <strong>Derek Chisholm - Full Stack Engineer</strong>
        </NuxtLink>
      </div>
    </nav>
    <section id="title" class="gradient-background">
      <div class="container col-xxl-8 px-4 pt-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 pt-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="/tindog/images/iphone.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" height="200" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Meet new and interesting dogs nearby.</h1>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-light btn-lg px-4 me-md-2">
                <!-- Apple SVG -->
                Download
              </button>
              <button type="button" class="btn btn-outline-light btn-lg px-4">
                <!-- Google Play SVG -->
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div class="row g-4 py-5 m-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <!-- Check2-circle SVG -->
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">Easy to use.</h3>
            <p>So easy to use, even your dog could do it.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <!-- Mortarboard SVG -->
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">Elite Clientele.</h3>
            <p>We have all the dogs, the greatest dogs.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <!-- Arrow-through-heart SVG -->
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">Guaranteed to work.</h3>
            <p>Find the love of your dog's life or your money back.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonial">
      <div class="p-5 text-center bg-body-tertiary">
        <div class="row-12 m-5"> 
          <h3>"I no longer have to sniff other dogs for love. I've found the perfect Corgi for me on TinDog. Woof."</h3>
        </div>
        <div class="row-12 mb-5">
          <img class="profile-img mb-2" src="/tindog/images/dog-img.jpg">
          <p><b>Pebbles, New York</b></p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-12">
            <img src="/tindog/images/techcrunch.png" alt="techcrunch" height="30">
          </div>
          <div class="col-lg-3 col-sm-12">
            <img src="/tindog/images/mashable.png" alt="mashable" height="30">
          </div>
          <div class="col-lg-3 col-sm-12">
            <img src="/tindog/images/bizinsider.png" alt="bizinsider" height="30">
          </div>
          <div class="col-lg-3 col-sm-12">
            <img src="/tindog/images/tnw.png" alt="tnw" height="30">
          </div>
        </div>
      </div>
    </section>
    <section id="pricing">
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h2 class="display-4 fw-normal">A Plan for Every Dog's Needs</h2>
        <p class="fs-5 text-body-secondary">Simple and affordable price plans for you and your dog.</p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center m-5">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Chihuahua</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>5 Matches Per Day</li>
                <li>10 Messages Per Day</li>
                <li>Unlimited App Usage</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Labrador</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Unlimited Matches</li>
                <li>Unlimited Messages</li>
                <li>Unlimited App Usage</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-dark">Get started</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-dark">
            <div class="card-header py-3 text-bg-dark border-dark">
              <h4 class="my-0 fw-normal">Mastiff</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Priority Listing</li>
                <li>Unlimited Matches & Messages</li>
                <li>Unlimited App Usage</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-dark">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 border-top gradient-background">
        <div class="col mb-3">
          <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <!-- Bootstrap SVG -->
          </a>
          <p class="text-body-secondary">© TinDog 2023</p>
        </div>
        <div class="col mb-3"></div>
        <div class="col mb-3">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div class="col mb-3">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div class="col mb-3">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
      </footer>
    </section>
    <!-- ...rest of TinDog landing page content goes here... -->
  </div>
</template>

<style scoped>
.gradient-background {
  background: linear-gradient(300deg, #00bfff, #ff4c68, #ef8172);
  animation: gradient-animation 18s ease infinite;
}
.container {
  display: flex;
}
.img1 {
  padding-top: 5rem;
}
.divider-light {
  background: #F0F0F0;
}
.profile-img {
  border-radius: 50%;
  height: 100px;
}
.ttm {
  min-height: auto;
}
</style>
