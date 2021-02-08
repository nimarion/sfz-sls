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
              <b-image :src="require('~/assets/sponsors/' + item.img)" :alt="item.name" ratio="3by1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import data from '~/assets/sponsors.json'

export default Vue.extend({
  data () {
    return {
      sponsors: data
    }
  }
})
</script>
