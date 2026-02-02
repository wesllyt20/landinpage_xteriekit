<template>
  <div class="fixed bottom-6 right-6 z-40 flex items-center gap-3">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div v-if="showTooltip" class="relative rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#0B1F2A] shadow-lg">
        Escríbenos un mensaje
        <button 
          @click="showTooltip = false" 
          class="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
        >
          <BaseIcon name="close" :size="12" />
        </button>
      </div>
    </transition>
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener"
      class="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition transform duration-200 hover:scale-110 hover:shadow-xl cursor-pointer"
    >
      <BaseIcon name="whatsapp" :size="28" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';

interface Props {
  phone: string;
  message: string;
}

const props = defineProps<Props>();

const showTooltip = ref(true);

onMounted(() => {
  setTimeout(() => {
    showTooltip.value = false;
  }, 10000);
});

const whatsappUrl = computed(() => {
  const digits = props.phone.replace(/[^\d]/g, '');
  const encodedMessage = encodeURIComponent(props.message);
  return `https://wa.me/${digits}?text=${encodedMessage}`;
});
</script>
