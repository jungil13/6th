<script setup>
import { ref, onMounted, computed } from 'vue';
import song1 from '../assets/music/Libu-Libong Buwan (Uuwian) - Kyle Raphael (Lyric Video).mp3';
import song2 from '../assets/music/fitterkarma - Kalapastangan (Lyrics).mp3';
import song3 from '../assets/music/Tahanan (c) El Manu [Official Audio].mp3';

const tracks = [
  { name: 'Libu-Libong Buwan', src: song1 },
  { name: 'Kalapastangan', src: song2 },
  { name: 'Tahanan', src: song3 }
];

const currentTrackIndex = ref(0);
const isPlaying = ref(false);
const audio = ref(null);

const currentTrackPath = computed(() => tracks[currentTrackIndex.value].src);
const currentTrackName = computed(() => tracks[currentTrackIndex.value].name);

const togglePlay = () => {
  if (isPlaying.value) {
    audio.value.pause();
  } else {
    audio.value.play().catch(e => console.log("Autoplay may be blocked by browser:", e));
  }
  isPlaying.value = !isPlaying.value;
};

const play = () => {
  if (!isPlaying.value) {
    audio.value.play().catch(e => console.log("Autoplay may be blocked by browser:", e));
    isPlaying.value = true;
  }
};

const nextTrack = () => {
  currentTrackIndex.value = (currentTrackIndex.value + 1) % tracks.length;
  updateAndPlay();
};

const prevTrack = () => {
  currentTrackIndex.value = (currentTrackIndex.value - 1 + tracks.length) % tracks.length;
  updateAndPlay();
};

const updateAndPlay = () => {
  // Wait for nextTick or just rely on reactive src update
  setTimeout(() => {
    if (isPlaying.value) {
      audio.value.play().catch(e => console.log("Navigation play blocked:", e));
    }
  }, 0);
};

defineExpose({ play });

onMounted(() => {
  audio.value.volume = 0.5;
});
</script>

<template>
  <div class="fixed bottom-10 right-10 z-[120] flex items-center gap-4">
    <audio ref="audio" :src="currentTrackPath" @ended="nextTrack"></audio>
    
    <!-- Music Controls Container -->
    <div class="flex items-center bg-white/40 backdrop-blur-xl border border-white/20 rounded-full p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] group">
      
      <!-- Prev Button -->
      <button @click="prevTrack" class="w-10 h-10 rounded-full flex items-center justify-center text-rose-400 hover:bg-rose-50 transition-colors">
        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
        </svg>
      </button>

      <!-- Main Play Button -->
      <button 
        @click="togglePlay"
        class="w-14 h-14 rounded-full bg-rose-300 text-white shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 relative overflow-hidden"
        :class="{ 'animate-pulse': isPlaying }"
      >
        <div v-if="isPlaying" class="relative">
          <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </div>
        <svg v-else class="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>

      <!-- Next Button -->
      <button @click="nextTrack" class="w-10 h-10 rounded-full flex items-center justify-center text-rose-400 hover:bg-rose-50 transition-colors">
        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M6 18l8.5-6L6 6zM16 6v12h2V6z"/>
        </svg>
      </button>

      <!-- Now Playing Tooltip -->
      <div 
        class="absolute -top-16 right-0 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl text-sm font-medium text-rose-400 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 whitespace-nowrap border border-rose-50 flex items-center gap-3 pointer-events-none"
      >
        <div class="w-2 h-2 bg-rose-300 rounded-full" :class="{ 'animate-ping': isPlaying }"></div>
        <span class="font-serif italic">{{ isPlaying ? `Now: ${currentTrackName}` : "Play Music" }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(244, 63, 94, 0); }
}
.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
