<script setup>
import { onMounted, ref } from 'vue';

const emit = defineEmits(['open-heart']);
</script>

<template>
  <section class="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-tan-50 to-cream-100 text-tan-400">
    <div class="z-10 text-center px-4 space-y-8 max-w-2xl transform transition-all duration-1000 slide-up">
      <div class="space-y-4">
        <span class="text-sm uppercase tracking-[0.2em] font-sans font-semibold text-brown-300 ">September 23 • March 23</span>
        <h1 class="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-2 text-brown-400 drop-shadow-sm">
          6 Months
        </h1>
      </div>
      
      <p class="text-xl md:text-2xl font-cursive text-tan-300 leading-relaxed italic px-6">
        "I know things haven't been perfect, but you mean everything to me."
      </p>

      <div class="pt-12">
        <button 
        @click="$emit('open-heart')"
        class="group relative px-12 py-5 bg-rose-300 text-white rounded-full font-bold text-lg tracking-[0.2em] uppercase transition-all duration-500 hover:bg-rose-400 hover:scale-110 active:scale-95 shadow-2xl hover:shadow-rose-200/50 flex items-center gap-3 mx-auto overflow-hidden animate-shake"
      >
        <span class="relative z-10 italic text-white text-center">click here please!</span>
        <svg class="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
        <!-- Glint effect -->
        <div class="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] -translate-x-full group-hover:animate-glint"></div>
      </button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 animate-bounce text-rose-400">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px) rotate(-1deg); }
  75% { transform: translateX(4px) rotate(1deg); }
}

.animate-shake {
  animation: shake 0.5s infinite ease-in-out;
}

.slide-up {
  animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
