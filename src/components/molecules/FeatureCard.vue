<template>
  <div class="bg-white/95 rounded-2xl p-6 shadow-xl border border-white/60 flex flex-col items-start gap-4">
    <div :class="['rounded-2xl p-3', accent, 'transition-transform duration-300']">
      <BaseIcon :name="icon" size="26" class="text-current" />
    </div>
    <div class="space-y-1">
      <h3 class="text-lg font-bold text-[#28678a]">{{ title }}</h3>
      <p class="text-sm text-slate-500 leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/atoms/BaseIcon.vue';

interface Props {
  title: string;
  description: string;
  icon: string;
  accent?: string;
}

withDefaults(defineProps<Props>(), {
  accent: 'bg-[#e6f2fb] text-[#1f6a8c]',
});
</script>
