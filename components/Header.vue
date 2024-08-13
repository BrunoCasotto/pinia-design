<template>
  <div class="header">
    <div class="header__container">
      <NuxtImg
        class="header__icon"
        src="/img/pinia.png"
        alt="imagem de um abacaxi"
      />

      <DisplayTypoGraphy
        class="header__title"
        variant="h1"
        size="xl"
      >
        Pinia
      </DisplayTypoGraphy>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/modules/breakpoints';

  .header {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-lg) 0 var(--spacing-lg);

    &__container {
      display: flex;
      align-items: baseline;
      @include breakpoint();
    }

    &__icon {
      cursor: pointer;
      transform: rotate(15deg);
      width: 20px;
      height: auto;
      margin-right: var(--spacing-md);
    }
  }
</style>