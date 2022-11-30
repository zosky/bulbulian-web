import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-vue-markdown'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  server: { open: true },
  plugins: [
    VueRouter({
      extensions: ['.vue','.md'],
      dts: 'src/auto-router.d.ts',
    }),
    vue({ include: [/\.vue$/, /\.md$/] }),
    Components({ 
      resolvers: [HeadlessUiResolver()],
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/auto-components.d.ts',
    }),
    AutoImport({ 
      imports: ['vue', '@vueuse/head', VueRouterAutoImports],
      dts: 'src/auto-imports.d.ts', }),
    Markdown({ 
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
    eslintPlugin()
  ],
})
