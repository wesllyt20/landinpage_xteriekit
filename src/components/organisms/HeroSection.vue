<template>
  <section
    class="relative min-h-svh flex items-center justify-center bg-cover bg-center overflow-hidden"
    :style="{ backgroundImage: `url(${content.backgroundImage})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[#0B3E56]/75 z-10"></div>

    <!-- Contenido Hero -->
    <div class="relative z-20 w-full pt-20 pb-32">
      <BaseContainer>
        <div class="flex flex-col items-center text-center text-white gap-8 mx-auto max-w-5xl">
          <!-- Eyebrow -->
          <p class="text-sm font-semibold uppercase tracking-[0.4em] text-white/90">
            {{ content.eyebrow }}
          </p>
          
          <!-- Title -->
          <h1 class="text-4xl md:text-6xl font-bold drop-shadow-lg leading-tight">
            {{ content.title }}
          </h1>

          <!-- Description -->
          <p class="text-lg md:text-2xl max-w-3xl mx-auto text-white/90">
            {{ content.description }}
          </p>

          <!-- CTAs -->
          <div class="mt-4">
            <HeroCtas
              :primary-label="content.primaryCta.label"
              :secondary-label="content.secondaryCta.label"
              @primary-click="() => emitNavigate(content.primaryCta.targetSection)"
              @secondary-click="() => emitNavigate(content.secondaryCta.targetSection)"
            />
          </div>

          <!-- Feature Cards (Optional in new design, but user said 'texto + cards') -->
           <div class="grid gap-6 sm:grid-cols-3 mt-12 w-full text-left">
              <FeatureCard 
                v-for="feature in content.featureCards" 
                :key="feature.title" 
                v-bind="feature" 
                class="bg-white/10 backdrop-blur-sm border border-white/20 text-white"
              />
            </div>
        </div>
      </BaseContainer>
    </div>

    <!-- Ola inferior -->
    <div class="absolute bottom-0 left-0 w-full z-20 pointer-events-none text-white">
      <BaseDividerWave />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/atoms/BaseContainer.vue';
import BaseDividerWave from '@/components/atoms/BaseDividerWave.vue';
import FeatureCard from '@/components/molecules/FeatureCard.vue';
import HeroCtas from '@/components/molecules/HeroCtas.vue';

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

defineProps<Props>();

const emit = defineEmits<{ (event: 'navigate', sectionId: string): void }>();

const emitNavigate = (sectionId: string) => emit('navigate', sectionId);
</script>
