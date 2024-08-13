<template>
  <nav class="header" :class="{ 'header--fixed': fixed }">
    <div class="header__container">
      <NuxtImg
        class="header__icon"
        :src="iconPath"
        alt="imagem de um abacaxi"
      />

      <DisplayTypoGraphy
        class="header__title"
        variant="h1"
        size="xl"
      >
        {{ brandName }}
      </DisplayTypoGraphy>
    </div>
  </nav>
</template>

<script setup lang="ts">
const iconPath = '/img/pinia/icon_sm.png'
const brandName = 'Pinia'
defineProps<{ fixed: boolean }>()
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/modules/breakpoints';

  .header {
    width: 100%;
    position: absolute;
    top: 0;
    cursor: pointer;
    padding: var(--spacing-md) var(--spacing-lg);
    background-color: var(--color-neutral);
    transition: all .5s ease;

    &--fixed {
      top: -100px;
      top: 0;
      position: fixed;
      left: 0;
      z-index: 1;
      box-shadow: 0px 0px 18px 1px var(--color-shadown-default);
    }

    &__container {
      display: flex;
      align-items: baseline;
      justify-content: center;
      @include breakpoint();
    }

    &__icon {
      width: 30px;
      height: auto;
      margin-right: var(--spacing-md);
      transition: all .3s ease;
    }

    &:hover {
      .header__icon {
        transform: rotate(15deg);
      }
    }
  }
</style>