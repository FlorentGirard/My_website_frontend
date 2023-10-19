<i18n>
  {
    "en":{"detail": "Details and contact", "live": "Place of activity", "stack": "My stack", "management": "Project management" },
    "fr":{"detail": "Détails et contact", "live": "Lieu d’activité", "stack": "Ma stack", "management": "Gestion de projets"}
  }
</i18n>

<template>
    <section class="contact">
      <h2 class="contact__title">{{ t('detail') }}</h2>
      <ul>
        <li class="contact__list">
          <a :href="`mailto:${config.public.email}`" class="theFooter__email">
            {{ config.public.email }} ↗</a
          >
        </li>
        <li class="contact__list contact__list--tel">
          <a :href="`tel:${config.public.tel}`"> {{ config.public.tel }}↗</a>
        </li>
        <li class="contact__list">
          <a href="https://www.linkedin.com/in/florentgirard-/">LinkedIn ↗</a>
        </li>
        <!--   <li class="contact__list">
          <a href="https://www.malt.fr/profile/florentgirard?overview=true"
            >Malt ↗</a
          >
        </li> -->
      </ul>
      <h2 class="contact__title">{{ t('live') }}</h2>
      <p class="contact__text">Métropole Lilloise et alentours (France).</p>
      <h2 class="contact__title">{{ t('stack') }}</h2>
      <p class="contact__text contact__text--uppercase">
        VUEJS/NUXTJS - NESTJS - ReactJs
      </p>
      <div class="contact__flex">
        <h2 class="contact__title">{{ t('management')}}/ DevOps</h2>
        <p class="contact__text contact__text--uppercase">
          Github - Agile(SCRUM) - GitFlow - BEM - TDD
        </p>
        <!--   <h2 class="contact__title">DevOps</h2>
        <p class="contact__text">
          Méthodologie Agile(SCRUM) - GitFlow - BEM - TDD
        </p> -->
      </div>
      <!-- <h2 class="contact__title">Partenaire pour la conception graphique</h2>
      <a href="https://www.visualclub-studio.com/">Visual Club ↗</a> -->
    </section>
  </template>
  
  <script setup lang="ts">
  const config = useRuntimeConfig()
  const {t} = useI18n()
  </script>
  
  <style lang="scss" scoped>
  .contact {
    margin: 0 $gutter * 2 $gutter * 5;
    font-size: $fontSize * 1.5;
  }
  .contact__title {
    text-decoration: underline;
    margin-bottom: $gutter * 2;
    margin-top: $gutter * 3;
  }
  .contact__list {
    display: block;
    padding: $gutter * 0.75 0;
  }
  
  .contact__text {
    line-height: 18px;
  
    &--uppercase {
      text-transform: uppercase;
    }
  }
  
  @media screen and (min-width: 1024px) {
    .contact {
      margin-bottom: 0;
    }
  
    .contact__list--tel {
      float: right;
      transform: translateY(-30px);
    }
  }
  </style>
  