<template>
    <footer class="footer">
      <div class="footer__flex">
        <div class="footer__flex footer__flex--reverse">  
          <NuxtLink
          v-for="item in (locales as any)"
          :key="item.code"
          :to="switchLocalePath(item.code)"
          class="footer__choiceLanguage"
          :class="{
            'footer__choiceLanguage--active': item.code === locale,
          }"
                >
          <span class="footer__language">{{ item.name }} </span>
                </NuxtLink>
        </div>
        <span class="footer__copyright"
          >&copy;{{ footerData.copyright }}Florent Girard</span
        >
      </div>
      <a href="https://www.visualclub-studio.com/">Design by VISUAL CLUB ↗</a>
    </footer>
  </template>
  
  <script setup lang="ts">
  const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
  const event = new Date()
  
  const footerData = reactive({
    copyright: event.getFullYear(),
  })
  </script>
  
  <style scoped lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $colorMain;
    padding: 0 $gutter * 2 0 0;
    height: 50px;
  }

  .footer__flex { 
    display: flex;
    align-items: center;

    &--reverse {
      flex-direction: row-reverse;
    }
 
  }

  .footer__choiceLanguage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-right: 1px solid $colorMain;
    text-transform: uppercase;

    &--active {
      background-color: $colorMain;
      color: $colorLight;

    }
  }

  .footer__copyright {
    text-transform: uppercase;
    padding-left: $gutter *2;
  }
  
  @media screen and (min-width: 1024px) {
   
  }
  </style>