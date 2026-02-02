import { onMounted, onUnmounted, ref } from 'vue';

interface UseScrollOptions {
  offset?: number;
}

export function useScrollToSection(sectionIds: string[], options: UseScrollOptions = {}) {
  const { offset = 120 } = options;
  const activeSection = ref(sectionIds[0] ?? '');

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + offset + 10;

    sectionIds.forEach((id) => {
      const sectionEl = document.getElementById(id);
      if (!sectionEl) return;

      const sectionTop = sectionEl.offsetTop;
      const sectionBottom = sectionTop + sectionEl.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection.value = id;
      }
    });
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true } as AddEventListenerOptions);
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    activeSection,
    scrollToSection,
  };
}
