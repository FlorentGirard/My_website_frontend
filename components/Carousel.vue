<template>
    <Swiper
      :modules="[SwiperEffectCreative, SwiperPagination]"
      :slides-per-view="1"
      :loop="false"
      :effect="'creative'"
      :pagination="false"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      class="carousel"
    >
      <SwiperSlide
        v-for="(slide, index) in carouselData.projects"
        :key="index"
        class="swiper__slide"
      >
        <img
          :src="`/picture/${slide.picture}`"
          :alt="slide.alt"
          class="carousel__picture"
        />
        <div class="carousel__footer">
          <h2 class="carousel__titleProject" :href="slide.link">
            {{ slide.title }}
          </h2>
          <img src="/picture/svg/more.svg" />
        </div>
      </SwiperSlide>
    </Swiper>
  </template>
  
  <script lang="ts" setup>
  const carouselData = reactive({
    projects: [
      {
        picture: 'davidbehar5 1.jpg',
        alt: 'VisualClub',
        title: 'visualclub-studio',
        link: 'https://www.visualclub-studio.com/',
      },
  
      {
        picture: 'portfollio_alex.webp',
        alt: 'bananamisu',
        title: 'bananamisu.fr',
        link: 'http://gallery.visualclub-studio.com/',
      },
      {
        picture: 'visualClub.webp',
        alt: 'VisualClub',
        title: 'visualclub-studio.com',
        link: 'https://www.visualclub-studio.com/',
      },
    ],
  })
  </script>
  
  <style lang="scss" scoped>
  .carousel {
    border-top: 1px solid $colorMain;
    border-bottom: 1px solid $colorMain;
    height: calc(100vh - 103px);
    position: relative;
  }
  .carousel__picture {
    width: calc(100% - 1px);
    height: 100%;
  }
  
  .carousel__footer {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $fontSize * 1.4;
  }
  
  .carousel__titleProject {
    text-transform: uppercase;
  }
  
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 15px;
    right: 20px;
    left: auto !important;
    transform: translate(0) !important;
  }
  .swiper-pagination {
    text-align: right;
  }
  
  @media screen and (min-width: 124px) {
    .carousel {
      margin-top: 0;
      border-top: none;
    }
  }
  </style>
  