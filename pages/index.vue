<template>
  <div class="breakpoint">
    <section class="section section--lg section--break">
      <ExibiontSection
        :imageSrc="mainExibition.imageSrc"
        :imageAlt="mainExibition.imageAlt"
        :title="mainExibition.title"
        :description="mainExibition.description"
        :inverted="mainExibition.inverted"
      />
    </section>

    <section class="section section--background-one">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Organização
      </DisplayTypoGraphy>
    </section>

    <section class="section section--break">
      <ExibiontSection
        :imageSrc="gavetaExibition.imageSrc"
        :imageAlt="gavetaExibition.imageAlt"
        :title="gavetaExibition.title"
        :description="gavetaExibition.description"
        :inverted="gavetaExibition.inverted"
      />
    </section>

    <section class="section section--background-two">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Produtividade
      </DisplayTypoGraphy>
    </section>

    <section class="section section--break">
      <ExibiontSection
        :imageSrc="cellphoneExibition.imageSrc"
        :imageAlt="cellphoneExibition.imageAlt"
        :title="cellphoneExibition.title"
        :description="cellphoneExibition.description"
        :inverted="cellphoneExibition.inverted"
      />
    </section>

    <section class="section section--background-one">
      <DisplayTypoGraphy
        class="section__title"
        variant="h2"
        size="xxl"
        weight="bold"
      >
        Tudo ao seu alcance
      </DisplayTypoGraphy>
    </section>

    <section class="section section--break">
      <ExibiontSection
        :imageSrc="headSetExibition.imageSrc"
        :imageAlt="headSetExibition.imageAlt"
        :title="headSetExibition.title"
        :description="headSetExibition.description"
        :inverted="headSetExibition.inverted"
      />
    </section>

    <section class="section section--background-two">
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
      <DisplayTypoGraphy variant="p" size="lg">
        Ao contrário dos suportes de monitor tradicionais, este sistema
        modular permite que você adquira e combine diferentes módulos para criar uma configuração que atenda
        perfeitamente às suas necessidades e preferências.
      </DisplayTypoGraphy>
    </section>
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()
  const { cdn } = config.public

  interface Exibition {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    inverted: boolean;
  }

  const mainExibition: Exibition = {
    title: 'Seu novo suporte para monitor',
    description: `Um suporte de monitor modular é um acessório inovador projetado para maximizar a flexibilidade e personalização
        do seu espaço de trabalho ou setup gamer.`,
    imageSrc: `${cdn.product}/sup_completo.png${cdn.optmise}${cdn.auth}`,
    imageAlt: 'imagem de um suporte para monitor',
    inverted: false
  }

  const gavetaExibition: Exibition = {
    title: 'Módulo de Gaveta',
    description: `um compartimento acoplável ao suporte de monitor, que oferece espaço extra para armazenar pequenos itens, como cabos, acessórios, ou documentos. Discreto e de fácil acesso, mantém sua área de trabalho organizada e limpa.`,
    imageSrc: `${cdn.product}/mod_gav.png${cdn.optmise}${cdn.auth}`,
    imageAlt: 'imagem de uma gaveta modular para o monitor',
    inverted: true
  }

  const cellphoneExibition: Exibition = {
    title: 'Módulo de Suporte para Celular',
    description: `Um acessório acoplável ao suporte de monitor, que mantém o celular visível e acessível, ideal para multitarefa. Oferece ajuste de ângulo e, em alguns modelos, carregamento sem fio integrado.`,
    imageSrc: `${cdn.product}/mod_cell.png${cdn.optmise}${cdn.auth}`,
    imageAlt: 'imagem de um suporte para celular',
    inverted: false
  }

  const headSetExibition: Exibition = {
    title: 'Módulo de Suporte para Headset',
    description: `Um suporte acoplável ao suporte de monitor, projetado para armazenar seu headset de forma prática e organizada. Mantém o fone de ouvido ao alcance, economizando espaço na mesa e garantindo que ele esteja sempre protegido e pronto para uso.`,
    imageSrc: `${cdn.product}/mod_headset.png${cdn.optmise}${cdn.auth}`,
    imageAlt: 'imagem de um suporte para headset',
    inverted: true
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

  &--lg {
    min-height: 600px;
  }

  &--break {
    @include breakpoint();
    padding: 0 var(--spacing-lg);

    @media screen and (min-width: $breakpoint-md) {
      padding: 0;
    }
  }

  &--background-one {
    color: var(--color-font-contrast);
    @include parallax("/img/background/desktop.webp", 500px);
  }

  &--background-two {
    color: var(--color-font-contrast);
    @include parallax("/img/background/desktop_2.webp", 500px);
  }

  &__title {
    text-align: center;
  }
}
</style>