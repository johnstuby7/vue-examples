<template>
  <div class="movie-detail">
    <h2>Movie Title </h2>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue"
import { useRoute } from "vue-router"
import env from "@/env.js"

export default {
  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
        .then(response => response.json())
        .then(data => {
          movie.value = data;
        })
    });

    return {
      movie
    }
  }
}
</script>

<style></style>