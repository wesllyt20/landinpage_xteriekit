<template>
  <section v-reveal class="bg-[#F5F7FA] py-16">
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
              <span class="shrink-0 w-2 h-2 bg-[#FF2056] rounded-full"></span>
              <span class="text-sm text-gray-800 font-medium">{{ bullet }}</span>
            </li>
          </ul>

          <div class="mt-6 space-y-3">
            <p class="text-sm font-bold uppercase tracking-wider text-[#0B3E56]/70">Equipos de Esterilización</p>
            <div class="h-px w-full bg-[#0B3E56]/15"></div>
            <div class="space-y-3">
              <div
                v-for="item in content.equipment"
                :key="item.label"
                class="flex items-center justify-between gap-4"
              >
                <span class="text-sm font-semibold text-[#0B1F2A]">{{ item.label }}</span>
                <span
                  class="text-xs font-bold tracking-wide px-3 py-1 rounded-full"
                  :class="badgeVariantClasses[item.variant] || badgeVariantClasses.blue"
                >
                  {{ item.time }}
                </span>
              </div>
            </div>
          </div>
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

type EquipmentVariant = 'blue' | 'red';

interface TechEquipment {
  label: string;
  time: string;
  variant: EquipmentVariant;
}

interface TechContent {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  equipment: TechEquipment[];
}

interface Props {
  content: TechContent;
}

const badgeVariantClasses: Record<EquipmentVariant, string> = {
  blue: 'text-[#0f3f5c] bg-[#0f3f5c]/10',
  red: 'text-[#c62846] bg-[#c62846]/10',
};

defineProps<Props>();
</script>
