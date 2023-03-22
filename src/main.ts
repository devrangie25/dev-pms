import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './route/index'
import { registerLayouts } from './layouts/register';
import { registerComponents } from './components/register';

loadFonts()

const app = createApp(App)

app.use(vuetify)
app.use(router)

registerLayouts(app);
registerComponents(app);

app.mount('#app')
