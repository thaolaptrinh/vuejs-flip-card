<template>
  <div
    class="card"
    :class="{ disabled: isDisabled }"
    :style="{
      height: `${cardHeight}px`,
      width: `${cardWidth}px`,
    }"
  >
    <div
      class="card__inner"
      :class="{ 'is-flipped': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div class="card__face card__face--front">
        <div class="card__content"></div>
      </div>
      <div class="card__face card__face--back">
        <div
          class="card__content"
          :style="{
            backgroundImage: `url(${require('@/assets/' + imgBackFaceUrl)})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: [Array, String, Number, Object],
    },
    imgBackFaceUrl: {
      type: String,
      require: true,
    },
    cardContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
    rules: {
      type: Array,
    },
  },

  data() {
    return {
      isFlipped: false,
      isDisabled: false,
      cardWidth:
        (window.innerWidth < 768 ? window.innerWidth : 768) /
          Math.sqrt(this.$props.cardContext.length) -
        8,
      cardHeight:
        (window.innerHeight * 3) /
          4 /
          Math.sqrt(this.$props.cardContext.length) -
        8,
    };
  },

  created() {
    window.addEventListener("resize", this.onResize);
  },

  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.cardWidth =
        (window.innerWidth < 576 ? window.innerWidth : 576) /
          Math.sqrt(this.$props.cardContext.length) -
        8;
      this.cardHeight = (this.cardWidth * 4) / 3;
    },
    onToggleFlipCard() {
      if (this.rules.length >= 2) return;
      if (this.isDisabled) return false;
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) {
        this.$emit("onFlip", this.card);
      }
    },
    onFlipBackCard() {
      this.isFlipped = false;
    },
    onDisabledCard() {
      this.isDisabled = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply inline-block;

  &__inner {
    @apply relative w-full h-full
    transition-transform duration-1000
    cursor-pointer;
    transform-style: preserve-3d;
  }

  &__inner.is-flipped {
    transform: rotateY(-180deg);
  }

  &.disabled .card__inner {
    @apply cursor-default;
  }

  &__face {
    @apply absolute w-full h-full overflow-hidden bg-dark
    rounded-2xl p-4 shadow-[0px_3px_18px_3px_rgb(0,0,0,0.2)];
    backface-visibility: hidden;

    &--front .card__content {
      @apply w-full h-full;

      background: center / contain no-repeat
        url("../assets/images/icon_back.png");
    }

    &--back {
      & .card__content {
        background: center / contain no-repeat;
        width: 100%;
        height: 100%;
      }
      @apply bg-light;
      transform: rotateY(-180deg);
    }
  }
}
</style>
