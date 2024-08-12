<template>
  <div class="breakpoint">
    <section class="section">
      <ExibiontSection
        imageSrc="/img/product_example.png"
        title="Seu novo suporte para monitor"
        description="Um suporte de monitor modular é um acessório inovador projetado para maximizar a flexibilidade e personalização
        do seu espaço de trabalho ou setup gamer."
      />
    </section>

    <section class="section section--desktop">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Seu novo suporte para monitor
      </DisplayTypoGraphy>
    </section>

    <section class="section section--xl">
      <DisplayTypoGraphy variant="p" size="lg">
        Ao contrário dos suportes de monitor tradicionais, este sistema
        modular permite que você adquira e combine diferentes módulos para criar uma configuração que atenda
        perfeitamente às suas necessidades e preferências.
      </DisplayTypoGraphy>
    </section>

    <section class="section section--desktop-2">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Flexibilidade
      </DisplayTypoGraphy>
    </section>

    <section class="section">

    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '~/assets/scss/modules/parallax';

.section {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    text-align: center;
  }

  &--xl {
    min-height: 600px
  }

  &--office {
    @include parallax("/img/office_min.jpeg", 500px);
  }

  &--desktop {
    color: var(--color-font-contrast);
    @include parallax("/img/desktop.webp", 500px);
  }

  &--desktop-2 {
    color: var(--color-font-contrast);
    @include parallax("/img/desktop_2.webp", 500px);
  }
}
</style>