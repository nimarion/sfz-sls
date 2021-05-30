<template>
  <section class="container">
    <div v-if="news.length > 0" class="columns features">
      <div
        v-for="item in news.slice(0, 3)"
        :key="item.title"
        class="column is-4"
      >
        <div class="card is-shady">
          <div class="card-image has-text-centered is-16by9">
            <b-image :src="item.image" :alt="item.title" ratio="16by9" />
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
<script lang="ts">
import Vue from 'vue'
import { News } from '~/interfaces/News'
export default Vue.extend({
  data () {
    return {
      news: []
    }
  },
  async fetch () {
    const ms = Date.now();
    this.news = await fetch("/news/news.json" + "?dummy="+ms).then((res) => res.json());
  },
  methods: {
    getNewsLink (item: News): string {
      return (
        'news/' +
      `${item.date}`.split(' ')[2] +
      '/' +
      encodeURIComponent(`${item.title}`)
      )
    }
  }
})
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
