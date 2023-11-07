<template>
  <h2>{{ count }}</h2>
  <button @click="increment">Increase Value</button>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++
    }

    return {
      count,
      increment
    }
  }
}
</script>

<style></style>
