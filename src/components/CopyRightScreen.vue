<template>
  <p class="copyright">
    This is mini project
    <br class="sm:hidden" />
    <a :href="hrefLink" :target="targetLink">view here</a>
  </p>
</template>

<script>
export default {
  data() {
    return {
      hrefLink: "https://github.com/thaolaptrinh/vuejs-flip-card",
      targetLink: "_blank",
    };
  },
};
</script>

<style lang="postcss" scoped>
.copyright {
  @apply fixed left-[50%]
  bottom-[1.5rem]  -translate-x-1/2
  text-light text-center z-10 text-[1.3rem] md:text-[1.5rem];
}

.copyright a {
  @apply text-primary underline;
}
</style>
