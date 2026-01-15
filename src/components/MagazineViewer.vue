<template>
  <div class="magazine-viewer">
    <div class="viewer-header">
      <h3 class="magazine-title">{{ title }}</h3>
      <div class="viewer-controls">
        <a :href="pdfUrl" :download="title + '.pdf'" class="control-btn download-btn">
          {{ t.magazines.download }}
        </a>
      </div>
    </div>
    <div class="pdf-container" ref="pdfContainer">
      <div class="page-indicator" v-if="props.totalPages > 1">
        {{ props.totalPages }} {{ t.magazines.pages }}
      </div>
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
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const props = defineProps({
  pdfUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  totalPages: {
    type: Number,
    default: 1
  }
})

const { t } = useI18n()
const loading = ref(true)
const error = ref(false)
const pdfContainer = ref(null)

const iframeSrc = computed(() => {
  const baseUrl = props.pdfUrl.startsWith('http') 
    ? props.pdfUrl 
    : `${window.location.origin}${props.pdfUrl.startsWith('/') ? '' : '/'}${props.pdfUrl}`
  return `${baseUrl}#toolbar=0&navpanes=0&scrollbar=0`
})

const onPdfLoaded = () => {
  setTimeout(() => {
    loading.value = false
    error.value = false
  }, 500)
}

const onLoadingFailed = () => {
  loading.value = false
  error.value = true
}
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 2rem;
  overflow: hidden;
  position: relative;
}

.page-indicator {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 10;
  backdrop-filter: blur(10px);
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
