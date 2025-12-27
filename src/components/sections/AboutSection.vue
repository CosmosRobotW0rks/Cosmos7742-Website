<template>
  <section class="about">
    <div class="container">
      <h2 class="section-title">{{ t.about.title }}</h2>
      <div class="about-content">
        <div class="about-image">
          <img :src="aboutImage" alt="Cosmos Robot Works Team" />
        </div>
        <div class="about-text-content">
          <p class="about-text">
            {{ t.about.text1 }} <strong>{{ t.about.text1Highlight }}</strong>{{ t.about.text1Continue }}
          </p>
          <p class="about-text">
            {{ t.about.text2 }} <strong>{{ t.about.text2Highlight }}</strong>{{ t.about.text2Continue }} <strong>{{ t.about.text2Highlight2 }}</strong> {{ t.about.text2Continue2 }} <strong>{{ t.about.text2Highlight3 }}</strong> {{ t.about.text2Continue3 }}
          </p>
          <p class="about-text highlight">
            {{ t.about.text3 }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import aboutImage from '@/assets/images/AAA/TEAM24_KICKOFF-scaled.jpg'

const { t } = useI18n()
</script>

<style scoped>
.about {
  padding: 100px 0;
  background: linear-gradient(180deg, #0a0a14 0%, #1a1a2e 100%);
  position: relative;
}

.container {
  max-width: 1000px;
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-image {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.about-image img {
  width: 100%;
  height: max-content;
  display: block;
  object-fit: cover;
}

.about-text-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;
}

.about-text strong {
  color: #ff4444;
  font-weight: 600;
}

.about-text.highlight {
  font-size: 1.2rem;
  text-align: center;
  color: #ffffff;
  font-style: italic;
  padding: 2rem;
  background: rgba(255, 68, 68, 0.1);
  border-left: 4px solid #ff4444;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .about {
    padding: 60px 0;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-text {
    font-size: 1rem;
    text-align: left;
  }
}
</style>

