<template>
  <div class="container">
    <div class="section">
      <div class="row columns is-multiline" v-if="team.length > 0">
        <div v-for="card in team" :key="card.name" class="column is-4">
          <div class="card large">
            <!-- 266x400 -->
            <div class="card-image is-1by1">
              <b-image :src="card.img" :alt="card.name" ratio="1by1"></b-image>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ card.name }}</p>
                  <p class="subtitle is-6">{{ card.position }}</p>
                </div>
              </div>
              <div class="content">{{ card.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: []
    };
  },
  async created() {
    fetch("/employees.json")
      .then(response => response.json())
      .then(data => (this.team = data));
  }
};
</script>
