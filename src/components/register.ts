import { App } from 'vue';
import { ModuleNamespace } from 'vite/types/hot';

/**
 * Register all the components inside /components
 * 
 * @param {App<Element>} app
 */

export function registerComponents(app: App<Element>) {
    const components = import.meta.globEager<string, ModuleNamespace>('./**/*.vue');

    Object.entries(components).forEach(([, component]) => {
        app.component(component?.default?.name, component?.default);
    });
}
