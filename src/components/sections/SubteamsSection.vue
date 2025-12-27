<template>
  <section class="subteams">
    <div class="container">
      <h2 class="section-title">{{ t.subteams.title }}</h2>
      <p class="section-subtitle">
        {{ t.subteams.subtitle }}
      </p>
      <div class="subteams-grid">
        <SubteamCard
          v-for="subteam in subteams"
          :key="subteam.id"
          :title="subteam.title"
          :description="subteam.description"
          :icon="subteam.icon"
          :icon-type="subteam.iconType"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import SubteamCard from '../SubteamCard.vue'

// SVG Icons for each subteam
const mechanicalIcon = `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="50" r="8" fill="currentColor"/>
    <path d="M50 15 L50 25 M50 75 L50 85 M15 50 L25 50 M75 50 L85 50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M30 30 L35 35 M70 30 L65 35 M30 70 L35 65 M70 70 L65 65" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>
`

const programmingIcon = `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="25" width="60" height="50" rx="5" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M30 40 L25 50 L30 60 M70 40 L75 50 L70 60" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M40 45 L50 50 L40 55 M60 45 L50 50 L60 55" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="50" cy="50" r="2" fill="currentColor"/>
  </svg>
`

const prIcon = `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 40 Q25 25 40 25 L60 25 Q75 25 75 40 L75 60 Q75 75 60 75 L40 75 Q25 75 25 60 Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="12" fill="currentColor"/>
    <path d="M50 42 L50 58 M42 50 L58 50" stroke="#0a0a14" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M20 20 L25 25 M80 20 L75 25 M20 80 L25 75 M80 80 L75 75" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
  </svg>
`

const rdIcon = `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 20 L45 40 L35 40 L50 55 L65 40 L55 40 Z" fill="currentColor"/>
    <path d="M50 55 L30 80 L70 80 Z" fill="currentColor"/>
    <circle cx="50" cy="65" r="2.5" fill="#0a0a14"/>
    <path d="M50 55 L50 75" stroke="#0a0a14" stroke-width="2" stroke-linecap="round"/>
    <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="70" cy="30" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="30" cy="70" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="70" cy="70" r="2" fill="currentColor" opacity="0.6"/>
  </svg>
`

const { t } = useI18n()

const subteams = computed(() => [
  {
    id: 1,
    title: t.value.subteams.mechanical.title,
    description: t.value.subteams.mechanical.description,
    icon: mechanicalIcon,
    iconType: 'svg'
  },
  {
    id: 2,
    title: t.value.subteams.programming.title,
    description: t.value.subteams.programming.description,
    icon: programmingIcon,
    iconType: 'svg'
  },
  {
    id: 3,
    title: t.value.subteams.pr.title,
    description: t.value.subteams.pr.description,
    icon: prIcon,
    iconType: 'svg'
  },
  {
    id: 4,
    title: t.value.subteams.rd.title,
    description: t.value.subteams.rd.description,
    icon: rdIcon,
    iconType: 'svg'
  }
])
</script>

<style scoped>
.subteams {
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

.subteams-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .subteams {
    padding: 60px 0;
  }

  .subteams-grid {
    grid-template-columns: 1fr;
  }
}
</style>

