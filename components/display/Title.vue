<template>
  <component
    v-bind:is="variant"
    :bind="props"
    class="title"
    :class="`title--${size}`"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
const props = defineProps<{
  variant: String,
  size?: String
}>()

const size = computed(() => props.size || '')
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  font-size: var(--font-size-lg);

  &--xxl {
    font-size: var(--font-size-xxl);
  }

  &--xl {
    font-size: var(--font-size-xl);
  }
}
</style>