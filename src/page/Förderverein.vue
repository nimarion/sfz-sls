<template>
  <div>
    <section id="hero-background" class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="content container box">
          <h1 class="title">Förderverein</h1>
          <p>
            Unsere Angebote sollen generell kostenlos für Schüler sein. Deshalb
            haben wir einen Förderverein eingerichtet, der durch die eingehenden
            Spenden und Mitgliedsbeiträge unsere Arbeit finanziert. Wenn euch
            unsere Arbeit am Herzen liegt, freuen wir uns sehr, wenn ihr
            Mitglied im Förderverein werdet oder uns durch eure Spenden
            unterstützt! Unsere Satzungen und die Beitragsordnung kann gerne
            eingesehen werden.
          </p>
          <h2>
            <strong>Bankverbindung</strong>
          </h2>
          <p>
            <br />Vereinigte Volksbank eG, Kaiser-Friedrich-Ring 7-13, 66740
            Saarlouis <br />Kontonummer: 3212740003, Bankleitzahl: 591 90 200
            <br />IBAN: DE15 5909 2000 3212 7400 03 <br />BIC: GENODE51SB2
          </p>

          <br />

          <a class="button" href="Beitragsordnung.pdf">Beitragsordnung</a>
          <a class="button" href="Satzung.pdf">Satzung</a>
          <a class="button" href="Mitgliedsantrag.pdf">Mitgliedsantrag</a>
        </div>
      </div>
    </section>
    <Board />
    <Donation />
    <Sponsors />
  </div>
</template>

<script>
import Sponsors from "../components/Sponsors.vue";
import Donation from "../components/Donation.vue";
import Board from "../components/Board.vue";

export default {
  components: {
    Sponsors,
    Donation,
    Board
  },
  metaInfo() {
    return {
      title: "SFZ - Förderverein",
      meta: [
        {
          property: "og:title",
          content: "Schülerforschungszentrum - Förderverein"
        },
        {
          property: "og:site_name",
          content: "Schülerforschungszentrum Saarlouis"
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: window.location.href },
        { name: "robots", content: "index,follow" }
      ]
    };
  }
};
</script>

<style scoped>
.features {
  padding: 5rem 0;
}

.card-content .content {
  font-size: 14px;
  margin: 1rem 1rem;
}
.card-content .content h4 {
  font-size: 16px;
  font-weight: 700;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
  height: 100%;
}

.is-shady {
  animation: flyintoright 0.4s backwards;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
  border-radius: 4px;
  display: inline-block;
  margin: 10px;
  position: relative;
  transition: all 0.2s ease-in-out;
}
.is-shady:hover {
  box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);
}
</style>
