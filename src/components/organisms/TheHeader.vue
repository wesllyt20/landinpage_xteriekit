<template>
  <!-- Top Bar Contact -->
  <div class="relative z-50 bg-[#0A2F44] text-white">
    <BaseContainer>
      <TopBarContact class="hidden sm:flex" :phone="phone" :email="email" :location="location" />
    </BaseContainer>
  </div>
  
  <!-- Sticky Nav -->
  <header 
    class="sticky top-0 z-60 w-full transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-1' : 'bg-white py-2'"
  >
    <BaseContainer>
      <div class="flex items-center justify-between gap-4">
        <!-- Logo -->
        <div class="shrink-0">
          <img 
            :src="logoSrc" 
            alt="Logo" 
            class=" object-contain transition-all duration-300" 
            :class="isScrolled ? 'w-12' : 'w-18 sm:w-22'"
          />
        </div>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex flex-1 justify-center">
            <NavLinks
            :links="navLinks"
            :active-section="activeSection"
            @navigate="handleNavigate"
          />
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block shrink-0">
          <BaseButton 
            size="sm" 
            variant="primary"
            @click="() => handleNavigate('contacto')"
            class="rounded-full! px-6! py-2! text-sm! font-bold! tracking-wide shadow-none hover:shadow-lg"
          >
            COTIZAR AHORA
          </BaseButton>
        </div>

        <!-- Mobile Menu Button -->
          <button
          class="inline-flex lg:hidden items-center justify-center rounded-full p-2 text-[#0B1F2A] hover:bg-gray-100 focus:outline-none"
          @click="toggleMobileMenu"
          aria-label="Menu"
        >
          <BaseIcon :name="isMobileMenuOpen ? 'close' : 'menu'" :size="24" />
        </button>
      </div>
    </BaseContainer>
  </header>

  <!-- Mobile Menu Overlay -->
  <MobileMenu
    :open="isMobileMenuOpen"
    :links="navLinks"
    :active-section="activeSection"
    @close="toggleMobileMenu"
    @navigate="handleNavigate"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BaseButton from '@/components/atoms/BaseButton.vue';
import BaseContainer from '@/components/atoms/BaseContainer.vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';
import NavLinks from '@/components/molecules/NavLinks.vue';
import TopBarContact from '@/components/molecules/TopBarContact.vue';
import MobileMenu from '@/components/organisms/MobileMenu.vue';

interface NavLinkItem {
  label: string;
  sectionId: string;
}

interface Props {
  navLinks: NavLinkItem[];
  activeSection: string;
  logoSrc: string;
  phone: string;
  email: string;
  location: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{ (event: 'navigate', sectionId: string): void }>();

// Scroll Spy Logic - Managed by parent via props, but we keep local scroll handler for header styling
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const scrollHandler = () => {
    isScrolled.value = window.scrollY > 10;
};

const handleNavigate = (sectionId: string) => {
  // Navigation handled by native anchor tags, just close menu
  isMobileMenuOpen.value = false;
  emit('navigate', sectionId);
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', scrollHandler, { passive: true });
  scrollHandler();
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
});
</script>
