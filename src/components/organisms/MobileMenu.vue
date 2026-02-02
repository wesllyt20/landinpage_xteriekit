<template>
  <transition name="fade">
    <div v-if="open" class="fixed inset-0 z-40 bg-black/40 px-4 pt-20" @click.self="emit('close')">
      <div class="rounded-3xl bg-white p-6 shadow-2xl">
        <NavLinks
          :links="links"
          :active-section="activeSection"
          :is-mobile="true"
          @navigate="handleNavigate"
        />
        <div class="mt-6">
          <BaseButton class="w-full" @click="() => handleNavigate('contacto')">
            COTIZAR AHORA
          </BaseButton>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue';
import NavLinks from '@/components/molecules/NavLinks.vue';

interface NavLinkItem {
  label: string;
  sectionId: string;
}

interface Props {
  open: boolean;
  links: NavLinkItem[];
  activeSection: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{ (event: 'close'): void; (event: 'navigate', sectionId: string): void }>();

const handleNavigate = (sectionId: string) => {
  emit('navigate', sectionId);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
