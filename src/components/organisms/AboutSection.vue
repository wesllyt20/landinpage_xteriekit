<template>
  <section
    v-reveal
    class="relative overflow-hidden py-20 bg-cover bg-center"
    style="background-image: url('/images/limpiando3.avif')"
  >
    <div class="absolute inset-0 bg-[#0B3E56]/85"></div>
    <BaseContainer class="relative z-10">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="space-y-8 text-white">
          <BaseSectionTitle :title="content.title" :subtitle="undefined" variant="dark" />
          
          <div class="space-y-6 text-gray-200">
            <p class="text-base leading-relaxed text-white/90">
              {{ content.description }}
            </p>
            <p class="text-sm leading-relaxed text-white/90">
              {{ content.description2 }}
            </p>
          </div>

          <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <ChecklistItem v-for="item in content.checklist" :key="item" :label="item" />
          </ul>
        </div>
        
        <div class="relative lg:pl-8 pb-8"> <!-- Added padding for overlay space -->
          <img
            :src="content.image"
            alt="Equipo especializado"
            class="relative z-10 w-full rounded-4xl object-cover shadow-[0_20px_50px_rgba(14,165,233,0.4)]"
          />
          
          <!-- Stat Card Updated -->
          <div class="absolute -bottom-6 left-1/2 z-20 w-[90%] -translate-x-1/2 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] border border-gray-100 sm:w-auto sm:max-w-95 lg:left-0 lg:-left-6 lg:translate-x-0">
            <div class="flex items-baseline gap-2 mb-2">
              <p class="text-4xl font-bold text-[#E6004C]">{{ content.statCard.title }}</p>
              <p class="text-sm font-semibold text-gray-900">{{ content.statCard.subtitle }}</p>
            </div>
            <p class="text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 relative">
              {{ content.statCard.description }}
            </p>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/atoms/BaseContainer.vue';
import BaseSectionTitle from '@/components/atoms/BaseSectionTitle.vue';
import ChecklistItem from '@/components/molecules/ChecklistItem.vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue'; // Added if needed implicitly, though not used directly in template

interface StatCard {
  title: string;
  subtitle?: string;
  description: string;
}

interface AboutContent {
  title: string;
  description: string;
  description2?: string;
  checklist: string[];
  image: string;
  statCard: StatCard;
}

interface Props {
  content: AboutContent;
}

defineProps<Props>();
</script>
