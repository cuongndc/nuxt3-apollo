import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  app: {
    // cdnURL: 'https://d17a2275ko4nj4.cloudfront.net', // upload .output/server/public to cdn when using serverless
  },
  build: {
    transpile: ['graphql'],
  },
  buildModules: [
    '@intlify/nuxt3',
    '@nuxt3/graphql-codegen-module',
    '@nuxt3/apollo-module',
  ],
  graphqlCodegen: {
    schema: ['http://localhost:3000/api/graphql', `${process.env.URL}/api/graphql`],
  },
  apollo: {
    clientConfigs: {
      default: {
        // local graphql server, set URL env when build if using serverless or deploying on unknown port
        uri: process.env.URL ? `${process.env.URL}/api/graphql` : 'http://localhost:3000/api/graphql',
        authenticationType: 'Bearer', // default 'Bearer'
      },
    },
    cookieAttributes: {
      expires: 14,
    },
  },
  intlify: {
    localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
    vueI18n: {
    },
  },
})
