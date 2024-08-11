<template>
  <div class="header">
    <NuxtImg
      class="header__icon"
      width="60"
      src="/img/pinia.png"
      alt="imagem de um abacaxi"
    />
    <DisplayTitle variant="h1" size="xxl">
      Pinia
    </DisplayTitle>

  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    min-height: 40px;
    border-bottom: 1px solid var(--color-border-default);
    display: flex;
    justify-content: center;
    align-items: end;
    padding: var(--spacing-lg);

    &__icon {
      margin-right: var(--spacing-lg);
      cursor: pointer;
      transform: rotate(-15deg);
    }
  }
</style>