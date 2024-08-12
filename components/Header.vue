<template>
  <div class="header">
    <DisplayTypoGraphy
      class="header__title"
      variant="h1"
      size="xxl"
    >
      Pinia
    </DisplayTypoGraphy>
    <NuxtImg
      class="header__icon"
      src="/img/pinia.png"
      alt="imagem de um abacaxi"
    />

  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/modules/breakpoints';

  .header {
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: var(--spacing-sm);

    &__title {
      margin-right: var(--spacing-lg);
    }

    &__icon {
      cursor: pointer;
      transform: rotate(15deg);
      width: 50px;

      @media screen and (max-width: $breakpoint-md) {
        width: 30px;
      }
    }
  }
</style>