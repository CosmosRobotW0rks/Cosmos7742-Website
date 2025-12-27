<template>
  <div class="project-card">
    <div class="card-image" v-if="image">
      <img :src="image" :alt="title" />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      <button @click="navigateToDetail" class="card-btn">{{ t.work.details }}</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const props = defineProps({
  title: String,
  description: String,
  image: String,
  id: Number
})

const router = useRouter()

const navigateToDetail = () => {
  const routes = {
    1: '/work/icc-2024',
    2: '/work/first-academy',
    3: '/work/ocean-heroes',
    4: '/work/all-can-stem'
  }
  
  if (props.id && routes[props.id]) {
    router.push(routes[props.id])
  }
}
</script>

<style scoped>
.project-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 68, 68, 0.2);
  border-radius: 16px;
  padding: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff4444, #cc0000);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 68, 68, 0.5);
  box-shadow: 0 10px 30px rgba(255, 68, 68, 0.2);
}

.project-card:hover::before {
  transform: scaleX(1);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}

.card-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #ff4444;
  margin: 0;
}

.card-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  flex-grow: 1;
  margin: 0;
}

.card-btn {
  align-self: flex-start;
  padding: 0.7rem 1.5rem;
  background: transparent;
  border: 2px solid #ff4444;
  color: #ff4444;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.card-btn:hover {
  background: #ff4444;
  color: #0a0a14;
  transform: scale(1.05);
}
</style>

