if (import.meta.env.DEV) {
  import("eruda").then((eruda) => {
    eruda.default.init();
  });
}

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

async function startApp() {
  try {
    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.mount("#app");
  } catch (error) {
    document.body.innerHTML = `<div style="color:red; padding:20px;">Init Error: ${error}</div>`;
  }
}

startApp();
