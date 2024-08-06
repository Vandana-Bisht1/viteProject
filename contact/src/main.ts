import { createApp, h } from "vue";
import App from "./App.vue";
import singleSpaVue from "single-spa-vue";

const appOptions = {
  render() {
    return h(App);
  },
};
const vueLifecycles = singleSpaVue({
  createApp,
  appOptions,
});
export const { bootstrap, mount, unmount } = vueLifecycles;

createApp(App).mount('#contact');
