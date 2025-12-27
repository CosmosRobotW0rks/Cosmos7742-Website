<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroImage})` }">
    <div class="hero-overlay"></div>
    <div class="stars"></div>
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="title-main">COSMOS</span>
        <span class="title-sub">ROBOT WORKS</span>
      </h1>
      <p class="hero-subtitle">{{ t.hero.subtitle }}</p>
      <div class="hero-cta">
        <a href="#about" class="btn-primary">{{ t.hero.cta }}</a>
      </div>
    </div>
    <div class="scroll-indicator">
      <span></span>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import heroImage from '@/assets/images/AAA/2024-2025-Reefscape-2048x1536.jpg'

const { t } = useI18n()
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #0a0a14 0%, #1a1a2e 50%, #16213e 100%);
  overflow: hidden;
  padding-top: 80px;
}

.hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(10, 10, 20, 0.8) 0%, rgba(26, 26, 46, 0.7) 50%, rgba(22, 33, 62, 0.8) 100%);
  z-index: 1;
}

.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20% 30%, white, transparent),
    radial-gradient(2px 2px at 60% 70%, white, transparent),
    radial-gradient(1px 1px at 50% 50%, white, transparent),
    radial-gradient(1px 1px at 80% 10%, white, transparent),
    radial-gradient(2px 2px at 90% 40%, white, transparent),
    radial-gradient(1px 1px at 33% 60%, white, transparent),
    radial-gradient(2px 2px at 55% 80%, white, transparent);
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: sparkle 20s linear infinite;
  opacity: 0.6;
}

@keyframes sparkle {
  from { transform: translateY(0); }
  to { transform: translateY(-200px); }
}

.hero-content {
  text-align: center;
  z-index: 2;
  position: relative;
  padding: 2rem;
}

.hero-title {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-main {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  background: linear-gradient(135deg, #ff4444 0%, #cc0000 50%, #ff3333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 8px;
  text-shadow: 0 0 30px rgba(255, 68, 68, 0.5);
  animation: glow 3s ease-in-out infinite alternate;
}

.title-sub {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.8rem);
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 4px;
  margin-top: -10px;
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 20px rgba(255, 68, 68, 0.5));
  }
  to {
    filter: drop-shadow(0 0 40px rgba(255, 68, 68, 0.8));
  }
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.8);
  margin: 2rem 0;
  font-weight: 300;
}

.hero-cta {
  margin-top: 3rem;
}

.btn-primary {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #ff4444 0%, #cc0000 100%);
  color: #ffffff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 68, 68, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(255, 68, 68, 0.5);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-indicator span {
  display: block;
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 68, 68, 0.5);
  border-radius: 25px;
  position: relative;
}

.scroll-indicator span::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: #ff4444;
  border-radius: 50%;
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
  }
}
</style>

