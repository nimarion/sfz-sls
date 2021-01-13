<template>
  <div style="height: 100%">
    <div class="content" v-if="iframeLoading">
      <b-tag type="is-info" size="is-large">Workshop wird geladen...</b-tag>
    </div>
    <div class="iframe-wrapper" style="height: 100%">
      <vue-friendly-iframe
        :src="url"
        :name="this.$route.params.name"
        @load="onLoad"
      ></vue-friendly-iframe>
    </div>
  </div>
</template>
<script>
import VueFriendlyIframe from "vue-friendly-iframe";

export default {
  data() {
    return {
      url:
        window.location.origin +
        "/workshops/" +
        encodeURIComponent(this.$route.params.name) +
        "/index.html?cache=" +
        new Date().getTime(),
      iframeLoading: true
    };
  },
  methods: {
    onLoad() {
      this.iframeLoading = false;
    }
  },
  mounted() {
    // Add CSS rules
    document.documentElement.style.height = "100%";
    document.getElementById("__nuxt").style.height = "100%";
    document.getElementById("__layout").style.height = "100%";
    document.getElementsByTagName("body")[0].style.height = "100%";
    document.getElementById("app").style.height = "100%";
  },
  beforeDestroy() {
    //Delete CSS rules
    document.documentElement.style.height = "";
    document.getElementById("__nuxt").style.height = "";
    document.getElementById("__layout").style.height = "";
    document.getElementsByTagName("body")[0].style.height = "";
    document.getElementById("app").style.height = "";
  }
};
</script>

<style>
.iframe-wrapper {
  height: 1000px;
  overflow-y: hidden;
}
.vue-friendly-iframe {
  height: 100%;
  width: 100%;
}
iframe {
  height: 100%;
  width: 100%;
}
</style>