/// <reference types="vitest" />
import {defineConfig} from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import unocss from "./config/unocss";

export default defineConfig({
    plugins: [
        vuePlugin(),
        vueJsxPlugin({}),
        unocss()
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

        cssCodeSplit: true, // 编译时是否独立输出css

        lib: {
            entry: './src/entry.ts',
            name: 'SmartyUI',
            fileName:'smarty-ui',
            formats: ["es", "umd", "iife"]
        }
    },
    // @ts-ignore
    test: {
        globals: true,
        environment: 'happy-dom',
        transformMode: {
            web: [/.[tj]sx$/]
        }
    }
})
