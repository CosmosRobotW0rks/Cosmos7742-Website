<template>
  <div class="subteam-card">
    <div class="card-icon">
      <div v-if="iconType === 'svg'" v-html="icon" class="svg-icon"></div>
      <img v-else-if="icon" :src="icon" :alt="title" />
      <div v-else class="icon-circle"></div>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
  iconType: {
    type: String,
    default: 'image'
  }
})
</script>

<style scoped>
.subteam-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 68, 68, 0.2);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.subteam-card::before {
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

.subteam-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 68, 68, 0.5);
  box-shadow: 0 10px 30px rgba(255, 68, 68, 0.2);
}

.subteam-card:hover::before {
  transform: scaleX(1);
}

.card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-icon img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.9;
}

.svg-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff4444;
}

.svg-icon :deep(svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
  stroke: currentColor;
  opacity: 0.9;
}

.icon-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 68, 68, 0.2), rgba(204, 0, 0, 0.2));
  border: 2px solid rgba(255, 68, 68, 0.5);
  position: relative;
}

.icon-circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 68, 68, 0.3);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ff4444;
  margin: 0;
  text-align: center;
}

.card-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  text-align: center;
  margin: 0;
}
</style>

