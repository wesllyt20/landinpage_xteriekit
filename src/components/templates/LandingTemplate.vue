<template>
  <div class="bg-[#F5F7FA] text-[#0B1F2A]">
    <TheHeader
      :nav-links="content.navLinks"
      :active-section="activeSection"
      :logo-src="logoSrc"
      phone="+51 936 740 066"
      email="contacto@xteriekit.pe"
      location="Av. Sta. Catalina 273, Lima"
      @navigate="handleNavigate"
    />
    <main>
      <section :id="'inicio'">
        <HeroSection
          :content="content.heroContent"
          @navigate="handleNavigate"
        />
      </section>
      <section :id="'servicios'" class="space-y-0">
        <ServicesSection :content="content.servicesContent" />
        <TechSection :content="content.techContent" />
      </section>
      <section :id="'proceso'">
        <ProcessSection :content="content.processContent" />
      </section>
      <section :id="'nosotros'">
        <AboutSection :content="content.aboutContent" />
      </section>
      <section :id="'contacto'">
        <ContactSection :content="content.contactContent" />
      </section>
    </main>
    <TheFooter
      :content="content.footerContent"
      :logo-src="logoSrcFooter"
      @navigate="handleNavigate"
    />
    <FloatingWhatsApp
      :phone="content.whatsappConfig.phone"
      :message="content.whatsappConfig.message"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  navLinks,
  heroContent,
  servicesContent,
  processContent,
  techContent,
  aboutContent,
  contactContent,
  footerContent,
  whatsappConfig,
} from "@/data/landingContent";
import { useScrollToSection } from "@/composables/useScrollToSection";
import HeroSection from "@/components/organisms/HeroSection.vue";
import ServicesSection from "@/components/organisms/ServicesSection.vue";
import ProcessSection from "@/components/organisms/ProcessSection.vue";
import TechSection from "@/components/organisms/TechSection.vue";
import AboutSection from "@/components/organisms/AboutSection.vue";
import ContactSection from "@/components/organisms/ContactSection.vue";
import TheHeader from "@/components/organisms/TheHeader.vue";
import TheFooter from "@/components/organisms/TheFooter.vue";
import FloatingWhatsApp from "@/components/molecules/FloatingWhatsApp.vue";

const content = {
  navLinks,
  heroContent,
  servicesContent,
  processContent,
  techContent,
  aboutContent,
  contactContent,
  footerContent,
  whatsappConfig,
};

const sectionIds = content.navLinks.map((link) => link.sectionId);
const { activeSection, scrollToSection } = useScrollToSection(sectionIds, {
  offset: 120,
});

const logoSrcFooter = computed(() => "/logo_full.png");
const logoSrc = computed(() => "/logo_full.png");

const handleNavigate = (sectionId: string) => {
  const targetId = sectionId.replace(/^#/, '');
  scrollToSection(targetId);
};
</script>
