<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" to="/">
        <b-image
          :src="require('~/assets/NavbarLogo.webp')"
          :webp-fallback="require('~/assets/NavbarLogo.png')"
          alt="Schülerforschungszentrum Saarlouis"
        ></b-image>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item
        id="navbar-text"
        tag="nuxt-link"
        to="/forschung"
        >Forschung</b-navbar-item
      >
      <b-navbar-item
        id="navbar-text"
        tag="nuxt-link"
        to="/workshop"
        >Workshops</b-navbar-item
      >
      <b-navbar-item
        id="navbar-text"
        tag="nuxt-link"
        to="/e-learning"
        >E-Learning</b-navbar-item
      >
      <b-navbar-item
        id="navbar-text"
        tag="nuxt-link"
        to="/schülerlabore"
        >Schülerlabore</b-navbar-item
      >

      <b-navbar-dropdown class="is-hidden-mobile" label="Über uns">
        <b-navbar-item
          id="navbar-text"
          tag="nuxt-link"
          to="/förderverein"
          >Förderverein</b-navbar-item
        >

        <b-navbar-item
          id="navbar-text"
          tag="nuxt-link"
          to="/team"
          >Team</b-navbar-item
        >
      </b-navbar-dropdown>

      <div class="is-hidden-tablet">
        <b-navbar-item
          id="navbar-text"
          tag="nuxt-link"
          to="/förderverein"
          >Förderverein</b-navbar-item
        >

        <b-navbar-item
          id="navbar-text"
          tag="nuxt-link"
          to="/team"
          >Team</b-navbar-item
        >
      </div>

      <b-navbar-item href="https://www.kreis-saarlouis.de/">
        <b-image
          :src="require('~/assets/landkreis.png')"
          alt="Landkreis Saarlouis"
        ></b-image>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

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
