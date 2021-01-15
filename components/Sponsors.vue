<template>
  <section class="hero has-text-centered" style="content-visibility: auto">
    <div class="hero-body">
      <div class="container">
        <div v-if="sponsors.length > 0" class="columns">
          <div
            v-for="item in sponsors"
            :key="item.name"
            class="column"
          >
            <a :href="item.url">
              <b-image :src="item.img" :alt="item.name" ratio="3by1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import { Sponsor } from '~/interfaces/Sponsors'

const main = namespace('main')
@Component
export default class Sponsors extends Vue {
  @main.State
  public sponsors!: Array<Sponsor>;
}
</script>
