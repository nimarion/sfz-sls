<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" to="/">
        <b-image
          :src="require('~/assets/NavbarLogo.webp')"
          :webp-fallback="require('~/assets/NavbarLogo.png')"
          alt="Schülerforschungszentrum Saarlouis"
        />
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="nuxt-link" to="/forschung"> Forschung </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/workshop"> Workshops </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/e-learning">
        E-Learning
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/schülerlabore">
        Schülerlabore
      </b-navbar-item>
      <b-navbar-item
        v-if="getRemainingTime() < 0"
        tag="nuxt-link"
        to="/forschertag"
      >
        Forschertag
      </b-navbar-item>

      <!--<b-navbar-dropdown class="is-hidden-mobile" label="Forschertag">
        <b-navbar-item>
          <strong>Experimente</strong>
        </b-navbar-item>
        <b-navbar-item
          v-for="item in getExperiments"
          :key="item.name"
          tag="nuxt-link"
          :to="'/experiment/' + item.name"
        >
          {{ item.name }}
        </b-navbar-item>
        <b-navbar-item>
          <strong>Spiele</strong>
        </b-navbar-item>
        <b-navbar-item
          v-for="item in getGames"
          :key="item.name"
          tag="nuxt-link"
          :to="'/experiment/' + item.name"
        >
          {{ item.name }}
        </b-navbar-item>
      </b-navbar-dropdown>-->

      <b-navbar-dropdown class="is-hidden-mobile" label="Mehr">
        <b-navbar-item tag="nuxt-link" to="/förderverein">
          Förderverein
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/team"> Team </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/links">
          Links &#38; Downloads
        </b-navbar-item>
      </b-navbar-dropdown>

      <div class="is-hidden-tablet">
        <b-navbar-item tag="nuxt-link" to="/förderverein">
          Förderverein
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/team"> Team </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/links">
          Links &#38; Downloads
        </b-navbar-item>
      </div>

      <b-navbar-item href="https://www.kreis-saarlouis.de/">
        <b-image
          :src="require('~/assets/landkreis.png')"
          alt="Landkreis Saarlouis"
        />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import data from "~/assets/experiments.json";

export default {
  data() {
    return {
      experiments: data,
      date: "Oct 29, 2021 18:00:00",
    };
  },
  computed: {
    getExperiments() {
      return data.filter((item) => item.experiment);
    },
    getGames() {
      return data.filter((item) => !item.experiment);
    },
  },
  methods: {
    getRemainingTime() {
      const countDownDate = new Date(this.date).getTime();
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      return countDownDate - now;
    },
  },
};
</script>

<style>
.navbar-item img {
  max-height: 4rem;
  width: auto;
}
.navbar-burger.burger {
  height: auto !important;
}

figure > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
