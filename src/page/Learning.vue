<template>
  <content>
    <section
      id="hero-background"
      class="hero is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-header">
        <div class="container has-text-centered" style="top: 20px">
          <p id="title" class="title">E-Learning</p>
        </div>
        <br />
        <br />
        <WorkshopFilter
          :workshops="this.$store.getters.elearning"
          :isElearning="true"
        />
      </div>
    </section>
  </content>
</template>
<script>
import WorkshopFilter from "../components/WorkshopFilter.vue";

export default {
  components: {
    WorkshopFilter
  },
  metaInfo() {
    return {
      title: "SFZ - E-Learning",
      meta: [
        {
          property: "og:title",
          content: "Schülerforschungszentrum - E-Learning"
        },
        {
          property: "og:site_name",
          content: "Schülerforschungszentrum Saarlouis"
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: window.location.href },
        { name: "robots", content: "index,follow" }
      ]
    };
  }
};
</script>
