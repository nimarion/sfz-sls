<template>
  <section id="hero-background" class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="content container box" style="padding: unset; padding-top: 1.25rem">
        <h1 class="title">
          {{ name }}
        </h1>
        <br>
        <a
          v-for="item in links"
          :key="item.name"
          :href="item.link"
        >
          <b-button style="white-space: normal" size="is-medium" :icon-right="name.toLowerCase().includes('download') ? 'file-download' : ''">{{ item.name }}</b-button>
          <br>
          <br>
        </a>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class LinkList extends Vue {
  @Prop({ required: true }) readonly links!: Array<any>;
  @Prop({ required: true }) readonly name!: string;
}
</script>
