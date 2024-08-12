<template>
  <div class="breakpoint">
    <section class="section section--xl section--break">
      <ExibiontSection
        imageSrc="/img/product/sup_completo.png"
        imageAlt="imagem de um suporte para monitor"
        title="Seu novo suporte para monitor"
        description="Um suporte de monitor modular é um acessório inovador projetado para maximizar a flexibilidade e personalização
        do seu espaço de trabalho ou setup gamer."
      />
    </section>

    <section class="section section--desktop section--mb">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Moderno e modular
      </DisplayTypoGraphy>
    </section>

    <section class="section section--xl section--break">
      <ExibiontSection
        imageSrc="/img/product/mod_gav.png"
        imageAlt="imagem de uma gaveta modular para o monitor"
        title="Módulo de Gaveta"
        description="um compartimento acoplável ao suporte de monitor, que oferece espaço extra para armazenar pequenos itens, como cabos, acessórios, ou documentos. Discreto e de fácil acesso, mantém sua área de trabalho organizada e limpa."
      />
    </section>

    <section class="section section--desktop-2 section--mb">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Flexibilidade
      </DisplayTypoGraphy>
    </section>

    <section class="section section--xl section--break">
      <ExibiontSection
        imageSrc="/img/product/mod_cell.png"
        imageAlt="imagem de um suporte para celular"
        title="Módulo de Suporte para Celular"
        description="Um acessório acoplável ao suporte de monitor, que mantém o celular visível e acessível, ideal para multitarefa. Oferece ajuste de ângulo e, em alguns modelos, carregamento sem fio integrado."
      />
    </section>

    <section class="section section--desktop section--mb">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Minimalista
      </DisplayTypoGraphy>
    </section>

    <section class="section section--xl section--break">
      <ExibiontSection
        imageSrc="/img/product/mod_headset.png"
        imageAlt="imagem de um suporte para celular"
        title="Módulo de Suporte para Headset"
        description="Um suporte acoplável ao suporte de monitor, projetado para armazenar seu headset de forma prática e organizada. Mantém o fone de ouvido ao alcance, economizando espaço na mesa e garantindo que ele esteja sempre protegido e pronto para uso."
      />
    </section>

    <section class="section section--desktop section--mb">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Minimalista
      </DisplayTypoGraphy>
    </section>

    <section class="section section--xl section--break">
      <ExibiontSection
        imageSrc="/img/product/mod_gav_animation.gif"
        imageAlt="imagem de uma gaveta modular para o monitor"
        title="Módulo de Gaveta"
        description="um compartimento acoplável ao suporte de monitor, que oferece espaço extra para armazenar pequenos itens, como cabos, acessórios, ou documentos. Discreto e de fácil acesso, mantém sua área de trabalho organizada e limpa."
      />
    </section>

    <!-- 
    <section class="section section--xl">
      <DisplayTypoGraphy variant="p" size="lg">
        Ao contrário dos suportes de monitor tradicionais, este sistema
        modular permite que você adquira e combine diferentes módulos para criar uma configuração que atenda
        perfeitamente às suas necessidades e preferências.
      </DisplayTypoGraphy>
    </section>-->

    <section class="section">

    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '~/assets/scss/modules/parallax';

.section {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-lg);

  &__title {
    text-align: center;
  }

  &--xl {
    min-height: 500px
  }

  &--mb {
    margin-bottom: var(--spacing-lg);
  }

  &--break {
    width: 100%;
    max-width: var(--breakpoint-xl);
    margin: 0 auto var(--spacing-lg) auto;
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