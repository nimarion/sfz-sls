<template>
  <section class="container">
    <div class="columns features" v-if="this.$store.getters.news.length > 0">
      <div
        class="column is-4"
        v-for="item in this.$store.getters.news.slice(0, 3)"
        :key="item.title"
      >
        <div class="card is-shady">
          <div class="card-image has-text-centered is-16by9">
            <b-image
              :src="item.image"
              :alt="item.title"
              ratio="16by9"
            ></b-image>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
              <p>
                <a :href="getNewsLink(item)">Weiterlesen</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    getNewsLink() {
      return item =>
        "news/" +
        `${item.date}`.split(" ")[2] +
        "/" +
        encodeURIComponent(`${item.title}`);
    }
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
