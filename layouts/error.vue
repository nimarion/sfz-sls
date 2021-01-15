<template>
  <div class="hero is-fullheight-with-navbar">
    <div class="hero-body container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-narrow">
          <div class="container">
            <h1 class="title is-size-1">
              404
            </h1>
            <h1 v-if="isWorkshop" class="subtitle">
              Der Workshop {{ workshopName }} existiert nicht
            </h1>
            <h1 v-else class="subtitle">
              {{
                isNews
                  ? error.message
                  : "Die Seite " + siteName + "existiert nicht"
              }}
            </h1>
          </div>
        </div>
        <div class="column is-6">
          <b-image
            :src="require('~/assets/undraw_processing.svg')"
            width="550"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { NuxtError } from '@nuxt/types'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Error extends Vue {
  @Prop({ required: true }) readonly error!: NuxtError;

  layout () {
    if (
      window.location.pathname.startsWith('/workshops/') &&
      window.location.pathname.split('/')[2].length > 0
    ) {
      return 'error-layout'
    }
    return 'default'
  }

  get isWorkshop (): boolean {
    return (
      window.location.pathname.startsWith('/workshops/') &&
      window.location.pathname.split('/')[2].length > 0
    )
  }

  get isNews (): boolean {
    return window.location.pathname.startsWith('/news/')
  }

  get workshopName (): string {
    return decodeURIComponent(window.location.pathname.split('/')[2])
  }

  get siteName (): string {
    return decodeURIComponent(window.location.pathname)
  }
}
</script>
