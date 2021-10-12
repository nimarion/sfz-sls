<template>
  <content>
    <section id="hero-background" class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p id="title" class="title">Unser Team</p>
        </div>
      </div>
      <div class="container">
        <div class="section">
          <div v-if="employees.length > 0" class="row columns is-multiline">
            <div v-for="card in employees" :key="card.name" class="column is-4">
              <div class="card large">
                <div class="card-image is-1by1">
                  <b-image :src="card.img" :alt="card.name" ratio="1by1" />
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">
                        {{ card.name }}
                      </p>
                      <p class="subtitle is-6">
                        {{ card.position }}
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    {{ card.desc }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </content>
</template>
<script>
export default {
  data() {
    return {
      employees: [],
    };
  },
  async fetch() {
    this.employees = await fetch("/employees.json").then((res) => res.json());
  },
  head() {
    return {
      title: "Team",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Unser Team am Schülerforschungszentrum Saarlouis",
        },
      ],
    };
  },
};
</script>
