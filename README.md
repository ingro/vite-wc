# Vite + WC

## Steps

* `npm create vite@latest`
* in `vite.config.js` aggiungo:
    * `appType: 'custom'` solo per il comando "build", altrimenti non funziona in sviluppo
    * `lib: {
      entry: './src/index.js',
      name: 'foo-bar'
    }`
    * `rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }` se non voglio includere Vue nella build finale
    * `plugins: [vue({
        customElement: true,
        template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })]` per far si che gli stili dei componenti siano tutti messi inline nei componenti stessi e gestire gli elementi custom in sviluppo
* in `src/index.js` esportare tutti i componenti (dovranno avere l'estensione .ce.vue):

```js
import { defineCustomElement } from 'vue'

import App from './App.ce.vue';

const AppWc = defineCustomElement(App);

customElements.define('app-wc', AppWc);

export { AppWc };
```
* per lo sviluppo si può creare un componente "root" che include tutti gli altri custom components, da richiamare nel file src/main.js (`createApp(Root).mount('#app')`):
```js
<script setup>
import './index.js'
</script>

<template>
  <app-wc msg="Ciao" />
</template>

<style>
</style>
```
* lanciare la build con `npm run build`
* includere il file `foobar.umd.cjs` nella pagina, se non si è includo nella build Vue sarà necessario includere anche lo script globale (basta solo il runtime)