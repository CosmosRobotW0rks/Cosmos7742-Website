<template>
  <section class="contact">
    <div class="container">
      <h2 class="section-title">Reach Us</h2>
      <p class="section-subtitle">
        We welcome your questions, ideas, and collaborations. Get in touch with us — whether you're a student, teacher, or supporter.
      </p>
      <div class="contact-content">
        <div class="social-links">
          <a href="https://instagram.com/cosmosrobotworks" target="_blank" rel="noopener noreferrer" class="social-link">
            <span class="social-icon">📷</span>
            <span>@cosmosrobotworks</span>
          </a>
        </div>
        <div class="contact-info">
          <a href="mailto:cosmos7742@gmail.com" class="contact-item">
            <span class="contact-icon">✉️</span>
            <span>cosmos7742@gmail.com</span>
          </a>
          </div>
          <div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span>Altunizade, Oymacı Sk. No:15, 34662 Üsküdar/İstanbul</span>n
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 100px 0;
  background: linear-gradient(180deg, #1a1a2e 0%, #0a0a14 100%);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #ff4444;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 3px;
}

.section-subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 68, 68, 0.2);
  border-radius: 12px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: rgba(255, 68, 68, 0.1);
  border-color: rgba(255, 68, 68, 0.5);
  transform: translateX(10px);
}

.social-icon {
  font-size: 1.5rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 68, 68, 0.2);
  border-radius: 12px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.contact-item:hover {
  background: rgba(255, 68, 68, 0.1);
  border-color: rgba(255, 68, 68, 0.5);
  transform: translateX(10px);
}

.contact-icon {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }

  .contact-item span:last-child {
    font-size: 0.9rem;
  }
}
</style>

