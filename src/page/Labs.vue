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
        <card-list v-on:openModal="openLabModal" :data="labs"></card-list>
      </div>
      <lab-modal
        v-if="clickedLab != null && isImageModalActive"
        v-on:onChange="closeEvent"
        :website="clickedLab.website"
        :name="clickedLab.title"
        :desc="clickedLab.description"
      ></lab-modal>
    </section>
  </content>
</template>
<script>
import LabModal from "../components/LabModal.vue";
import CardList from "../components/CardList.vue";

export default {
  components: {
    LabModal,
    CardList
  },
  data() {
    return {
      labs: [],
      clickedLab: null,
      isImageModalActive: false
    };
  },
  metaInfo() {
    return {
      title: "SFZ - Schülerlabore",
      meta: [
        {
          property: "og:title",
          content: "Schülerforschungszentrum - Schülerlabore"
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
  },
  methods: {
    openLabModal(item) {
      this.clickedLab = item;
      this.isImageModalActive = true;
    },
    closeEvent() {
      this.isImageModalActive = false;
    }
  },
  async created() {
    fetch("/labs.json?time=" + new Date().getTime())
      .then(response => response.json())
      .then(data => (this.labs = data));
  }
};
</script>
