<script setup>
import { ref, onMounted } from 'vue';
import song from '../assets/music/Libu-Libong Buwan (Uuwian) - Kyle Raphael (Lyric Video).mp3';

const isPlaying = ref(false);
const audio = ref(null);

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

defineExpose({ play });

// Autoplay logic might be restricted by modern browsers, typically requires user interaction first
onMounted(() => {
  audio.value.volume = 0.5;
});
</script>

<template>
  <div class="fixed bottom-10 right-10 z-50">
    <audio ref="audio" loop :src="song"></audio>
    
    <button 
      @click="togglePlay"
      class="w-16 h-16 rounded-full bg-white/60 backdrop-blur-lg border border-tan-100 shadow-xl flex items-center justify-center text-tan-300 transition-all duration-500 hover:scale-110 hover:bg-white/80 active:scale-95 group relative"
      :class="{ 'animate-pulse': isPlaying }"
    >
      <div v-if="isPlaying" class="relative">
        <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
        <span class="absolute -top-1 -right-1 flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-200 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-rose-300"></span>
        </span>
      </div>
      <svg v-else class="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
      
      <div class="absolute -top-12 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-tan-300 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-tan-50">
        {{ isPlaying ? "Now Playing..." : "Play Music" }}
      </div>
    </button>
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
