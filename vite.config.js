import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let baseConfig = {
    plugins: [vue({
      customElement: true,
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })],
    // appType: 'custom',
    build: {
      lib: {
        entry: './src/wc.js',
        name: 'vite-wc'
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      },
    }
  };

  if (command === 'build') {
    return Object.assign(baseConfig, {
      appType: 'custom'
    })
  }

  return baseConfig;
})
