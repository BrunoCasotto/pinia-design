<template>
  <div class="breakpoint">
    <section class="section section--break">
      <ExibiontSection
        :imageSrc="mainExibition.imageSrc"
        :imageAlt="mainExibition.imageAlt"
        :title="mainExibition.title"
        :description="mainExibition.description"
      />
    </section>

    <section class="section section--desktop">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Moderno e modular
      </DisplayTypoGraphy>
    </section>

    <section class="section section--break">
      <ExibiontSection
        :imageSrc="gavetaExibition.imageSrc"
        :imageAlt="gavetaExibition.imageAlt"
        :title="gavetaExibition.title"
        :description="gavetaExibition.description"
      />
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

    <section class="section section--break">
      <ExibiontSection
        :imageSrc="cellphoneExibition.imageSrc"
        :imageAlt="cellphoneExibition.imageAlt"
        :title="cellphoneExibition.title"
        :description="cellphoneExibition.description"
      />
    </section>

    <section class="section section--desktop">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Minimalista
      </DisplayTypoGraphy>
    </section>

    <section class="section section--break">
      <ExibiontSection
        :imageSrc="headSetExibition.imageSrc"
        :imageAlt="headSetExibition.imageAlt"
        :title="headSetExibition.title"
        :description="headSetExibition.description"
      />
    </section>

    <section class="section section--desktop">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Minimalista
      </DisplayTypoGraphy>
    </section>

    <!--
    <section class="section section--break">
      <ExibiontSection
        imageSrc="/img/product/mod_gav_animation.gif"
        imageAlt="imagem de uma gaveta modular para o monitor"
        title="Módulo de Gaveta"
        description="um compartimento acoplável ao suporte de monitor, que oferece espaço extra para armazenar pequenos itens, como cabos, acessórios, ou documentos. Discreto e de fácil acesso, mantém sua área de trabalho organizada e limpa."
      />
    </section>

    <section class="section section--xl">
      <DisplayTypoGraphy variant="p" size="lg">
        Ao contrário dos suportes de monitor tradicionais, este sistema
        modular permite que você adquira e combine diferentes módulos para criar uma configuração que atenda
        perfeitamente às suas necessidades e preferências.
      </DisplayTypoGraphy>
    </section>-->
  </div>
</template>

<script setup lang="ts">
  import { CDN_PRODUCT_IMG, CDN_AUTH } from '~/config/cnd.config'
  interface Exibition {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  }

  const mainExibition: Exibition = {
    title: 'Seu novo suporte para monitor',
    description: `Um suporte de monitor modular é um acessório inovador projetado para maximizar a flexibilidade e personalização
        do seu espaço de trabalho ou setup gamer.`,
    imageSrc: `${CDN_PRODUCT_IMG}/sup_completo.png/optimise?dppx=4&auth=${CDN_AUTH}`,
    imageAlt: 'imagem de um suporte para monitor'
  }

  const gavetaExibition: Exibition = {
    title: 'Módulo de Gaveta',
    description: `um compartimento acoplável ao suporte de monitor, que oferece espaço extra para armazenar pequenos itens, como cabos, acessórios, ou documentos. Discreto e de fácil acesso, mantém sua área de trabalho organizada e limpa.`,
    imageSrc: `${CDN_PRODUCT_IMG}/mod_gav.png/optimise?dppx=4&auth=${CDN_AUTH}`,
    imageAlt: 'imagem de uma gaveta modular para o monitor'
  }

  const cellphoneExibition: Exibition = {
    title: 'Módulo de Suporte para Celular',
    description: `Um acessório acoplável ao suporte de monitor, que mantém o celular visível e acessível, ideal para multitarefa. Oferece ajuste de ângulo e, em alguns modelos, carregamento sem fio integrado.`,
    imageSrc: `${CDN_PRODUCT_IMG}/mod_cell.png/optimise?dppx=4&auth=${CDN_AUTH}`,
    imageAlt: 'imagem de um suporte para celular'
  }

  const headSetExibition: Exibition = {
    title: 'Módulo de Suporte para Headset',
    description: `Um suporte acoplável ao suporte de monitor, projetado para armazenar seu headset de forma prática e organizada. Mantém o fone de ouvido ao alcance, economizando espaço na mesa e garantindo que ele esteja sempre protegido e pronto para uso.`,
    imageSrc: `${CDN_PRODUCT_IMG}/mod_headset.png/optimise?dppx=4&auth=${CDN_AUTH}`,
    imageAlt: 'imagem de um suporte para headset'
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/modules/parallax';
@import '~/assets/scss/modules/breakpoints';

.section {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  @media screen and (min-width: $breakpoint-md) {
    margin-bottom: var(--spacing-xxl);
  }

  &__title {
    text-align: center;
  }

  &--break {
    @include breakpoint();
    padding: 0 var(--spacing-lg);

    @media screen and (min-width: $breakpoint-md) {
      padding: 0;
    }
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