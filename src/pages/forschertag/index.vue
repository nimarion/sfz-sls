<template>
  <section id="hero-background" class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container box">
        <h1 class="title">Forschertag 2021</h1>
        <b-steps v-model="activeStep">
          <b-step-item :clickable="true" step="1" label="Vorwort">
            <h1 class="title has-text-centered">Vorwort</h1>
            <video
              class="video"
              src="https://sfz-sls.de/fshtg/video/vorwort.mp4"
              type="video/mp4"
              controls=""
            ></video>
          </b-step-item>

          <b-step-item :clickable="true" step="2" label="Hinweise">
            <h1 class="title has-text-centered">Hinweise</h1>

            <p style="text-align: left">
              Willkommen zum Online-Forschertag! Bevor es losgeht, hier ein paar
              Hinweise:
            </p>
            <p style="text-align: left">
              Die Darstellung der Experimente und Spiele ist optimal am PC oder
              am Laptop. Mit dem Tablet gelingt die Darstellung am besten, wenn
              du es hochkannt hältst und die Seite neu lädst.
            </p>
            <div style="height: 16rem">
              <lottie :options="lottieOptions" @animCreated="handleAnimation" />
            </div>
          </b-step-item>
          <b-step-item
            :clickable="true"
            step="3"
            label="Spiele &amp; Experimente"
          >
            <h1 class="title has-text-centered">Spiele &amp; Experimente</h1>
            <div class="container">
              <div class="section">
                <div class="row columns is-multiline">
                  <nuxt-link
                    v-for="item in experiments"
                    :key="item.name"
                    class="column is-4"
                    :to="'/experiment/' + item.name"
                  >
                    <div class="card large">
                      <div class="card-image is-16by9">
                        <figure class="image">
                          <b-image
                            :src-fallback="require('~/assets/background.jpg')"
                            ratio="16by9"
                            :src="item.image"
                            :alt="item.name"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <p class="title is-4 no-padding">
                              {{ item.name }}
                            </p>
                          </div>
                        </div>
                        <div v-if="!item.experiment" class="content">
                          {{
                            getPoints(item.name.toLowerCase()) == 0
                              ? "Noch nicht bearbeitet"
                              : getPoints(item.name.toLowerCase()) + " Punkte"
                          }}
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </b-step-item>
          <b-step-item :clickable="true" step="3" label="Urkunde">
            <h1 class="title has-text-centered">Urkunde</h1>
          </b-step-item>
        </b-steps>
        <br />
        <Sponsors />
      </div>
    </div>
  </section>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/lottie/laptop.json";
import data from "~/assets/forschertag.json";

export default {
  components: {
    lottie,
  },
  data() {
    return {
      activeStep: 0,
      experiments: data,
      anim: null,
      lottieOptions: { animationData: animationData.default },
    };
  },

  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    getPoints(name) {
      const points = localStorage.getItem(name);
      return points === null || points === "0" ? 0 : points;
    },
  },
};
</script>
