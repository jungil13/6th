<script setup>
import { ref } from 'vue';

const emit = defineEmits(['opened']);
const isOpen = ref(false);
const isLetterOut = ref(false);

const openEnvelope = () => {
  if (!isOpen.value) {
    isOpen.value = true;
    // Wait for flap to open before sliding letter
    setTimeout(() => {
      isLetterOut.value = true;
    }, 800);
  }
};
</script>

<template>
  <div class="relative flex flex-col items-center justify-center min-h-[600px] py-20 px-4">
    <h2 class="text-2xl md:text-3xl font-cursive text-brown-400 mb-16 italic animate-bounce h-8">
      {{ isOpen ? '' : '"Open your surprise..."' }}
    </h2>

    <div 
      class="relative w-80 h-56 md:w-96 md:h-64 cursor-pointer perspective-1000 group" 
      @click="openEnvelope"
    >
      <!-- Envelope Body (Back) -->
      <div class="absolute inset-0 bg-brown-200 border-2 border-brown-300 rounded-lg shadow-xl z-0"></div>

      <!-- The Letter/Content -->
      <div 
        class="absolute left-4 right-4 top-2 bottom-2 bg-brown-50 p-6 shadow-md transition-all duration-1000 ease-in-out"
        :style="{
          transform: isLetterOut ? 'translateY(-120%) scale(1.05) rotate(1deg)' : 'translateY(0)',
          zIndex: isLetterOut ? 40 : 10,
          opacity: isOpen ? 1 : 0
        }"
      >
        <div class="border border-brown-200 p-4 h-full flex flex-col items-center justify-center text-center space-y-4 bg-white/60 backdrop-blur-sm">
          <span class="text-[10px] uppercase tracking-[0.4em] text-brown-400 font-bold">Six Months</span>
          <h3 class="text-xl md:text-2xl font-serif text-brown-500 italic">A Blossom for You</h3>
          <div class="w-8 h-[1px] bg-rose-200"></div>
          <p class="text-sm md:text-base italic text-brown-400 font-cursive text-xl leading-snug">
            "I know things haven't been perfect, but you mean everything to me..."
          </p>
          <button 
            @click.stop="$emit('opened')"
            class="px-6 py-2 bg-brown-400 text-white rounded-full text-xs font-bold hover:bg-brown-500 transition-all mt-2 uppercase tracking-widest shadow-lg"
          >
            Read Message
          </button>
        </div>
      </div>

      <!-- Envelope Front (Bottom & Sides) -->
      <div class="absolute inset-0 z-20 overflow-hidden rounded-lg pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 384 256">
          <path d="M0 256L192 128L384 256" fill="#dfd1c3" stroke="#b89987" stroke-width="2"/>
          <path d="M0 0V256" stroke="#b89987" stroke-width="1" opacity="0.2"/>
          <path d="M384 0V256" stroke="#b89987" stroke-width="1" opacity="0.2"/>
        </svg>
      </div>

      <!-- Top Flap -->
      <div 
        class="absolute top-0 left-0 w-full h-full origin-top transition-transform duration-1000 z-30 pointer-events-none"
        :style="{
          transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
        }"
      >
        <svg class="w-full h-full drop-shadow-md" viewBox="0 0 384 256">
          <path d="M0 0L192 128L384 0H0Z" fill="#b89987" stroke="#8b5e34" stroke-width="1"/>
        </svg>

        <!-- Wax Seal / Heart (on the flap) -->
        <div 
          class="absolute top-[128px] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          :class="isOpen ? 'opacity-0' : 'opacity-100'"
        >
           <div class="w-14 h-14 bg-rose-400 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform ring-4 ring-rose-100/50 animate-sakura-pulse">
             <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12,22C12,22 13,18 16,18C19,18 22,20 22,20C22,20 20,17 20,14C20,11 22,9 22,9C22,9 18.5,10 16,10C13.5,10 12,6 12,6C12,6 10.5,10 8,10C5.5,10 2,9 2,9C2,9 4,11 4,14C4,17 2,20 2,20C2,20 5,18 8,18C11,18 12,22 12,22Z" />
             </svg>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

@keyframes sakura-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.animate-sakura-pulse {
  animation: sakura-pulse 1.5s infinite ease-in-out;
}
</style>
