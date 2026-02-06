<template>
  <div
    :class="[
      'flex flex-col text-white transition-all duration-300 sm:flex-row sm:items-center sm:justify-between',
      compact ? 'gap-3 text-sm' : 'gap-4 text-base'
    ]"
  >
    <div
      :class="[
        'flex flex-col text-white/90 transition-all duration-300 sm:flex-row sm:items-center',
        compact ? 'gap-3 sm:gap-6' : 'gap-4 sm:gap-10'
      ]"
    >
      <a
        :href="`tel:${phoneHref}`"
        class="flex items-center gap-3 font-semibold hover:text-white"
      >
        <BaseIcon name="phone" :size="compact ? 18 : 22" class="text-white" />
        <span>{{ phone }}</span>
      </a>
      <a
        :href="`mailto:${email}`"
        class="flex items-center gap-3 font-semibold hover:text-white"
      >
        <BaseIcon name="mail" :size="compact ? 18 : 22" class="text-white" />
        <span>{{ email }}</span>
      </a>
    </div>
    <div
      :class="[
        'flex items-center font-semibold text-white/90 transition-all duration-300',
        compact ? 'gap-3 text-sm' : 'gap-4 text-base'
      ]"
    >
      <BaseIcon name="location" :size="compact ? 18 : 22" class="text-white" />
      <span>{{ location }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';

interface Props {
  phone: string;
  email: string;
  location: string;
  compact?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  compact: false,
});

const { phone, email, location, compact } = toRefs(props);
const phoneHref = computed(() => phone.value.replace(/[^+\d]/g, ''));
</script>
