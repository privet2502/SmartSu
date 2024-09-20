// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["@/assets/styles/main.scss"],
  modules: [
    [
      "nuxt-mail",
      {
        message: {
          to: "ironic_paladin@mail.ru",
        },
        smtp: {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "testdlyasmtp@gmail.com",
            pass: "Privet2502",
          },
        },
      },
    ],
    "nuxt-mail",
  ],
  plugins: ["~/plugins/vue-the-mask.js"],
});
