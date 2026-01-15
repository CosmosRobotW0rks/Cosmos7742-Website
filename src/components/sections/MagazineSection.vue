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

      <!-- Mentoring Category Content -->
      <div v-if="selectedCategory === 'mentoring'" class="magazines-grid">
        <div
          v-for="magazine in mentoringMagazines"
          :key="magazine.id"
          class="magazine-card"
          @click="selectMagazine(magazine)"
        >
          <div class="magazine-image">
            <iframe
              :src="getPdfCoverUrl(magazine.pdfUrl)"
              class="magazine-cover"
              frameborder="0"
            ></iframe>
            <div class="magazine-overlay">
              <div class="magazine-icon">📖</div>
            </div>
          </div>
          <div class="magazine-info">
            <h3 class="magazine-name">{{ magazine.title }}</h3>
            <p class="magazine-description">{{ magazine.description }}</p>
            <button class="read-btn">{{ t.magazines.read }}</button>
          </div>
        </div>
      </div>

      <!-- SDG Category Content -->
      <div v-if="selectedCategory === 'sdg'" class="coming-soon">
        <h3 class="coming-soon-text">{{ t.magazines.comingSoon }}</h3>
      </div>
    </div>

    <!-- Magazine Viewer Modal -->
    <div v-if="selectedMagazine" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">×</button>
        <MagazineViewer
          :pdf-url="selectedMagazine.pdfUrl"
          :title="selectedMagazine.title"
          :total-pages="selectedMagazine.totalPages"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import MagazineViewer from '../MagazineViewer.vue'

const { t } = useI18n()
const selectedMagazine = ref(null)
const selectedCategory = ref('mentoring')

const mentoringMagazines = computed(() => [
  {
    id: 1,
    title: t.value.magazines.magazines.fllMentoring.title,
    description: t.value.magazines.magazines.fllMentoring.description,
    pdfUrl: '/pdf/Fll Mentoring Booklet.pdf',
    totalPages: 12
  },
  {
    id: 2,
    title: t.value.magazines.magazines.prPlaybook.title,
    description: t.value.magazines.magazines.prPlaybook.description,
    pdfUrl: '/pdf/PR Playbook FRC Edition TR.pdf',
    totalPages: 8
  }
])

const selectCategory = (category) => {
  selectedCategory.value = category
  selectedMagazine.value = null
}

const getPdfCoverUrl = (pdfUrl) => {
  const baseUrl = pdfUrl.startsWith('http') 
    ? pdfUrl 
    : `${window.location.origin}${pdfUrl.startsWith('/') ? '' : '/'}${pdfUrl}`
  return `${baseUrl}#page=1&zoom=page-fit&toolbar=0&navpanes=0&scrollbar=0`
}

const selectMagazine = (magazine) => {
  selectedMagazine.value = magazine
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedMagazine.value = null
  document.body.style.overflow = 'auto'
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

.coming-soon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  margin-top: 3rem;
}

.coming-soon-text {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  text-align: center;
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
  object-fit: cover;
  pointer-events: none;
  transform: scale(1.1);
  transform-origin: center;
  position: relative;
}

.magazine-cover {
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
  pointer-events: none;
  transform: scale(1.1);
  transform-origin: center;
  /* Hide PDF viewer toolbar using CSS */
  position: relative;
}

/* Attempt to hide PDF viewer UI elements */
.magazine-cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: transparent;
  z-index: 1;
  pointer-events: none;
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
}

.read-btn:hover {
  background: rgba(255, 68, 68, 0.3);
  border-color: #ff4444;
  transform: translateY(-2px);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
}

.modal-content {
  position: relative;
  max-width: 95%;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  background: #1a1a2e;
  border-radius: 12px;
  padding: 2rem;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 68, 68, 0.2);
  border: 1px solid rgba(255, 68, 68, 0.4);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(255, 68, 68, 0.4);
  border-color: #ff4444;
  transform: rotate(90deg);
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
  }

  .coming-soon-text {
    font-size: clamp(2rem, 8vw, 3rem);
  }

  .modal-content {
    padding: 1rem;
    max-width: 100%;
  }

  .close-btn {
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>
