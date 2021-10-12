<template>
  <div style="height: 100%">
    <div v-if="iframeLoading" class="content">
      <b-tag type="is-info" size="is-large"> Workshop wird geladen... </b-tag>
    </div>
    <div class="iframe-wrapper" style="height: 100%">
      <vue-friendly-iframe
        :src="url"
        :name="$route.params.name"
        @load="onLoad"
      />
    </div>
  </div>
</template>
<script>
export default {
  async asyncData(context) {
    const post = await fetch("/elearning.json");
    const jsonData = await post.json();
    const workshops = jsonData;
    const found = workshops.filter(
      (item) => item.name.toLowerCase() === context.params.name.toLowerCase()
    );
    if (found.length === 0) {
      context.error({ statusCode: 404 });
      return;
    }
    const description = found[0].description;
    return { description };
  },

  data() {
    return {
      url:
        window.location.origin +
        "/workshops/" +
        encodeURIComponent(this.$route.params.name) +
        "/index.html?cache=" +
        new Date().getTime(),
      iframeLoading: true,
    };
  },
  head() {
    return {
      title: this.$route.params.name,
    };
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
    // Delete CSS rules
    document.documentElement.style.height = "";
    document.getElementById("__nuxt").style.height = "";
    document.getElementById("__layout").style.height = "";
    document.getElementsByTagName("body")[0].style.height = "";
    document.getElementById("app").style.height = "";
  },
  methods: {
    onLoad() {
      this.iframeLoading = false;
    },
  },
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
