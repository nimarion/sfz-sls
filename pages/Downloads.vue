<template>
  <link-list name="Downloads" :links="downloads" />
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
  public downloads!: Array<Link>;
}
</script>
