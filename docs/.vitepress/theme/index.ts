import SmartUI from '../../../src/entry'
import theme from "vitepress/theme";
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
export default {
    ...theme,
    enhanceApp({app}) {
        app.use(SmartUI)
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
    }
}