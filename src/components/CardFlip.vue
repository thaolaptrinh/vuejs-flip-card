<template>
  <div class="card">
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
    imgBackFaceUrl: {
      type: String,
      require: true,
    },
  },

  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply inline-block w-[90px] h-[120px];

  &__inner {
    @apply relative w-full h-full
    transition-transform duration-1000
    cursor-pointer;
    transform-style: preserve-3d;
  }

  &__inner.is-flipped {
    transform: rotateY(-180deg);
  }

  &__face {
    @apply absolute w-full h-full overflow-hidden bg-light
    rounded-2xl p-4 shadow-[(0_3px_10px_3px_rgb(0,0,0,0.2))];
    backface-visibility: hidden;

    &--front .card__content {
      background: center / contain no-repeat
        url("../assets/images/icon_back.png");
      background-size: 50px 50px;
      width: 100%;
      height: 100%;
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
