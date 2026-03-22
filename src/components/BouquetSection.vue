<script setup>
import { ref, onMounted } from 'vue';
import bouquet from '../assets/loyalty_bouquet.png';

const isVisible = ref(false);
const bouquetRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
    }
  }, { threshold: 0.1 });

  if (bouquetRef.value) {
    observer.observe(bouquetRef.value);
  }
});
</script>

<template>
  <section ref="bouquetRef" class="py-24 px-6 bg-cream-50 flex flex-col items-center justify-center overflow-hidden">
    <div class="max-w-4xl mx-auto text-center space-y-12">
      <div 
        class="transition-all duration-1000 transform"
        :class="isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'"
      >
        <h2 class="text-4xl md:text-5xl font-serif text-tan-400 mb-4">A Gift for You</h2>
        <p class="text-xl text-tan-300 font-cursive italic">
          "I can't buy you flowers for now, but soon I'll make it happen."
        </p>
      </div>

      <div 
        class="relative group transition-all duration-1000 delay-300 transform shadow-2xl shadow-tan-100/50 rounded-[3rem] overflow-hidden bg-white p-8"
        :class="isVisible ? 'opacity-100 translate-y-0 scale-105' : 'opacity-0 translate-y-32 scale-95'"
      >
        <img 
          :src="bouquet" 
          alt="Symbolic Bouquet of Loyalty and Consistency" 
          class="w-full max-w-lg mx-auto transform transition-transform duration-3000 animate-sway"
        />
        
        <!-- Floating Petals / Hearts -->
        <div class="absolute inset-0 pointer-events-none">
           <div class="absolute top-10 left-10 text-rose-200 animate-float opacity-40">❤️</div>
           <div class="absolute bottom-20 right-20 text-rose-300 animate-float opacity-50" style="animation-delay: 2s">🌸</div>
           <div class="absolute top-40 right-10 text-rose-100 animate-float opacity-30" style="animation-delay: 4s">✨</div>
        </div>
      </div>

      <p class="text-tan-200 text-sm tracking-widest uppercase mt-8 animate-pulse">
        Sunflowers for Loyalty • Salvias for Consistency
      </p>
    </div>
  </section>
</template>

<style scoped>
@keyframes sway {
  0%, 100% { transform: rotate(-2deg) scale(1); }
  50% { transform: rotate(2deg) scale(1.02); }
}

.animate-sway {
  animation: sway 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  50% { opacity: 0.6; }
  100% { transform: translateY(-100px) rotate(20deg); opacity: 0; }
}

.animate-float {
  animation: float 8s linear infinite;
}
</style>
