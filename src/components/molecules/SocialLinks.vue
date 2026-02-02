<template>
  <div class="flex items-center gap-3">
    <a
      v-for="social in items"
      :key="social.name"
      :href="social.href"
      target="_blank"
      rel="noopener"
      class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 cursor-pointer"
    >
      <BaseIcon :name="social.name" size="20" />
      <span class="sr-only">{{ social.label }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/atoms/BaseIcon.vue';

interface SocialItem {
  name: string;
  label: string;
  href: string;
}

interface Props {
  items: SocialItem[];
}

defineProps<Props>();
</script>
