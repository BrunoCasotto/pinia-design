<template>
  <div class="layout">
    <Header class="layout__header"></Header>
    <slot />
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/modules/breakpoints';

.layout {
  width: 100%;

  &__header {
    margin-bottom: var(--spacing-lg);

    @media screen and (min-width: $breakpoint-md) {
      margin-bottom: var(--spacing-xl);
    }
  }
}
</style>