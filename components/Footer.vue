<template>
  <div class="footer">
    <div class="footer__social">
      <a href="#" class="footer__social__link">
        <Icon name="tabler:brand-facebook" style="color: black" />
      </a>
      <a href="#" class="footer__social__link">
        <Icon name="tabler:brand-instagram" style="color: black" />
      </a>
      <a href="#" class="footer__social__link">
        <Icon name="tabler:brand-pinterest" style="color: black" />
      </a>
    </div>
    <DisplayTypoGraphy class="footer__copy-rights" variant="p" size="sm" weight="bold">
      © 2024 Pinia. Todos os direitos reservados.
    </DisplayTypoGraphy>

  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '~/assets/scss/modules/breakpoints';

.footer {
  height: 100px;
  border-top: 1px solid var(--color-shadown-default);
  padding: var(--spacing-lg);

  &__social {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-lg);
    @include breakpoint();

    &__link {
      font-size: var(--font-size-xl);

      &:not(:last-child) {
        margin-right: var(--spacing-lg);
      }
    }
  }

  &__copy-rights {
    text-align: center;
  }
}
</style>