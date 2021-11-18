import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import microApp from "@micro-zoe/micro-app";

microApp.start({
  tagName: "micro-app-sub",
});
// 预加载
microApp.preFetch([{ name: "app3", url: "http://localhost:8083/" }]);

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

(window as any).microApp?.setGlobalData({ type: "子应用app2设置的全局数据" }); // 作为子应用发送全局数据
microApp.setGlobalData({ type: "嵌套应用app2作为基座设置的全局数据" }); // 作为基座应用发送全局数据

// 监听卸载
window.addEventListener("unmount", function () {
  // 卸载应用
  app.$destroy();
});
