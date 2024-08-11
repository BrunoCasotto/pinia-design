<template>
  <img
    :src="src"
    :srcset="srcset"
    :alt="alt"
    :loading="loading"
  />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  src: string;
  alt: string;
  srcset?: string;
  loading?: 'lazy' | 'eager' | 'auto';
}>();

const {
  src,
  srcset = '',
  alt,
  loading = 'lazy'
} = props;
</script>
