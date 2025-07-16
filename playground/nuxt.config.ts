export default defineNuxtConfig({
  compatibilityDate: "2025-07-16",
  modules: ["../src/module"],
  // Defaults
  particles: {
    mode: "full",
    lazy: true,
  },
  devtools: { enabled: true },
});
