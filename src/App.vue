<script setup>
import { ref, onMounted } from 'vue';
import HeroSection from './components/HeroSection.vue';
import EnvelopeSection from './components/EnvelopeSection.vue';
import MessageSection from './components/MessageSection.vue';
import GallerySection from './components/GallerySection.vue';
import MusicPlayer from './components/MusicPlayer.vue';
import DateCounter from './components/DateCounter.vue';
import BouquetSection from './components/BouquetSection.vue';
import SurpriseHeart from './components/SurpriseHeart.vue';

const showMessage = ref(false);
const showEnvelope = ref(false);
const musicPlayerRef = ref(null);

const startExperience = () => {
  if (musicPlayerRef.value) {
    musicPlayerRef.value.play();
  }
};

const openHeart = () => {
  startExperience();
  showEnvelope.value = true;
  setTimeout(() => {
    const element = document.getElementById('envelope');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

const showFullMessage = () => {
  showMessage.value = true;
  startExperience();
  setTimeout(() => {
    const element = document.getElementById('message');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};
</script>

<template>
  <div class="min-h-screen bg-brown-50 transition-colors duration-1000 font-sans selection:bg-brown-200 selection:text-brown-900">
    <!-- Hero Section -->
    <HeroSection @open-heart="openHeart" />

    <!-- Date Counter -->
    <div class="bg-brown-100/20 relative z-10 py-10 border-b border-brown-50">
      <div class="max-w-4xl mx-auto px-6">
        <DateCounter />
      </div>
    </div>

    <!-- Envelope Section -->
    <section id="envelope" v-if="showEnvelope" class="animate-fade-in py-20 bg-white/30">
      <EnvelopeSection @opened="showFullMessage" />
    </section>

    <!-- Message Section (No longer a modal) -->
    <section id="message" v-if="showMessage" class="animate-fade-in">
      <MessageSection />
    </section>

    <!-- Bouquet Section -->
    <BouquetSection />

    <!-- Gallery Section -->
    <GallerySection />

    <!-- Choice Surprise Section -->
    <SurpriseHeart />

    <!-- Music Player -->
    <MusicPlayer ref="musicPlayerRef" />

    <!-- Footer / Special Touch -->
    <footer class="py-20 bg-cream-100/50 text-center border-t border-tan-50">
      <div class="max-w-2xl mx-auto px-6 space-y-6">
        <p class="text-tan-400 font-serif text-3xl italic">"I still choose you. Every day."</p>
        <div class="flex justify-center flex-col items-center gap-4 pt-4">
          <div class="w-16 h-[1px] bg-tan-100"></div>
          <p class="text-tan-200 text-xs tracking-[0.4em] uppercase font-bold">Happiest 6 Months</p>
          <div class="w-16 h-[1px] bg-tan-100"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600&family=Dancing+Script:wght@400;700&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
