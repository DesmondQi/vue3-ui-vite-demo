// const s: string = 'Hello TypeScript'
// console.log(s)

import {createApp} from "vue";
import SmartyUI from './entry'
import App from "./App.vue";


createApp(App).use(SmartyUI).mount('#app')
