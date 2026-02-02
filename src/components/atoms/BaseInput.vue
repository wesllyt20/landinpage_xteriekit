<template>
  <label class="flex w-full flex-col gap-2">
    <span class="text-sm font-medium text-[#0B1F2A]">
      {{ label }}
      <span v-if="required" class="text-rose-600">*</span>
    </span>
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0B1F2A] shadow-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 placeholder:text-slate-400"
      @input="onInput"
    />
    <span v-if="helperText" class="text-xs text-slate-500">{{ helperText }}</span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  modelValue: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  name?: string;
  helperText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
  required: false,
  name: undefined,
  helperText: undefined,
});

const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>
