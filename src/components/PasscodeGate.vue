<script setup>
import { ref } from 'vue';

const emit = defineEmits(['authorized']);
const answer = ref('');
const error = ref(false);
const isTyping = ref(false);

const checkPasscode = () => {
  if (answer.value.toLowerCase().trim() === 'inday') {
    localStorage.setItem('monthsary_auth', 'true');
    emit('authorized');
  } else {
    error.value = true;
    setTimeout(() => {
      error.value = false;
    }, 500);
  }
};
</script>

<template>
  <div class="fixed inset-0 z-[200] flex items-center justify-center bg-cream-50/90 backdrop-blur-xl p-6">
    <!-- Floating Petals in Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <div v-for="i in 10" :key="i" 
        class="absolute animate-float text-tan-200"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          width: (20 + Math.random() * 30) + 'px',
          animationDelay: (Math.random() * 5) + 's',
          animationDuration: (10 + Math.random() * 10) + 's'
        }"
      >
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,22C12,22 13,18 16,18C19,18 22,20 22,20C22,20 20,17 20,14C20,11 22,9 22,9C22,9 18.5,10 16,10C13.5,10 12,6 12,6C12,6 10.5,10 8,10C5.5,10 2,9 2,9C2,9 4,11 4,14C4,17 2,20 2,20C2,20 5,18 8,18C11,18 12,22 12,22Z" /></svg>
      </div>
    </div>

    <div 
      class="relative w-full max-w-md bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_30px_100px_-20px_rgba(184,153,135,0.3)] border-4 border-white transform transition-all duration-500"
      :class="{ 'animate-shake-horizontal border-tan-300': error }"
    >
      <div class="text-center space-y-8">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-tan-50 rounded-full mb-4">
           <svg class="w-10 h-10 text-tan-300 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
           </svg>
        </div>
        
        <div class="space-y-4">
          <h2 class="text-3xl font-serif font-bold text-brown-400 italic">For Someone Special...</h2>
          <p class="text-xl text-tan-300 font-cursive italic leading-relaxed">
            "What is our call sign? 😂"
          </p>
        </div>

        <div class="relative group">
          <input 
            v-model="answer"
            type="text"
            placeholder="Type your answer here..."
            @keyup.enter="checkPasscode"
            @focus="isTyping = true"
            @blur="isTyping = false"
            class="w-full px-6 py-5 bg-cream-50 border-2 border-transparent focus:border-tan-200 rounded-3xl text-center text-xl font-medium text-brown-500 placeholder:text-tan-100 transition-all outline-none"
          />
          <div v-if="error" class="absolute -bottom-6 left-0 right-0 text-tan-400 text-sm font-bold animate-bounce">
            Oops! That's not it yet... ❤️
          </div>
        </div>

        <button 
          @click="checkPasscode"
          class="w-full py-5 bg-brown-400 text-black rounded-3xl text-xl font-bold font-serif italic shadow-xl hover:bg-brown-500 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
        >
          <span>Let me in! 🌸</span>
          <svg class="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(10deg); }
}
.animate-float {
  animation: float 10s infinite ease-in-out;
}

@keyframes shake-horizontal {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-10px); }
  40%, 80% { transform: translateX(10px); }
}
.animate-shake-horizontal {
  animation: shake-horizontal 0.4s ease-in-out;
}
</style>
