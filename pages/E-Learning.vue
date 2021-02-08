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
          :workshops="workshops"
          :is-elearning="true"
        />
      </div>
    </section>
  </content>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import WorkshopFilter from '~/components/WorkshopFilter.vue'
import { Workshop } from '~/interfaces/Workshop'

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
      ],
      script: [{
        innerHTML: JSON.stringify((this as any).jsonLd),
        type: 'application/ld+json'
      }]
    }
  }
})
export default class ELearning extends Vue {
  async asyncData (context: any) {
    const post = await fetch('/elearning.json')
    const jsonData = await post.json()
    const workshops: Array<Workshop> = jsonData
    const jsonLd: any = {
      '@context': 'http://schema.org',
      '@type': 'ItemList',
      numberOfItems: '0',
      itemListElement: []
    }
    let position = 1
    for (let i = 0; i < workshops.length; i++) {
      if (workshops[i].video == null) {
        const obj = {
          '@type': 'Course',
          position,
          url: 'https://sfz-sls.de/workshop/' + workshops[i].name,
          name: workshops[i].name,
          description: workshops[i].name,
          provider: {
            '@type': 'Organization',
            name: 'Schülerforschungszentrum Saarlouis',
            sameAs: 'https://sfz-sls.de/'
          }
        }
        jsonLd.itemListElement.push(obj)
      }
      position++
    }
    jsonLd.numberOfItems = await jsonLd.itemListElement.length
    return { jsonLd, workshops }
  }
}
</script>
