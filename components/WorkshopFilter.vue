<template>
  <section>
    <b-sidebar v-model="open" type="is-light" :fullheight="true">
      <div class="p-1">
        <b-image :src="require('~/assets/undraw_select_option.svg')" />
        <!-- Klassenstufe -->
        <b-field label="Klassenstufe">
          <b-slider
            v-model="seletecClassLevel"
            :min="1"
            :max="12"
            :step="1"
            ticks
          />
        </b-field>
        <b-field>
          <p class="content">
            <b>Klasse</b>
            : {{ seletecClassLevel }}
          </p>
        </b-field>
        <!-- Dauer -->
        <b-field v-if="!isElearning" label="Dauer des Workshops">
          <b-slider
            v-model="selectedTimeRange"
            :min="1"
            :max="maxDuration"
            :step="1"
            ticks
          />
        </b-field>
        <b-field v-if="!isElearning">
          <p class="content">
            <b>Dauer</b>
            : {{ selectedTimeRange[0] }} - {{ selectedTimeRange[1] }} Stunden
          </p>
        </b-field>
        <!-- Gruppengröße -->
        <b-field v-if="!isElearning" label="Gruppengröße">
          <b-numberinput v-model="selectedParticipants" :min="0" />
        </b-field>

        <!-- Schulfach -->
        <b-field label="Fach">
          <b-dropdown
            v-model="selectedSchoolSubjects"
            multiple
            aria-role="list"
          >
            <b-button slot="trigger" class="button is-primary" type="button">
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
        <b-field v-if="!isElearning && labs.length > 0" label="Schülerlabor">
          <b-dropdown v-model="selectedLabs" multiple aria-role="list">
            <b-button slot="trigger" class="button is-primary" type="button">
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
        <b-field v-if="!isElearning && selectedLabs.length > 0">
          <p class="content">
            <b>Ausgewählte</b>
            : {{ selectedLabs.join(", ") }}
          </p>
        </b-field>
      </div>
    </b-sidebar>

    <b-button @click="open = true">
      Workshops filtern
    </b-button>
    <div class="hero-body">
      <!--Cards-->
      <div class="container">
        <div class="section">
          <div
            v-if="requestedWorkshops.length > 0"
            class="row columns is-multiline"
          >
            <div
              v-for="item in requestedWorkshops"
              :key="item.name"
              class="column is-4"
              :href="isElearning ? 'https://sfz-sls.de/workshop/' + item.name: ' '"
              @click="openWorkshopModal(item)"
            >
              <div class="card large">
                <div class="card-image is-16by9">
                  <figure class="image">
                    <b-image
                      :src-fallback="require('~/assets/background.jpg')"
                      ratio="16by9"
                      :src="item.image"
                      :alt="item.name"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4 no-padding">
                        {{ item.name }}
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    {{
                      item.description.split(" ").length >= 25
                        ? item.description.split(" ").slice(0, 25).join(" ") +
                          "..."
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
      :img="clickedWorkshop.image"
      :name="clickedWorkshop.name"
      :desc="clickedWorkshop.description"
      :max-participants="clickedWorkshop.maxParticipants"
      :duration="clickedWorkshop.duration"
      :min-class="clickedWorkshop.minClass"
      :school-subject="clickedWorkshop.schoolSubject"
      :lab="clickedWorkshop.lab"
      :is-elearning="isElearning"
      :video="clickedWorkshop.video"
      @onChange="closeEvent"
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import WorkshopModal from '../components/WorkshopModal.vue'
import { Workshop } from '~/interfaces/Workshop'

@Component({
  components: {
    WorkshopModal
  }
})
export default class WorkshopFilter extends Vue {
  @Prop({ required: true }) readonly workshops!: Array<Workshop>;
  @Prop({ required: true }) readonly isElearning!: Boolean;

  selectedSchoolSubjects: Array<string> = [];
  selectedLabs: Array<string> = [];
  seletecClassLevel: Number = 12;
  selectedParticipants: Number = 0;
  selectedTimeRange: Array<number> = [1, 1];
  open: boolean = false;
  requestedWorkshops: Array<Workshop> = [];
  schoolSubject: Array<string> = [];
  labs: Array<string> = [];
  isImageModalActive: Boolean = false;
  clickedWorkshop: Workshop = null;
  maxDuration: Number = 1;

  @Watch('workshops')
  workshopsChanged (newValue: Array<Workshop>, oldValue: Array<Workshop>) {
    if (oldValue.length === 0 && newValue.length !== 0) {
      this.requestedWorkshops.push.apply(
        this.requestedWorkshops,
        this.workshops
      )
      this.loadFilterProps()
    }
  }

  @Watch('selectedSchoolSubjects')
  selectedSchoolSubjectsChanged () {
    this.loadRequestedWorkshops()
  }

  @Watch('seletecClassLevel')
  seletecClassLevelChanged () {
    this.loadRequestedWorkshops()
  }

  @Watch('selectedTimeRange')
  selectedTimeRangeChanged () {
    this.loadRequestedWorkshops()
  }

  @Watch('selectedParticipants')
  selectedParticipantsChanged () {
    this.loadRequestedWorkshops()
  }

  @Watch('selectedLabs')
  selectedLabsChanged () {
    this.loadRequestedWorkshops()
  }

  created () {
    this.requestedWorkshops.push.apply(this.requestedWorkshops, this.workshops)
    this.loadFilterProps()
  }

  public loadFilterProps (): void {
    this.maxDuration = Math.max.apply(
      Math,
      this.workshops.map(function (item) {
        return item.duration
      })
    )
    this.schoolSubject = [
      ...new Set(this.workshops.flatMap(item => item.schoolSubject))
    ]
    this.labs = [...new Set(this.workshops.flatMap(item => item.lab))]
  }

  public loadRequestedWorkshops (): void {
    this.requestedWorkshops.length = 0
    for (let i = 0; i < this.workshops.length; i++) {
      const workshop = this.workshops[i]

      const isSubject =
        this.selectedSchoolSubjects.length === 0
          ? true
          : this.selectedSchoolSubjects.some(item =>
            workshop.schoolSubject.includes(item)
          )
      const isClassLevel = workshop.minClass <= this.seletecClassLevel

      const isParticipants =
        this.selectedParticipants <= workshop.maxParticipants ||
        this.selectedParticipants === 0 ||
        workshop.maxParticipants === 0

      const isLab =
        this.selectedLabs.length === 0
          ? true
          : this.selectedLabs.some(item => item === workshop.lab)

      const isDuration =
        this.isElearning ||
        (this.selectedTimeRange[0] === 1 && this.selectedTimeRange[1] === 1) ||
        (workshop.duration - this.selectedTimeRange[0]) *
          (workshop.duration - this.selectedTimeRange[1]) <=
          0

      if (isSubject && isClassLevel && isDuration && isParticipants && isLab) {
        this.requestedWorkshops.push(workshop)
      }
    }
  }

  public openWorkshopModal (item: Workshop): void {
    this.clickedWorkshop = item
    this.isImageModalActive = true
  }

  public closeEvent (): void {
    this.isImageModalActive = false
  }
}
</script>

<style>
.p-1 {
  padding: 1em !important;
}
</style>
