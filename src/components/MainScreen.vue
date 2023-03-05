<template>
  <div class="screen">
    <h1>Poke Memories</h1>
    <p>Select mode to start game</p>
    <div class="action">
      <button @click="onStart(16)">
        <span>4x4</span>
        <span>Easy</span>
      </button>
      <button @click="onStart(36)">
        <span>6x6</span>
        <span>Normal</span>
      </button>

      <button @click="onStart(64)">
        <span>8x8</span>
        <span>Hard</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onStart(totalOfBlocks) {
      this.$emit("onStart", { totalOfBlocks: totalOfBlocks });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  @apply text-[2.5rem] sm:text-[4.5rem] uppercase font-semibold;
}
p {
  @apply text-[1.3rem] sm:text-[2rem];
}

.action {
  @apply sm:flex gap-[1.5rem] flex-row;

  & button {
    @apply mt-[2rem] w-[120px] h-[120px]
    sm:w-[150px] lg:h-[150px]
    bg-transparent cursor-pointer
  border-light border-[1px]
    border-solid rounded-[1rem]
    flex flex-col justify-center items-center
    transition-colors ease-in-out duration-300
    hover:bg-light hover:text-dark;

    & span:first-child {
      font-size: 2rem;
    }
    & span:last-child {
      margin-top: 0.5rem;
      font-size: 1.25rem;
    }
  }
}
</style>
