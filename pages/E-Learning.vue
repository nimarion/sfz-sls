<template>
  <content>
    <section
      id="hero-background"
      class="hero is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-header">
        <div class="container has-text-centered" style="top: 20px">
          <p id="title" class="title">E-Learning</p>
        </div>
        <br />
        <br />
        <WorkshopFilter
          :workshops="this.$store.getters.elearning"
          :isElearning="true"
        />
      </div>
    </section>
  </content>
</template>
<script>
import WorkshopFilter from "~/components/WorkshopFilter.vue";
export default {
  components: {
    WorkshopFilter
  },
};
</script>