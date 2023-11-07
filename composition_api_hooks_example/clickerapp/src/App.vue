<template>
  <h2>{{ count }}</h2>
  <button @click="increment">Increase</button> <br /> <br />
  <button @click="decrease">Decrease</button>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++
    }

    function decrease() {
      count.value--
    }

    return {
      count,
      increment,
      decrease
    }
  }
}
</script>

<style></style>
