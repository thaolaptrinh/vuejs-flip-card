<template>
  <div class="screen">
    <h1>✨ Congratulations ✨</h1>
    <h3>{{ Math.round(timer / 1000) }} second</h3>
    <button @click="onStartAgain">Start Again</button>
  </div>
</template>

<script>
export default {
  props: {
    timer: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onStartAgain() {
      console.log("start");
      this.$emit("onStartAgain");
    },
  },
};
</script>

<style lang="scss" scoped>
.screen h1 {
  @apply text-[2.5rem] md:text-[3rem] lg:text-[5rem];
}
.screen h3 {
  @apply mt-[1.5rem] text-[2rem] md:text-[2.5rem] lg:text-[3rem];
}
.screen button {
  @apply shadow-none border bg-transparent text-[white]
   text-xl cursor-pointer transition-[background] 
   duration-[0.3s] ease-[ease-in-out]
    m-4 px-5 py-4 rounded-lg border-solid border-[white];
}
.screen button:hover {
  @apply bg-white text-black;
}
</style>
