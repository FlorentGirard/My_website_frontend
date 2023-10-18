<template>
    <div
      class="card"
      :class="{ 'card--active': isActive }"
      @click="toggleContent"
    >
      <div class="card__header">
        <div class="card__title">{{ props.title }}</div>
        <div v-if="!isActive" class="card__icon">+</div>
        <div v-else class="card__icon">-</div>
      </div>
      <div class="card__content" :style="{ height: contentHeight + 'px' }">
        <p class="card__paragraph">{{ props.paragraph }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps<{
    title: string
    paragraph: string
  }>()
  
  const isActive = ref(false)
  const contentHeight = ref(0)
  
  const toggleContent = () => {
    isActive.value = !isActive.value
    if (isActive.value) {
      contentHeight.value = 390
    } else {
      contentHeight.value = 0
    }
  }
  </script>
  
  <style scoped lang="scss">
  .card {
    flex-direction: column;
    justify-content: center;
    height: 100px;
    padding: 0 $gutter * 2.7 0 $gutter * 2;
    border-bottom: 1px solid $colorMain;
    transition: height 0.5s ease;
  }
  
  .card--active {
    height: 390px;
  }
  
  .card__header {
    padding-top: $gutter * 3.6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .card__title {
    height: 32px;
    font-size: 24px;
    text-transform: uppercase;
  }
  
  .card__icon {
    font-size: 32px;
    transition: transform 0.2s ease;
  
    &--active {
      transform: rotate(45deg);
    }
  }
  
  .card__content {
    overflow: hidden;
    margin-top: $gutter * 3.6;
  }
  
  .card__paragraph {
    font-size: 16px;
    line-height: 1.5;
  }
  </style>
  