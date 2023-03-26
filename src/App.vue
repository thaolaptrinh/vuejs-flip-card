<template>
  <div class="screen" :class="statusMath">
    <main-screen
      v-if="statusMath === 'default'"
      @onStart="onHandleBeforeStart($event)"
    />
    <interact-screen
      v-if="statusMath === 'math'"
      :cardsContext="settings.cardsContext"
      @onFinish="onGetResult"
    />
    <result-screen
      :timer="timer"
      v-if="statusMath === 'result'"
      @onStartAgain="statusMath = 'default'"
    />
    <copy-right-screen />
  </div>
</template>
<script>
import CopyRightScreen from "./components/CopyRightScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import MainScreen from "./components/MainScreen.vue";
import ResultScreen from "./components/ResultScreen.vue";
import { shuffled } from "./utils/array";

export default {
  name: "App",
  components: { CopyRightScreen, MainScreen, InteractScreen, ResultScreen },
  data() {
    return {
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
        startAt: null,
      },
      statusMath: "default",
      timer: 0,
    };
  },

  methods: {
    onHandleBeforeStart(config) {
      this.settings.totalOfBlocks = config.totalOfBlocks;
      const firstCards = Array.from(
        { length: this.settings.totalOfBlocks / 2 },
        (v, i) => i + 1
      );

      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];
      this.settings.cardsContext = shuffled(shuffled(shuffled(cards)));
      this.settings.startAt = new Date().getTime();
      this.statusMath = "math";
    },
    onGetResult() {
      this.timer = new Date().getTime() - this.settings.startAt;
      this.statusMath = "result";
    },
  },
};
</script>

<style lang="scss" scoped>
.screen {
  @apply w-full min-h-screen z-10 flex
    items-center justify-center
    flex-col bg-dark text-light text-center;
}
.copyright {
  @apply fixed left-[50%]
  bottom-[1.5rem]  -translate-x-1/2
  text-light text-center z-10 text-[1.3rem] md:text-[1.5rem];
}

.copyright a {
  @apply text-primary underline;
}
</style>
