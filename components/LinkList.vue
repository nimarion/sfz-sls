<template>
  <section id="hero-background" class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="content container box" style="padding: unset; padding-top: 1.25rem">
        <div v-for="item in links" :key="item.name">
          <h1 class="title">
            {{ item.name }}
          </h1>
          <br>
          <a
            v-for="link in item.list"
            :key="link.name"
            :href="link.link"
          >
            <b-button style="white-space: normal" size="is-medium" :icon-right="item.name.toLowerCase().includes('download') ? 'file-download' : ''">{{ link.name }}</b-button>
            <br>
            <br>
          </a>
        </div>
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
