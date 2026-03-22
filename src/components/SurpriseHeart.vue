<script setup>
import { ref } from 'vue';
const showSurprise = ref(false);
const audioRef = ref(null);
const toggleSurprise = () => {
  showSurprise.value = !showSurprise.value;
  if (showSurprise.value && audioRef.value) {
    audioRef.value.currentTime = 0;
    audioRef.value.play().catch(e => console.log("Audio play blocked by browser:", e));
  }
};
</script>
<template>
  <div class="relative flex flex-col items-center py-24 bg-white shadow-inner overflow-hidden">
    <!-- Majestic Chime Voice (Hidden) -->
    <audio ref="audioRef" src="https://www.myinstants.com/media/sounds/magic-chime.mp3"></audio>
    <!-- Sakura Bloom Button -->
    <div class="relative cursor-pointer group" @click="toggleSurprise">
      <div class="absolute inset-0 bg-rose-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
      
      <div 
        class="relative w-32 h-32 bg-white rounded-full shadow-[0_10px_40px_-10px_rgba(244,114,182,0.3)] flex items-center justify-center border-4 border-rose-50 transform transition-all duration-700 hover:scale-110 active:scale-95 z-10"
      >
        <svg class="w-16 h-16 text-rose-300 animate-sakura-bloom" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,22C12,22 13,18 16,18C19,18 22,20 22,20C22,20 20,17 20,14C20,11 22,9 22,9C22,9 18.5,10 16,10C13.5,10 12,6 12,6C12,6 10.5,10 8,10C5.5,10 2,9 2,9C2,9 4,11 4,14C4,17 2,20 2,20C2,20 5,18 8,18C11,18 12,22 12,22Z" />
          <circle cx="12" cy="14" r="2" class="text-rose-100" />
        </svg>
      </div>
      
      <p class="mt-8 text-rose-400 font-cursive text-3xl italic tracking-wider animate-bounce text-center px-4">
        "Press for a Surprise 🌸"
      </p>
    </div>
    <!-- Falling Petals (Active when surprise is shown) -->
    <div v-if="showSurprise" class="fixed inset-0 pointer-events-none z-[110] overflow-hidden">
      <div v-for="i in 60" :key="i" 
        class="absolute text-rose-200 opacity-60 animate-sakura-fall"
        :style="{
          left: Math.random() * 100 + '%',
          top: '-10%',
          width: (12 + Math.random() * 18) + 'px',
          height: (12 + Math.random() * 18) + 'px',
          animationDuration: (6 + Math.random() * 9) + 's',
          animationDelay: (Math.random() * 10) + 's',
          transform: `rotate(${Math.random() * 360}deg)`
        }"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C12,2 14,4 12,8C10,12 8,14 12,22C16,14 14,12 12,8C10,4 12,2 12,2Z" />
        </svg>
      </div>
    </div>
    <!-- Sakura Tree Surprise Overlay -->
    <Transition name="fade">
      <div v-if="showSurprise" class="fixed inset-0 z-[100] flex flex-col items-center justify-end md:justify-center p-4 backdrop-blur-xl bg-white/60" @click="showSurprise = false">
        
        <!-- Majestic Sakura Tree Component -->
        <div class="relative w-full max-w-2xl transform animate-tree-grow flex flex-col items-center mb-8" @click.stop>
          
          <!-- Large Tree SVG -->
          <svg viewBox="0 0 400 400" class="w-full h-auto drop-shadow-[0_20px_50px_rgba(244,114,182,0.3)]">
            <!-- Root/Base shadow -->
            <ellipse cx="200" cy="360" rx="80" ry="20" fill="rgba(244,114,182,0.1)" />
            
            <!-- Trunk -->
            <path d="M200,360 Q200,280 240,200 M200,360 Q200,280 160,220" stroke="#5D4037" stroke-width="12" fill="none" class="animate-trunk-draw" />
            <path d="M220,240 L260,180 M180,260 L140,200" stroke="#795548" stroke-width="6" fill="none" class="animate-trunk-draw" style="animation-delay: 0.5s"/>
            
            <!-- Blossom Clouds -->
            <g class="animate-branches-fade">
              <!-- Clusters of Sakura -->
              <g v-for="(cluster, idx) in [
                {x: 140, y: 180, r: 40, c: '#FCE4EC'},
                {x: 260, y: 160, r: 45, c: '#FCE4EC'},
                {x: 200, y: 120, r: 50, c: '#F8BBD0'},
                {x: 170, y: 110, r: 35, c: '#FCE4EC'},
                {x: 230, y: 100, r: 38, c: '#F8BBD0'},
                {x: 200, y: 80, r: 42, c: '#FCE4EC'},
                {x: 110, y: 200, r: 30, c: '#F48FB1'},
                {x: 290, y: 190, r: 35, c: '#F48FB1'}
              ]" :key="idx">
                <circle :cx="cluster.x" :cy="cluster.y" :r="cluster.r" :fill="cluster.c" opacity="0.85" />
                <circle :cx="cluster.x+5" :cy="cluster.y-5" :r="cluster.r*0.8" fill="white" opacity="0.2" />
              </g>
            </g>
            <!-- Twinkles & Sparkles -->
            <g v-for="i in 20" :key="'t'+i" class="animate-twinkle text-white">
               <circle :cx="120 + Math.random()*160" :cy="60 + Math.random()*200" r="1.5" fill="white" :style="{ animationDelay: i*0.2+'s' }"/>
            </g>
          </svg>
          <!-- Text content -->
          <div class="mt-4 text-center space-y-2 bg-white/40 backdrop-blur-md rounded-[3rem] p-10 border border-rose-100/50 shadow-xl">
            <h3 class="text-lg md:text-lg font-serif font-bold text-rose-500 italic drop-shadow-sm">A Majestic Blossom</h3>
            <p class="text-lg md:text-lg text-rose-400 italic font-cursive leading-relaxed px-4">
              "Like this grand tree, our love blooms <br/> bigger and more beautiful every day."
            </p>
            
            <button 
              @click="showSurprise = false"
              class="px-10 py-3 bg-rose-300 text-white rounded-full text-lg font-bold shadow-xl hover:bg-rose-400 transition-all hover:scale-105 active:scale-95 mt-8 border-4 border-white/50"
            >
              Close 🌸
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<style scoped>
@keyframes sakura-bloom {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(10deg); }
}
.animate-sakura-bloom {
  animation: sakura-bloom 3s infinite ease-in-out;
}
@keyframes sakura-fall {
  0% { transform: translate(0, 0) rotate(0deg) scale(0.8); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.8; }
  100% { transform: translate(200px, 120vh) rotate(1080deg) scale(1.2); opacity: 0; }
}
.animate-sakura-fall {
  animation: sakura-fall linear infinite;
}
@keyframes tree-grow {
  0% { transform: translateY(200px) scale(0.5); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
.animate-tree-grow {
  animation: tree-grow 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes trunk-draw {
  from { stroke-dasharray: 400; stroke-dashoffset: 400; }
  to { stroke-dasharray: 400; stroke-dashoffset: 0; }
}
.animate-trunk-draw {
  animation: trunk-draw 1.8s ease-out forwards;
}
@keyframes branches-fade {
  from { opacity: 0; transform: scale(0.3); filter: blur(10px); }
  to { opacity: 1; transform: scale(1); filter: blur(0px); }
}
.animate-branches-fade {
  animation: branches-fade 2s 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transform-origin: bottom center;
}
@keyframes twinkle {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 1; transform: scale(2); }
}
.animate-twinkle {
  animation: twinkle 3s infinite ease-in-out;
}
/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>