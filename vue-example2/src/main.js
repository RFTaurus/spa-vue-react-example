import "./set-public-path";
import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    domElementGetter,
    router
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

function domElementGetter() {
  let el = document.getElementById("lappland-vue");
  if (!el) {
    el = document.createElement("div");
    el.id = "home-vue";
    document.body.appendChild(el);
  }
  return el;
}
