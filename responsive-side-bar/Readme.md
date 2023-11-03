Vue3 and vite responsive sidebar

- Update the index.html file to use googlefonts: <link rel="preconnect" href="https://fonts.googleapis.com">
- Install Sass npm add -D sass
- Install vue-router npm i vue-router
- remove hello world
- update app to not have hello world and just be a boilerplate
- create a views folder and add Home.vue
- create a about.vue in the views folder
- Update main.js to use vue-router, check web history, it should look like this:

```
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: {
    path: "/",
    component: Home,
  },
});
createApp(App).mount("#app");

```
