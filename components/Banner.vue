<i18n>
  {
    "en": { "developer": "Full stack developer", "text": "Tell me about your project, I would be delighted to provide you with all the development solutions for your web and application project." },
    "fr": { "developer": "Developpeur full stack", "text": "Parlez-moi de votre projet, je serais ravi de vous apporter toutes les solutions de développement pour votre projet web et application." },
  }
</i18n>

<template>
    <div class="banner">
      <template v-if="props.isTitle">
        <h1
          v-for="n in 3"
          :key="n"
          class="banner__animation banner__animation--title"
        >
          <span
            v-for="(item, index) in props.textArray"
            :key="index"
            class="banner__item"
          >
          {{ t(item) }}*
          </span>
        </h1>
      </template>
      <template v-else>
        <p
          v-for="n in 3"
          :key="n"
          class="banner__animation banner__animation--text"
        >
          <span
            v-for="(item, index) in props.textArray"
            :key="index"
            class="banner__item"
          >
          {{ t(item) }}
          </span>
        </p>
      </template>
    </div>
  </template>
  
  <script lang="ts" setup>
  const { t } = useI18n()
  interface IProps {
    textArray: string[]
    isTitle?: boolean
  }
  
  const props = withDefaults(defineProps<IProps>(), {
    isTitle: false,
  })
  </script>
  
  <style scoped lang="scss">
  .banner {
    height: 37px;
    display: flex;
    align-items: center;
    font-size: $fontSize * 2.5;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid $colorMain;
  }
  
  .banner__item {
    width: auto;
    padding: 0 $gutter * 0.7;
  }
  .banner__animation {
    animation: animate 35s linear infinite;
    animation-delay: 2s;
  
    &--text {
      animation-duration: 120s;
    }
  }
  @keyframes animate {
    0% {
      transform: translate(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  @media screen and (min-width: 1024px) {
    .banner {
      height: 100px;
    }
  
    .banner__item {
      padding: 0 $gutter * 5;
    }
  }
  </style>
  