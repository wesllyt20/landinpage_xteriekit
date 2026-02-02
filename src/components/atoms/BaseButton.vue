<template>
  <button
    :type="type"
    :class="[
      baseClasses,
      variantClasses[variant] ?? variantClasses.primary,
      sizeClasses[size] ?? sizeClasses.md,
      { 'w-full': fullWidth, 'opacity-70 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const variantClasses: Record<string, string> = {
  primary:
    'bg-[#E6004C] text-white shadow-md hover:bg-[#c70042] hover:shadow-lg',
  secondary:
    'border border-[#0B3E56] text-[#0B3E56] bg-transparent hover:bg-[#0B3E56] hover:text-white',
  ghost: 'bg-white/10 text-white border border-white/30 hover:bg-white/20',
  pill: 'bg-white text-[#0B3E56] rounded-2XL hover:bg-[#E5E7EB]',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

interface Props {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  fullWidth: false,
});

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3E56]';
</script>
