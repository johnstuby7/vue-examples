<template>
  <h2>{{ state.count }}, doubled = {{ state.double }}</h2>
  <button @click="updateCount(true)">Increase</button> <br /> <br />
  <button @click="updateCount(false)">Decrease</button>
</template>

<script>
import { computed, reactive } from "vue"

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });

    function updateCount(increase) {
      if (increase)
        state.count++;
      else
        state.count--;
    }

    return {
      state,
      updateCount
    }
  }
}
</script>

<style></style>
