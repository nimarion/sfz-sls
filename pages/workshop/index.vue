<template>
  <content>
    <section
      id="hero-background"
      class="hero is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-header">
        <div class="container has-text-centered" style="top: 20px">
          <p id="title" class="title">Workshops für Schulklassen und -kurse</p>
        </div>
        <br />
        <br />
        <WorkshopFilter :workshops="workshops" :is-elearning="false" />
      </div>
    </section>
  </content>
</template>
<script>
export default {
  data() {
    return {
      workshops: [],
    };
  },
  async fetch() {
    this.workshops = await fetch("/workshops.json").then((res) => res.json());
  },
  head() {
    return {
      title: "Workshops",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Unser Workshop Angebot am Schülerforschungszentrum Saarlouis",
        },
      ],
    };
  },
};
</script>
