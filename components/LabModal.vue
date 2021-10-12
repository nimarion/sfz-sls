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
      default: undefined,
    },
    desc: {
      type: String,
      default: undefined,
    },
    website: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
  mounted() {
    if (this.website == null) {
      const element = document.getElementsByClassName("modal-card-body")[0];
      element.style.borderBottomLeftRadius = "5px";
      element.style.borderBottomRightRadius = "5px";
    }
  },
  methods: {
    closeModel() {
      this.$emit("onChange", "hi from child");
    },

    openWebsite() {
      window.open(this.website);
    },
  },
};
</script>
