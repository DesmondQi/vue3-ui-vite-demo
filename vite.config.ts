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
            // 将该模块保留在 bundle 之外
            external: ['vue', 'vue-router'],
            // 全局中的某个模块在组件库中叫什么名字
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },

        minify: 'terser',

        reportCompressedSize: true,

        sourcemap: true,

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
