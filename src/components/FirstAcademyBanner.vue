<template>
  <div v-if="!isClosed" class="banner" :class="{ 'banner-left': position === 'left', 'banner-right': position === 'right' }">
    <div class="banner-content">
      <span class="banner-text">{{ t.banner.text }}</span>
      <a :href="t.banner.link" target="_blank" class="banner-link">{{ t.banner.linkText }}</a>
    </div>
    <button @click="closeBanner" class="banner-close">×</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const isClosed = ref(false)
const position = ref('right') // 'left' or 'right'

// Start fresh: use a new storage key so everyone sees the banner again
const STORAGE_KEY = 'firstAcademyBannerClosed_v2'

const closeBanner = () => {
  isClosed.value = true
  localStorage.setItem(STORAGE_KEY, 'true')
}

onMounted(() => {
  const wasClosed = localStorage.getItem(STORAGE_KEY)
  if (wasClosed === 'true') {
    isClosed.value = true
  }
})
</script>

<style scoped>
.banner {
  position: fixed;
  bottom: 20px;
  z-index: 9999;
  background: rgba(26, 26, 46, 0.98);
  border: 2px solid rgba(255, 68, 68, 0.5);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  max-width: 400px;
  font-size: 0.85rem;
  animation: slideIn 0.3s ease-out;
}

.banner-right {
  right: 20px;
}

.banner-left {
  left: 20px;
}

@keyframes slideIn {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.banner-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.banner-text {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
}

.banner-link {
  color: #ff4444;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.banner-link:hover {
  color: #ff6666;
  text-decoration: underline;
}

.banner-close {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  flex-shrink: 0;
}

.banner-close:hover {
  color: #ff4444;
}

@media (max-width: 768px) {
  .banner {
    max-width: calc(100% - 40px);
    font-size: 0.8rem;
    padding: 0.6rem 0.8rem;
  }

  .banner-right,
  .banner-left {
    right: 20px;
    left: 20px;
  }
}
</style>
