- to create the project make a empty folder
- run npm i -g @vue/cli
- vue create vue-movie-db-yt
- select manual option and select babel, router, css pre-processors and linter/formatter
- navigate to the new folder and run the server and ensure it works
- create a env.js file in src to hold the omdb api key, this is the movie api db
- remove the components and assets folder and update app to just have the routerview
- Add <router-link to="/"></router-link> to app for the default route
- Example of header/main css to get header centered:

```
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fire Sans, sans-serif';

  &::selection {
    background: transparentize(#42B883, 0.5);
  }
}

body {
  background-color: #35495e;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2c3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color: #FFF;
    font-size: 28px;

    span {
      color: #42B883
    }
  }

}
</style>
```
