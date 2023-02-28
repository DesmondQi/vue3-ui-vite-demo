import {defineConfig} from "vite";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import unocss from "../config/unocss";

export default defineConfig({
    plugins: [
        vueJsxPlugin(),
        unocss()
    ]
})