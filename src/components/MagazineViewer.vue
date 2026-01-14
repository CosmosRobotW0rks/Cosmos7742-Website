<template>
  <div class="magazine-viewer">
    <div class="viewer-header">
      <h3 class="magazine-title">{{ title }}</h3>
      <div class="viewer-controls">
        <button @click="previousPage" :disabled="pageNumber <= 1" class="control-btn">
          ← {{ t.magazines.previous }}
        </button>
        <span class="page-info">
          {{ t.magazines.page }} {{ pageNumber }}{{ totalPages > 1 ? ' / ' + totalPages : '' }}
        </span>
        <button @click="nextPage" class="control-btn">
          {{ t.magazines.next }} →
        </button>
        <button @click="zoomOut" class="control-btn" :disabled="scale <= 0.5">
          {{ t.magazines.zoomOut }}
        </button>
        <span class="zoom-info">{{ Math.round(scale * 100) }}%</span>
        <button @click="zoomIn" class="control-btn" :disabled="scale >= 2">
          {{ t.magazines.zoomIn }}
        </button>
        <a :href="pdfUrl" :download="title + '.pdf'" class="control-btn download-btn">
          {{ t.magazines.download }}
        </a>
      </div>
    </div>
    <div class="pdf-container" ref="pdfContainer">
      <iframe
        :src="iframeSrc"
        class="pdf-iframe"
        frameborder="0"
        @load="onPdfLoaded"
        @error="onLoadingFailed"
      ></iframe>
    </div>
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>{{ t.magazines.loading }}</p>
    </div>
    <div v-if="error" class="error">
      <p>{{ t.magazines.error }}</p>
      <a :href="pdfUrl" target="_blank" class="error-link">{{ t.magazines.openInNewTab || 'Open in New Tab' }}</a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const props = defineProps({
  pdfUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const { t } = useI18n()
const pageNumber = ref(1)
const totalPages = ref(1000) // Large number to allow free navigation
const scale = ref(1)
const loading = ref(true)
const error = ref(false)
const pdfContainer = ref(null)

const iframeSrc = computed(() => {
  const baseUrl = props.pdfUrl.startsWith('http') 
    ? props.pdfUrl 
    : `${window.location.origin}${props.pdfUrl.startsWith('/') ? '' : '/'}${props.pdfUrl}`
  return `${baseUrl}#page=${pageNumber.value}&zoom=${Math.round(scale.value * 100)}&toolbar=0&navpanes=0&scrollbar=0`
})

const onPdfLoaded = () => {
  // Add a small delay to ensure PDF is actually loaded
  setTimeout(() => {
    loading.value = false
    error.value = false
  }, 500)
}

const onLoadingFailed = () => {
  loading.value = false
  error.value = true
}

const nextPage = () => {
  pageNumber.value++
  scrollToTop()
}

const previousPage = () => {
  if (pageNumber.value > 1) {
    pageNumber.value--
    scrollToTop()
  }
}

const zoomIn = () => {
  if (scale.value < 2) {
    scale.value = Math.min(scale.value + 0.25, 2)
  }
}

const zoomOut = () => {
  if (scale.value > 0.5) {
    scale.value = Math.max(scale.value - 0.25, 0.5)
  }
}

// iframeSrc is computed, so it will update automatically

const scrollToTop = () => {
  if (pdfContainer.value) {
    pdfContainer.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleKeyPress = (e) => {
  if (e.key === 'ArrowLeft') {
    previousPage()
  } else if (e.key === 'ArrowRight') {
    nextPage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
  // Set loading to false after a timeout in case load event doesn't fire
  setTimeout(() => {
    if (loading.value) {
      loading.value = false
    }
  }, 3000)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<style scoped>
.magazine-viewer {
  background: #1a1a2e;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.viewer-header {
  margin-bottom: 2rem;
}

.magazine-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  color: #ff4444;
  margin-bottom: 1.5rem;
  text-align: center;
}

.viewer-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.control-btn {
  background: rgba(255, 68, 68, 0.2);
  border: 1px solid rgba(255, 68, 68, 0.4);
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.control-btn:hover:not(:disabled) {
  background: rgba(255, 68, 68, 0.3);
  border-color: #ff4444;
  transform: translateY(-2px);
}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.download-btn {
  background: rgba(68, 255, 68, 0.2);
  border-color: rgba(68, 255, 68, 0.4);
  text-decoration: none;
  display: inline-block;
}

.download-btn:hover {
  background: rgba(68, 255, 68, 0.3);
  border-color: #44ff44;
}

.page-info,
.zoom-info {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  padding: 0 0.5rem;
  min-width: 100px;
  text-align: center;
}

.pdf-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 2rem;
  overflow: hidden;
}

.pdf-iframe {
  width: 100%;
  min-height: 600px;
  height: calc(100vh - 300px);
  max-height: 900px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background: white;
}

.loading,
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: rgba(255, 255, 255, 0.8);
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 68, 68, 0.2);
  border-top-color: #ff4444;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .magazine-viewer {
    padding: 1rem;
  }

  .viewer-controls {
    gap: 0.5rem;
  }

  .control-btn {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }

  .page-info,
  .zoom-info {
    min-width: 80px;
    font-size: 0.85rem;
  }

  .pdf-container {
    padding: 1rem;
    min-height: 400px;
  }

  .pdf-iframe {
    min-height: 400px;
    height: calc(100vh - 200px);
  }
}

.error-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 68, 68, 0.2);
  border: 1px solid rgba(255, 68, 68, 0.4);
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.error-link:hover {
  background: rgba(255, 68, 68, 0.3);
  border-color: #ff4444;
}
</style>
