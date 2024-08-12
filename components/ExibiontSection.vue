<template>
  <div class="exibition-section">
    <div class="exibition-section__information">
      <DisplayTypoGraphy
        class="exibition-section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        {{ title }}
      </DisplayTypoGraphy>

      <DisplayTypoGraphy
        class="exibition-section__description"
        variant="p"
        size="lg"
        weight="normal"
      >
        {{ description }}
      </DisplayTypoGraphy>
    </div>

    <div
      v-if="imageSrc"
      class="exibition-section__information exibition-section__information--center"
    >
      <NuxtImg
        class="exibition-section__img"
        :src="imageSrc"
        alt="imagem de um abacaxi"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    imageSrc?: string
    title: string
    description: string
  }

  defineProps<Props>()
</script>

<style lang="scss">
  @import '~/assets/scss/modules/floating';

  .exibition-section {
    padding: var(--spacing-xl);
    display: flex;
    flex-wrap: wrap;

    &__information {
      flex: 1;
      margin-right: var(--spacing-xxl);
      min-width: 300px;

      &--center {
        display: flex;
        justify-content: center;
      }
    }

    &__title {
      margin-bottom: var(--spacing-xl);
    }

    &__img {
      flex: 1;
      max-width: 300px;
      @include floating();
    }
  }
</style>