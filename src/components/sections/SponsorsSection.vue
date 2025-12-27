<template>
  <section class="sponsors">
    <div class="container">
      <h2 class="section-title">{{ t.sponsors.title }}</h2>
      <div class="sponsors-content">
        <div class="sponsors-grid">
          <div class="sponsor-logo">
            <img :src="boeingLogo" alt="Boeing" />
          </div>
          <div class="sponsor-logo">
            <img :src="rtxLogo" alt="RTX" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import boeingLogo from '@/assets/images/AAA/SPONSOR_BOEING.png'
import rtxLogo from '@/assets/images/AAA/RTX-logo-black.png'

const { t } = useI18n()
</script>

<style scoped>
.sponsors {
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
  margin-bottom: 4rem;
  letter-spacing: 3px;
}

.sponsors-content {
  text-align: center;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 3rem;
  align-items: center;
  justify-items: center;
  padding: 2rem 0;
}

.sponsor-logo {
  width: 100%;
  max-width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.sponsor-logo:hover {
  background: rgba(255, 68, 68, 0.1);
  transform: translateY(-5px);
}

.sponsor-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.sponsor-logo:hover img {
  opacity: 1;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .sponsors {
    padding: 60px 0;
  }
}
</style>

