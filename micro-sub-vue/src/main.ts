import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

window.addEventListener("unmount", function () {
  app.$destroy();
});

// let app: any
// // 应用每次渲染时都会执行 mount 方法，在此处可以执行初始化相关操作（必传)
// export function mount() {
//   app = new Vue({
//     router,
//     store,
//     render: (h) => h(App),
//   }).$mount("#app");
// }

// // 应用每次卸载时都会执行 unmount 方法，在此处可以执行卸载相关操作（必传)
// export function unmount() {
//   // 卸载应用
//   app.$destroy()
// }

// // 非微前端环境直接运行
// if (!((window as any).__MICRO_APP_ENVIRONMENT__)) {
//   mount()
// }

function dataListener(data: any) {
  console.log("子应用获取全局数据", data);
}

/**
 * 绑定监听函数
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时有缓存数据，是否需要主动触发一次，默认为false
 */
(window as any).microApp?.addGlobalDataListener(dataListener, true);
