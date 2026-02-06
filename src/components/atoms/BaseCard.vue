<template>
  <div
    v-reveal
    :class="[
      'rounded-2xl bg-white/95 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
      padding,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  padding?: string;
}

withDefaults(defineProps<Props>(), {
  padding: 'p-0',
});
</script>
