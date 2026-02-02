import { ref, onMounted, onUnmounted, type Ref } from 'vue';

interface ScrollSpyOptions {
  threshold?: number;
  rootMargin?: string;
  headerOffset?: number;
}

export function useScrollSpy(sectionsIds: string[], options: ScrollSpyOptions = {}) {
  const activeSection = ref<string>('');
  const { threshold = 0.5, rootMargin = '-20% 0px -50% 0px', headerOffset = 100 } = options;

  let observer: IntersectionObserver | null = null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
      // Manually set active section to avoid observer lag
      activeSection.value = id;
    }
  };

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  };

  onMounted(() => {
    observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin,
      threshold: Array.from({ length: 11 }, (_, i) => i * 0.1) // Granular thresholds
    });

    sectionsIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer?.observe(element);
      }
    });
    
    // Initial check
    const currentScroll = window.scrollY + headerOffset + 50;
    for (const id of sectionsIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= currentScroll && (el.offsetTop + el.offsetHeight) > currentScroll) {
            activeSection.value = id;
            break;
        }
    }
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    activeSection,
    scrollToSection
  };
}
