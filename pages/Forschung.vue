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
        <br>
        <card-list
          :data="this.$store.getters.projects"
          @openModal="openLabModal"
        />
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
import LabModal from '~/components/LabModal.vue'
import CardList from '~/components/CardList.vue'
export default {
  components: {
    LabModal,
    CardList
  },
  data () {
    return {
      clickedLab: null,
      isImageModalActive: false
    }
  },
  head: {
    title: 'Schülerprojekte',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Projekte von Schülerinnen und Schülern am Schülerforschungszentrum Saarlouis'
      }
    ]
  },
  methods: {
    openLabModal (item) {
      this.clickedLab = item
      this.isImageModalActive = true
    },
    closeEvent () {
      this.isImageModalActive = false
    }
  }
}
</script>
