const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {rel:"stylesheet", href: "https://fonts.googleapis.com/css?family=Raleway:400,700" }

    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-slick', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [

  ],

  /*
  ** Build configuration
  */
  build: {
    // extend(config, ctx) {
    // if (ctx.isServer) {
    //     config.externals = [
    //       nodeExternals({
    //         whitelist: [/^vue-slick/]
    //       })
    //     ]
    //   }
    // }
  }
}
