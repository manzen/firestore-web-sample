export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'src',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
     '@nuxtjs/firebase',
     {
       // Firebaseのプロジェクト設定（マイアプリ > SDKの設定と構成）を参照
       config: {
         apiKey: '<apiKey>',
         authDomain: '<authDomain>',
         projectId: '<projectId>',
         storageBucket: '<storageBucket>',
         messagingSenderId: '<messagingSenderId>',
         appId: '<appId>',
         measurementId: '<measurementId>'
       },
       // 必要なサービスを設定する
       services: {
         auth: true,
         firestore: true,
         functions: false,
         storage: true,
         database: false,
         messaging: false,
         performance: false,
         analytics: false,
         remoteConfig: false
       }
     }
   ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
