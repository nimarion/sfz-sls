<template>
  <content>
    <section
      id="hero-background"
      class="hero is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-header">
        <div class="container has-text-centered" style="top: 20px">
          <p id="title" class="title">News</p>
        </div>
        <br />
        <div class="hero-body">
          <!--Cards-->
          <div class="container">
            <div class="section">
              <div
                class="row columns is-multiline"
                v-if="this.$store.getters.news.length > 0"
              >
                <div
                  v-for="item in this.$store.getters.news"
                  :key="item.title"
                  class="column is-4"
                >
                  <div class="card large">
                    <div class="card-image is-16by9">
                      <b-image
                        :src-fallback="require('@/assets/background.jpg')"
                        :src="item.image"
                        ratio="16by9"
                      ></b-image>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-content">
                          <p class="title is-4 no-padding">{{ item.title }}</p>
                        </div>
                      </div>
                      <div class="content">
                        {{ item.desc }}
                        <p>
                          <a :href="getNewsLink(item)">Weiterlesen</a>
                        </p>
                      </div>
                    </div>
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
  metaInfo() {
    return {
      title: "SFZ - Neuigkeiten",
      meta: [
        {
          property: "og:title",
          content: "Schülerforschungszentrum - Neuigkeiten"
        },
        {
          property: "og:site_name",
          content: "Schülerforschungszentrum Saarlouis"
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: window.location.href },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  computed: {
    getNewsLink() {
      return item =>
        window.location.origin +
        "/news/" +
        `${item.date}`.split(" ")[2] +
        "/" +
        encodeURIComponent(`${item.title}`);
    }
  }
};
</script>
