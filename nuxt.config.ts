import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Entertain Me More',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [{rel: 'icon', type: 'image/svg+xml', href: "/favicon.svg"}]
        }
    },

    compatibilityDate: '2024-04-03',
    // devtools: {enabled: true},

    modules: ['@pinia/nuxt'],

    css: ['~/assets/scss/styles.scss'],

    vite: {
        plugins: [svgLoader()],

        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
						@import "~/assets/scss/base/variables.scss";
						@import "~/assets/scss/base/mixins.scss";
						@import "~/assets/scss/base/functions.scss";
					`,
                },
            },
        },
    }
})
