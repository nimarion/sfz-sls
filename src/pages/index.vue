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
          <b-button
            v-if="!countdownFinished"
            id="countdown"
            type="is-primary"
          ></b-button>
          <b-button
            v-if="countdownFinished"
            tag="router-link"
            to="/forschertag"
            type="is-primary"
          >
            Hier gehts zum Forschertag 2021!
          </b-button>
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
  data() {
    return {
      countdownFinished: false,
    };
  },
  head() {
    return {
      titleTemplate: null,
    };
  },
  created() {
    const countDownDate = new Date("Oct 29, 2021 18:00:00").getTime();
    const now = new Date().getTime();

    this.countdownFinished = countDownDate - now < 0;
  },
  mounted() {
    if (this.countdownFinished) {
      return;
    }
    const x = setInterval(function () {
      const countDownDate = new Date("Oct 29, 2021 18:00:00").getTime();
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(x);
        location.reload();
      } else {
        document.getElementById("countdown").innerHTML =
          "Noch " +
          days +
          " Tage " +
          hours +
          " Stunden " +
          minutes +
          " Minuten " +
          seconds +
          " Sekunden bis zum Forschertag 2021";
      }
    }, 1000);
  },
};
</script>
