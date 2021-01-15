<template>
  <div style="height: 100%">
    <div v-if="iframeLoading" class="content">
      <b-tag type="is-info" size="is-large">
        Workshop wird geladen...
      </b-tag>
    </div>
    <div class="iframe-wrapper" style="height: 100%">
      <vue-friendly-iframe
        :src="url"
        :name="this.$route.params.name"
        @load="onLoad"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ELearning extends Vue {
      url: string = window.location.origin + '/workshops/' + encodeURIComponent(this.$route.params.name) + '/index.html?cache=' + new Date().getTime();
      iframeLoading: boolean = true;

      mounted () {
        // Add CSS rules
        document.documentElement.style.height = '100%';
        (document.getElementById('__nuxt') as HTMLElement).style.height = '100%';
        (document.getElementById('__layout') as HTMLElement).style.height = '100%';
        (document.getElementsByTagName('body')[0] as HTMLElement).style.height = '100%';
        (document.getElementById('app') as HTMLElement).style.height = '100%'
      }

      beforeDestroy () {
        // Delete CSS rules
        document.documentElement.style.height = '';
        (document.getElementById('__nuxt') as HTMLElement).style.height = '';
        (document.getElementById('__layout') as HTMLElement).style.height = '';
        (document.getElementsByTagName('body')[0] as HTMLElement).style.height = '';
        (document.getElementById('app') as HTMLElement).style.height = ''
      }

      public onLoad (): void {
        this.iframeLoading = false
      }
}
</script>

<style>
.iframe-wrapper {
  height: 1000px;
  overflow-y: hidden;
}
.vue-friendly-iframe {
  height: 100%;
  width: 100%;
}
iframe {
  height: 100%;
  width: 100%;
}
</style>
