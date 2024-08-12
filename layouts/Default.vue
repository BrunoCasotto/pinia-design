<template>
  <div class="layout-default">
    <Header></Header>
    <slot />
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .layout-default {
    width: 100%;
  }
</style>