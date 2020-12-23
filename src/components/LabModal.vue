<template>
  <b-modal
    trap-focus
    v-model="isActive"
    has-modal-card
    scroll="keep"
    v-on:close="closeModel"
  >
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ name }}</p>
      </header>
      <section class="modal-card-body" style="text-align: left">
        {{ desc }}
      </section>
      <footer class="modal-card-foot" v-if="website != null">
        <div class="container">
          <b-button
            type="is-success"
            outlined
            v-if="website != null"
            @click="openWebsite"
            >Website {{ name }}</b-button
          >
        </div>
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ["name", "desc", "website"],
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    closeModel() {
      this.$emit("onChange", "hi from child");
    },
    openWebsite() {
      window.open(this.website);
    }
  },
  mounted() {
    // Add CSS rules
    if (this.website == null) {
      document.getElementsByClassName(
        "modal-card-body"
      )[0].style.borderBottomLeftRadius = "5px";
      document.getElementsByClassName(
        "modal-card-body"
      )[0].style.borderBottomRightRadius = "5px";
    }
  }
};
</script>
