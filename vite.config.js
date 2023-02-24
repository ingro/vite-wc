import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let baseConfig = {
    plugins: [vue({
      // per forzare l'inclusione di tutti gli stili inline nei componenti
      customElement: true,
      template: {
        compilerOptions: {
          // tratta tutti i tag con "-" come custom element
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })],
    build: {
      lib: {
        entry: './src/wc.js',
        name: 'vite-wc',
        fileName: 'vite-wc'
      },
      // necessario solo se non voglio includere vue nella build finale
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      },
      // minify: false
    },
    // solo nel caso venga incluso vue per gestire corretto build senza parti per lo sviluppo
    // define: {
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    // }
  };

  // in fase di sviluppo appType deve rimanere quello standard ovvero "spa"
  if (command === 'build') {
    return Object.assign(baseConfig, {
      appType: 'custom'
    })
  }

  return baseConfig;
})
