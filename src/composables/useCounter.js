import { ref, computed } from "vue";

const useCounter = () => {
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

  return {
    count,
    increment,
    reset,
    oddOrEvenSentence,
  };
};

export default useCounter;
