<script setup>
import { ref, onMounted } from 'vue';

const startDate = new Date('2025-09-23T00:00:00'); // Anniversary start (Sept 23 to March 23)
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateCounter = () => {
  const now = new Date();
  const diff = now - startDate;

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((diff / (1000 * 60)) % 60);
  seconds.value = Math.floor((diff / 1000) % 60);
};

onMounted(() => {
  updateCounter();
  setInterval(updateCounter, 1000);
});
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 md:gap-10 py-10">
    <div v-for="(val, unit) in { Days: days, Hours: hours, Minutes: minutes, Seconds: seconds }" :key="unit" 
         class="flex flex-col items-center p-6 min-w-[120px] bg-white/20 backdrop-blur-md rounded-xl border border-brown-50 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
      <span class="text-4xl md:text-5xl font-serif font-bold text-brown-400">{{ val }}</span>
      <span class="text-[10px] uppercase tracking-[0.3em] text-brown-200 font-bold mt-2">{{ unit }}</span>
    </div>
  </div>
</template>
