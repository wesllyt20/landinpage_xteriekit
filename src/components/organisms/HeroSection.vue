<template>
  <section
    v-reveal
    class="relative min-h-svh flex items-center bg-cover bg-center overflow-hidden"
    :style="{ backgroundImage: `url(${content.backgroundImage})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-linear-to-r from-sky-900/90 to-sky-800/70 mix-blend-multiply z-10"></div>

    <!-- Contenido Hero -->
    <div class="relative z-20 w-full py-16 lg:py-24">
      <BaseContainer>
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 items-center text-white">
            <!-- Columna izquierda -->
            <div class="space-y-6">
              <h1 class="font-extrabold leading-[1.05] text-4xl lg:text-6xl xl:text-6xl">
                <span class="block text-white">Excelencia en</span>
                <span class="block text-[#6cc5ed]">Esterilización</span>
                <span class="block text-[#6cc5ed]">Quirúrgica</span>
              </h1>
              <p class="text-white/85 max-w-lg leading-relaxed">
                {{ content.description }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  type="button"
                  class="bg-white text-[#0f3f5c] font-semibold px-7 py-3 rounded-xl shadow transition hover:shadow-lg hover:bg-white/90 cursor-pointer"
                  @click="() => emitNavigate(content.primaryCta.targetSection)"
                >
                  {{ content.primaryCta.label }}
                </button>
                <button
                  type="button"
                  class="bg-transparent text-white font-semibold px-7 py-3 rounded-xl border border-white/70 transition hover:bg-white/10 cursor-pointer"
                  @click="() => emitNavigate(content.secondaryCta.targetSection)"
                >
                  {{ content.secondaryCta.label }}
                </button>
              </div>
            </div>

            <!-- Columna derecha -->
            <div class="w-full">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FeatureCard
                  v-for="(feature, index) in content.featureCards"
                  :key="feature.title"
                  v-bind="feature"
                  :class="[
                    'self-stretch'
                    , index === 2 ? 'sm:col-span-1 sm:col-start-1' : ''
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>

    <!-- Ola inferior -->
    <div class="absolute bottom-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
      <svg
        class="relative block w-full h-[60px] md:h-[100px] rotate-180"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="fill-white"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/atoms/BaseContainer.vue';
import FeatureCard from '@/components/molecules/FeatureCard.vue';

interface CTA {
  label: string;
  targetSection: string;
}

interface FeatureCardContent {
  title: string;
  description: string;
  icon: string;
  accent?: string;
}

interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  backgroundImage: string;
  featureCards: FeatureCardContent[];
}

interface Props {
  content: HeroContent;
}

const props = defineProps<Props>();
const content = props.content;

const emit = defineEmits<{ (event: 'navigate', sectionId: string): void }>();

const emitNavigate = (sectionId: string) => emit('navigate', sectionId);
</script>
