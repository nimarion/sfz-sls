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
        <b-taglist class="is-centered">
          <b-field grouped group-multiline>
            <div class="control">
              <b-taglist attached>
                <b-tag type="is-dark">Ab Klasse</b-tag>
                <b-tag type="is-info"> {{ minClass }} </b-tag>
              </b-taglist>
            </div>

            <div class="control">
              <b-taglist attached>
                <b-tag type="is-dark">Dauer</b-tag>
                <b-tag type="is-info">{{
                  duration == 1 ? duration + " Stunde" : duration + " Stunden"
                }}</b-tag>
              </b-taglist>
            </div>
            <div class="control" v-if="maxParticipants > 0 && !isElearning">
              <b-taglist attached>
                <b-tag type="is-dark">Maximale Teilnehmer</b-tag>
                <b-tag type="is-info"> {{ maxParticipants }} </b-tag>
              </b-taglist>
            </div>
          </b-field>
          <b-tag
            class="is-hidden-tablet is-centered"
            v-if="isElearning"
            type="is-warning"
            rounded
            >Workshops sind nicht für mobile Geräte optimiert!</b-tag
          >
        </b-taglist>
        <p v-if="video == null">{{ desc }}</p>
        <video v-else controls>
          <source :src="video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <footer class="modal-card-foot">
        <div class="content container" v-if="isElearning && video == null">
          <b-button type="is-primary" @click="startWorkshop" outlined
            >Workshop starten</b-button
          >

          <br />
          <br />
        </div>
        <div class="content container" v-if="!isElearning">
          <b-button
            class="container"
            type="is-primary"
            @click="openMailClient"
            outlined
            >Workshop buchen</b-button
          >
        </div>
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: [
    "name",
    "desc",
    "img",
    "duration",
    "schoolSubject",
    "minClass",
    "maxParticipants",
    "active",
    "isElearning",
    "lab",
    "video"
  ],
  data() {
    return {
      isActive: true,
      address: "info@sfz-sls.de",
      body:
        "Hallo!%20%0D%0AIch%20m%C3%B6chte%20gerne%20f%C3%BCr%20meine%20Klasse%20den%20" +
        this.name +
        "-Workshop%20buchen.%20%0D%0ADatum%3A%20%0D%0AZeit%3A%20%0D%0ASchule%3A%20%0D%0AKlasse%3A%20%0D%0AAnzahl%20der%20SuS%3A"
    };
  },
  methods: {
    closeModel() {
      this.$emit("onChange", "hi from child");
    },
    openMailClient() {
      window.open(
        "mailto:" +
          this.address +
          "?subject=" +
          this.name +
          "-Kurs&body=" +
          this.body
      );
    },
    startWorkshop() {
      this.$router.push({ path: "/workshop/" + this.name });
    }
  }
};
</script>

<style>
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
}
.animation-content {
  overflow-y: hidden;
}
</style>
