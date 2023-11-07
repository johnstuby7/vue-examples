<template>
  <h2>{{ count }}</h2>
  <button @click="updateCount(true)">Increase</button> <br /> <br />
  <button @click="updateCount(false)">Decrease</button>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const count = ref(0);

    function updateCount(increase) {
      if (increase)
        count.value++
      else
        count.value--
    }



    return {
      count,
      updateCount
    }
  }
}
</script>

<style></style>
