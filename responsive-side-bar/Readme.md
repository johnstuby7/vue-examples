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
- copy all that logic and move it to the app.vue where it is supposed to be
- update the styling for sidebar
- update sidebar to look like this, the sidebar will now open/close correctly:

```
<template>
  <aside :class="`${is_expanded && 'is_expanded'}`">
    <div class="logo">
      <img src="../assets/vue.svg" alt="Vue">
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle">
        <span class="material-icons" @click="ToggleMenu">
          keyboard_double_arrow_right
        </span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue"

const is_expanded = ref(false)
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
}
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;
  }

  &.is_expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
```

- this is the logic to use the localstorage to keep the users current setting for sidebar:

```
const is_expanded = ref(localStorage.getItem('is_expanded') === "true")

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value

  localStorage.setItem('is_expanded', is_expanded.value)
}
</script>
```
