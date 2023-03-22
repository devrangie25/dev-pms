import { App } from 'vue';
import { ModuleNamespace } from 'vite/types/hot';

/**
 * Register layouts in the app instance
 * For us to call it in App.vue without importing
 *
 * @param {App<Element>} app
 */
export function registerLayouts(app: App<Element>) {
  const layouts = import.meta.globEager<string, ModuleNamespace>('./*.vue');

  Object.entries(layouts).forEach(([, layout]) => {
    app.component(layout?.default?.name, layout?.default);
  });
}