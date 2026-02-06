<template>
  <BaseCard
    class="group h-full w-full min-w-[220px] cursor-pointer border border-transparent hover:border-[#E5E7EB] hover:shadow-lg transition-all"
    padding="p-6"
  >
    <div class="flex flex-col gap-4">
      <div 
        class="inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:-translate-y-2.5"
        :style="{ 
          backgroundColor: bgColor, 
          color: iconColor
        }"
      >
        <BaseIcon :name="icon" :size="28" />
      </div>
      <div>
        <h3 class="text-base font-bold text-[#0B1F2A]">{{ title }}</h3>
        <p class="mt-2 text-xs leading-relaxed text-[#6B7280]">{{ description }}</p>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/atoms/BaseCard.vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';

interface Props {
  title: string;
  description: string;
  icon: string;
  bgColor?: string;
  iconColor?: string;
}

withDefaults(defineProps<Props>(), {
  bgColor: '#EAF2F6', // fallback
  iconColor: '#0B3E56', // fallback
});
</script>
