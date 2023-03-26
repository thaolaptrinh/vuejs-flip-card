<template>
  <div
    class="grid justify-center items-center gap-2"
    :class="`grid-cols-${Math.sqrt(cardsContext.length)}`"
  >
    <card-flip
      v-for="(card, index) in cardsContext"
      :key="index"
      :ref="`card-${index}`"
      :imgBackFaceUrl="`images/${card}.png`"
      :card="{ index, value: card }"
      :cardContext="cardsContext"
      :rules="rules"
      @onFlip="checkRule($event)"
    />
  </div>
</template>

<script>
import CardFlip from "./CardFlip.vue";

export default {
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    CardFlip,
  },

  data() {
    return {
      rules: [],
      countFlipTrue: 0,
    };
  },

  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;
      this.rules.push(card);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("Right");
        this.$refs[`card-${this.rules[0].index}`][0].onDisabledCard();
        this.$refs[`card-${this.rules[1].index}`][0].onDisabledCard();
        this.rules = [];
        this.countFlipTrue++;

        if (this.countFlipTrue === this.cardsContext.length / 2) {
          setTimeout(() => {
            this.$emit("onFinish");
          }, 1000);
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log("Wrong");
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard();
          this.rules = [];
        }, 800);
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-cols-4 {
  grid-template-columns: repeat(1fr, 4);
}
.grid-cols-6 {
  grid-template-columns: repeat(1fr, 6);
}
.grid-cols-8 {
  grid-template-columns: repeat(1fr, 8);
}
</style>
