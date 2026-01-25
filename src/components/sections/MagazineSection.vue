<template>
  <section class="magazines" id="magazines">
    <div class="container">
      <h2 class="section-title">{{ t.magazines.title }}</h2>
      <p class="section-subtitle">
        {{ t.magazines.subtitle }}
      </p>
      
      <!-- Category Selection -->
      <div class="categories-grid">
        <div
          class="category-card"
          :class="{ active: selectedCategory === 'mentoring' }"
          @click="selectCategory('mentoring')"
        >
          <h3 class="category-title">{{ t.magazines.categories.mentoring }}</h3>
        </div>
        <div
          class="category-card"
          :class="{ active: selectedCategory === 'sdg' }"
          @click="selectCategory('sdg')"
        >
          <h3 class="category-title">{{ t.magazines.categories.sdg }}</h3>
        </div>
      </div>

      <!-- Magazine Grid -->
      <div v-if="currentMagazines.length > 0" class="magazines-grid">
        <div
          v-for="magazine in currentMagazines"
          :key="magazine.id"
          class="magazine-card"
        >
          <div class="magazine-image">
            <iframe
              :src="magazine.pdfUrl + '#page=1&zoom=75&toolbar=0&navpanes=0&scrollbar=0'"
              class="magazine-cover"
              loading="lazy"
            ></iframe>
            <div class="magazine-overlay">
              <div class="magazine-icon">📖</div>
            </div>
          </div>
          <div class="magazine-info">
            <h3 class="magazine-name">{{ magazine.title }}</h3>
            <p class="magazine-description">{{ magazine.description }}</p>
            <a 
              :href="magazine.pdfUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="read-btn"
              @click.stop
            >
              {{ t.magazines.read }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

// Import PDF files
const sdgfllMentoringBooklet = 'https://docs.cosmos7742.com/Fll%20Mentoring%20Booklet.pdf'
const sdgprPlaybook = 'https://docs.cosmos7742.com/PR%20Playbook%20FRC%20Edition%20TR.pdf'
const sdgNoPoverty = 'https://docs.cosmos7742.com/CosmicScience-NoQuality.pdf'
const sdgQualityEducation = 'https://docs.cosmos7742.com/CosmicScience-QualityEducation.pdf'
const sdgGoodHealth = 'https://docs.cosmos7742.com/CosmicScience-GoodHealthAndWellBeing.pdf'
const sdgGenderEquality = 'https://docs.cosmos7742.com/CosmicScience-GenderEquality.pdf'
const sdgAffordableEnergy = 'https://docs.cosmos7742.com/CosmicScience-AffordableAndCleanEnergy.pdf'
const sdgSustainableCities = 'https://docs.cosmos7742.com/CosmicScience-SustainableCitiesAndCommunities.pdf'
const sdgLifeBelowWater = 'https://docs.cosmos7742.com/CosmicScience-LifeBelowWater.pdf'
const sdgLifeOnLand = 'https://docs.cosmos7742.com/CosmicScience-LifeOnLand.pdf'
const sdgZeroHunger = 'https://docs.cosmos7742.com/CosmicScience-ZeroHunger.pdf'
const sdgDecentWork = 'https://docs.cosmos7742.com/CosmicScience-DecentWorkAndEconomicGrowth.pdf'
const sdgIndustryInnovation = 'https://docs.cosmos7742.com/CosmicScience-IndustryInnovationAndInfrastructure.pdf'

const { t } = useI18n()
const selectedCategory = ref('mentoring')

const mentoringMagazines = computed(() => [
  {
    id: 1,
    title: t.value.magazines.magazines.fllMentoring.title,
    description: t.value.magazines.magazines.fllMentoring.description,
    pdfUrl: sdgfllMentoringBooklet
  },
  {
    id: 2,
    title: t.value.magazines.magazines.prPlaybook.title,
    description: t.value.magazines.magazines.prPlaybook.description,
    pdfUrl: sdgprPlaybook
  }
])

const sdgMagazines = computed(() => [
  {
    id: 3,
    title: t.value.magazines.magazines.sdgNoPoverty.title,
    description: t.value.magazines.magazines.sdgNoPoverty.description,
    pdfUrl: sdgNoPoverty
  },
  {
    id: 4,
    title: t.value.magazines.magazines.sdgQualityEducation.title,
    description: t.value.magazines.magazines.sdgQualityEducation.description,
    pdfUrl: sdgQualityEducation
  },
  {
    id: 5,
    title: t.value.magazines.magazines.sdgGoodHealth.title,
    description: t.value.magazines.magazines.sdgGoodHealth.description,
    pdfUrl: sdgGoodHealth
  },
  {
    id: 6,
    title: t.value.magazines.magazines.sdgGenderEquality.title,
    description: t.value.magazines.magazines.sdgGenderEquality.description,
    pdfUrl: sdgGenderEquality
  },
  {
    id: 7,
    title: t.value.magazines.magazines.sdgAffordableEnergy.title,
    description: t.value.magazines.magazines.sdgAffordableEnergy.description,
    pdfUrl: sdgAffordableEnergy
  },
  {
    id: 8,
    title: t.value.magazines.magazines.sdgSustainableCities.title,
    description: t.value.magazines.magazines.sdgSustainableCities.description,
    pdfUrl: sdgSustainableCities
  },
  {
    id: 9,
    title: t.value.magazines.magazines.sdgLifeBelowWater.title,
    description: t.value.magazines.magazines.sdgLifeBelowWater.description,
    pdfUrl: sdgLifeBelowWater
  },
  {
    id: 10,
    title: t.value.magazines.magazines.sdgLifeOnLand.title,
    description: t.value.magazines.magazines.sdgLifeOnLand.description,
    pdfUrl: sdgLifeOnLand
  },
  {
    id: 11,
    title: t.value.magazines.magazines.sdgZeroHunger.title,
    description: t.value.magazines.magazines.sdgZeroHunger.description,
    pdfUrl: sdgZeroHunger
  },
  {
    id: 12,
    title: t.value.magazines.magazines.sdgDecentWork.title,
    description: t.value.magazines.magazines.sdgDecentWork.description,
    pdfUrl: sdgDecentWork
  },
  {
    id: 13,
    title: t.value.magazines.magazines.sdgIndustryInnovation.title,
    description: t.value.magazines.magazines.sdgIndustryInnovation.description,
    pdfUrl: sdgIndustryInnovation
  }
])

const currentMagazines = computed(() => {
  return selectedCategory.value === 'mentoring' ? mentoringMagazines.value : sdgMagazines.value
})

const selectCategory = (category) => {
  selectedCategory.value = category
}
</script>

<style scoped>
.magazines {
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

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.category-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 68, 68, 0.2);
  text-align: center;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(255, 68, 68, 0.2);
  border-color: rgba(255, 68, 68, 0.4);
  background: rgba(255, 255, 255, 0.08);
}

