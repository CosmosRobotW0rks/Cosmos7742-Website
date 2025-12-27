# Cosmos Robot Works Website

Official website for Cosmos Robot Works (Team 7742) - Nakkaştepe Bahçeşehir High School for Science and Technology.

## Features

- Modern, responsive design and good transitions
- Sections: Home, About Us, Our Work, Sponsors, Subteams, Team Archive, Contact
- Built with Vue.js 3 and Vue Router

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   └── Home.vue
│   ├── components/
│   │   ├── Navigation.vue
│   │   ├── Footer.vue
│   │   ├── ProjectCard.vue
│   │   ├── SubteamCard.vue
│   │   ├── SeasonCard.vue
│   │   └── sections/
│   │       ├── HeroSection.vue
│   │       ├── AboutSection.vue
│   │       ├── WorkSection.vue
│   │       ├── SponsorsSection.vue
│   │       ├── SubteamsSection.vue
│   │       ├── ArchiveSection.vue
│   │       └── ContactSection.vue
│   └── assets/
│       └── styles/
│           └── main.css
```

## Technologies Used

- Vue.js 3 (Composition API)
- Vue Router 4
- Vite
- CSS3 (Custom styling with gradients and animations)

## License

© 2025 Cosmos Robot Works

