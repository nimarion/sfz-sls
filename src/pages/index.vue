<template>
  <content>
    <section
      id="hero-background"
      class="
        hero
        startpage
        is-medium is-bold is-fullheight-with-navbar is-spaced
      "
    >
      <div class="hero-body startpage">
        <div style="max-width: 700px" class="container has-text-centered">
          <h1 id="title" class="title">
            Ein Universum voller Fragen und Antworten erforschen.
          </h1>
        </div>
      </div>
    </section>
    <NewsList />
    <Donation />
    <Contact class="is-hidden-mobile" />
    <Sponsors />
  </content>
</template>
<script>
export default {
  head() {
    return {
      titleTemplate: null,
    };
  },
};
</script>
