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

export default {
  name: "App",
  components: { CopyRightScreen, MainScreen, InteractScreen, ResultScreen },
  data() {
    return {
      statusMath: "default",
    };
  },

  methods: {
    onHandleBeforeStart(config) {
      console.log(
        "🚀 ~ file: App.vue:27 ~ onHandleBeforeStart ~ config:",
        config
      );
      this.statusMath = "math";
    },
  },
};
</script>
