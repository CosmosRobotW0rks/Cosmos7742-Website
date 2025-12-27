import { ref, computed } from 'vue'
import { translations } from '@/i18n/translations'

// Global state shared across all components
const currentLang = ref(localStorage.getItem('lang') || 'en')

export function useI18n() {
  const t = computed(() => translations[currentLang.value] || translations.en)
  
  const setLang = (lang) => {
    if (translations[lang]) {
      currentLang.value = lang
      localStorage.setItem('lang', lang)
    }
  }

  const toggleLang = () => {
    setLang(currentLang.value === 'en' ? 'tr' : 'en')
  }

  return {
    t,
    currentLang: computed(() => currentLang.value),
    setLang,
    toggleLang
  }
}

