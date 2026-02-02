<template>
  <BaseCard padding="p-5" class="bg-white/80">
    <div class="flex items-start gap-4">
      <div :class="['rounded-2xl p-3', accent]">
        <BaseIcon :name="icon" size="28" />
      </div>
      <div>
        <h3 class="text-base font-semibold text-[#0B1F2A]">{{ title }}</h3>
        <p class="mt-1 text-sm text-[#6B7280]">{{ description }}</p>
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
  accent?: string;
}

withDefaults(defineProps<Props>(), {
  accent: 'bg-[#0B3E56]/10 text-[#0B3E56]',
});
</script>
