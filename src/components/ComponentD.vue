<template>
  <section class="component">
    <h2>Composition API (avec composable partiel)</h2>
    <p v-if="count">{{ seconds }}</p>
    <button @click="() => (count = !count)">Toggle seconds</button>
  </section>
</template>

<script>
import useCounter from "../composables/useCounter";
import { ref, onMounted } from "vue";

export default {
  name: "ComponentD",
  setup() {
    const count = ref(true);
    const { count: seconds, increment } = useCounter();

    onMounted(() => {
      setInterval(increment, 1000);
    });

    return { seconds, count };
  },
};
</script>
