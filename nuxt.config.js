export default {
  target: "static",
  telemetry: false,
  ssr: false,
  router: {
    base: process.env.NODE_ENV === "github" ? "/www/" : "/",
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'Schülerlabore',
        path: '/Schülerlabore',
        component: resolve(__dirname, 'pages/Schülerlabore.vue')
      },
        {
          name: 'Förderverein',
          path: '/Förderverein',
          component: resolve(__dirname, 'pages/Förderverein.vue')
        }
      )
    }
  },
  head: {
    htmlAttrs: {
      lang: 'de'
    },
    title: 'Schülerforschungszentrum Saarlouis',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: "og:title",
        name: "og:title",
        content: "Schülerforschungszentrum Saarlouis",
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://sfz-sls.de",
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://sfz-sls.de/background.jpg",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Schülerforschungszentrum Saarlouis"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://sfz-sls.de/background.jpg"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://sfz-sls.de",
      },
      {
        hid: "twitter:domain",
        name: "twitter:domain",
        content: "sfz-sls.de",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "description",
        name: "description",
        content: "Das Schülerforschungszentrum bietet allen Schülerinnen und Schülern einen Ort, wo sie als ganze Klasse Workshops  an selbst gewählten Themen aus dem MINT-Bereich unterstützt forschen können. ",
      },
      {
        hid: "robots",
        name: "robots",
        content: "index,follow",
      },
    ]
  },
  build: {
    parallel: true,
    terser: true,
    sourceMap: true,
  },
  plugins: ['~plugins/iframe'],
  modules: [['nuxt-buefy', { css: true, materialDesignIcons: false }], ['@nuxtjs/sitemap']],
  sitemap: {
    hostname: 'https://sfz-sls.de/',
    gzip: true,
  },
};
