import MyButton from "./button/Button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import { App } from "vue";

export { MyButton, SFCButton, JSXButton };

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
