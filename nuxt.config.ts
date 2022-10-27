// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ["@/assets/css/global.css", "@/assets/css/theme.css"],
	modules: ["@nuxtjs/prismic"],
	prismic: { endpoint: "cmda-mid-term" },
});
