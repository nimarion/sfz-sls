<template>
  <b-modal
    v-model="isActive"
    trap-focus
    has-modal-card
    scroll="keep"
    @close="closeModel"
  >
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ name }}
        </p>
      </header>
      <section class="modal-card-body" style="text-align: left">
        {{ desc }}
      </section>
      <footer v-if="website != null" class="modal-card-foot">
        <div class="container">
          <b-button
            v-if="website != null"
            type="is-success"
            outlined
            @click="openWebsite"
          >
            Website {{ name }}
          </b-button>
        </div>
      </footer>
    </div>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class LabModal extends Vue {
  @Prop({ required: true }) readonly name!: string;
  @Prop({ required: true }) readonly desc!: string;
  @Prop({ required: false }) readonly website!: string;

  isActive: boolean = true;

  mounted () {
    if (this.website == null) {
      const element = document.getElementsByClassName(
        'modal-card-body'
      )[0] as HTMLElement
      element.style.borderBottomLeftRadius = '5px'
      element.style.borderBottomRightRadius = '5px'
    }
  }

  public closeModel (): void {
    this.$emit('onChange', 'hi from child')
  }

  public openWebsite (): void {
    window.open(this.website)
  }
}
</script>