.category-card.active {
  background: rgba(255, 68, 68, 0.15);
  border-color: #ff4444;
  box-shadow: 0 8px 30px rgba(255, 68, 68, 0.3);
}

.category-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  color: #ff4444;
  margin: 0;
}

.category-card.active .category-title {
  color: #ffffff;
}

.magazines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.magazine-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 68, 68, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.magazine-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(255, 68, 68, 0.3);
  border-color: rgba(255, 68, 68, 0.5);
  background: rgba(255, 255, 255, 0.08);
}

.magazine-image {
  width: 100%;
  height: 280px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 68, 68, 0.2) 0%, rgba(255, 68, 68, 0.05) 100%);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
}

.magazine-cover {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}

.magazine-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 68, 68, 0.1) 0%, rgba(255, 68, 68, 0.05) 100%);
}

.magazine-preview-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

.magazine-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.magazine-card:hover .magazine-overlay {
  opacity: 1;
}

.magazine-icon {
  font-size: 3rem;
  color: rgba(255, 68, 68, 0.6);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.magazine-icon-large {
  font-size: 4rem;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.magazine-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.magazine-name {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  color: #ff4444;
  margin: 0;
}

.magazine-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
}

.read-btn {
  background: rgba(255, 68, 68, 0.2);
  border: 1px solid rgba(255, 68, 68, 0.4);
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;
  text-decoration: none;
  display: inline-block;
}

.read-btn:hover {
  background: rgba(255, 68, 68, 0.3);
  border-color: #ff4444;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .magazines {
    padding: 60px 0;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .magazines-grid {
    grid-template-columns: 1fr;
    right: 0.5rem;
  }


}
</style>
