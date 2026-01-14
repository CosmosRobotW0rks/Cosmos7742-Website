<template>
  <div class="project-detail">
    <div class="container">
      <button @click="goBack" class="back-btn">{{ t.common.back }}</button>
      <div class="detail-content">
        <h1 class="detail-title">{{ t.work.projects.firstAcademy.title }}</h1>
        <div class="detail-image" v-if="image">
          <img :src="image" alt="FIRST ACADEMY" />
        </div>
        <div class="detail-text">
          <p>
            {{ t.work.projects.firstAcademy.detail }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import project1Image from '@/assets/images/AAA/Mentoring-2.png'

const { t } = useI18n()
const router = useRouter()
const image = project1Image

const goBack = () => {
  router.push('/').then(() => {
    setTimeout(() => {
      const workSection = document.getElementById('work')
      if (workSection) {
        const navHeight = 80 // Approximate navigation bar height
        const elementPosition = workSection.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 150)
  })
}
</script>

<style scoped>
.project-detail {
  min-height: 100vh;
  padding: 120px 0 80px;
  background: linear-gradient(180deg, #1a1a2e 0%, #0a0a14 100%);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.back-btn {
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 2px solid #ff4444;
  color: #ff4444;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.back-btn:hover {
  background: #ff4444;
  color: #0a0a14;
  transform: scale(1.05);
}

.detail-content {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 68, 68, 0.2);
  border-radius: 16px;
  padding: 3rem;
  backdrop-filter: blur(10px);
}

.detail-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #ff4444;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 2px;
}

.detail-image {
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-text {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  font-size: 1.1rem;
}

.detail-text p {
  margin: 0;
}

@media (max-width: 768px) {
  .project-detail {
    padding: 100px 0 60px;
  }

  .detail-content {
    padding: 2rem 1.5rem;
  }

  .detail-text {
    font-size: 1rem;
  }
}
</style>

