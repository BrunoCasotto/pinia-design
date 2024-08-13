<template>
  <div class="exibition-section">
    <div class="exibition-section__col">
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
      class="exibition-section__col exibition-section__col--align-center"
    >
      <NuxtImg
        class="exibition-section__img"
        :src="imageSrc"
        :alt="imageAlt"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    imageSrc?: string
    imageAlt?: string
    title: string
    description: string
  }

  defineProps<Props>()
</script>

<style lang="scss">
  @import '~/assets/scss/modules/floating';
  @import '~/assets/scss/modules/breakpoints';

  .exibition-section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    &__col {
      flex: 1;
      min-width: 300px;
      &:not(:last-child) {
        margin-bottom: var(--spacing-xl);

        @media screen and (min-width: $breakpoint-md) {
          margin-bottom: 0;
          margin-right: var(--spacing-xxl);
        }
      }

      &--align-center {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &__description {
      text-align: center;
    }

    &__title {
      text-align: center;
      margin-bottom: var(--spacing-xl);

      @media screen and (min-width: $breakpoint-md) {
        margin-bottom: var(--spacing-xxl);
      }
    }

    &__img {
      width: 100%;
      height: auto;
      @include floating(5s, 1s);
    }
  }
</style>