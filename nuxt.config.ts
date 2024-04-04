// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/")
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-icon'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
