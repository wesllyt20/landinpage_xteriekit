<template>
  <nav :class="['flex items-center', isMobile ? 'flex-col gap-6' : 'gap-8']">
    <NavLink
      v-for="link in links"
      :key="link.sectionId"
      :label="link.label"
      :href="link.sectionId"
      :isActive="activeSection === link.sectionId"
      @click="handleNavigate"
    />
  </nav>
</template>

<script setup lang="ts">
import NavLink from '@/components/atoms/NavLink.vue';

interface NavLinkItem {
  label: string;
  sectionId: string;
}

interface Props {
  links: NavLinkItem[];
  activeSection: string;
  isMobile?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isMobile: false,
});

const emit = defineEmits<{ (event: 'navigate', sectionId: string): void }>();

const handleNavigate = (sectionId: string) => {
  emit('navigate', sectionId);
};
</script>
