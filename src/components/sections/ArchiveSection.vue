<template>
  <section class="archive">
    <div class="container">
      <h2 class="section-title">{{ t.archive.title }}</h2>
      <div class="archive-content">
        <p class="archive-notice">{{ t.archive.comingSoon }}</p>
        <div class="seasons-grid">
          <SeasonCard
            v-for="season in seasons"
            :key="season.id"
            :year="season.year"
            :name="season.name"
            :image="season.image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n'
import SeasonCard from '../SeasonCard.vue'

const { t } = useI18n()
import season1Image from '@/assets/images/AAA/2024-2025-Reefscape.jpg'
import season2Image from '@/assets/images/AAA/TEAM24.jpg'
import season3Image from '@/assets/images/AAA/31db1185-8299-4935-91b0-1e0d7d089717-1.jpg'
import season4Image from '@/assets/images/AAA/FRC2021-2022.png'

const seasons = ref([
  { id: 1, year: '2024-2025', name: 'REEFSCAPE', image: season1Image },
  { id: 2, year: '2023-2024', name: 'CRESCENDO', image: season2Image },
  { id: 3, year: '2022-2023', name: 'CHARGED UP', image: season3Image },
  { id: 4, year: '2021-2022', name: 'RAPID REACT', image: season4Image }
])
</script>

<style scoped>
.archive {
  padding: 100px 0;
  background: linear-gradient(180deg, #0a0a14 0%, #1a1a2e 100%);
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
  margin-bottom: 2rem;
  letter-spacing: 3px;
}

.archive-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.archive-notice {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 2rem;
}

.seasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .archive {
    padding: 60px 0;
  }

  .seasons-grid {
    grid-template-columns: 1fr;
  }
}
</style>

