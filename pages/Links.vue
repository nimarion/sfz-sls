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
  }
})
export default class Downloads extends Vue {
  @main.State
  public links!: Array<Link>;
}
</script>
