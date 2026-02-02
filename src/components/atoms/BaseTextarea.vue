<template>
  <label class="flex w-full flex-col gap-2">
    <span class="text-sm font-medium text-[#0B1F2A]">{{ label }}</span>
    <textarea
      :name="name"
      :placeholder="placeholder"
      :rows="rows"
      :value="modelValue"
      :required="required"
      class="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#0B1F2A] shadow-sm outline-none transition focus:border-[#0B3E56] focus:ring-2 focus:ring-[#0B3E56]/20"
      @input="onInput"
    />
  </label>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  modelValue: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  name?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  rows: 4,
  required: false,
  name: undefined,
});

const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);
};
</script>
