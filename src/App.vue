<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Footer,
    Navbar
  }
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  text-align: center;
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (-o-min-device-pixel-ratio: 3/2),
  only screen and (min--moz-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }
}

#hero-background {
  background-image: url("./assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
#title {
  color: hsl(192, 17%, 99%);
}

/* Card start*/
.card {
  overflow: hidden;
  background: ghostwhite;
  color: var(--bg);
  border-radius: 10px;
  height: 100%;
  width: -webkit-fill-available;
}

.card.large {
  background-color: white;
  border-radius: 5px;
}

.hero.is-medium .hero-body {
  padding: 0;
}
.title.no-padding {
  margin-bottom: 0 !important;
}

.media-content {
  overflow-y: hidden;
}

.title {
  display: inline-block;
}

.modal-card-head,
.modal-card-foot {
  background-color: white;
  border-color: white;
}
</style>
