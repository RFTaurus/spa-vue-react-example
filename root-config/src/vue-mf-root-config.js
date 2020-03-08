import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

// Navbar

registerApplication(
  "@vue-mf/vue-navbar",
  () => System.import("@vue-mf/vue-navbar"),
  isActive.alwaysTrue
);

// Homescreen Vue-React

registerApplication(
  "@vue-mf/vue-example-3",
  () => System.import("@vue-mf/vue-example-3"),
  isActive.homescreen
);

registerApplication(
  "@vue-mf/vue-example-1",
  () => System.import("@vue-mf/vue-example-1"),
  isActive.homescreen
);

registerApplication(
  "@react-mf/react-example-1",
  () => System.import("@react-mf/react-example-1"),
  isActive.homescreen
);

// React

registerApplication(
  "@react-mf/react-example-3",
  () => System.import("@react-mf/react-example-3"),
  isActive.react
);

// Vue

registerApplication(
  "@vue-mf/vue-example-2",
  () => System.import("@vue-mf/vue-example-2"),
  isActive.vue
);

// Footer

registerApplication(
  "@vue-mf/vue-footer",
  () => System.import("@vue-mf/vue-footer"),
  isActive.alwaysTrue
);

start();
