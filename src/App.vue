<template>
  <ComponentA />
  <ComponentB />
  <ComponentC />
  <ComponentD />
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
import ComponentC from "./components/ComponentC.vue";
import ComponentD from "./components/ComponentD.vue";

export default {
  name: "App",
  components: {
    ComponentA,
    ComponentB,
    ComponentC,
    ComponentD,
  },
};
</script>
