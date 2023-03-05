<template>
  <main-screen
    v-if="statusMath === 'default'"
    @onStart="onHandleBeforeStart($event)"
  />
  <interact-screen v-if="statusMath === 'math'" />
  <result-screen />
  <copy-right-screen />
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
      setting: {
        totalOfBlocks: 0,
        cardsContext: [],
      },
      statusMath: "default",
    };
  },

  methods: {
    onHandleBeforeStart(config) {
      this.setting.totalOfBlocks = config.totalOfBlocks;
      const firstCards = Array.from(
        { length: this.setting.totalOfBlocks / 2 },
        (v, i) => i + 1
      );

      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];
      this.setting.cardsContext = shuffled(shuffled(shuffled(cards)));
      console.log(this.setting.cardsContext);

      this.setting.cardsContext = this.statusMath = "math";
    },
  },
};
</script>
