<script setup>
import { ref } from 'vue';
import chopperImg from '../assets/surprises/chopper.png';

const showSurprise = ref(false);

const toggleSurprise = () => {
  showSurprise.value = !showSurprise.value;
};
</script>

<template>
  <div class="relative flex flex-col items-center py-20 bg-white shadow-inner overflow-hidden">
    <!-- Pulse Effect for the Heart -->
    <div class="relative cursor-pointer group" @click="toggleSurprise">
      <div class="absolute inset-0 bg-rose-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
      
      <div 
        class="relative w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-rose-100 transform transition-all duration-500 hover:scale-110 active:scale-95"
      >
        <svg class="w-12 h-12 text-rose-500 animate-heart-pulse-fast" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
        </svg>
      </div>
      
      <p class="mt-6 text-brown-400 font-cursive text-2xl italic tracking-wide animate-bounce">
        "Press this Heart ✨"
      </p>
    </div>

    <!-- Chopper Pop-up Overlay -->
    <Transition name="bounce">
      <div v-if="showSurprise" class="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-brown-900/40" @click="showSurprise = false">
        <div class="relative max-w-sm w-full bg-white rounded-3xl p-8 shadow-2xl border-8 border-brown-100 flex flex-col items-center text-center space-y-6 transform overflow-hidden" @click.stop>
          <!-- Confetti-like stars -->
          <div class="absolute inset-0 pointer-events-none opacity-20">
             <div v-for="i in 10" :key="i" class="absolute animate-twinkle text-yellow-500" :style="{ top: Math.random()*100+'%', left: Math.random()*100+'%', animationDelay: Math.random()*2+'s' }">★</div>
          </div>

          <div class="w-full aspect-square rounded-2xl overflow-hidden border-4 border-brown-50 shadow-inner">
            <img :src="chopperImg" alt="Surprise!" class="w-full h-full object-cover animate-wiggle" />
          </div>
          
          <div class="space-y-2">
            <h3 class="text-3xl font-serif font-bold text-brown-500">Chopper Loves You!</h3>
            <p class="text-xl text-brown-400 italic font-cursive leading-relaxed">
              "Thank you so much! <br/> I love youuuu! ❤️"
            </p>
          </div>

          <button 
            @click="showSurprise = false"
            class="px-8 py-3 bg-brown-400 text-white rounded-full text-sm font-bold shadow-lg hover:bg-brown-500 transition-all active:scale-95"
          >
            Aww, Close ❤️
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
@keyframes heart-pulse-fast {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
.animate-heart-pulse-fast {
  animation: heart-pulse-fast 1s infinite ease-in-out;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg) scale(1); }
  50% { transform: rotate(3deg) scale(1.05); }
}
.animate-wiggle {
  animation: wiggle 0.5s infinite ease-in-out;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; transform: scale(1) rotate(0); }
  50% { opacity: 1; transform: scale(1.3) rotate(15deg); }
}
.animate-twinkle {
  animation: twinkle 2s infinite ease-in-out;
}

/* Transitions */
.bounce-enter-active {
  animation: bounce-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

@keyframes bounce-in {
  0% { transform: scale(0) rotate(-10deg); opacity: 0; }
  60% { transform: scale(1.1) rotate(5deg); opacity: 1; }
  100% { transform: scale(1) rotate(0); opacity: 1; }
}
</style>
