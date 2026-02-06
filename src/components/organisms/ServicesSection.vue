<template>
  <section v-reveal class="bg-[#F5F7FA] py-20">
    <BaseContainer>
      <div class="space-y-12">
        <BaseSectionTitle :title="content.title" :subtitle="content.description" align="center" />
        <div class="max-w-full">
          <div class="grid grid-flow-col auto-cols-[minmax(220px,1fr)] gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
            <div
              v-for="item in content.items"
              :key="item.title"
              class="snap-start"
            >
              <ServiceCard v-bind="item" />
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/atoms/BaseContainer.vue';
import BaseSectionTitle from '@/components/atoms/BaseSectionTitle.vue';
import ServiceCard from '@/components/molecules/ServiceCard.vue';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  bgColor?: string;
  iconColor?: string;
}

interface ServicesContent {
  title: string;
  description: string;
  items: ServiceItem[];
}

interface Props {
  content: ServicesContent;
}

defineProps<Props>();
</script>
