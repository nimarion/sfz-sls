<template>
  <content>
    <section
      id="hero-background"
      class="hero startpage is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-body startpage">
        <div style="max-width: 700px" class="container has-text-centered">
          <h1 id="title" class="title">
            Ein Universum voller Fragen und Antworten erforschen.
          </h1>
        </div>
      </div>
    </section>
    <NewsList />
    <Donation />
    <Contact class="is-hidden-mobile" />
    <Sponsors />
  </content>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NewsList from '~/components/NewsList.vue'
import Sponsors from '~/components/Sponsors.vue'
import Contact from '~/components/Contact.vue'
import Donation from '~/components/Donation.vue'

@Component({
  components: {
    NewsList,
    Sponsors,
    Contact,
    Donation
  }
})
export default class Startpgag extends Vue {}
</script>
