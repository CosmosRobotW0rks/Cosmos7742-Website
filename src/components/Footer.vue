<template>
  <footer class="footer">
    <div class="footer-container">
      <p>&copy; {{ currentYear }} {{ t.footer.copyright }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, rgba(10, 10, 20, 0.95) 0%, #0a0a14 100%);
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 68, 68, 0.2);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer p {
  color: #ffffff;
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>

