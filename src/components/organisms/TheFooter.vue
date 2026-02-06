<template>
  <footer class="bg-[#F5F7FA] text-[#0B1F2A]">
    <BaseContainer>
      <div class="grid gap-10 py-16 lg:grid-cols-4">
        <div class="gap-y-4 flex flex-col">
          <img :src="logoSrc" alt="Logo" class="w-30 h-20" />
          <p class="text-sm leading-relaxed text-[#0B1F2A]/70">{{ content.description }}</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold">Enlaces Rápidos</h4>
          <ul class="mt-4 space-y-3 text-sm text-[#0B1F2A]/70">
            <li v-for="link in content.quickLinks" :key="link.label">
              <button class="cursor-pointer transition hover:text-[#0B3E56]" @click="() => emitNavigate(link.href)">
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold">Contacto</h4>
          <div class="mt-4 space-y-4">
            <div class="flex items-center gap-3">
              <BaseIcon name="location" class="mt-1 text-[#C70042] shrink-0" :size="22" />
              <p class="text-sm text-[#0B1F2A]/70 whitespace-pre-line">{{ content.contact.address }}</p>
            </div>
            
            <div class="flex items-center gap-3">
              <BaseIcon name="phone" class="mt-1 text-[#C70042] shrink-0" :size="22" />
              <div class="text-sm text-[#0B1F2A]/70">
                <div v-for="phone in content.contact.phones" :key="phone">
                  <a :href="`tel:${phone}`" class="block hover:text-[#C70042]">{{ phone }}</a>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <BaseIcon name="mail" class="mt-1 text-[#C70042] shrink-0" :size="22" />
              <a :href="`mailto:${content.contact.email}`" class="text-sm text-[#0B1F2A]/70 hover:text-[#0B3E56]">
                {{ content.contact.email }}
              </a>
            </div>
          </div>
        </div>
        <div class="h-55 rounded-xl overflow-hidden border border-black/10 shadow-lg relative bg-white">
           <iframe
            :src="content.mapSrc"
            width="100%"
            height="100%"
            style="border:0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="border-t border-black/10 py-6 text-center text-xs text-[#0B1F2A]/50">
        © 2026 XTERIEKIT S.A.C. Todos los derechos reservados. | Desarrollo por KS PERÚ
      </div>
    </BaseContainer>
  </footer>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/atoms/BaseContainer.vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';

interface QuickLink {
  label: string;
  href: string;
}

interface FooterContent {
  description: string;
  quickLinks: QuickLink[];
  contact: {
    address: string;
    phones: string[];
    email: string;
  };
  mapSrc: string;
}

interface Props {
  content: FooterContent;
  logoSrc: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{ (event: 'navigate', sectionId: string): void }>();

const emitNavigate = (href: string) => {
  const sectionId = href.replace('#', '');
  emit('navigate', sectionId);
};
</script>
