<template>
    <footer class="footer">
      <span class="footer__copyright"
        >&copy;{{ footerData.copyright }}Florent Girard</span
      >
      <a href="https://www.visualclub-studio.com/">Design by VISUAL CLUB ↗</a>
    </footer>
  </template>
  
  <script setup lang="ts">
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
    margin: 0 $gutter * 2;
    height: 55px;
  }
  
  .footer__copyright {
    text-transform: uppercase;
  }
  
  @media screen and (min-width: 1024px) {
    .footer {
      margin: 0;
      padding: 0 $gutter * 3;
    }
  }
  </style>