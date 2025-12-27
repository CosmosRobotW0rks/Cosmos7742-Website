<template>
  <div class="season-card">
    <div class="season-image" v-if="image">
      <img :src="image" :alt="name" />
    </div>
    <div class="season-year">{{ year }}</div>
    <div class="season-name">{{ name }}</div>
  </div>
</template>

<script setup>
defineProps({
  year: String,
  name: String,
  image: String
})
</script>

<style scoped>
.season-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 68, 68, 0.2);
  border-radius: 16px;
  padding: 0;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.season-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.season-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.season-card:hover .season-image img {
  transform: scale(1.1);
}

.season-card::before {
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

.season-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 68, 68, 0.5);
  box-shadow: 0 10px 30px rgba(255, 68, 68, 0.2);
}

.season-card:hover::before {
  transform: scaleX(1);
}

.season-year {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ff4444;
  margin-bottom: 0.5rem;
  padding: 1rem 1rem 0.5rem;
}

.season-name {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 2px;
  padding: 0 1rem 1.5rem;
}
</style>

