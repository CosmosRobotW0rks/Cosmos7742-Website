<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
    <FirstAcademyBanner />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import FirstAcademyBanner from './components/FirstAcademyBanner.vue'
</script>

<style scoped>
#app {
  min-height: 100vh;
  position: relative;
}
</style>

