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

- update main.js to use the vue-router by updating the createApp to be this: createApp(App).use(router).mount("#app");
- Create a router folder in source, add in index.js and cut the following out of main.js and add it to index.js

```
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    { path: "/about", component: () => import("../views/About.vue") },
  ],
});
```

- in the components create a sidebar.vue file
- to create a boilerplate for the page, write vue and press enter
- update the css for the sidebar, :root is for default colors available, the \*{} is for the rests to remove any padding/etc that is on the page
-
