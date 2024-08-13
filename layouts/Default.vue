<template>
  <div class="layout">
    <Header class="layout__header"></Header>
    <slot />
    <Footer class="layout__footer"></Footer>
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/modules/breakpoints';

.layout {
  width: 100%;

  &__header {
    margin-bottom: var(--spacing-xl);

    @media screen and (min-width: $breakpoint-md) {
      margin-bottom: var(--spacing-xxl);
    }
  }

  &__footer {
    margin-top: var(--spacing-xl);

    @media screen and (min-width: $breakpoint-md) {
      margin-top: var(--spacing-xxl);
    }
  }
}
</style>