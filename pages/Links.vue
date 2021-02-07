<template>
  <link-list name="Links" :links="links" />
</template>
<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import LinkList from '~/components/LinkList.vue'
import { Link } from '~/interfaces/Links'

const main = namespace('main')
@Component({
  components: {
    LinkList
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
export default class Downloads extends Vue {
  @main.State
  public links!: Array<Link>;
}
</script>
