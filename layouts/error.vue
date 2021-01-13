<template>
  <div class="hero is-fullheight-with-navbar">
    <div class="hero-body container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-narrow">
          <div class="container">
            <h1 class="title is-size-1">404</h1>
            <h1 v-if="isWorkshop" class="subtitle">
              Der Workshop {{ workshopName }} existiert nicht
            </h1>
            <h1 v-else class="subtitle">
              {{
                isNews
                  ? this.error.message
                  : "Die Seite " + siteName + "existiert nicht"
              }}
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

<script>
export default {
  props: ["error"],
  layout(context) {
    if (
      window.location.pathname.startsWith("/workshops/") &&
      window.location.pathname.split("/")[2].length > 0
    ) {
      return "error-layout";
    }
    return "default";
  },
  computed: {
    isWorkshop() {
      if (
        window.location.pathname.startsWith("/workshops/") &&
        window.location.pathname.split("/")[2].length > 0
      ) {
        return true;
      }
      return false;
    },
    isNews() {
      return window.location.pathname.startsWith("/news/");
    },
    workshopName() {
      return decodeURIComponent(window.location.pathname.split("/")[2]);
    },
    siteName() {
      return decodeURIComponent(window.location.pathname);
    },
  },
};
</script>
