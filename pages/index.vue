<template>
    <div>
        
        <Banner is-title :text-array="homeData.textArray" />
        <Carousel />
    </div>
</template>

<script setup lang="ts">

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

<style scoped lang="scss">

</style>