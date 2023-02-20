import {defineConfig} from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";

export default defineConfig({
    plugins: [
        vuePlugin(),
        vueJsxPlugin({})
    ],

    build: {
        rollupOptions: {
            external: ['vue', 'vue-router'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },

        minify: false,

        lib: {
            entry: './src/entry.ts',
            name: 'SmartyUI',
            fileName:'smarty-ui',
            formats: ["es", "umd", "iife"]
        }
    }
})
