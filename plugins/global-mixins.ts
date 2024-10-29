import globalMixin from '~/mixins/global.js'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.mixin(globalMixin)
})
