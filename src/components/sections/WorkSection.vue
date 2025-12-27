<template>
  <section class="work">
    <div class="container">
      <h2 class="section-title">{{ t.work.title }}</h2>
      <p class="section-subtitle">
        {{ t.work.subtitle }}
      </p>
      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :id="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import ProjectCard from '../ProjectCard.vue'
import iccImage from '@/assets/images/AAA/ICC-Istanbul-toplu-2.jpg'
import project1Image from '@/assets/images/AAA/Mentoring-2.png'
import project2Image from '@/assets/images/AAA/2.jpg'
import project3Image from '@/assets/images/AAA/3-1.jpg'

const { t } = useI18n()

const projects = computed(() => [
  {
    id: 1,
    title: t.value.work.projects.icc2024.title,
    description: t.value.work.projects.icc2024.description,
    image: iccImage
  },
  {
    id: 2,
    title: t.value.work.projects.firstAcademy.title,
    description: t.value.work.projects.firstAcademy.description,
    image: project1Image
  },
  {
    id: 3,
    title: t.value.work.projects.oceanHeroes.title,
    description: t.value.work.projects.oceanHeroes.description,
    image: project2Image
  },
  {
    id: 4,
    title: t.value.work.projects.allCanSTEM.title,
    description: t.value.work.projects.allCanSTEM.description,
    image: project3Image
  }
])
</script>

<style scoped>
.work {
  padding: 100px 0;
  background: linear-gradient(180deg, #1a1a2e 0%, #0a0a14 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #ff4444;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 3px;
}

.section-subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .work {
    padding: 60px 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

