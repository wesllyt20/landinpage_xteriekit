<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  href: string;
  isActive: boolean;
  label: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{ (event: 'click', href: string): void }>();

const handleClick = () => {
  emit('click', props.href);
};
</script>

<template>
  <a
    :href="`#${href}`"
    @click="handleClick"
    class="relative px-1 py-1 text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-200 cursor-pointer decoration-transparent focus:outline-none"
    :class="isActive ? 'text-[#0B1F2A]' : 'text-[#0B1F2A]/70 hover:text-[#0B1F2A]'"
  >
    {{ label }}
    <span
      class="absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-[#E6004C] transition-transform duration-300 transform origin-left"
      :class="isActive ? 'scale-x-100' : 'scale-x-0'"
    ></span>
  </a>
</template>
