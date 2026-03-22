<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const sectionRef = ref(null);

const message = `Hi indaaay, happy 6th monthsary nato. 

Last nako long message sa Messenger to pag 3rd monthsary man siguro to nato. Karon, message gihapon pero website na hahaha.

As time goes by, mas nagkakomportable nata, open, ug mas nailhan nato ang usag-usa. And along the way, dili gyud malikayan nga naa tay misunderstandings. Usahay dili ta okay, usahay lisod sabton ang sitwasyon. Pero bisan pa ana, we still choose each other. We stay, we fight, and we try to understand.

Kabalo ko naa koy mga apan hahaha, especially sa akong actions. I tend to overthink, seloso ra kaayo bisag way angay hahaha, tas masayop jud ko—feel nako okay ra pero dili na diay to maayo. And for that, I’m truly sorry. Kabalo ko kapoy na siguro ka makadungog nako sige ug sorry, pero I will never get tired of saying it if it means acknowledging my mistakes and trying to be better for you.

Tas isa sa akong wish para nato is that even when we fight or have misunderstandings, we learn to be more vocal with each other. Bisan dili ta anad, bisan lisod usahay i-express atong feelings, I hope we both try. Kay mas maayos gyud ang tanan kung magstorya ta, kung mag-open ta sa unsay naa sa atong hunahuna, kaysa maghilom ug magtag-anay.

Nya even if sometimes murag wala koy plano hahaha, pero naa gyud. I have plans not just for myself, but for us—for our future. Karun, wala pa ko didto sa akong goal: wala pay stable work, wala pay enough money, dili pa nato mapalit atong mga cravings usahay. Mapalit man hinuon, pero taga adlaw man gud ga-crave hahaha. But I promise I’m doing my best. I will keep working hard if mapaboran na, not just for me, but for us.

Tas thank you, inday, for staying. For loving me even when I’m hard to handle. For being patient, understanding, and for always choosing me. I’m really grateful and lucky to have you. Thank you for taking care of me and for making me feel loved in ways I never expected.

One day, makabawi ra gyud ko nimo. Padayon lang hangtod maabot nato atong mga pangandoy puhon. Don’t forget to pray and to thank God always.

I loooooveee yooouuu!
`;
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
    }
  }, { threshold: 0.1 });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});
</script>

<template>
  <section ref="sectionRef" class="py-24 px-6 bg-brown-50/50 flex flex-col items-center justify-center overflow-hidden">
    <div 
      class="max-w-4xl w-full bg-white rounded-2xl p-10 md:p-20 shadow-2xl border-4 border-brown-100 relative overflow-hidden transform transition-all duration-1000 ease-out card-glow"
      :class="isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'"
    >
      <!-- Wax seal ornament -->
      <div class="absolute -top-6 -right-6 w-24 h-24 bg-brown-100 rounded-full flex items-center justify-center -rotate-12 opacity-40 select-none">
        <span class="text-brown-300 text-3xl font-serif">LOVE</span>
      </div>

      <!-- Floating Hearts & Stars -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div v-for="i in 12" :key="'h-'+i" 
             class="absolute animate-float-slow text-rose-300"
             :style="{ 
               left: Math.random() * 100 + '%', 
               top: Math.random() * 100 + '%', 
               animationDelay: Math.random() * 5 + 's',
               fontSize: (Math.random() * 20 + 10) + 'px'
             }">
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
          </svg>
        </div>
        <div v-for="i in 10" :key="'s-'+i" 
             class="absolute animate-twinkle text-yellow-500"
             :style="{ 
               left: Math.random() * 100 + '%', 
               top: Math.random() * 100 + '%', 
               animationDelay: Math.random() * 3 + 's',
               fontSize: (Math.random() * 15 + 5) + 'px'
             }">
          ★
        </div>
      </div>

      <div class="relative space-y-12 z-10">
        <div class="flex flex-col items-center space-y-4">
          <div class="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center text-brown-400 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 animate-heart-pulse-fast text-rose-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
          </div>
          <h2 class="text-4xl md:text-6xl font-serif font-bold text-brown-500 italic tracking-tight">Dearest,</h2>
        </div>

        <div class="prose prose-stone max-w-none text-brown-400/90 text-xl md:text-3xl leading-relaxed font-light whitespace-pre-line italic font-serif text-center md:text-left">
          {{ message }}
        </div>

        <div class="pt-16 border-t border-brown-50 flex flex-col items-center md:items-end space-y-4">
          <p class="font-cursive text-4xl md:text-5xl text-rose-300 font-bold">
            — "I still choose you. Every day."
          </p>
          <div class="flex items-center gap-2 text-brown-200 text-xs tracking-widest uppercase font-bold">
            <div class="w-8 h-[1px] bg-brown-100"></div>
            Always Yours
            <div class="w-8 h-[1px] bg-brown-100"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prose {
  font-family: 'Outfit', 'Inter', sans-serif;
}

.card-glow {
  animation: glow-pulse 4s infinite ease-in-out;
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 40px rgba(184, 153, 135, 0.2); border-color: rgba(184, 153, 135, 0.4); }
  50% { box-shadow: 0 0 60px rgba(184, 153, 135, 0.4); border-color: rgba(184, 153, 135, 0.8); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes heart-pulse-fast {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.animate-float-slow {
  animation: float-slow 6s infinite ease-in-out;
}

.animate-twinkle {
  animation: twinkle 3s infinite ease-in-out;
}

.animate-heart-pulse-fast {
  animation: heart-pulse-fast 1s infinite ease-in-out;
}
</style>
