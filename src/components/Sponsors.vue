<template>
  <section class="hero has-text-centered" style="content-visibility: auto">
    <div class="hero-body">
      <div class="container">
        <div class="columns" v-if="sponsors.length > 0">
          <div class="column" v-for="item in sponsors" :key="item.name">
            <a :href="item.url">
              <b-image :src="item.img" :alt="item.name" ratio="3by1"></b-image>
            </a>
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
      sponsors: []
    };
  },
  async created() {
    fetch("/sponsors.json")
      .then(response => response.json())
      .then(data => (this.sponsors = data));
  }
};
</script>
