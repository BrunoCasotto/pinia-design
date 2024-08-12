<template>
  <div class="header">
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
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/modules/breakpoints';

  .header {
    width: 100%;
    display: flex;
    padding: var(--spacing-md) var(--spacing-lg) 0 var(--spacing-lg);
    align-items: baseline;

    &__icon {
      cursor: pointer;
      transform: rotate(15deg);
      width: 20px;
      height: auto;
      margin-right: var(--spacing-md);
    }
  }
</style>