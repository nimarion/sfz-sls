<template>
  <section
    v-if="boardMembers.length > 0"
    style="content-visibility: auto"
    class="hero"
  >
    <div class="hero-body has-text-centered">
      <div class="content container box">
        <p class="title">
          Unser Vorstand
        </p>

        <div class="section">
          <div class="row columns is-multiline">
            <div
              v-for="item in boardMembers"
              :key="item.name"
              class="column is-4"
            >
              <div class="card large">
                <div class="card-content">
                  <div class="content">
                    <h4>{{ item.name }}</h4>
                    <p>{{ item.position }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      boardMembers: []
    }
  },
  async fetch () {
    this.boardMembers = await fetch(
      '/vorstand.json'
    ).then(res => res.json())
  }
})
</script>
