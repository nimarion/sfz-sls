<template>
  <content>
    <section
      id="hero-background"
      class="hero is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-header">
        <div class="container has-text-centered" style="top: 20px">
          <p id="title" class="title">
            Projekte von Schülerinnen und Schülern am Schülerforschungszentrum
            Saarlouis
          </p>
        </div>
        <br />
        <card-list :data="projects" @openModal="openLabModal" />
      </div>
      <lab-modal
        v-if="clickedLab != null && isImageModalActive"
        :name="clickedLab.title"
        :desc="clickedLab.description"
        :website="clickedLab.website"
        @onChange="closeEvent"
      />
    </section>
  </content>
</template>
<script>
export default {
  data() {
    return {
      projects: [],
      clickedLab: null,
      isImageModalActive: false,
    };
  },
  async fetch() {
    this.projects = await fetch("/forschung.json").then((res) => res.json());
  },
  head() {
    return {
      title: "Schülerprojekte",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Projekte von Schülerinnen und Schülern am Schülerforschungszentrum Saarlouis",
        },
      ],
    };
  },
  methods: {
    openLabModal(item) {
      this.clickedLab = item;
      this.isImageModalActive = true;
    },
    closeEvent() {
      this.isImageModalActive = false;
    },
  },
};
</script>
