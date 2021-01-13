<template>
  <div class="hero is-fullheight-with-navbar">
    <div class="hero-body container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-narrow">
          <div class="container">
            <h1 class="title is-size-1">404</h1>
            <h1 class="subtitle">
              Die Seite existiert nicht
            </h1>
          </div>
        </div>
        <div class="column is-6">
          <b-image
            :src="require('~/assets/undraw_processing.svg')"
            width="550"
          ></b-image>
        </div>
      </div>
    </div>
  </div>
</template>
