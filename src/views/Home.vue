<template>
  <div class="home">
    <HeroSection id="home" />
    <AboutSection id="about" />
    <WorkSection id="work" />
    <SponsorsSection id="sponsors" />
    <SubteamsSection id="subteams" />
    <ArchiveSection id="archive" />
    <MagazineSection id="magazines" />
    <ContactSection id="contact" />
  </div>
</template>

<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import WorkSection from '../components/sections/WorkSection.vue'
import SponsorsSection from '../components/sections/SponsorsSection.vue'
import SubteamsSection from '../components/sections/SubteamsSection.vue'
import ArchiveSection from '../components/sections/ArchiveSection.vue'
import MagazineSection from '../components/sections/MagazineSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
</script>

<style scoped>
.home {
  width: 100%;
}
</style>

