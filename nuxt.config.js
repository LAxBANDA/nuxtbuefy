export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Posts API | Nuxt Buefy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: [
  //   'bulma'
  // ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'nuxt-buefy',
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com/'
  },
  css: ['./assets/scss/_main.scss'],
  styleResources:{
    sass: [],
    scss: ["~assets/scss/_main.scss"],
    less: [],
    stylus: []
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
