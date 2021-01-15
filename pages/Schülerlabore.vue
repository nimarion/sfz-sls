<template>
  <content>
    <section
      id="hero-background"
      class="hero is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-header">
        <div class="container has-text-centered" style="top: 20px">
          <p id="title" class="title">
            Schülerlabore
          </p>
        </div>
        <br>
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
<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import LabModal from '~/components/LabModal.vue'
import CardList from '~/components/CardList.vue'
import { Lab } from '~/interfaces/Lab'

const main = namespace('main')
@Component({
  components: {
    LabModal,
    CardList
  },
  head () {
    return {
      title: 'Schülerlabore'
    }
  }
})
export default class WorkshopFilter extends Vue {
  clickedLab: Lab = null;
  isImageModalActive: boolean = false;

  @main.State
  public labs!: Array<Lab>;

  public openLabModal (item: Lab): void {
    this.clickedLab = item
    this.isImageModalActive = true
  }

  public closeEvent (): void {
    this.isImageModalActive = false
  }
}
</script>
