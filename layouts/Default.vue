<template>
  <div class="layout">
    <Header class="layout__header" :fixed="fixedHeaders"></Header>
    <slot />
    <Footer class="layout__footer"></Footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const fixedHeaders = ref(false);

const handleScroll = () => {
  fixedHeaders.value = window.scrollY >= 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

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