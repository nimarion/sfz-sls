<template>
  <content>
    <section
      id="hero-background"
      class="hero is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-header">
        <div class="container has-text-centered" style="top: 20px">
          <p id="title" class="title">
            Workshops für Schulklassen und -kurse
          </p>
        </div>
        <br>
        <br>
        <WorkshopFilter
          :workshops="workshops"
          :is-elearning="false"
        />
      </div>
    </section>
  </content>
</template>
<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import WorkshopFilter from '~/components/WorkshopFilter.vue'
import { Workshop } from '~/interfaces/Workshop'

const main = namespace('main')
@Component({
  components: {
    WorkshopFilter
  },
  head () {
    return {
      title: 'Workshops',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Unser Workshop Angebot am Schülerforschungszentrum Saarlouis'
        }
      ]
    }
  }
})
export default class WorkshopPage extends Vue {
  @main.State
  public workshops!: Array<Workshop>;
}
</script>
