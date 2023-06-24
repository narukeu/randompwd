import { createApp } from "vue";
import App from "./App.vue";

//import TDesign from "tdesign-vue-next";
// 引入组件库的少量全局样式变量
import "tdesign-vue-next/es/style/index.css";

const app = createApp(App);

//app.use(TDesign);
app.mount("#app");
