export default defineNuxtConfig({
  app: {
    head: {
      title: 'Dobrobut'
    }
  },
  runtimeConfig: {
    public: {
      baseURL: 'https://prod.dobrobut.com/portal/api/anonymousdata/dobrobutprodcms',
    },
  },
	css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
