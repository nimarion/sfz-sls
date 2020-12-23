<template>
  <section
    style="content-visibility: auto"
    class="hero"
    v-if="board_members.length > 0"
  >
    <div class="hero-body has-text-centered">
      <div class="content container box">
        <p class="title">Unser Vorstand</p>

        <div class="section">
          <div class="row columns is-multiline">
            <div
              v-for="item in board_members"
              :key="item.name"
              class="column is-4"
            >
              <div class="card large">
                <div class="card-content">
                  <div class="content">
                    <h4>{{ item.name }}</h4>
                    <p>{{ item.position }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      board_members: []
    };
  },
  async created() {
    fetch("/vorstand.json")
      .then(response => response.json())
      .then(data => (this.board_members = data));
  }
};
</script>
