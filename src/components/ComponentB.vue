<template>
  <section class="component">
    <h2>Composition API</h2>
    <p>{{ count }}</p>
    <div>{{ oddOrEvenSentence }}</div>
    <button @click="increment">Click</button>
    <button @click="reset">Reset</button>
  </section>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "ComponentB",
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    const reset = () => {
      count.value = 0;
    };

    const oddOrEvenSentence = computed(() => {
      return count.value % 2 === 0 ? "Even" : "Odd";
    });

    return { count, increment, reset, oddOrEvenSentence };
  },
};
</script>
