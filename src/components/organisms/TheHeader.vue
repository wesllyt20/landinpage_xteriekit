<template>
  <header class="sticky top-0 z-60 w-full bg-transparent">
    <!-- Top Bar Contact -->
    <div
      class="bg-[#0A2F44] text-white transition-all duration-300"
      :class="isScrolled ? 'py-1' : 'py-2'"
    >
      <BaseContainer>
        <div class="hidden sm:block">
          <TopBarContact
            :phone="phone"
            :email="email"
            :location="location"
            :compact="isScrolled"
          />
        </div>
      </BaseContainer>
    </div>

    <!-- Sticky Nav -->
    <div
      class="transition-all duration-300"
      :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-3'"
    >
      <BaseContainer>
        <div class="flex items-center gap-4">
          <!-- Logo -->
          <div class="shrink-0">
            <img
              :src="logoSrc"
              alt="Logo"
              class="object-contain transition-all duration-300"
              :class="isScrolled ? 'w-16' : 'w-20'"
            />
          </div>

          <!-- Desktop Nav + CTA -->
          <div class="hidden lg:flex items-center gap-6 ml-auto">
            <NavLinks
              :links="navLinks"
              :active-section="activeSection"
              @navigate="handleNavigate"
            />
            <BaseButton
              size="md"
              variant="primary"
              @click="() => handleNavigate('contacto')"
              class="rounded-full font-bold tracking-wide shadow-none hover:shadow-lg"
            >
              COTIZAR AHORA
            </BaseButton>
          </div>

          <!-- Mobile Menu Button -->
          <div class="ml-auto lg:hidden">
            <button
              class="inline-flex items-center justify-center rounded-full p-2 text-[#0B1F2A] hover:bg-gray-100 focus:outline-none"
              @click="toggleMobileMenu"
              aria-label="Menu"
            >
              <BaseIcon :name="isMobileMenuOpen ? 'close' : 'menu'" :size="24" />
            </button>
          </div>
        </div>
      </BaseContainer>
    </div>
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

defineProps<Props>();
const emit = defineEmits<{ (event: 'navigate', sectionId: string): void }>();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const SCROLL_THRESHOLD = 0;

const scrollHandler = () => {
  if (window.scrollY <= SCROLL_THRESHOLD && isScrolled.value) {
    isScrolled.value = false;
    return;
  }

  if (window.scrollY > SCROLL_THRESHOLD && !isScrolled.value) {
    isScrolled.value = true;
  }
};

const handleNavigate = (sectionId: string) => {
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
