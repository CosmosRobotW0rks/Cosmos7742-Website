<template>
  <section class="magazines" id="magazines">
    <div class="container">
      <h2 class="section-title">{{ t.magazines.title }}</h2>
      <p class="section-subtitle">
        {{ t.magazines.subtitle }}
      </p>
      <div class="magazines-grid">
        <div
          v-for="magazine in magazines"
          :key="magazine.id"
          class="magazine-card"
          @click="selectMagazine(magazine)"
        >
          <div class="magazine-image">
            <iframe
              :src="magazine.pdfUrl + '#page=1&zoom=75&toolbar=0&navpanes=0&scrollbar=0'"
              class="magazine-cover"
              frameborder="0"
              loading="lazy"
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
    </div>

    <!-- Magazine Viewer Modal -->
    <div v-if="selectedMagazine" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">×</button>
        <MagazineViewer
          :pdf-url="selectedMagazine.pdfUrl"
          :title="selectedMagazine.title"
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

const magazines = computed(() => [
  {
    id: 1,
    title: t.value.magazines.magazines.fllMentoring.title,
    description: t.value.magazines.magazines.fllMentoring.description,
    pdfUrl: '/pdf/Fll Mentoring Booklet.pdf'
  },
  {
    id: 2,
    title: t.value.magazines.magazines.prPlaybook.title,
    description: t.value.magazines.magazines.prPlaybook.description,
    pdfUrl: '/pdf/PR Playbook FRC Edition TR.pdf'
  }
])

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

  .magazines-grid {
    grid-template-columns: 1fr;
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
