<template>
  <div class="sc">
    <card-flip
      v-for="(card, index) in cardsContext"
      :key="index"
      :ref="`card-${index}`"
      :imgBackFaceUrl="`images/${card}.png`"
      :card="{ index, value: card }"
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
    };
  },

  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;
      this.rules.push(card);
      if (this.rules.length === 2) {
        if (this.rules[0].value === this.rules[1].value) {
          console.log("Right");
        } else {
          console.log("Wrong");

          setTimeout(() => {
            this.$refs[`card-${this.rules[0].index}`].onFlipBackCard();
            this.$refs[`card-${this.rules[1].index}`].onFlipBackCard();
            console.log(
              "🚀 ~ file: InteractScreen.vue:50 ~ setTimeout ~  this.$refs[`card-${this.rules[0].index}`]:",
              this.$refs[`card-${this.rules[0].index}`]
            );
            this.rules = [];
          }, 800);
        }
      } else {
        return false;
      }
    },
  },
};

CardFlip;
</script>

<style lang="scss" scoped></style>
