import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./route/index";
import { registerLayouts } from "./layouts/register";
import { registerComponents } from "./components/register";
import { supabase } from "./lib/supabaseClient";
import mitt from "mitt";
import pinia from "./stores/index";

loadFonts();

const emitter = mitt();
const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.use(router);

registerLayouts(app);
registerComponents(app);

app.provide("supabase", supabase);
app.provide("emitter", emitter);

app.mount("#app");
