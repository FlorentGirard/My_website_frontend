<template>
  <div class="home">
    <Banner is-title :text-array="homeData.textArray" />
    <div class="home__content">
      <section class="home__sectionLeft">
        <div class="home__firstView">
          <p class="home__presentation">
            *Je conçois et développe vos projets web, site internet et
            application.
          </p>
        </div>

        <Banner
          v-if="isDesktop"
          :text-array="homeData.text"
          class="home__bannerHideMobil"
        />

        <Form class="home__form--hideMobil" />
      </section>

      <section class="home__sectionRight">
        <Caroussel class="home__caroussel" />
        <div class="home__blockCard">
          <Card
            title="Conception"
            paragraph="lorem fffffffffffffffffffffffffffffffffffffffffff"
          />
          <Card
            title="développement"
            paragraph="lorem fffffffffffffffffffffffffffffffffffffffffff"
          />
        </div>
        <section class="home__hero">
          <a :href="`mailto:${config.public.email}`" class="theFooter__email">
            {{ config.public.email }} ↗
          </a>
        </section>
        <div v-if="isMobile" class="home__hideWeb">
          <Banner :text-array="homeData.text" />
        </div>

        <Form class="home__form home__form--hideWeb" />

        <Contact class="home__contact"/>
      </section>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig()
const { isDesktop, isMobile } = useDevice()

const homeData = reactive({
  textArray: [
    'Développeur Full Stack JavaScript*',
    'Développeur Full Stack JavaScript*',
    'Développeur Full Stack JavaScript*',
  ],
  text: [
    'Parlez-moi de votre projet, je serais ravi de vous apporter toutes les solutions de développement pour votre projet web et application.',
    'Parlez-moi de votre projet, je serais ravi de vous apporter toutes les solutions de développement pour votre projet web et application.',
    'Parlez-moi de votre projet, je serais ravi de vous apporter toutes les solutions de développement pour votre projet web et application.',
  ],
})
</script>
<style lang="scss" scoped>
.home {
  border: 1px solid $colorMain;
  box-sizing: border-box;
}
.home__bannerBorder,
.home__title,
.home__presentation,
.home__form--hideMobil {
  display: none;
}

.home__hero {
  background-color: $colorMain;
  color: $colorLight;
  height: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $fontSize * 1.5;
}

@media screen and (min-width: 1024px) {
  .home__hideWeb,
  .home__form--hideWeb {
    display: none;
  }

  .home__form--hideMobil {
    display: block;
  }
  .home__bannerBorder {
    display: flex;
  }
  .home__content {
    display: flex;
    justify-content: space-between;
    
  }

  .home__sectionRight {
    width: 25%;
    max-width: 500px;
    border-left: 1px solid $colorMain;
    flex: none;
    position: relative;
  }

  .home__sectionLeft {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;
    position: relative;
    //height: 100vh;
    //border-bottom: 1px solid $colorMain;
  }

  .home__firstView {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 103px);
    border-bottom: 1px solid $colorMain;
  }

  .home__presentation {
    display: block;
    text-align: center;
    margin: auto 0;

    font-size: $fontSize * 2;
    border-bottom: none;
  }

  .home__hero {
    display: none;
  }
  .home__contact {
    margin-top: $gutter * 24.2;
  }

  .home__blockCard {
    position: absolute;
    right: 1px;
    left: 0;
    z-index: 2;
  }
}
</style>
