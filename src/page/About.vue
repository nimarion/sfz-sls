<template>
  <content>
    <section id="hero-background" class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p id="title" class="title">Unser Team</p>
        </div>
      </div>
      <Team />
    </section>
  </content>
</template>

<script>
import Team from "../components/Team.vue";

export default {
  components: {
    Team
  },
  metaInfo() {
    return {
      title: "SFZ - Über uns",
      meta: [
        {
          property: "og:title",
          content: "Schülerforschungszentrum - Über uns"
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
