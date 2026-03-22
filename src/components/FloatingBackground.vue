<script setup>
import { onMounted, ref } from 'vue';

const elements = ref([]);
const types = ['heart', 'petal', 'star', 'bubble'];

const generateElements = () => {
  const count = 40;
  for (let i = 0; i < count; i++) {
    elements.value.push({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      left: Math.random() * 100 + '%',
      size: Math.random() * (30 - 10) + 10 + 'px',
      delay: Math.random() * 10 + 's',
      duration: Math.random() * (20 - 10) + 10 + 's',
      opacity: Math.random() * 0.4 + 0.1,
      sway: Math.random() * 50 - 25 + 'px'
    });
  }
};

onMounted(() => {
  generateElements();
});
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div
      v-for="el in elements"
      :key="el.id"
      class="absolute animate-float-up shadow-sm"
      :class="{
        'text-rose-200': el.type === 'heart' || el.type === 'petal',
        'text-yellow-200': el.type === 'star',
        'bg-white/20 backdrop-blur-[1px] rounded-full border border-white/30': el.type === 'bubble'
      }"
      :style="{
        left: el.left,
        bottom: '-50px',
        width: el.size,
        height: el.size,
        opacity: el.opacity,
        animationDelay: el.delay,
        animationDuration: el.duration,
        '--sway': el.sway
      }"
    >
      <!-- Heart -->
      <svg v-if="el.type === 'heart'" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
      </svg>
      
      <!-- Petal -->
      <svg v-else-if="el.type === 'petal'" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
        <path d="M12,2C12,2 14,4 12,8C10,12 8,14 12,22C16,14 14,12 12,8C10,4 12,2 12,2Z" />
      </svg>
      
      <!-- Star -->
      <svg v-else-if="el.type === 'star'" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full animate-twinkle">
        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
      </svg>
      
      <!-- Bubble (handled by div classes) -->
    </div>
  </div>
</template>

<style scoped>
@keyframes float-up {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: inherit;
  }
  90% {
    opacity: inherit;
  }
  100% {
    transform: translateY(-110vh) translateX(var(--sway)) rotate(360deg);
    opacity: 0;
  }
}

.animate-float-up {
  animation: float-up linear infinite;
}

@keyframes twinkle {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.3); opacity: 1; }
}

.animate-twinkle {
  animation: twinkle 2s infinite ease-in-out;
}
</style>
