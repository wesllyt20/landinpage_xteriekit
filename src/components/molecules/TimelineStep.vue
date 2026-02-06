<template>
  <div class="group relative flex flex-1 cursor-pointer flex-col items-center gap-4 text-center z-10 transition-all duration-200">
    <div class="relative">
       <span class="inline-block rounded-full bg-[#0B3E56]/10 px-3 py-1 text-xs font-bold text-[#0B3E56] mb-4">
        {{ badge }}
      </span>
      <div class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl ring-2 ring-sky-100 transition-all duration-200 group-hover:ring-sky-500 group-hover:shadow-md">
        <BaseIcon :name="icon" :size="30" class="text-[#0B3E56] transition-colors duration-200 group-hover:text-sky-500" />
      </div>
    </div>
    
    <div class="mt-2 max-w-70">
      <h3 class="text-lg font-bold text-[#0B1F2A] mb-2">{{ title }}</h3>
      <p class="text-sm font-medium text-gray-500 leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/atoms/BaseIcon.vue';

interface Props {
  badge: string;
  title: string;
  description: string;
  icon: string;
}

defineProps<Props>();
</script>
