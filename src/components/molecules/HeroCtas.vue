<template>
  <div class="flex flex-col gap-4 sm:flex-row">
    <BaseButton variant="pill" class="sm:min-w-50" @click="() => emit('primary-click')">
      {{ primaryLabel }}
    </BaseButton>
    <BaseButton
      variant="secondary"
      class="bg-transparent sm:min-w-50 border-[#ffffff]! text-white! hover:bg-[#0B3E56]/20!"
      @click="() => emit('secondary-click')"
    >
      {{ secondaryLabel }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue';

interface Props {
  primaryLabel: string;
  secondaryLabel: string;
}

defineProps<Props>();

const emit = defineEmits<{
  (event: 'primary-click'): void;
  (event: 'secondary-click'): void;
}>();
</script>
