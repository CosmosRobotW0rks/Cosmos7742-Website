<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <div class="logo">
        <img :src="logoImage" alt="Cosmos Robot Works Logo" class="logo-img" />
        <div class="logo-text">
          <h2>COSMOS</h2>
          <span>ROBOT WORKS</span>
        </div>
      </div>
      <button class="mobile-menu-btn" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" :class="{ active: menuOpen }">
        <li><a href="#home" @click="scrollTo('home')">{{ t.nav.home }}</a></li>
        <li><a href="#about" @click="scrollTo('about')">{{ t.nav.about }}</a></li>
        <li><a href="#work" @click="scrollTo('work')">{{ t.nav.work }}</a></li>
        <li><a href="#sponsors" @click="scrollTo('sponsors')">{{ t.nav.sponsors }}</a></li>
        <li><a href="#subteams" @click="scrollTo('subteams')">{{ t.nav.subteams }}</a></li>
        <li><a href="#archive" @click="scrollTo('archive')">{{ t.nav.archive }}</a></li>
        <li><a href="#magazines" @click="scrollTo('magazines')">{{ t.nav.magazines }}</a></li>
        <li><a href="#contact" @click="scrollTo('contact')">{{ t.nav.contact }}</a></li>
        <li class="lang-toggle">
          <button @click="toggleLang" class="lang-btn" :title="currentLang === 'en' ? 'Türkçe\'ye geç' : 'Switch to English'">
            {{ currentLang === 'en' ? 'TR' : 'EN' }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import logoImage from '@/assets/images/AAA/LOGO_RED_FILLED.png'

const { t, currentLang, toggleLang } = useI18n()
const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const scrollTo = (section) => {
  menuOpen.value = false
  
  // Check if we're on home page
  if (route.path === '/') {
    const element = document.getElementById(section)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  } else {
    // We're on a detail page, navigate to home first then scroll
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          const navHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 150)
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 20, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 1rem 0;
}

.navbar.scrolled {
  background: rgba(10, 10, 20, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-img {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #ff4444;
  margin: 0;
  letter-spacing: 2px;
}

.logo span {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  color: #ffffff;
  letter-spacing: 1px;
  display: block;
  margin-top: -5px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  align-items: center;
  flex-wrap: wrap;
}

.nav-links li {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  position: relative;
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0.25rem 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #ff4444;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #ff4444;
}

.nav-links a:hover::after {
  width: 100%;
}

.lang-toggle {
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
}

.lang-btn {
  background: rgba(255, 68, 68, 0.15);
  border: 1px solid rgba(255, 68, 68, 0.4);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  min-width: 45px;
}

.lang-btn:hover {
  background: rgba(255, 68, 68, 0.25);
  border-color: #ff4444;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 68, 68, 0.3);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: #ffffff;
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  .nav-links {
    gap: 1rem;
  }

  .nav-links a {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 20, 0.98);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    align-items: flex-start;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links a {
    width: 100%;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .lang-toggle {
    margin-left: 0;
    margin-top: 0.5rem;
    width: 100%;
  }

  .lang-btn {
    width: 100%;
    text-align: center;
  }
}
</style>

