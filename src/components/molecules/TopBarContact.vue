<template>
  <div class="flex flex-col gap-3 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
      <a :href="`tel:${phoneHref}`" class="flex items-center gap-2 text-white/80 hover:text-white transition cursor-pointer">
        <BaseIcon name="phone" size="16" class="text-white" />
        <span>{{ phone }}</span>
      </a>
      <a :href="`mailto:${email}`" class="flex items-center gap-2 text-white/80 hover:text-white transition cursor-pointer">
        <BaseIcon name="mail" size="16" class="text-white" />
        <span>{{ email }}</span>
      </a>
    </div>
    <div class="flex items-center gap-2 text-white/80">
      <BaseIcon name="location" size="16" class="text-white" />
      <span>{{ location }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';

interface Props {
  phone: string;
  email: string;
  location: string;
}
const props = defineProps<Props>();

const phone = computed(() => props.phone);
const email = computed(() => props.email);
const location = computed(() => props.location);
const phoneHref = computed(() => props.phone.replace(/[^+\d]/g, ''));
</script>
