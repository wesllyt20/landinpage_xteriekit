<template>
  <section v-reveal class="bg-[#F5F7FA] py-24">
    <BaseContainer>
      <div class="max-w-5xl mx-auto space-y-12">
        <BaseSectionTitle :title="content.title" :subtitle="content.description" align="center" />
        <div class="max-w-230 mx-auto">
          <BaseCard class="p-0 overflow-hidden shadow-lg border border-slate-200 rounded-2xl">
              <div class="bg-[#0B3E56] px-8 py-5 flex items-center gap-3 rounded-t-2xl">
              <BaseIcon name="document" class="text-white" :size="24" />
              <div>
                <h3 class="text-xl font-semibold text-white">{{ content.formTitle }}</h3>
                  <p class="text-xs text-white/80 mt-1">Por favor, complete todos los campos requeridos para procesar su solicitud.</p>
              </div>
            </div>
            <form class="space-y-8 px-8 py-10" @submit.prevent="handleSubmit">
              <div
                v-for="section in content.sections"
                :key="section.title"
                class="space-y-5"
              >
                <h4 class="text-lg font-semibold text-[#0B1F2A] border-b pb-2 border-slate-100">{{ section.title }}</h4>
                <div class="grid gap-6 md:grid-cols-2">
                  <BaseInput
                    v-for="field in section.fields"
                    :key="field.name"
                    v-model="formState[field.name]"
                    :label="field.label"
                    :type="field.type"
                    :name="field.name"
                    :placeholder="field.placeholder"
                    :helper-text="field.helperText"
                  />
                </div>
              </div>
              <div class="space-y-2">
                 <BaseTextarea
                  v-model="formState[content.detailField.name]"
                  :label="content.detailField.label"
                  :name="content.detailField.name"
                  :placeholder="content.detailField.placeholder"
                  :rows="5"
                />
                <p v-if="content.detailField.helperText" class="text-xs text-slate-500">{{ content.detailField.helperText }}</p>
              </div>
             
              <div class="flex justify-center pt-4">
                <BaseButton type="submit" class="flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-pink-500 to-rose-500 px-12 py-3 font-semibold text-white hover:shadow-md hover:brightness-110">
                  ENVIAR SOLICITUD
                  <BaseIcon name="paper-plane" :size="20" />
                </BaseButton>
              </div>
            </form>
          </BaseCard>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import BaseButton from '@/components/atoms/BaseButton.vue';
import BaseCard from '@/components/atoms/BaseCard.vue';
import BaseContainer from '@/components/atoms/BaseContainer.vue';
import BaseIcon from '@/components/atoms/BaseIcon.vue';
import BaseInput from '@/components/atoms/BaseInput.vue';
import BaseSectionTitle from '@/components/atoms/BaseSectionTitle.vue';
import BaseTextarea from '@/components/atoms/BaseTextarea.vue';

interface FieldItem {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  helperText?: string;
}

interface SectionItem {
  title: string;
  fields: FieldItem[];
}

interface DetailField {
  label: string;
  name: string;
  placeholder?: string;
  helperText?: string;
}

interface ContactContent {
  title: string;
  description: string;
  formTitle: string;
  sections: SectionItem[];
  detailField: DetailField;
}

interface Props {
  content: ContactContent;
}

const props = defineProps<Props>();

const formState = reactive<Record<string, string>>(
  props.content.sections.flatMap((section) => section.fields.map((field) => field.name)).reduce(
    (acc, name) => ({ ...acc, [name]: '' }),
    { [props.content.detailField.name]: '' }
  )
);

const handleSubmit = () => {
  console.table(formState);
};
</script>
