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

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    website: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      isActive: true
    }
  },
  mounted () {
    // Add CSS rules
    if (this.website == null) {
      document.getElementsByClassName(
        'modal-card-body'
      )[0].style.borderBottomLeftRadius = '5px'
      document.getElementsByClassName(
        'modal-card-body'
      )[0].style.borderBottomRightRadius = '5px'
    }
  },
  methods: {
    closeModel () {
      this.$emit('onChange', 'hi from child')
    },
    openWebsite () {
      window.open(this.website)
    }
  }
}
</script>
