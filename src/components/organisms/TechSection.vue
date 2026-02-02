<template>
  <section class="bg-[#F5F7FA] py-16">
    <BaseContainer>
      <div
        class="max-w-6xl mx-auto bg-white rounded-[28px] shadow-xl border border-black/5 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden"
      >
        <!-- Columna texto -->
        <div class="flex flex-col justify-center p-8 md:p-10">
          <h2 class="text-xl font-bold mb-4 text-[#0B3E56]">
            {{ content.title }}
          </h2>
          <p class="text-sm text-gray-700 mb-6 leading-relaxed">
            {{ content.description }}
          </p>
          <ul class="space-y-3">
            <li v-for="bullet in content.bullets" :key="bullet" class="flex items-center gap-3">
              <span class="shrink-0 w-2.5 h-2.5 bg-[#FF2056] rounded-full"></span>
              <span class="text-sm text-gray-800 font-medium">{{ bullet }}</span>
            </li>
          </ul>
        </div>
        <!-- Columna imagen -->
        <div class="relative h-64 md:h-auto min-h-75">
          <img
            :src="content.image"
            alt="Tecnología de Vanguardia"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/atoms/BaseContainer.vue';

interface TechContent {
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

interface Props {
  content: TechContent;
}

defineProps<Props>();
</script>
