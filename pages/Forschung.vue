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
          :data="projects"
          @openModal="openLabModal"
        />
      </div>
      <lab-modal
        v-if="clickedLab != null && isImageModalActive"
        :name="clickedLab.title"
        :desc="clickedLab.description"
        @onChange="closeEvent"
      />
    </section>
  </content>
</template>
<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import LabModal from '~/components/LabModal.vue'
import CardList from '~/components/CardList.vue'
import { Project } from '~/interfaces/Project'

const main = namespace('main')
@Component({
  components: {
    LabModal,
    CardList
  },
  head () {
    return {
      title: 'Schülerprojekte',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Projekte von Schülerinnen und Schülern am Schülerforschungszentrum Saarlouis'
        }
      ]
    }
  }
})
export default class Forschung extends Vue {
  clickedLab: Project = null;
  isImageModalActive: boolean = false;

  @main.State
  public projects!: Array<Project>;

  public openLabModal (item: Project): void {
    this.clickedLab = item
    this.isImageModalActive = true
  }

  public closeEvent (): void {
    this.isImageModalActive = false
  }
}
</script>
