<template>
  <section>
    <b-sidebar type="is-light" :fullheight="true" v-model="open">
      <div class="p-1">
        <b-image :src="require('@/assets/undraw_select_option.svg')" />
        <!-- Klassenstufe -->
        <b-field label="Klassenstufe">
          <b-slider
            v-model="seletecClassLevel"
            :min="1"
            :max="12"
            :step="1"
            ticks
          ></b-slider>
        </b-field>
        <b-field>
          <p class="content">
            <b>Klasse</b>
            : {{ seletecClassLevel }}
          </p>
        </b-field>
        <!-- Dauer -->
        <b-field label="Dauer des Workshops" v-if="!isElearning">
          <b-slider
            v-model="selectedTimeRange"
            :min="1"
            :max="maxDuration"
            :step="1"
            ticks
          ></b-slider>
        </b-field>
        <b-field v-if="!isElearning">
          <p class="content">
            <b>Dauer</b>
            : {{ selectedTimeRange[0] }} - {{ selectedTimeRange[1] }} Stunden
          </p>
        </b-field>
        <!-- Gruppengröße -->
        <b-field label="Gruppengröße" v-if="!isElearning">
          <b-numberinput
            v-model="selectedParticipants"
            :min="0"
          ></b-numberinput>
        </b-field>

        <!-- Schulfach -->
        <b-field label="Fach">
          <b-dropdown
            v-model="selectedSchoolSubjects"
            multiple
            aria-role="list"
          >
            <b-button class="button is-primary" type="button" slot="trigger">
              <span>Ausgewählte ({{ selectedSchoolSubjects.length }})</span>
            </b-button>

            <b-dropdown-item
              v-for="item in schoolSubject"
              :key="item"
              :value="item"
              aria-role="listitem"
            >
              <span>{{ item }}</span>
            </b-dropdown-item>
          </b-dropdown>
        </b-field>
        <b-field v-if="selectedSchoolSubjects.length > 0">
          <p class="content">
            <b>Ausgewählte</b>
            : {{ selectedSchoolSubjects.join(", ") }}
          </p>
        </b-field>

        <!-- Schülerlabor -->
        <b-field label="Schülerlabor" v-if="labs.length > 0">
          <b-dropdown v-model="selectedLabs" multiple aria-role="list">
            <b-button class="button is-primary" type="button" slot="trigger">
              <span>Ausgewählte ({{ selectedLabs.length }})</span>
            </b-button>

            <b-dropdown-item
              v-for="item in labs"
              :key="item"
              :value="item"
              aria-role="listitem"
            >
              <span>{{ item }}</span>
            </b-dropdown-item>
          </b-dropdown>
        </b-field>
        <b-field v-if="selectedLabs.length > 0">
          <p class="content">
            <b>Ausgewählte</b>
            : {{ selectedLabs.join(", ") }}
          </p>
        </b-field>
      </div>
    </b-sidebar>

    <b-button @click="open = true">Workshops filtern</b-button>
    <div class="hero-body">
      <!--Cards-->
      <div class="container">
        <div class="section">
          <div
            class="row columns is-multiline"
            v-if="requestedWorkshops.length > 0"
          >
            <div
              @click="openWorkshopModal(item)"
              v-for="item in requestedWorkshops"
              :key="item.name"
              class="column is-4"
            >
              <div class="card large">
                <div class="card-image is-16by9">
                  <figure class="image">
                    <b-image
                      :src-fallback="require('@/assets/background.jpg')"
                      ratio="16by9"
                      :src="item.image"
                      :alt="item.name"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4 no-padding">{{ item.name }}</p>
                    </div>
                  </div>
                  <div class="content">
                    {{
                      item.description.split(" ").length >= 25
                        ? item.description
                            .split(" ")
                            .slice(0, 25)
                            .join(" ") + "..."
                        : item.description
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <workshop-modal
      v-if="clickedWorkshop != null && isImageModalActive"
      v-on:onChange="closeEvent"
      :img="clickedWorkshop.image"
      :name="clickedWorkshop.name"
      :desc="clickedWorkshop.description"
      :maxParticipants="clickedWorkshop.maxParticipants"
      :duration="clickedWorkshop.duration"
      :minClass="clickedWorkshop.minClass"
      :schoolSubject="clickedWorkshop.schoolSubject"
      :lab="clickedWorkshop.lab"
      :isElearning="isElearning"
      :video="clickedWorkshop.video"
    ></workshop-modal>
  </section>
</template>

<script>
import WorkshopModal from "../components/WorkshopModal.vue";

export default {
  components: {
    WorkshopModal
  },
  props: ["workshops", "isElearning"],
  data() {
    return {
      selectedSchoolSubjects: [],
      selectedLabs: [],
      seletecClassLevel: 12,
      selectedParticipants: 0,
      selectedTimeRange: [1, 1],
      open: false,
      requestedWorkshops: [],
      schoolSubject: [],
      labs: [],
      isImageModalActive: false,
      clickedWorkshop: null,
      maxDuration: 1
    };
  },
  methods: {
    loadFilterProps() {
      for (var i = 0; i < this.workshops.length; i++) {
        for (var z = 0; z < this.workshops[i].schoolSubject.length; z++) {
          const subject = this.workshops[i].schoolSubject[z];
          const found = this.schoolSubject.includes(subject);
          if (!found && subject != null) {
            this.schoolSubject.push(subject);
          }
        }
        if (
          !this.labs.includes(this.workshops[i].lab) &&
          this.workshops[i].lab != null
        ) {
          this.labs.push(this.workshops[i].lab);
        }
        if (this.workshops[i].duration > this.maxDuration) {
          this.maxDuration = this.workshops[i].duration;
        }
      }
    },
    loadRequestedWorkshops() {
      this.requestedWorkshops.length = 0;
      for (let i = 0; i < this.workshops.length; i++) {
        let workshop = this.workshops[i];
        let isSubject;
        let isClassLevel;
        let isDuration;
        let isParticipants;
        let isLab;

        if (this.selectedSchoolSubjects.length > 0) {
          for (var z = 0; z < this.selectedSchoolSubjects.length; z++) {
            if (
              workshop.schoolSubject.includes(this.selectedSchoolSubjects[z])
            ) {
              isSubject = true;
              break;
            }
          }
        } else {
          isSubject = true;
        }

        if (this.selectedLabs.length > 0) {
          for (var y = 0; y < this.selectedLabs.length; y++) {
            if (workshop.lab == this.selectedLabs[y]) {
              isLab = true;
              break;
            }
          }
        } else {
          isLab = true;
        }

        if (workshop.minClass <= this.seletecClassLevel) {
          isClassLevel = true;
        }
        if (this.selectedTimeRange[0] == 1 && this.selectedTimeRange[1] == 1) {
          isDuration = true;
        } else {
          if (
            (workshop.duration - this.selectedTimeRange[0]) *
              (workshop.duration - this.selectedTimeRange[1]) <=
            0
          ) {
            isDuration = true;
          }
        }

        if (this.isElearning) {
          isDuration = true;
        }

        if (
          this.selectedParticipants <= workshop.maxParticipants ||
          this.selectedParticipants == 0 ||
          workshop.maxParticipants == 0
        ) {
          isParticipants = true;
        }

        if (
          isSubject &&
          isClassLevel &&
          isDuration &&
          isParticipants &&
          isLab
        ) {
          this.requestedWorkshops.push(workshop);
        }
      }
    },
    openWorkshopModal(item) {
      this.clickedWorkshop = item;
      this.isImageModalActive = true;
    },
    closeEvent() {
      this.isImageModalActive = false;
    }
  },
  watch: {
    workshops: function(newValue, oldValue) {
      if (oldValue.length == 0 && newValue.length != 0) {
        this.requestedWorkshops.push.apply(
          this.requestedWorkshops,
          this.workshops
        );
        this.loadFilterProps();
      }
    },
    selectedSchoolSubjects: function() {
      this.loadRequestedWorkshops();
    },
    seletecClassLevel: function() {
      this.loadRequestedWorkshops();
    },
    selectedTimeRange: function() {
      this.loadRequestedWorkshops();
    },
    selectedParticipants: function() {
      this.loadRequestedWorkshops();
    },
    selectedLabs: function() {
      this.loadRequestedWorkshops();
    }
  }
};
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
