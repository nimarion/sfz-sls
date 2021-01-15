<template>
  <content>
    <section
      id="hero-background"
      class="hero is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-header">
        <div class="container has-text-centered" style="top: 20px">
          <p id="title" class="title">
            E-Learning
          </p>
        </div>
        <br>
        <br>
        <WorkshopFilter
          :workshops="elearning"
          :is-elearning="true"
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
      title: 'E-Learning',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Das E-Learning Angebot des Schülerforschungszentrum Saarlouis'
        }
      ]
    }
  }
})
export default class ELearning extends Vue {
  @main.State
  public elearning!: Array<Workshop>;
}
</script>
