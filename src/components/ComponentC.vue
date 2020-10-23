<template>
  <section class="component">
    <h2>Composition API (avec composable)</h2>
    <p>{{ count }}</p>
    <div>{{ oddOrEvenSentence }}</div>
    <button @click="increment">Click</button>
    <button @click="reset">Reset</button>
  </section>
</template>

<script>
import useCounter from "../composables/useCounter";

export default {
  name: "ComponentC",
  setup() {
    const { count, increment, reset, oddOrEvenSentence } = useCounter();

    return { count, increment, reset, oddOrEvenSentence };
  },
};
</script>
