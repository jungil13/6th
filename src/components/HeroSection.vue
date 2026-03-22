<script setup>
import { onMounted, ref } from 'vue';

const flowers = ref([]);

const generateFlowers = () => {
  for (let i = 0; i < 15; i++) {
    flowers.value.push({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      size: Math.random() * (40 - 20) + 20 + 'px',
      delay: Math.random() * 5 + 's',
      duration: Math.random() * (15 - 10) + 10 + 's',
    });
  }
};

onMounted(() => {
  generateFlowers();
});

const emit = defineEmits(['open-heart']);
</script>

<template>
  <section class="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-tan-50 to-cream-100 text-tan-400">
    <!-- Floating Petals/Hearts Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        v-for="flower in flowers"
        :key="flower.id"
        class="absolute animate-float opacity-30 text-rose-200"
        :style="{
          left: flower.left,
          top: flower.top,
          width: flower.size,
          height: flower.size,
          animationDelay: flower.delay,
          animationDuration: flower.duration
        }"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
        </svg>
      </div>
    </div>

    <!-- Content -->
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
        class="group relative px-12 py-5 bg-brown-400 text-white rounded-full font-bold text-lg tracking-[0.2em] uppercase transition-all duration-500 hover:bg-brown-500 hover:scale-110 active:scale-95 shadow-2xl hover:shadow-brown-200/50 flex items-center gap-3 mx-auto overflow-hidden animate-shake"
      >
        <span class="relative z-10 italic text-black text-center">click here please!</span>
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
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-40px) rotate(15deg); }
}

.animate-float {
  animation: float ease-in-out infinite;
}

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
