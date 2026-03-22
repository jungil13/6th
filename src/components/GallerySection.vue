<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const galleryRef = ref(null);

// Import all images and videos from assets/img
const assetModules = import.meta.glob('../assets/img/*', { eager: true });
const moments = Object.keys(assetModules).map((path, index) => {
  const url = assetModules[path].default;
  const isVideo = path.endsWith('.mp4');
  return {
    id: index + 1,
    url,
    isVideo,
    alt: `Our Memory ${index + 1}`
  };
});

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    });
  }, { threshold: 0, rootMargin: '50px' });

  if (galleryRef.value) {
    observer.observe(galleryRef.value);
  }
});
</script>

<template>
  <section ref="galleryRef" id="gallery" class="py-24 px-6 bg-brown-50/20 overflow-hidden">
    <div class="max-w-7xl mx-auto space-y-16">
      <div class="text-center space-y-4">
        <h2 class="text-5xl md:text-7xl font-serif font-bold text-brown-400 drop-shadow-sm transition-all duration-1000"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
          Our Moments
        </h2>
        <div class="w-24 h-[1px] bg-brown-100 mx-auto"></div>
        <p class="text-xl text-brown-300 font-cursive italic transition-all duration-1000 delay-200"
           :class="isVisible ? 'opacity-100' : 'opacity-0'">
          "Captured memories of our beautiful journey together."
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="(moment, index) in moments" 
          :key="moment.id"
          class="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg border-2 border-white transition-all duration-1000 ease-out cursor-pointer hover:shadow-brown-200/50 hover:-translate-y-2"
          :style="{ transitionDelay: (index % 4) * 100 + 'ms' }"
          :class="isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'"
        >
          <div class="w-full h-full overflow-hidden">
            <video 
              v-if="moment.isVideo"
              :src="moment.url" 
              autoplay 
              loop 
              muted 
              playsinline
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            ></video>
            <img 
              v-else
              :src="moment.url" 
              :alt="moment.alt" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          
          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <div class="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               <span class="text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold">Moment #{{ index + 1 }}</span>
               <p class="text-white font-serif text-lg leading-tight">Forever & Always</p>
            </div>
            
            <!-- Video Badge -->
            <div v-if="moment.isVideo" class="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
