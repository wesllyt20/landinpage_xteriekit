<template>
  <div :class="['flex flex-col gap-4', alignmentClass]">
    <div v-if="eyebrow" :class="['text-sm font-semibold uppercase tracking-[0.4em]', eyebrowColor]">
      {{ eyebrow }}
    </div>
    <div>
      <h2 :class="['text-2xl font-bold sm:text-2xl', titleColor]">
        {{ title }}
      </h2>
      <div class="mt-3 h-1 w-20 rounded-full bg-[#E6004C]"></div>
    </div>
    <p v-if="subtitle" :class="['max-w-3xl text-base', subtitleColor]">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Align = 'left' | 'center';

interface Props {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: Align;
  variant?: 'light' | 'dark';
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: undefined,
  eyebrow: undefined,
  align: 'left',
  variant: 'light',
});

const alignmentClass = computed(() => (props.align === 'center' ? 'items-center text-center' : 'items-start text-left'));

const titleColor = computed(() => props.variant === 'dark' ? 'text-white' : 'text-[#0B1F2A]');
const subtitleColor = computed(() => props.variant === 'dark' ? 'text-gray-200' : 'text-[#6B7280]');
const eyebrowColor = computed(() => props.variant === 'dark' ? 'text-white/80' : 'text-[#0B3E56]/70');
</script>
