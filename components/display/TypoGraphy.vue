<template>
  <component
    v-bind:is="variant"
    :class="['text', sizeClass, weightClass]"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  variant: string;
  size?: string;
  weight?: string;
}>();

const sizeClass = computed(() => props.size ? `text--${props.size}` : '');
const weightClass = computed(() => props.weight ? `text--weight-${props.weight}` : '');
</script>

<style lang="scss" scoped>
.text {
  font-size: var(--font-size-lg);

  &--xs {
    font-size: var(--font-size-xs);
  }

  &--sm {
    font-size: var(--font-size-sm);
  }

  &--md {
    font-size: var(--font-size-md);
  }

  &--lg {
    font-size: var(--font-size-lg);
  }

  &--xl {
    font-size: var(--font-size-xl);
  }

  &--xxl {
    font-size: var(--font-size-xxl);
  }

  &--weight-light {
    font-weight: 300;
  }

  &--weight-normal {
    font-weight: 400;
  }

  &--weight-bold {
    font-weight: 700;
  }
}
</style>