# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## How to create Vue3 + Vuetify3 + TS + Vite. 

1. Scaffolding Your First Vite Project
	1. Run this commmand if you're using NPM: npm create vite@latest
	1. If you're using YARN: yarn create vite
	1. If you're using PNPM: pnpm create vite
	1. Then follow the prompts
2. Add Vuetify3 to the vite project:
	2. If you're using Vue CLI to add vuetify, run this command: vue add vuetify, then select the vuetify3.
	2. If you're using YARN to add the vuetify, yarn add vuetify@^3.1.10 - check this link https://vuetifyjs.com/en/getting-started/installation/
	
	
## References: 
1. https://vitejs.dev/guide/
2. https://vuetifyjs.com/en/getting-started/installation/
3. https://router.vuejs.org/installation.html