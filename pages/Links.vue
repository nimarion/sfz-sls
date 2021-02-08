<template>
  <link-list name="Links" :links="links" />
</template>
<script lang="ts">
import Vue from 'vue'
import LinkList from '~/components/LinkList.vue'
export default Vue.extend({
  components: {
    LinkList
  },
  data () {
    return {
      links: []
    }
  },
  async fetch () {
    this.links = await fetch(
      '/links.json'
    ).then(res => res.json())
  },
  head () {
    return {
      title: 'Links & Downloads',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hier findest du interessante Links'
        }
      ]
    }
  }
})
</script>
