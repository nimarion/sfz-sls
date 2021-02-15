<template>
  <div id="hero-background" class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div v-if="htmlContent != null" class="container">
        <section class="articles">
          <div class="column is-8 is-offset-2">
            <div class="card article" style="background-color: white">
              <div class="card-content">
                <div class="columns">
                  <div class="column is-8 is-offset-2">
                    <b-image :src="image" ratio="16by9" />
                  </div>
                </div>
                <div class="media">
                  <div class="media-content has-text-centered">
                    <p class="title article-title">
                      {{ $route.params.title }}
                    </p>
                    <div class="tags has-addons level-item">
                      <b-tag type="is-info" rounded>
                        {{ author }}
                      </b-tag>
                      <b-tag rounded>
                        {{ date }}
                      </b-tag>
                    </div>
                  </div>
                </div>
                <div class="content article-body">
                  <!-- eslint-disable -->
                  <p style="text-align: left" v-html="htmlContent" />
                  <!-- eslint-enable -->
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import snarkdown from 'snarkdown'
import { News } from '~/interfaces/News'

export default Vue.extend({
  async asyncData (context: any) {
    const articles = await fetch('/news/news.json?time=' + new Date().getTime())
      .then(response => response.json())
      .then(data =>
        data.filter((element: News) => element.title === context.params.title)
      )
    if (articles.length === 0) {
      context.error({
        message: 'Der Artikel ' + context.params.title + ' existiert nicht',
        statusCode: 404
      })
      return
    }
    const date = articles[0].date
    const author = articles[0].author
    const image = location.origin + articles[0].image
    const htmlContent = await fetch(
      window.location.origin + '/news/' + articles[0].markdown
    )
      .then(response => response.text())
      .then(data => snarkdown(data))
    return { date, author, image, htmlContent }
  },
  head () {
    return {
      title: this.$route.params.title,
      script: [
        {
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: this.$route.params.title,
            image: [(this as any).image]
          }),
          type: 'application/ld+json'
        }
      ]
    }
  }
})
</script>

<style>
#hero-background
  > div
  > div
  > section
  > div
  > div
  > div
  > div.columns
  > div
  > figure
  > img {
  border-radius: 5px;
}
</style>
