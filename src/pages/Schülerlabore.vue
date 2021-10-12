<template>
  <content>
    <section
      id="hero-background"
      class="hero is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-header">
        <div class="container has-text-centered" style="top: 20px">
          <p id="title" class="title">Schülerlabore</p>
        </div>
        <br />
        <card-list :data="labs" @openModal="openLabModal" />
      </div>
      <lab-modal
        v-if="clickedLab != null && isImageModalActive"
        :website="clickedLab.website"
        :name="clickedLab.title"
        :desc="clickedLab.description"
        @onChange="closeEvent"
      />
    </section>
  </content>
</template>
<script>
export default {
  data() {
    return {
      clickedLab: null,
      isImageModalActive: false,
      labs: [],
    };
  },
  async fetch() {
    this.labs = await fetch("/labs.json").then((res) => res.json());
  },
  head() {
    return {
      title: "Schülerlabore",
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
