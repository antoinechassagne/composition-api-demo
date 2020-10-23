<template>
  <section class="component">
    <h2>Component's options</h2>
    <p>{{ count }}</p>
    <div>{{ oddOrEvenSentence }}</div>
    <button @click="increment">Click</button>
    <button @click="reset">Reset</button>
  </section>
</template>

<script>
export default {
  name: "ComponentA",
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    oddOrEvenSentence() {
      return this.count % 2 === 0 ? "Even" : "Odd";
    },
  },
  methods: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>
