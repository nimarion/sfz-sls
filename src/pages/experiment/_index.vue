<template>
  <section>
    <p class="title">
      {{ currentExperiment.name }}
    </p>
    <b-steps v-model="activeStep">
      <b-step-item
        v-if="currentExperiment.experiment"
        step="1"
        label="Materialien"
        :clickable="true"
      >
        <div style="text-align: left">
          <div class="columns is-vcentered">
            <div class="column is-offset-1">
              <p class="title">Du brauchst:</p>
              <li v-for="item in currentExperiment.materials" :key="item">
                {{ item }}
              </li>
            </div>
            <div class="column is-two-thirds">
              <video
                :src="currentExperiment.materialVideo"
                :poster="require('~/assets/background.jpg')"
                type="video/mp4"
                controls
              />
            </div>
          </div>
        </div>
      </b-step-item>

      <b-step-item
        :step="currentExperiment.experiment ? 2 : 1"
        label="Durchführung"
        :clickable="true"
      >
        <div style="text-align: left">
          <div class="columns is-vcentered">
            <div class="column is-offset-1">
              <p class="title">Durchführung:</p>
              <li v-for="item in currentExperiment.implementation" :key="item">
                {{ item }}
              </li>
            </div>
            <div class="column is-two-thirds">
              <video
                :src="currentExperiment.implementationVideo"
                :poster="require('~/assets/background.jpg')"
                type="video/mp4"
                controls
              />
            </div>
          </div>
        </div>
      </b-step-item>

      <b-step-item
        v-if="!currentExperiment.experiment"
        :step="2"
        label="Spiel"
        :clickable="true"
      >
        <component :is="currentExperiment.component" />
      </b-step-item>

      <b-step-item
        :visible="currentExperiment.experiment"
        :step="3"
        label="Ergebnis"
        :clickable="true"
        disabled
      >
        <div>
          <div class="columns">
            <div
              v-for="item in currentExperiment.answers"
              :key="item.answer"
              class="column"
              @click="setAnswer(item)"
            >
              <img :src="item.img" width="200px" />
              <p>{{ item.answer }}</p>
            </div>
          </div>
          <b-button type="is-primary" @click="checkAnswer">
            Antwort prüfen
          </b-button>
        </div>
      </b-step-item>
      <b-step-item
        v-if="currentExperiment.experiment"
        :step="4"
        label="Auflösung"
        :clickable="true"
        disabled
      >
        <div class="columns is-vcentered">
          <div class="column is-three-fifths is-offset-one-fifth">
            <video
              :src="currentExperiment.solutionVideo"
              :poster="require('~/assets/background.jpg')"
              type="video/mp4"
              controls
            />
          </div>
        </div>
      </b-step-item>
    </b-steps>
  </section>
</template>
<script>
import { SnackbarProgrammatic as Snackbar } from "buefy";
import data from "~/assets/experiments.json";
import WebGame from "~/components/experiments/WebGame.vue";
import ChimpGame from "~/components/experiments/ChimpGame.vue";
import PuzzleGame from "~/components/experiments/PuzzleGame.vue";
import SolitaireGame from "~/components/experiments/SolitaireGame.vue";
import WageGame from "~/components/experiments/WageGame.vue";
export default {
  components: {
    WebGame,
    ChimpGame,
    PuzzleGame,
    SolitaireGame,
    WageGame,
  },
  data() {
    return {
      activeStep: 0,
      experiments: data,
      clickedAnswer: null,
      currentExperiment: data.filter(
        (item) =>
          item.name.toLowerCase() === this.$route.params.index.toLowerCase()
      )[0],
    };
  },
  created() {
    if (parseInt(this.$route.params.index) >= this.experiments.length) {
      this.$nuxt.error({
        message: "",
        statusCode: 404,
      });
    }
  },
  methods: {
    setAnswer(item) {
      this.clickedAnswer = item;
    },
    checkAnswer() {
      if (this.clickedAnswer == null) {
        Snackbar.open({
          position: "is-top",
          message: "Du hast noch keine Antwort ausgewählt",
        });
      } else {
        Snackbar.open({
          position: "is-top",
          message: this.clickedAnswer.solution
            ? "Die Antwort ist richtig!"
            : "Die Antwort ist falsch",
        });
      }
    },
  },
};
</script>
