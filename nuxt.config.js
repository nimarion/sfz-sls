const axios = require('axios')

export default {
  target: 'static',
  telemetry: false,
  ssr: false,
  router: {
    base: process.env.NODE_ENV === 'github' ? '/www/' : '/',
    extendRoutes (routes, resolve) {
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
      { name: 'keywords', content: 'Schülerforschungszentrum, Schule, Forschen, MINT, Informatik, Physik, Workshops, Elearing' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Schülerforschungszentrum Saarlouis'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://sfz-sls.de'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://sfz-sls.de/background.jpg'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: ''
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Schülerforschungszentrum Saarlouis'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://sfz-sls.de/background.jpg'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: ''
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://sfz-sls.de'
      },
      {
        hid: 'twitter:domain',
        name: 'twitter:domain',
        content: 'sfz-sls.de'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index,follow'
      }
    ]
  },
  build: {
    parallel: true,
    terser: true,
    sourceMap: true,
    typescript: {
      typeCheck: {
        eslint: true
      }
    }
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome'
  ],
  pwa: {
    meta: {
      title: 'Schülerforschungszentrum Saarlouis',
      author: 'Schülerforschungszentrum Saarlouis',
      description: ''
    },
    manifest: {
      name: 'Schülerforschungszentrum Saarlouis',
      short_name: 'SFZ',
      lang: 'de',
      display: 'browser',
      theme_color: '#ffffff'
    }
  },
  plugins: ['~plugins/iframe'],
  modules: [['nuxt-buefy', {
    css: true,
    defaultIconPack: 'fas',
    defaultIconComponent: 'FontAwesomeIcon',
    materialDesignIcons: false
  }], ['@nuxtjs/sitemap'], ['@nuxtjs/pwa']],
  fontawesome: {
    icons: {
      solid: ['faPlus', 'faMinus', 'faFileDownload', 'faAngleLeft', 'faAngleRight']
    }
  },
  sitemap: {
    hostname: 'https://sfz-sls.de/',
    gzip: true,
    routes: async () => {
      const links = []
      await axios.get('https://sfz-sls.de/elearning.json').then((res) => {
        res.data.forEach((element) => {
          links.push('/workshop/' + element.name)
        })
      })
      await axios.get('https://sfz-sls.de/news/news.json').then((res) => {
        res.data.forEach((element) => {
          links.push('/news/' + element.date.split(' ')[2] + '/' + element.title)
        })
      })
      links.push({
        url: '/elearning',
        changefreq: 'monthly'
      })
      return links
    }
  },
  generate: {
    fallback: '404.html'
  }
}
