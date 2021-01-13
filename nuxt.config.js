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
    titleTemplate: 'Schülerforschungszentrum Saarlouis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  build: {
    parallel: true,
    terser: true
  },
  plugins: ['~plugins/iframe'],
  modules: [['nuxt-buefy', { css: true, materialDesignIcons: false }]]
};
