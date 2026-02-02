<template>
  <section class="bg-[#F5F7FA] py-12 overflow-hidden">
    <BaseContainer>
      <div class="space-y-16">
        <BaseSectionTitle :title="content.title" :subtitle="content.description" align="center" />
        
        <div class="relative">
          <!-- Connecting Line (Desktop) -->
          <div class="hidden lg:block absolute top-17 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#E5E7EB] to-transparent z-0"></div>
          
          <div class="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between relative z-10">
            <TimelineStep
              v-for="(step, index) in content.steps"
              :key="step.title"
              :badge="step.badge"
              :title="step.title"
              :description="step.description"
              :icon="step.icon"
            />
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/atoms/BaseContainer.vue';
import BaseSectionTitle from '@/components/atoms/BaseSectionTitle.vue';
import TimelineStep from '@/components/molecules/TimelineStep.vue';

interface StepItem {
  badge: string;
  title: string;
  description: string;
  icon: string;
}

interface ProcessContent {
  title: string;
  description: string;
  steps: StepItem[];
}

interface Props {
  content: ProcessContent;
}

defineProps<Props>();
</script>
