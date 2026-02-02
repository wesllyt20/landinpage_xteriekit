<template>
  <li class="flex items-start gap-4 text-white/90">
    <div class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#E6004C] bg-transparent text-[#E6004C]">
      <BaseIcon name="check" :size="10" class="text-[#E6004C]" />
    </div>
    <span class="text-xs font-medium leading-tight">{{ label }}</span>
  </li>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/atoms/BaseIcon.vue';

interface Props {
  label: string;
}

defineProps<Props>();
</script>
